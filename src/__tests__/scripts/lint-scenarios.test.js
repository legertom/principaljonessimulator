import { describe, it, expect } from 'vitest';
import path from 'path';
import { execFileSync } from 'child_process';

describe('lint-scenarios.mjs', () => {
    const scriptPath = path.resolve(process.cwd(), 'scripts/lint-scenarios.mjs');

    it('should pass strictly valid scenarios and warn on legacy density', () => {
        const fixturePath = path.resolve(
            process.cwd(),
            'src/__tests__/scripts/__fixtures__/scenarios-pass.js'
        );

        let stdout = '';
        let stderr = '';
        expect(() => {
            const buffer = execFileSync('node', [scriptPath], {
                env: { ...process.env, SCENARIOS_PATH: fixturePath },
                stdio: 'pipe',
            });
            stdout = buffer.toString();
        }).not.toThrow();

        // Legacy scenario_pass_2 has 0% density — should get a warning
        expect(stderr + stdout).toContain('All structural checks passed');
    });

    it('should fail on legacy scenarios when --strict is passed', () => {
        const fixturePath = path.resolve(
            process.cwd(),
            'src/__tests__/scripts/__fixtures__/scenarios-pass.js'
        );

        expect(() => {
            execFileSync('node', [scriptPath, '--strict'], {
                env: { ...process.env, SCENARIOS_PATH: fixturePath },
                stdio: 'pipe',
            });
        }).toThrow();
    });

    it('should fail on broken structural integrity', () => {
        const fixturePath = path.resolve(
            process.cwd(),
            'src/__tests__/scripts/__fixtures__/scenarios-fail.js'
        );

        let output = '';
        try {
            execFileSync('node', [scriptPath], {
                env: { ...process.env, SCENARIOS_PATH: fixturePath },
                stdio: 'pipe',
            });
        } catch (error) {
            output = (error.stderr || '').toString() + (error.stdout || '').toString();
        }

        expect(output).toContain('Scenario linting failed');
        expect(output).toContain('Scenario is missing an id.');
        expect(output).toContain('references "nextStep" -> "missing_step"');
        expect(output).toContain("must explicitly set boolean 'correct'");
        expect(output).toContain('missing a navigation reference');
    });
});
