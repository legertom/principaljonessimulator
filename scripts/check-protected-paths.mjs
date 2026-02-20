#!/usr/bin/env node

import { execSync } from 'child_process';

const PROTECTED_PATTERNS = [
    /^src\/lib\/auth\.js$/,
    /^src\/lib\/security\//,
    /^next\.config\.mjs$/
];

function getChangedFiles() {
    if (process.env.MOCK_DIFF_OUTPUT) {
        return process.env.MOCK_DIFF_OUTPUT.split('\n').filter(Boolean);
    }
    try {
        if (process.env.GITHUB_ACTIONS) {
            if (process.env.GITHUB_BASE_REF) {
                // PR build: compare against merge base with the target branch
                const targetRef = `origin/${process.env.GITHUB_BASE_REF}`;
                const mergeBase = execSync(`git merge-base HEAD ${targetRef}`).toString().trim();
                const buffer = execSync(`git diff --name-only ${mergeBase} HEAD`);
                return buffer.toString().split('\n').filter(Boolean);
            } else {
                // Push build: compare against previous commit
                const before = process.env.GITHUB_EVENT_BEFORE && process.env.GITHUB_EVENT_BEFORE !== '0000000000000000000000000000000000000000'
                    ? process.env.GITHUB_EVENT_BEFORE
                    : 'HEAD~1';
                const buffer = execSync(`git diff --name-only ${before} HEAD`);
                return buffer.toString().split('\n').filter(Boolean);
            }
        } else {
            // Local dev mode
            const baseDir = process.env.LOCAL_DIFF_BASE || 'HEAD~1';
            const buffer = execSync(`git diff --name-only ${baseDir} HEAD`);
            return buffer.toString().split('\n').filter(Boolean);
        }
    } catch (e) {
        console.error('❌ Failed to compute git diff.');
        console.error(e.message);
        // Fail closed
        process.exit(1);
    }
}

function checkProtectedPaths() {
    if (process.env.ALLOW_PROTECTED_CHANGES === '1') {
        console.warn('⚠️  ALLOW_PROTECTED_CHANGES is set. Bypassing protected path check.');
        process.exit(0);
    }

    const changedFiles = getChangedFiles();
    const violations = [];

    for (const file of changedFiles) {
        if (PROTECTED_PATTERNS.some(pattern => pattern.test(file))) {
            violations.push(file);
        }
    }

    if (violations.length > 0) {
        console.error('❌ PROTECTED PATH VIOLATION ❌');
        console.error('You are attempting to modify files that are locked for this phase of the project:');
        violations.forEach(file => console.error(`  - ${file}`));
        console.error('\nTo bypass this check (e.g., if authorized), run with ALLOW_PROTECTED_CHANGES=1');
        process.exit(1);
    }

    console.log('✅ Protected paths intact. No violations found.');
    process.exit(0);
}

checkProtectedPaths();
