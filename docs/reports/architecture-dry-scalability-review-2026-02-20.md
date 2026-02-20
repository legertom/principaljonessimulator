# Architecture Review: DRY, Scalability, and AI-Friendly Maintainability

Date: February 20, 2026  
Repository: `principaljonessimulator`  
Reviewer: Codex (software architecture + meticulous engineering review)

## Review Context

This review focused on:

- DRY compliance and duplication risk
- Expansion readiness for rapid feature growth
- Maintainability and modularity for AI-assisted development
- Quality gates and test reliability
- Structural risks likely to slow velocity or increase regressions

## Requested Constraint

Per stakeholder direction, the hardcoded dev credentials/auth item is **pinned/deferred for now** and is not included in the active remediation priorities below.

## Executive Summary

The application is functionally strong and has a useful domain-fixture foundation, but it is not yet structurally optimized for aggressive expansion. The main blockers are:

1. Core quality gates are red (`eslint` fails).
2. E2E smoke coverage is currently broken due to auth/test drift.
3. Several high-churn modules are too large and duplicated, which will slow scaling and AI collaboration.
4. Canonical route/page definitions are duplicated across files, creating drift risk when adding new pages.

Net assessment: **moderate-to-high expansion risk** until the first remediation phase is completed.

## Codebase Signals (Measured)

- Source files (`.js/.jsx` under `src`): `106`
- Total source LOC (`src/**/*.js|jsx`): `15128`
- CSS module/global stylesheets: `48`
- Files >= 500 LOC:
  - `src/components/pages/GoogleProvisioningWizard/steps/OrganizeOUsStep.jsx` (950)
  - `src/components/pages/IDM.jsx` (776)
  - `src/components/pages/GoogleProvisioningWizard/steps/FormatEditorModal.jsx` (575)
  - `src/components/pages/GoogleProvisioningWizard/steps/CredentialFormatEditorModal.jsx` (539)
  - `src/components/pages/GoogleProvisioningWizard/steps/SetCredentialsStep.jsx` (516)
  - `src/data/defaults/idm.js` (642)
  - `src/__tests__/idm-provisioning-wizard.test.js` (787)
- Inline style density in major pages/wizard files: `145` `style={{ ... }}` occurrences

## Verification Results

### Lint

- Command: `npm run lint`
- Result: **failed** with 4 errors
- Evidence:
  - `src/components/guidance/CoachMark.jsx:38`
  - `src/components/layout/Sidebar.jsx:38`
  - `src/components/layout/Sidebar.jsx:45`
  - `src/context/InstructionalContext.jsx:240`

### Unit Tests

- Command: `npm run test`
- Result: **passed**
- Summary: 5 test files, 104 tests passed

### E2E Smoke

- Command: `npm run e2e -- tests/e2e/portal-flow.spec.js`
- Result: **failed** (2/2 tests)
- Evidence:
  - `tests/e2e/portal-flow.spec.js:12`
  - `tests/e2e/portal-flow.spec.js:32`
  - `test-results/portal-flow-Portal-and-das-cc13b--enter-dashboard-and-return/error-context.md:8`
  - `test-results/portal-flow-Portal-and-das-9da37--into-mapped-dashboard-page/error-context.md:8`

### Build

- Command: `npm run build`
- Result: failed in this environment due runtime font fetch (`Inter`) not reachable
- Evidence:
  - `src/app/layout.js:1`
  - `src/app/layout.js:5`
- Additional warning:
  - Next.js middleware convention deprecation, see `src/middleware.js:1`

## Priority Findings (Excluding Pinned Auth Item)

## [P0] Quality Gate Failure: React Hook/Effect Rule Violations

`eslint` currently fails, so expansion work can merge with unresolved correctness/perf issues.

Evidence:

- `src/components/guidance/CoachMark.jsx:38`
- `src/components/layout/Sidebar.jsx:38`
- `src/components/layout/Sidebar.jsx:45`
- `src/context/InstructionalContext.jsx:240`

Impact:

- Cascading renders from sync state updates in effects
- Potential stale callback behavior
- CI quality gate instability

Recommendation:

- Refactor effect-driven state writes into derived state or event-driven updates.
- Remove forward-reference callback hazard in `InstructionalContext`.

## [P0] E2E Smoke Coverage is Broken by Test/Auth Drift

