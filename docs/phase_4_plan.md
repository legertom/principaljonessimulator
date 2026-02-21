# Phase 4 Plan — Guided vs Unguided Differentiation (Bulletproof Execution)

## Objective
Ship Phase 4 safely and completely:
1. `unguidedNextStep` branching
2. Per-mode scoring (`guided` / `unguided`)
3. `STATE_VERSION` bump + v1→v2 migration
4. Mode-aware inbox and completion UX
5. Regression-safe unit/e2e/build quality gates

## Scope Boundaries
### In Scope
- Engine routing behavior for guided vs unguided
- Score model shape updates and persistence migration
- Scenario/validator updates for `unguidedNextStep`
- Helpdesk panel score presentation updates
- Unit/e2e tests covering mode differences + migration

### Out of Scope
- Phase 5 data-variant architecture
- New troubleshooting module content
- Full scenario rewrite beyond required Phase 4 fields

## Success Criteria
### Functional
- Wrong-path choice resolves to:
  - Guided: `nextStep`
  - Unguided: `unguidedNextStep` when present, else `nextStep`
- Scores are persisted per mode per scenario
- Ticket inbox shows Guided + Unguided score/time independently
- Completion card messaging differs by mode

### Data Integrity
- Existing v1 saved state migrates to v2 with no silent score loss
- Replay/switch-mode/skip behaviors do not corrupt score state

### Quality
- `npm run lint` passes
- `npm test` passes
- `npm run e2e` passes
- `npm run build` passes

## Target State Model
```js
scores[scenarioId] = {
  guided: { correct, total, startTime, timeMs? } | null,
  unguided: { correct, total, startTime, timeMs? } | null
}
```

## Branching Rule (Single Source of Truth)
At choice resolution:
```js
const targetStep = (!coachMarksEnabled && choice.unguidedNextStep)
  ? choice.unguidedNextStep
  : choice.nextStep;
```

No implicit skip traversal. No special-case hidden step walkers.

## Migration Plan
- Bump `STATE_VERSION` to `2`
- Add chainable `migrateState`:
  - v1 flat score => `{ guided: oldScore, unguided: null }`
- Keep future-proof chain pattern for v2→v3 later
- Add unit tests for:
  - pure v1 object migration
  - mixed/partial score maps
  - malformed legacy data fallback safety

## Scenario/Validator Contract
Validator must fail when:
- `unguidedNextStep` references unknown step
- Required scored choices are missing `correct: boolean`
- Step reference graph has broken links

## Subagent Parallelization Plan (Conflict-Free)

## Lane A — Engine + Migration (highest reasoning)
**Files (exclusive):**
- `src/context/InstructionalContext.jsx`
- migration-related tests/helpers

**Deliverables:**
- Branching rule implemented
- Mode-keyed score reads/writes
- STATE_VERSION v2 + migration function
- Migration tests passing

## Lane B — Scenario + Validator (strong coding)
**Files (exclusive):**
- `src/data/scenarios.js`
- scenario validation utility files

**Deliverables:**
- `unguidedNextStep` populated on wrong-path branches
- Scored choices have correct annotations
- Validator enforces new contracts

## Lane C — UX + Rendering (fast coding)
**Files (exclusive):**
- `src/components/helpdesk/*`

**Deliverables:**
- Inboxes display guided/unguided score summaries
- Completion cards mode-aware messaging
- No overlap edits in context/data files

## Lane D — Regression Harness (strong verifier)
**Files (exclusive):**
- `src/__tests__/*`
- `tests/e2e/*`

**Deliverables:**
- Mode branch behavior tests
- Migration behavior tests
- Replay/reset/switch-mode regression tests

## Merge Order (Strict)
1. Lane A (engine core)
2. Lane B (scenario/validator) rebased on A
3. Lane C (UX) rebased on A+B
4. Lane D (tests) rebased on A+B+C
5. Integration merge + final full CI gates

No out-of-order merge approvals.

## Risk Register + Mitigations
1. **Migration regression**
   - Mitigation: fixture-based migration tests + manual localStorage smoke check
2. **Unguided dead-end step paths**
   - Mitigation: validator step-reference checks + e2e flow tests
3. **Score drift under replay/mode switch**
   - Mitigation: dedicated regression suite + deterministic start/stop assertions
4. **Concurrent file conflicts**
   - Mitigation: lane-exclusive file ownership and strict merge order
5. **UI ambiguity for mode states**
   - Mitigation: explicit labels and mode-separated score cards

## Integration Checklist (Final Gate)
- [ ] All lane PRs merged in order
- [ ] Lint/tests/e2e/build all green on integration branch
- [ ] Manual smoke test guided mode (2 scenarios)
- [ ] Manual smoke test unguided mode (2 scenarios)
- [ ] Verify migrated localStorage displays prior guided results
- [ ] Verify no loss of completed scenario/module state
- [ ] Verify inbox + completion card reflect both modes correctly

## Rollback Strategy
If post-merge regression occurs:
1. Revert phase-4 merge commit(s)
2. If state version already migrated, optionally clear `pjs-state` for test users
3. Re-open lane-specific hotfix branch from pre-merge baseline

## Delivery Timeline
### Day 1
- Design lock + lane kickoff
- A/B/C parallel coding

### Day 2
- D completes regression harness
- Integration merge
- Full gate verification
- Release decision

## Definition of Done
- All success criteria met
- All quality gates green
- Migration verified and documented
- Mode differentiation visible and trusted by reviewers
- No unresolved high-severity defects
