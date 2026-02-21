import { describe, it, expect } from "vitest";
import { migrateV1toV2, migrateState, resolveChoiceTarget, scoreModeKey } from "@/context/InstructionalContext";

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

  it("migrateState handles mixed legacy/malformed score entries safely", () => {
    const v1 = {
      version: 1,
      scores: {
        a: { correct: 1, total: 2, startTime: 1 },
        b: { guided: { correct: 2, total: 2, startTime: 2 }, unguided: null },
        c: null,
      },
    };

    const migrated = migrateState(v1);
    expect(migrated.version).toBe(2);
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