The highest-value flow tests fail at login and therefore do not protect core user journeys.

Evidence:

- `tests/e2e/portal-flow.spec.js:5`
- `tests/e2e/route-persistence.spec.js:5`
- `test-results/portal-flow-Portal-and-das-cc13b--enter-dashboard-and-return/error-context.md:8`

Impact:

- False confidence in release stability
- Portal-to-dashboard flow regressions can ship undetected

Recommendation:

- Align e2e login fixture with currently accepted credentials for dev mode.
- Add one stable helper shared by all e2e tests for authentication.

## [P1] DataTable Selection Logic Breaks Under Sorting

Row selection indexes are tracked against unsorted `data`, but rendering uses `sortedData`.

Evidence:

- `src/components/ui/DataTable.jsx:53`
- `src/components/ui/DataTable.jsx:113`
- `src/components/ui/DataTable.jsx:119`

Impact:

- Wrong records can be selected and operated on when sort is active

Recommendation:

- Use stable row keys (ID-based selection) rather than array indexes.
- Track selection against displayed records by identity, not index.

## [P1] Sort Behavior is Fragile for Non-Primitive Columns

Comparator assumes string/number fields but many sortable columns render object-backed values.

Evidence:

- `src/components/ui/DataTable.jsx:66`
- `src/components/ui/DataTable.jsx:75`
- `src/components/pages/DataBrowser.jsx:98`

Impact:

- Silent sort failures or inconsistent ordering
- Reduced trust in admin UI data views

Recommendation:

- Add optional per-column `sortAccessor` or `compare` function.
- Default sort should guard against object/undefined values.

## [P1] Route/Page Canonical Data is Duplicated Across Multiple Sources

Dashboard page keys/targets exist in routing, component map, sidebar defaults, and tests.

Evidence:

- `src/lib/routing.js:5`
- `src/lib/dashboard-pages.js:27`
- `src/data/defaults/sidebar.js:6`
- `src/data/defaults/portalLobby.test.js:4`

Impact:

- New page additions require multi-file synchronization
- High chance of drift and partial rollout bugs

Recommendation:

- Create one canonical dashboard page registry and derive:
  - route validation
  - component map
  - sidebar children
  - portal launch target validation

## [P1] Monolithic Wizard/IDM Modules Are Too Large for Fast Safe Iteration

Core feature files exceed recommended complexity bounds and mix state, rendering, and data transforms.

Evidence:

- `src/components/pages/GoogleProvisioningWizard/steps/OrganizeOUsStep.jsx:1`
- `src/components/pages/IDM.jsx:1`
- `src/components/pages/GoogleProvisioningWizard/steps/SetCredentialsStep.jsx:1`

Impact:

- Harder code review
- Higher regression likelihood
- Lower AI edit precision in broad files

Recommendation:

- Split by responsibility:
  - container state/hook
  - view sections
  - reusable domain widgets
  - data/format utilities

## [P1] Two Large Format Editors Duplicate Behavior and Utility Logic

`FormatEditorModal` and `CredentialFormatEditorModal` replicate row editing, advanced mode, serialization/parsing, and preview workflows.

Evidence:

- `src/components/pages/GoogleProvisioningWizard/steps/FormatEditorModal.jsx:194`
- `src/components/pages/GoogleProvisioningWizard/steps/CredentialFormatEditorModal.jsx:202`

Impact:

- Doubled maintenance overhead
- Bug fixes must be duplicated

Recommendation:

- Extract shared `FormatBuilder` primitives and hooks:
  - `useFormatRows`
  - `FormatRowList`
  - shared parse/serialize core
  - optional domain adapters for preview resolvers

## [P2] Instructional Flow Uses Multiple Untracked Timers

Progression uses many `setTimeout` calls without unified cancellation strategy.

Evidence:

- `src/context/InstructionalContext.jsx:176`
- `src/context/InstructionalContext.jsx:240`
- `src/context/InstructionalContext.jsx:272`

Impact:

- Race conditions on fast navigation
- Potential stale state transitions

Recommendation:

- Centralize delayed transitions with timer refs and cleanup.
- Consider reducer/state machine pattern for deterministic transitions.

## [P2] ScenarioContext Update Strategy Is Shallow and Fragile for Nested Domains

`updateScenario` performs only top-level merge.

Evidence:

