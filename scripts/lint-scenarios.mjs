#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

// Support an environment variable for testing against fixtures
const SCENARIOS_PATH = path.resolve(process.env.SCENARIOS_PATH || path.join(process.cwd(), 'src/data/scenarios.js'));
const IS_STRICT = process.argv.includes('--strict');

async function loadScenarios() {
    try {
        const fileContent = fs.readFileSync(SCENARIOS_PATH, 'utf-8');

        // Strip import statements and convert export to a plain variable assignment
        let stripped = fileContent
            .replace(/import\s+[^;]+;/g, '// (import stripped)')
            .replace(/export const scenarios =/g, 'export const scenarios =')
            .replace(/export default scenarios;?/g, '');

        // Write a temporary ESM file that can be dynamically imported
        const tmpFile = path.join(path.dirname(SCENARIOS_PATH), '.lint-scenarios-tmp.mjs');

        // Replace unknown imported identifiers with mock values
        // by wrapping the export in a self-contained module
        const wrappedContent = `
// Auto-generated temporary file for linting — safe to delete
const demoCustomer = {};
const demoDistrict = {};
const demoSchool = {};
${stripped}
`;

        fs.writeFileSync(tmpFile, wrappedContent, 'utf-8');

        try {
            const tmpUrl = pathToFileURL(tmpFile).href + '?t=' + Date.now();
            const imported = await import(tmpUrl);
            return imported.scenarios;
        } finally {
            // Clean up the temp file
            try { fs.unlinkSync(tmpFile); } catch (_) { /* ignore */ }
        }
    } catch (error) {
        console.error('\u274c Failed to load scenarios file:', error.message);
        process.exit(1);
    }
}

const scenarios = await loadScenarios();
let hasErrors = false;
let hasWarnings = false;

function reportError(scenarioId, message) {
    console.error(`\u274c [${scenarioId}] ${message}`);
    hasErrors = true;
}

function reportWarning(scenarioId, message) {
    console.warn(`\u26a0\ufe0f  [${scenarioId}] ${message}`);
    hasWarnings = true;
}

scenarios.forEach((scenario) => {
    // 1. Ensure scenario has an ID
    if (!scenario.id) {
        reportError('UNKNOWN', 'Scenario is missing an id.');
        return;
    }

    // New-format scenarios have a ticketMessage at the scenario level
    const isNewFormat = !!scenario.ticketMessage;

    const stepIds = new Set();
    let taskCount = 0;
    const totalSteps = scenario.steps.length;

    scenario.steps.forEach((step) => {
        // 2. Ensure Step IDs exist and are unique
        if (!step.id) {
            reportError(scenario.id, 'Step is missing an id.');
            return;
        }
        if (stepIds.has(step.id)) {
            reportError(scenario.id, `Duplicate step ID found: ${step.id}`);
        }
        stepIds.add(step.id);

        // Count interactive step types toward density
        if (step.type === 'task' || step.type === 'input' || step.type === 'observe') {
            taskCount++;
        }

        // 3. Validate Step References
        const references = [];
        if (step.nextStep) references.push({ key: 'nextStep', val: step.nextStep });
        if (step.successStep) references.push({ key: 'successStep', val: step.successStep });
        if (step.unguidedNextStep) references.push({ key: 'unguidedNextStep', val: step.unguidedNextStep });
        if (step.unguidedFailStep) references.push({ key: 'unguidedFailStep', val: step.unguidedFailStep });

        if (step.actions) {
            step.actions.forEach((act, idx) => {
                if (act.nextStep) references.push({ key: `actions[${idx}].nextStep`, val: act.nextStep });
            });
        }
        if (step.options) {
            step.options.forEach((opt, idx) => {
                if (opt.nextStep) references.push({ key: `options[${idx}].nextStep`, val: opt.nextStep });
            });
        }

        // Validate checkpoint/resolution choices[]
        if (step.choices) {
            step.choices.forEach((choice, idx) => {
                // Must have a navigation ref — nextStep: null is valid (terminal)
                const hasNavRef = choice.nextStep !== undefined || choice.unguidedNextStep !== undefined;
                if (!hasNavRef) {
                    reportError(scenario.id, `Step "${step.id}" choice[${idx}] is missing a navigation reference (nextStep or unguidedNextStep).`);
                } else {
                    if (choice.nextStep != null) references.push({ key: `choices[${idx}].nextStep`, val: choice.nextStep });
                    if (choice.unguidedNextStep != null) references.push({ key: `choices[${idx}].unguidedNextStep`, val: choice.unguidedNextStep });
                }

                // Must have boolean correct unless step.scored is false
                if (step.scored !== false) {
                    if (typeof choice.correct !== 'boolean') {
                        reportError(scenario.id, `Step "${step.id}" choice[${idx}] must explicitly set boolean 'correct' unless step.scored is false.`);
                    }
                }
            });
        }

        references.forEach(ref => {
            const targetExists = scenario.steps.find((s) => s.id === ref.val);
            if (!targetExists) {
                reportError(scenario.id, `Step "${step.id}" references "${ref.key}" -> "${ref.val}", but that step does not exist.`);
            }
        });

        // 4. Schema checks for Inputs
        if (step.type === 'input' && !step.correctAnswer) {
            reportError(scenario.id, `Input step "${step.id}" is missing a 'correctAnswer'.`);
        }
    });

    // 5. Task Density Check (>=40%)
    if (totalSteps > 0) {
        const density = taskCount / totalSteps;
        if (density < 0.4) {
            const msg = `Task density low (${Math.round(density * 100)}%). Recommend >= 40% task/input/observe steps.`;
            if (IS_STRICT || isNewFormat) {
                reportError(scenario.id, msg);
            } else {
                reportWarning(scenario.id, msg);
            }
        }
    }
});

// 6. Global Scenario ID Uniqueness Check
const scenarioIds = new Set();
scenarios.forEach(scen => {
    if (scen.id && scenarioIds.has(scen.id)) {
        reportError(scen.id, 'Duplicate scenario ID found.');
    }
    scenarioIds.add(scen.id);
});

if (hasErrors) {
    console.error('\n\u274c Scenario linting failed. Please fix the errors above.');
    process.exit(1);
} else {
    if (hasWarnings && !IS_STRICT) {
        console.log('\n\u26a0\ufe0f  All structural checks passed, but some scenarios have low task density. Run with --strict to enforce.');
    } else {
        console.log('\u2705 All scenarios passed linting successfully!');
    }
    process.exit(0);
}
