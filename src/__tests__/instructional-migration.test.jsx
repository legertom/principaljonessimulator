import { describe, it, expect } from "vitest";
import { migrateV1toV2, migrateV2toV3, migrateState, resolveChoiceTarget, scoreModeKey } from "@/context/InstructionalContext";

describe("Phase 4 migration and branching", () => {
  it("migrateV1toV2 wraps legacy flat score into guided bucket", () => {
    const v1 = {
      version: 1,
      scores: {
        scenario_alpha: { correct: 3, total: 4, startTime: 1000, timeMs: 120000 },
      },
    };

    const migrated = migrateV1toV2(v1);
    expect(migrated.version).toBe(2);
    expect(migrated.scores.scenario_alpha).toEqual({
      guided: { correct: 3, total: 4, startTime: 1000, timeMs: 120000 },
      unguided: null,
    });
  });

  it("migrateV2toV3 adds idmSetupComplete based on progress", () => {
    const v2WithProgress = {
      version: 2,
      completedScenarios: ["s1"],
    };
    const v2Fresh = {
      version: 2,
      completedScenarios: [],
    };

    const withProgress = migrateV2toV3(v2WithProgress);
    expect(withProgress.version).toBe(3);
    expect(withProgress.idmSetupComplete).toBe(true);

    const fresh = migrateV2toV3(v2Fresh);
    expect(fresh.version).toBe(3);
    expect(fresh.idmSetupComplete).toBe(false);
  });

  it("migrateState handles full v1→v3 chain with mixed score entries", () => {
    const v1 = {
      version: 1,
      completedScenarios: [],
      scores: {
        a: { correct: 1, total: 2, startTime: 1 },
        b: { guided: { correct: 2, total: 2, startTime: 2 }, unguided: null },
        c: null,
      },
    };

    const migrated = migrateState(v1);
    expect(migrated.version).toBe(3);
    expect(migrated.idmSetupComplete).toBe(false);
    expect(migrated.scores.a).toEqual({
      guided: { correct: 1, total: 2, startTime: 1 },
      unguided: null,
    });
    expect(migrated.scores.b).toEqual({
      guided: { correct: 2, total: 2, startTime: 2 },
      unguided: null,
    });
    expect(migrated.scores.c).toEqual({ guided: null, unguided: null });
  });

  it("resolveChoiceTarget uses unguidedNextStep only in unguided mode", () => {
    const choice = { nextStep: "step_wrong", unguidedNextStep: "step_after_wrong" };
    expect(resolveChoiceTarget(choice, true)).toBe("step_wrong");
    expect(resolveChoiceTarget(choice, false)).toBe("step_after_wrong");
  });

  it("scoreModeKey maps coach marks state to mode key", () => {
    expect(scoreModeKey(true)).toBe("guided");
    expect(scoreModeKey(false)).toBe("unguided");
  });
});
