/**
 * Unit tests for the Google Provisioning Wizard state machine.
 * Tests step ordering, completion detection, and state transitions
 * without requiring DOM rendering.
 */

import { describe, it, expect } from "vitest";
import {
    WIZARD_STEPS,
    DEFAULT_PROVISIONING_STATE,
} from "@/data/defaults/idm-provisioning";

/* ── Helper: mirrors the isStepCompleted logic from the wizard ── */
function isStepCompleted(stepId, state) {
    switch (stepId) {
        case "connect":
            return state.googleConnected;
        case "management-level":
            return !!state.managementLevel;
        case "users":
            return state.provisionStudents || state.provisionTeachers || state.provisionStaff;
        case "credentials":
            return Object.values(state.credentials).every((c) => c.completed);
        case "ous":
            return Object.values(state.ous).every((o) => o.completed);
        case "groups":
            return true; // optional step, always considered complete
        case "summary":
            return true;
        case "preview":
            return false; // final step, never "completed"
        default:
            return false;
    }
}

/* ── Tests ───────────────────────────────────────────────────── */

describe("WIZARD_STEPS definition", () => {
    it("has exactly 8 steps", () => {
        expect(WIZARD_STEPS).toHaveLength(8);
    });

    it("steps are numbered 1–8 in order", () => {
        WIZARD_STEPS.forEach((step, i) => {
            expect(step.number).toBe(i + 1);
        });
    });

    it("has unique step IDs", () => {
        const ids = WIZARD_STEPS.map((s) => s.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it("starts with 'connect' and ends with 'preview'", () => {
        expect(WIZARD_STEPS[0].id).toBe("connect");
        expect(WIZARD_STEPS[WIZARD_STEPS.length - 1].id).toBe("preview");
    });
});

describe("DEFAULT_PROVISIONING_STATE", () => {
    it("has google connected by default", () => {
        expect(DEFAULT_PROVISIONING_STATE.googleConnected).toBe(true);
    });

    it("defaults to full management level", () => {
        expect(DEFAULT_PROVISIONING_STATE.managementLevel).toBe("full");
    });

    it("provisions all user types by default", () => {
        expect(DEFAULT_PROVISIONING_STATE.provisionStudents).toBe(true);
        expect(DEFAULT_PROVISIONING_STATE.provisionTeachers).toBe(true);
        expect(DEFAULT_PROVISIONING_STATE.provisionStaff).toBe(true);
    });

    it("has credentials for all three user types", () => {
        expect(DEFAULT_PROVISIONING_STATE.credentials).toHaveProperty("students");
        expect(DEFAULT_PROVISIONING_STATE.credentials).toHaveProperty("teachers");
        expect(DEFAULT_PROVISIONING_STATE.credentials).toHaveProperty("staff");
    });

    it("has OUs for all required categories", () => {
        expect(DEFAULT_PROVISIONING_STATE.ous).toHaveProperty("students");
        expect(DEFAULT_PROVISIONING_STATE.ous).toHaveProperty("teachers");
        expect(DEFAULT_PROVISIONING_STATE.ous).toHaveProperty("staff");
        expect(DEFAULT_PROVISIONING_STATE.ous).toHaveProperty("archive");
        expect(DEFAULT_PROVISIONING_STATE.ous).toHaveProperty("ignored");
    });

    it("has preview data with detail rows", () => {
        expect(DEFAULT_PROVISIONING_STATE.preview.details.length).toBeGreaterThan(0);
    });
});

describe("Step completion detection", () => {
    it("all setup steps (1–7) are completed with default state", () => {
        const setupSteps = WIZARD_STEPS.filter((s) => s.id !== "preview");
        setupSteps.forEach((step) => {
            expect(isStepCompleted(step.id, DEFAULT_PROVISIONING_STATE)).toBe(true);
        });
    });

    it("preview step is never marked completed", () => {
        expect(isStepCompleted("preview", DEFAULT_PROVISIONING_STATE)).toBe(false);
    });

    it("connect step becomes incomplete when google is disconnected", () => {
        const state = { ...DEFAULT_PROVISIONING_STATE, googleConnected: false };
        expect(isStepCompleted("connect", state)).toBe(false);
    });

    it("users step becomes incomplete when no user types are selected", () => {
        const state = {
            ...DEFAULT_PROVISIONING_STATE,
            provisionStudents: false,
            provisionTeachers: false,
            provisionStaff: false,
        };
        expect(isStepCompleted("users", state)).toBe(false);
    });

    it("users step remains complete if any single user type is selected", () => {
        const state = {
            ...DEFAULT_PROVISIONING_STATE,
            provisionStudents: true,
            provisionTeachers: false,
            provisionStaff: false,
        };
        expect(isStepCompleted("users", state)).toBe(true);
    });

    it("credentials step becomes incomplete if any credential is not completed", () => {
        const state = {
            ...DEFAULT_PROVISIONING_STATE,
            credentials: {
                ...DEFAULT_PROVISIONING_STATE.credentials,
                students: { ...DEFAULT_PROVISIONING_STATE.credentials.students, completed: false },
            },
        };
        expect(isStepCompleted("credentials", state)).toBe(false);
    });

    it("OUs step becomes incomplete if any OU is not completed", () => {
        const state = {
            ...DEFAULT_PROVISIONING_STATE,
            ous: {
                ...DEFAULT_PROVISIONING_STATE.ous,
                archive: { ...DEFAULT_PROVISIONING_STATE.ous.archive, completed: false },
            },
        };
        expect(isStepCompleted("ous", state)).toBe(false);
    });
});

describe("State mutation patterns", () => {
    it("can switch management level", () => {
        const state = { ...DEFAULT_PROVISIONING_STATE };
        const updated = { ...state, managementLevel: "password-only" };
        expect(updated.managementLevel).toBe("password-only");
        expect(isStepCompleted("management-level", updated)).toBe(true);
    });

    it("can toggle user types independently", () => {
        let state = { ...DEFAULT_PROVISIONING_STATE };
        state = { ...state, provisionStudents: false };
        expect(state.provisionStudents).toBe(false);
        expect(state.provisionTeachers).toBe(true);
        expect(isStepCompleted("users", state)).toBe(true);
    });

    it("can disconnect and reconnect google", () => {
        let state = { ...DEFAULT_PROVISIONING_STATE };
        state = { ...state, googleConnected: false };
        expect(isStepCompleted("connect", state)).toBe(false);
        state = { ...state, googleConnected: true };
        expect(isStepCompleted("connect", state)).toBe(true);
    });
});

describe("Step navigation", () => {
    it("can navigate forward through all steps", () => {
        for (let i = 0; i < WIZARD_STEPS.length - 1; i++) {
            const current = WIZARD_STEPS[i];
            const next = WIZARD_STEPS[i + 1];
            expect(next.number).toBe(current.number + 1);
        }
    });

    it("step IDs map to correct route segments", () => {
        // Verify the step IDs match the URL segments seen in live Clever
        const expectedIds = [
            "connect",
            "management-level",
            "users",
            "credentials",
            "ous",
            "groups",
            "summary",
            "preview",
        ];
        expect(WIZARD_STEPS.map((s) => s.id)).toEqual(expectedIds);
    });
});
