import { describe, it, expect } from 'vitest';
import path from 'path';
import { execSync } from 'child_process';

describe('lint-scenarios.mjs', () => {
    const scriptPath = path.resolve(process.cwd(), 'scripts/lint-scenarios.mjs');

    it('should pass strictly valid sequences and warn on legacy density', () => {
        const fixturePath = path.resolve(process.cwd(), 'src/__tests__/scripts/__fixtures__/scenarios-pass.js');

        let output = '';
        expect(() => {
            const buffer = execSync(`node ${scriptPath} 2>&1`, {
                env: { ...process.env, SCENARIOS_PATH: fixturePath },
                stdio: 'pipe'
            });
            output = buffer.toString();
        }).not.toThrow();

        // Must warn about density because scenario 2 is basically 0% task density
        expect(output).toContain('⚠️  [scenario_pass_2] Task density low');
        expect(output).toContain('All structural checks passed');
    });

    it('should fail on new legacy scenarios when --strict is passed', () => {
        const fixturePath = path.resolve(process.cwd(), 'src/__tests__/scripts/__fixtures__/scenarios-pass.js');

        expect(() => {
            execSync(`node ${scriptPath} --strict`, {
                env: { ...process.env, SCENARIOS_PATH: fixturePath },
                stdio: 'pipe'
            });
        }).toThrow();
    });

    it('should fail on broken structural integrity', () => {
        const fixturePath = path.resolve(process.cwd(), 'src/__tests__/scripts/__fixtures__/scenarios-fail.js');
        let output = '';
        try {
            execSync(`node ${scriptPath}`, {
                env: { ...process.env, SCENARIOS_PATH: fixturePath },
                stdio: 'pipe'
            });
        } catch (error) {
            output = error.stderr.toString() + error.stdout.toString();
        }

        expect(output).toContain('❌ Scenario linting failed');
        expect(output).toContain('Scenario is missing an id.');
        expect(output).toContain('references "nextStep" -> "missing_step"');
        expect(output).toContain("must explicitly set boolean 'correct'");
        expect(output).toContain("must set 'unguidedNextStep' for Phase 4");
        expect(output).toContain("missing a navigation reference");
    });

    it('should silently mock undefined imports rather than crashing', () => {
        const fixturePath = path.resolve(process.cwd(), 'src/__tests__/scripts/__fixtures__/scenarios-imports.js');
        let output = '';
        expect(() => {
            const buffer = execSync(`node ${scriptPath} 2>&1`, {
                env: { ...process.env, SCENARIOS_PATH: fixturePath },
                stdio: 'pipe'
            });
            output = buffer.toString();
        }).not.toThrow();

        expect(output).toContain('✅ All scenarios passed linting successfully!');
    });
});
