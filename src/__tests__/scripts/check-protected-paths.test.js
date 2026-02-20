import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import path from 'path';

describe('check-protected-paths.mjs', () => {
    const scriptPath = path.resolve(process.cwd(), 'scripts/check-protected-paths.mjs');

    it('should succeed when no protected files are modified', () => {
        expect(() => {
            execSync(`node ${scriptPath}`, {
                env: { ...process.env, MOCK_DIFF_OUTPUT: 'src/components/Button.jsx\nREADME.md' },
                stdio: 'pipe'
            });
        }).not.toThrow();
    });

    it('should fail closed if ALLOW_PROTECTED_CHANGES is not set and a protected file is detected', () => {
        let output = '';
        try {
            execSync(`node ${scriptPath}`, {
                env: { ...process.env, MOCK_DIFF_OUTPUT: 'src/lib/auth.js\nsrc/components/Button.jsx' },
                stdio: 'pipe'
            });
            throw new Error('Script should have failed but it succeeded.');
        } catch (error) {
            output = error.stderr ? error.stderr.toString() : error.message;
        }

        expect(output).toContain('PROTECTED PATH VIOLATION');
        expect(output).toContain('src/lib/auth.js');
    });

    it('should pass if ALLOW_PROTECTED_CHANGES=1 is set even with protected files', () => {
        expect(() => {
            execSync(`node ${scriptPath}`, {
                env: { ...process.env, MOCK_DIFF_OUTPUT: 'src/lib/auth.js', ALLOW_PROTECTED_CHANGES: '1' },
                stdio: 'pipe'
            });
        }).not.toThrow();
    });
});