- `src/context/ScenarioContext.jsx:31`

Impact:

- Nested domain updates can overwrite sibling state accidentally during future expansion.

Recommendation:

- Provide scoped update helpers by domain key (`updateScenarioDomain("dashboard", patch)`).
- Add immutable deep merge only where needed.

## [P2] Config Duplication Creates Local/CI Drift Risk

Repo contains duplicate test configs with differing assumptions.

Evidence:

- `playwright.config.js:3`
- `playwright.config.mjs:10`
- `vitest.config.js:6`
- `vitest.config.mjs:7`

Impact:

- Different execution paths by command entrypoint
- Harder onboarding and CI parity

Recommendation:

- Consolidate to one Playwright config and one Vitest config.
- Document canonical command paths in README and AGENTS.

## [P3] Accessibility/Keyboard Semantics Inconsistencies

Some clickable non-button elements rely on pointer behavior without full keyboard support.

Evidence:

- `src/components/chat/ChatPanel.jsx:109`

Impact:

- Lower accessibility quality and keyboard usability

Recommendation:

- Use semantic `button` elements or add keyboard handlers (`Enter`/`Space`) consistently.

## DRY Hotspots

Highest-value deduplication targets:

1. Dashboard route/page registry duplication (`routing`, `dashboard-pages`, `sidebar`, tests).
2. Format editor duplication (`FormatEditorModal`, `CredentialFormatEditorModal`).
3. Repeated table column structures and pagination blocks in `DataBrowser`.
4. Repeated app-name-to-id mapping pattern:
   - `src/components/pages/DashboardHome.jsx:13`
   - `src/components/pages/Library.jsx:13`
   - `src/components/pages/PortalLobby.jsx:43`

## AI-Friendly Maintainability Assessment

Current state is mixed:

- Positive:
  - Context boundaries exist (`ScenarioContext`, `InstructionalContext`).
  - Data defaults are separated into domain modules.
  - Routing helpers centralize normalization behavior.

- Negative:
  - Several high-impact files are far above ideal AI-edit size.
  - Heavy inline style usage obscures logical changes.
  - Similar behaviors implemented in parallel files instead of shared primitives.

Recommended AI-oriented constraints:

1. Target component file size under 250 LOC.
2. Move transform logic into pure `lib/` utilities with unit tests.
3. Keep one concern per file (container vs view vs utils).
4. Introduce architecture lint checks for duplicate key registries.

## Remediation Roadmap

### Phase 1 (Immediate, 1-3 days)

1. Make lint green by fixing hook/effect violations.
2. Restore e2e smoke reliability (login alignment + shared auth helper).
3. Fix `DataTable` sort/selection correctness.

Exit criteria:

- `npm run lint` passes.
- `npm run test` passes.
- `npm run e2e -- tests/e2e/portal-flow.spec.js` passes.

### Phase 2 (Short-term, 3-7 days)

1. Create canonical dashboard registry and remove duplicate page-key definitions.
2. Extract shared format-builder core and de-duplicate both editor modals.
3. Refactor `DataBrowser` into tab config map + shared pagination component usage.

Exit criteria:

- New page addition touches one registry + one view file.
- No duplicated format row editor logic remains.

### Phase 3 (Medium-term, 1-2 weeks)

1. Break `IDM.jsx` and `OrganizeOUsStep.jsx` into smaller domain modules.
2. Harden instructional engine with reducer/state-machine + timer cleanup.
3. Consolidate test configs to single canonical files.

Exit criteria:

- No production component file over 400 LOC.
- Deterministic progression tests for instructional transitions.

## Proposed Governance Rules for Expansion

1. Block merge on lint/test/e2e smoke.
2. Enforce a single page/route registry.
3. Require shared primitive extraction when parallel files repeat >30% behavior.
4. Add PR checklist item: "Can this file be split by concern before merge?"
5. Add architectural decision record (ADR) for instructional engine evolution.

## Open Decisions for Stakeholders

1. Keep or replace build-time Google font fetch for offline/air-gapped reliability.
2. Define strict max component size policy and enforcement method.
3. Decide whether instructional flow remains context-based or migrates to explicit state machine.

## Appendix: Pinned Item

Pinned/deferred by request:

- Hardcoded dev credentials in auth flow remain in place temporarily and are not included in this active remediation set.

