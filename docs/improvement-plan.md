# Principal Jones Simulator — Improvement Plan

> **The game:** You are a Clever Admin on your first day at a school district. Your coworkers — principals, teachers, IT staff — send you messages asking for help with their Google Workspace accounts. You open the dashboard, investigate, and either fix the issue or report back. The outgoing admin (your boss) is training you before they leave.

> **The real audience:** Clever support agents. By role-playing as the admin, they learn what the admin's dashboard looks like, what admins actually do, and what it feels like when things go wrong.

> **The core interaction model:** A coworker sends you a static message (like an email or Slack). You read it, go into the dashboard to investigate, and the **coach/system** guides you through the investigation. The coworker is NOT sitting in a live chat quizzing you — they sent their request and went back to their day. You work independently.

---

## Table of Contents

1. [Phase 1: New Interaction Model — Ticket + Investigation](#phase-1-new-interaction-model)
2. [Phase 2: Rewrite All Scenarios + Score Annotations](#phase-2-rewrite-all-scenarios--score-annotations)
3. [Phase 3: Reframe Characters & Boss](#phase-3-reframe-characters--boss)
4. [Phase 4: Guided vs Unguided Differentiation](#phase-4-guided-vs-unguided-differentiation)
5. [Phase 5: Dashboard State Variations](#phase-5-dashboard-state-variations)
6. [Phase 6: Add Troubleshooting Scenarios](#phase-6-add-troubleshooting-scenarios)

---

## Cross-Cutting Concerns

These apply to every phase and are not repeated in each section.

### Phase Gate Checklist

**Every phase MUST pass this gate before being considered done:**

```bash
npm run lint          # zero errors (warnings acceptable if pre-existing)
npm test              # all unit tests pass
npm run e2e           # all Playwright e2e tests pass
npm run build         # production build succeeds with zero errors
```

If a phase breaks an existing test, fix or update the test **in that phase** — do not defer test fixes to a later phase.

### Schema Migration Strategy

The scenario data format changes across phases. We use a **staged migration with backward compatibility**, never a hard cutover:

**The engine reads BOTH old and new field names.** For every renamed field, the engine normalizer resolves both forms:

```js
// In InstructionalContext.jsx — normalize each step at scenario load time
function normalizeStep(step) {
    return {
        ...step,
        // Phase 1: "question" is preferred, "text" is legacy fallback
        question: step.question ?? step.text ?? null,
        // Phase 1: "choices" is preferred, "actions" is legacy fallback
        choices:  step.choices  ?? step.actions ?? null,
        // Phase 1: checklistLabel defaults to a type-based generic
        checklistLabel: step.checklistLabel ?? defaultChecklistLabel(step),
    };
}

// Step types: engine maps new names to internal processing categories
const STEP_TYPE_MAP = {
    message:    "choice",    // legacy: render choices, advance on click
    action:     "choice",    // legacy: same as message but text may be null
    input:      "freetext",  // legacy: validate typed answer
    task:       "goal",      // legacy: wait for nav/action goal
    observe:    "freetext",  // new: alias for input
    checkpoint: "choice",    // new: alias for message
    resolution: "choice",    // new: alias for message (terminal)
};
```

**Practical implication:** Old scenarios with `actions`, `text`, and `sender` keep working indefinitely. New scenarios use `choices`, `question`, and omit `sender`. There is no flag day where all 11 scenarios must be rewritten atomically.

### Persistence Migration Strategy

The engine uses `localStorage` key `"pjs-state"` with `STATE_VERSION` (currently `1`).

**Rules:**
1. **Bump `STATE_VERSION` only when the persisted state shape changes** (score restructuring in Phase 4, not during UI-only changes).
2. **Always write a migration function**, never silently drop user progress:

```js
// In InstructionalContext.jsx
const STATE_VERSION = 2; // bumped from 1

function migrateState(parsed) {
    if (parsed.version === 1) {
        // v1 → v2: scores change from flat to per-mode
        const migratedScores = {};
        for (const [scenarioId, scoreData] of Object.entries(parsed.scores ?? {})) {
            migratedScores[scenarioId] = { guided: scoreData, unguided: null };
        }
        return { ...parsed, scores: migratedScores, version: 2 };
    }
    return parsed; // already current
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed.version === STATE_VERSION) return parsed;
        if (parsed.version < STATE_VERSION) return migrateState(parsed);
        return null; // future version — discard safely
    } catch { return null; }
}
```

3. **The `migrateState` function chains**: v1→v2→v3 etc., so users who skip versions still migrate correctly.
4. **Test the migration** — unit test that `migrateState({ version: 1, scores: {...} })` produces the correct v2 shape.

### Rollback Strategy

Each phase has a "Rollback" section. The general principle:

- **Content-only phases** (scenarios, characters, curriculum): Fully reversible via git revert.
- **Engine changes**: Reversible if the STATE_VERSION was not bumped. If it was bumped, a downgrade migration is needed (or simply `localStorage.removeItem("pjs-state")` to reset).
- **New components** (InvestigationView): Can coexist with ConversationView during development via a feature flag or `rightPanelView` state.

---

## Current State Summary

### What exists today
- 11 scenarios across 6 modules teaching Clever IDM (Google Workspace provisioning)
- 4 step types: `message` (multiple choice), `input` (free text), `task` (navigate/click), `action` (buttons only)
- iMessage-style chat panel where the coworker character drives the entire interaction via live back-and-forth conversation
- CoachMark spotlight system for guided mode
- Module progression with prerequisites and boss intro/completion messages
- Scoring (correct/total) on `input` steps only, with time tracking
- 25 dashboard pages at UI parity with real Clever
- Persisted state: `STATE_VERSION = 1`, shape: `{ completedScenarios, completedModules, scores: { [id]: { correct, total, startTime, timeMs? } }, coachMarksEnabled }`

### Existing test infrastructure
- **Unit tests:** `npm test` — Vitest with `@testing-library` (`src/__tests__/*.test.{js,jsx}`)
- **E2e tests:** `npm run e2e` — Playwright (`tests/e2e/*.spec.js`)
- **Lint:** `npm run lint` — ESLint
- **Build:** `npm run build` — Next.js production build
- **Key e2e flow tested:** Open ticket → Guided mode → Back to inbox (`helpdesk-flow.spec.js`)

### The core problem

The current model has the coworker **sitting in a live chat asking follow-up questions the entire time:**

```
Coworker:  "What provider is on the card?"
You:       "Google Workspace"
Coworker:  "Good. What status does it show?"
You:       "Active"
Coworker:  "How many issues?"
You:       "1"
```

This is a tutor standing over your shoulder, not a coworker who sent you a request. Real admins get a message like "Hey, new teacher can't log into Google" and then go off to investigate **independently.**

### What the interaction should look like

```
┌──────────────────────────────────────────┐
│ 📩 FROM: Principal Jones                  │
│ Lincoln Heights Elementary                │
│                                           │
│ "Hi! I heard we use something called      │
│ Clever IDM for managing Google accounts.  │
│ Can you check if everything's working     │
│ and let me know?"                         │
└──────────────────────────────────────────┘

    ↓ You read this once. Principal Jones goes back to their office.

┌──────────────────────────────────────────┐
│ 🔍 INVESTIGATION                          │
│                                           │
│ ✅ Navigate to the IDM page               │
│ ✅ Check the provider card status          │
│ → Find the last sync timestamp            │
│ ○ Check for any active issues             │
│ ○ Draft your response to Principal Jones  │
│                                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ 💡 Look below the provider card for the   │
│    sync timestamp.                        │
│                                    [Hint] │
└──────────────────────────────────────────┘

    ↓ At key checkpoints, the SYSTEM asks you questions

┌──────────────────────────────────────────┐
│ ❓ CHECKPOINT                             │
│                                           │
│ Based on the provider card, is the        │
│ Google integration healthy or are there   │
│ any problems?                             │
│                                           │
│ [Everything looks healthy]                │
│ [There are issues that need attention]    │
└──────────────────────────────────────────┘

    ↓ At the end, you report back to the coworker

┌──────────────────────────────────────────┐
│ 📤 REPORT BACK TO: Principal Jones        │
│                                           │
│ Choose the best summary of your findings: │
│                                           │
│ [Our IDM is active and syncing with       │
│  Google. Last sync was 4 hours ago.       │
│  There's 1 minor issue but accounts are   │
│  being managed normally.]                 │
│                                           │
│ [IDM is broken, the sync failed, and      │
│  we need to reconnect Google.]            │
└──────────────────────────────────────────┘
```

### Architecture reminder
- **Scenario data:** `src/data/scenarios.js`
- **Curriculum:** `src/data/curriculum.js`
- **Characters:** `src/data/characters.js`
- **Engine:** `src/context/InstructionalContext.jsx` — `STATE_VERSION = 1`, `STORAGE_KEY = "pjs-state"`
- **Right panel:** `src/components/helpdesk/RightPanel.jsx` → `TicketInbox.jsx` / `ConversationView.jsx`
- **Guidance:** `src/components/guidance/GuidancePanel.jsx` + `CoachMark.jsx`
- **Dashboard shell:** `src/components/layout/DashboardShell.jsx`
- **Page components:** `src/components/pages/*`

---

## Phase 1: New Interaction Model

> **Type:** UI overhaul (new components, modified engine)
> **Impact:** Transformative — this changes the entire feel of the app
> **Effort:** High
> **STATE_VERSION change:** No (state shape stays the same; only UI rendering changes)
> **Goal:** Replace "live chat with quiz-master coworker" with "read ticket → investigate dashboard → report back"

### 1A: Add step normalizer to the engine

Before building new UI, add the normalizer to `InstructionalContext.jsx` so the engine speaks both old and new schemas:

```js
function normalizeStep(step) {
    return {
        ...step,
        question:       step.question       ?? step.text    ?? null,
        choices:        step.choices         ?? step.actions ?? null,
        checklistLabel: step.checklistLabel  ?? defaultChecklistLabel(step),
    };
}

function defaultChecklistLabel(step) {
    if (step.type === "task") return step.guideMessage ?? "Complete this step";
    if (step.type === "input" || step.type === "observe") return "Answer a question";
    return "Continue";
}
```

Call `normalizeStep()` wherever the engine reads a step — in `advanceStep`, `handleAction`, `checkNavigationGoal`, `checkActionGoal`, and `acceptTicket`. This means old scenarios with `text`/`actions`/`sender` keep working unchanged.

Also add support for `choices[].correct` scoring **now**, not in a later phase (see "Score on write" rule below):

```js
// Inside the standard button action handler:
if (typeof action.correct === "boolean") {
    setScores(prev => {
        const s = prev[scenarioId] ?? { correct: 0, total: 0, startTime: Date.now() };
        return {
            ...prev,
            [scenarioId]: {
                ...s,
                total: s.total + 1,
                correct: s.correct + (action.correct ? 1 : 0),
            }
        };
    });
}
```

This is a tiny addition — if `correct` is not present on a choice, scoring is skipped (backward compatible). But it means every scenario rewritten in Phase 2 gets scoring for free without a separate "add correct flags" pass.

Update the dev-mode `validateScenarios()` to recognize new step types (`observe`, `checkpoint`, `resolution`) and new fields (`choices`, `question`, `checklistLabel`).

### 1B: Redesign the Right Panel

The right panel currently has two views: `TicketInbox` and `ConversationView`. Add a new `InvestigationView` that exists **alongside** ConversationView:

```jsx
// src/components/helpdesk/RightPanel.jsx
export default function RightPanel() {
    const { rightPanelView } = useInstructional();
    return (
        <div className={styles.panel}>
            {rightPanelView === "conversation" && <GuidancePanel />}
            {rightPanelView === "inbox" && <TicketInbox />}
            {rightPanelView === "conversation" && <ConversationView />}    {/* legacy */}
            {rightPanelView === "investigation" && <InvestigationView />}  {/* new */}
        </div>
    );
}
```

The `acceptTicket` function decides which view to show based on the scenario format. If the scenario has `ticketMessage` (new format), open `investigation`. Otherwise fall back to `conversation` (legacy format). This means unconverted scenarios keep working during the migration.

**InvestigationView** has three sections:

#### Section 1: TicketCard (pinned at top)

```jsx
// New component: src/components/helpdesk/TicketCard.jsx
<div className={styles.ticketCard}>
    <div className={styles.ticketHeader}>
        <div className={styles.ticketAvatar}>{customer.avatar}</div>
        <div className={styles.ticketMeta}>
            <span className={styles.ticketName}>{customer.name}</span>
            <span className={styles.ticketRole}>{customer.role}</span>
        </div>
        <span className={styles.ticketNumber}>#{scenario.ticketNumber}</span>
    </div>
    <div className={styles.ticketBody}>
        {scenario.ticketMessage}
    </div>
</div>
```

#### Section 2: Investigation step list (scrollable)

Renders each step as a checklist item:
- **Completed** (✅): Collapsed to label + answer, greyed
- **Current** (→): Expanded with full question + input/buttons + hint toggle
- **Future** (○): Label only, dimmed

```
✅ Navigate to the IDM page
    ✓ Clicked "IDM" in sidebar

✅ Identify the provider
    ✓ Google Workspace

→  Assess integration health
    Based on the provider card, is the Google integration healthy?
    [Active, with 1 issue]  [Broken]  [Can't tell]

○  Find the sync timestamp
○  Check for issues
○  Report back to Principal Jones
```

#### Section 3: Resolution (at end, replaces "customer says thank you")

When the final `resolution` step is reached, render it with a distinct "report back" header:

```
📤 Report back to Principal Jones

Choose the best summary of your findings:

[Our IDM is active with Google. Last sync was 4 hours ago...]
[IDM is down. Sync failed, need to call support...]
```

### 1C: New scenario schema fields

Add to the scenario object:

```js
{
    id: "scenario_idm_orientation",
    title: "IDM Page Orientation",
    description: "Show Principal Jones where IDM is and whether Google sync is healthy.",

    customerId: "principalJones",
    ticketNumber: 1001,
    ticketSubject: "Where do I find the Google sync settings?",
    ticketMessage: "Hi! I heard we use something called Clever IDM for managing Google accounts. The old admin left and nobody briefed me. Can you check if everything's working and let me know?",
    ticketPriority: "normal",

    moduleId: "mod_overview",

    steps: [
        {
            id: "step_nav_idm",
            type: "task",
            checklistLabel: "Navigate to the IDM page",
            goalRoute: "idm",
            guideMessage: "Open the IDM page under User management in the sidebar.",
            hint: { target: "idm", message: "Click 'IDM' in the sidebar." },
            autoShowHint: true,
            nextStep: "step_check_provider",
        },
        {
            id: "step_check_provider",
            type: "observe",
            checklistLabel: "Identify the provider",
            question: "What provider is shown on the provider card?",
            guideMessage: "Look at the provider card at the top of the IDM page.",
            correctAnswer: "google workspace",
            matchMode: "includes",
            successStep: "step_check_status",
            hint: { target: "provider-card", message: "The provider name is on the card." },
            autoShowHint: false,
        },
        {
            id: "step_check_status",
            type: "checkpoint",
            checklistLabel: "Assess the integration health",
            question: "Based on the provider card, is the Google integration healthy?",
            choices: [
                { label: "Active and working, but there's 1 issue to review", nextStep: "step_find_timestamp", correct: true },
                { label: "It's broken — the sync has failed", nextStep: "step_status_wrong", correct: false },
                { label: "I can't tell from this page", nextStep: "step_status_wrong", correct: false },
            ],
        },
        // ... more steps ...
        {
            id: "step_report_back",
            type: "resolution",
            checklistLabel: "Report back to Principal Jones",
            question: "Choose the best summary of your findings:",
            choices: [
                { label: "Our IDM is active with Google Workspace. Last sync about 4 hours ago. 1 minor issue. Everything healthy.", correct: true, nextStep: null },
                { label: "IDM is down. Sync broken. Call Clever support immediately.", correct: false, nextStep: null },
            ],
        },
    ],
}
```

Schema migration summary:

| Old field | New field | Engine handling |
|-----------|-----------|----------------|
| `text` | `question` | Normalizer reads `question ?? text` |
| `actions` | `choices` | Normalizer reads `choices ?? actions` |
| `sender: "customer"` | *(omitted)* | Normalizer ignores `sender`; InvestigationView doesn't render avatars |
| *(n/a)* | `ticketMessage` | If present → InvestigationView; if absent → legacy ConversationView |
| *(n/a)* | `checklistLabel` | Normalizer generates default from step type if absent |
| `type: "message"` | `type: "checkpoint"` | Both resolve to internal `"choice"` processing |
| `type: "input"` | `type: "observe"` | Both resolve to internal `"freetext"` processing |
| *(n/a)* | `type: "resolution"` | Resolves to `"choice"` processing; UI renders with report-back header |

### 1D: Update GuidancePanel + CoachMark

`GuidancePanel.jsx` can be simplified — the investigation checklist already shows guidance. Keep it rendering during investigation mode but only show the current step's `guideMessage` and hint toggle (no full checklist duplication).

`CoachMark.jsx` stays exactly the same — no changes needed.

### 1E: Update existing tests

- **`ConversationView.test.jsx`**: Keep existing tests passing (ConversationView still exists for legacy scenarios).
- **`helpdesk-flow.spec.js` (e2e)**: Update to test the new investigation flow with the converted Scenario 1A. Keep a separate test for legacy ConversationView with an unconverted scenario.
- **Add new test**: `InvestigationView.test.jsx` — renders TicketCard, step checklist, input, choices, resolution.

### Implementation Checklist

- [ ] Add `normalizeStep()` to `InstructionalContext.jsx` with `STEP_TYPE_MAP`
- [ ] Add `choices[].correct` scoring to `handleAction` (no separate phase needed)
- [ ] Update `validateScenarios()` for new step types and fields
- [ ] Create `TicketCard.jsx` component + CSS module
- [ ] Create `InvestigationView.jsx` component + CSS module
- [ ] Update `RightPanel.jsx` to render InvestigationView for `rightPanelView === "investigation"`
- [ ] Update `acceptTicket` to choose view based on `scenario.ticketMessage` presence
- [ ] Convert Scenario 1A to new format (with `correct` flags on all choices)
- [ ] Verify CoachMark still works with the new panel layout
- [ ] Verify scoring, skip, replay, and mode picker still work
- [ ] Update `helpdesk-flow.spec.js` e2e test for new flow
- [ ] Add `InvestigationView.test.jsx` unit test

### Phase Gate

```bash
npm run lint   # ✅
npm test       # ✅ (including new InvestigationView test)
npm run e2e    # ✅ (updated helpdesk flow test)
npm run build  # ✅
```

### Done Criteria

- [ ] InvestigationView renders for Scenario 1A with ticket card + checklist + resolution
- [ ] ConversationView still renders for all other (unconverted) scenarios
- [ ] Old `text`/`actions`/`sender` fields work unchanged in unconverted scenarios
- [ ] `choices[].correct` scoring works when present, silent when absent
- [ ] All existing tests pass or are updated

### Rollback

Fully reversible: delete InvestigationView, revert RightPanel.jsx, revert normalizer additions. ConversationView was never removed. No STATE_VERSION change means no persistence impact.

---

## Phase 2: Rewrite All Scenarios + Score Annotations

> **Type:** Content change (`scenarios.js`)
> **Impact:** High
> **Effort:** Medium
> **Depends on:** Phase 1 (new format must exist before rewriting)
> **STATE_VERSION change:** No (score shape unchanged; just more scenarios have `correct` flags)
> **Goal:** Convert all 11 scenarios to ticket + investigation format WITH `correct` flags included — no double-touch

### The "Score on Write" Rule

**When rewriting a scenario, add `correct: true/false` to every scored choice in the same pass.** Do not write scenarios without `correct` flags and plan to add them later. The engine already supports `correct` (added in Phase 1), so there's no dependency.

Choices that are "flavor" (equally valid endings like "You're welcome!" / "Happy to help!") get NO `correct` flag — they are simply not scored.

### The Approach

For each scenario:
1. Write a realistic `ticketMessage` — what would the coworker actually send?
2. Map the investigation as a series of dashboard tasks and diagnostic checkpoints
3. End with a `resolution` step where the trainee reports back
4. **Add `correct` flags** to every checkpoint and resolution choice
5. Replace trivia questions with diagnostic ones
6. Target: at least 40% of steps should be `task` type (dashboard interaction)
7. Add `data-instruction-target` attributes to page components for any new hint targets

### Scenario-by-Scenario Conversion

#### Scenario 1A: IDM Page Orientation
**Ticket:** "Hi! The old admin left and nobody briefed me on how we manage Google accounts. Can you check if everything's working and give me a quick rundown?"
**Investigation:** Navigate to IDM → identify provider → assess health → find sync timestamp → check for issues → report back with summary
**Resolution:** Compose a summary for the principal

#### Scenario 1B: Exploring IDM Tabs
**Ticket:** "I'm updating our internal IT wiki and need to document what information is available on the IDM page. Can you look through each section and tell me what I should write?"
**Investigation:** Click Tasks tab → describe what it shows → click Sync History → assess sync health → click Exports → identify available exports → click Events → describe event types → report back with a tab summary
**Resolution:** Choose the best wiki description of the tabs

#### Scenario 2A: Wizard Navigation
**Ticket:** "The district director wants us to document our Google provisioning setup before the board meeting. Can you open the wizard and list what's configured?"
**Investigation:** Navigate to IDM → click Edit Google provisioning → step through the wizard → identify each step's purpose → note current configuration → report back
**Resolution:** Choose the correct summary of the wizard structure

#### Scenario 2B: Wizard Concepts
**Ticket:** "I'm preparing a presentation for the board on our Google Workspace setup. Can you explain what each part of the provisioning wizard does? I want to make sure I describe it correctly."
**Investigation:** Open wizard → explain Connect step purpose → explain Management Level → explain Users step → explain Credentials → explain OUs → explain Groups → explain Summary → explain Preview
**Resolution:** Choose the best board-ready description of the pipeline

#### Scenario 3A: Changing Email Format
**Ticket:** "We decided to change student emails from firstname.lastname to first initial + last name. Can you figure out where that setting is and what the new format would look like?"
**Investigation:** Navigate to IDM → open wizard → go to credentials step → find student email format → determine new format → compute example email → report back
**Resolution:** Report what needs to change and what the new format produces

#### Scenario 3B: Credential Formats
**Ticket:** "Before we change any credential settings, I need to fully understand how the current system works. Can you document the email and password formats for all user types?"
**Investigation:** Open wizard credentials step → examine student card → examine teacher card → examine staff card → compare formats → understand fallback concept → understand matching vs creating
**Resolution:** Summarize the credential system

#### Scenario 4A: OU Navigation
**Ticket:** "A parent called asking why their kid's Google account is in a folder called 'Treutelside Middle School.' Can you figure out how student accounts get organized and trace where this specific student would end up?"
**Investigation:** Open wizard OU step → identify student OU template → trace Rogelio's path → identify teacher OU → identify staff OU → map the full tree
**Resolution:** Explain the OU structure and where the student's account is

#### Scenario 4B: OU Configuration
**Ticket:** "I'm presenting to the board on our Google account lifecycle. I need to understand: what happens when a teacher retires? What about accounts we manage manually? Document the archive and ignored policies."
**Investigation:** Review archive settings → understand archive actions → review ignored handling → compare archive vs ignored → trace staff OU paths → note teacher path
**Resolution:** Summarize lifecycle policies for the board

#### Scenario 5: Group Setup
**Ticket:** "The principal wants email distribution lists that automatically update when students change classes. Is that something our Google setup can do? Check the Groups configuration."
**Investigation:** Open wizard groups step → check current rules → understand what membership rules do → understand managed vs manual groups → assess current state (0 rules)
**Resolution:** Report whether auto-updating lists are possible and what needs to be configured

#### Scenario 6A: Review & Preview
**Ticket:** "We're about to go live with provisioning changes. Before anyone clicks the Provision button, I need you to review the Summary and Preview and tell me if it's safe to proceed."
**Investigation:** Open wizard summary → verify configuration → open preview → check accounts to create → check for conflicts → note preview age → assess readiness
**Resolution:** Recommend whether to proceed or re-run the preview first

#### Scenario 6B: Sync Management
**Ticket:** "I'm training my replacement (yes, I'm leaving too!) and need to write a handoff document. Walk through the entire provisioning process from start to finish so I can document it."
**Investigation:** Trace the full 8-step pipeline → name each step → understand what Provision does → check preview data → assess current state
**Resolution:** Choose the best handoff summary

### Content Quality Rules

1. **No counting questions.** Never ask "how many X?" — instead ask "what does X tell us?" or "is X healthy?"
2. **Every observe/input question should require judgment**, not just reading a value.
3. **Task steps should outnumber observe/input steps.** The trainee should be clicking through the dashboard more than typing answers.
4. **The resolution step should test synthesis.**
5. **Checkpoint questions should have plausible wrong answers** that represent real misconceptions.
6. **Every scored choice MUST have `correct: true/false`** — no separate annotation pass later.

### Implementation Checklist

- [ ] Rewrite Scenario 1A first (as the template — already done in Phase 1)
- [ ] Rewrite remaining 10 scenarios using the template
- [ ] Verify every `checkpoint` and `resolution` choice has a `correct` flag
- [ ] Add `data-instruction-target` attributes to page components for new hint targets
- [ ] Verify dev-mode validation passes (no broken step references)
- [ ] Verify all hint targets resolve to DOM elements
- [ ] After all 11 are converted, remove the legacy `ConversationView.jsx` if no scenarios use it

### Phase Gate

```bash
npm run lint   # ✅
npm test       # ✅
npm run e2e    # ✅ (all scenarios use new format)
npm run build  # ✅
```

### Done Criteria

- [ ] All 11 scenarios use the new format (`ticketMessage`, `question`, `choices`, `checklistLabel`)
- [ ] All scored choices have `correct` flags
- [ ] At least 40% of steps per scenario are `task` type
- [ ] Zero "count the rows" questions remain
- [ ] ConversationView can be removed (or kept but unused)

### Rollback

Partially reversible: individual scenarios can be reverted to old format since the normalizer supports both. ConversationView removal is the one-way gate — defer that to the end of this phase as a separate commit.

---

## Phase 3: Reframe Characters & Boss

> **Type:** Content change (`characters.js`, `curriculum.js`)
> **Impact:** Medium
> **Effort:** Low
> **Can start:** Alongside Phase 2
> **STATE_VERSION change:** No
> **Goal:** The boss is the outgoing admin training you. Coworkers are district staff.

### 3A: Change the boss

In `src/data/characters.js`:
- **Role:** Change from "IDM Support Team Lead" to "Outgoing Clever Admin" (or "IT Coordinator — transitioning to Central Office")
- **Framing:** Alex Rivera is the person who held your job before you. They're leaving and training you during your first week.

### 3B: Rewrite boss messages in curriculum.js

All `bossIntro` messages should sound like a mentor handing off their job:

**Module 1:** "OK, first thing — the IDM page. This is where you'll live. Cedar Ridge runs Google Workspace through Clever, and IDM is the control center."

**Module 2:** "Now that you know where things are, let's get into how the provisioning actually works. The wizard has 8 steps and it configures everything."

**Module 3:** "Credentials are where it gets real. If you mess up the email format, every student in the district gets a broken login."

**Module 4:** "OUs control where Google accounts end up in the directory. Parents sometimes call about this."

**Module 5:** "Groups are optional but powerful. We haven't set any up yet, but you should know what they do."

**Module 6:** "Last thing — the review and provision steps. This is where you actually push changes live. Be careful here."

### 3C: Character roles should be district-appropriate

Verify characters have district roles and their `ticketMessage` text matches their voice:
- **Principal Jones** — asks high-level questions
- **Sarah Chen** (IT Coordinator) — asks technical details
- **Marcus Thompson** (Tech Director) — asks about policy and board presentations
- **Lisa Wilson** (Secretary) — asks about specific people's accounts

### Implementation Checklist

- [ ] Update boss character in `src/data/characters.js`
- [ ] Rewrite all `bossIntro` and `bossCompletion` in `src/data/curriculum.js`
- [ ] Verify character roles are district-appropriate
- [ ] Polish `ticketMessage` text to match each character's role/voice

### Phase Gate

```bash
npm run lint   # ✅
npm test       # ✅
npm run e2e    # ✅
npm run build  # ✅
```

### Done Criteria

- [ ] Boss character role says "Outgoing Clever Admin" (not "Support Team Lead")
- [ ] All boss messages read as mentor-handoff, not manager-briefing
- [ ] Character voices match their district roles

### Rollback

Fully reversible via git revert. Content-only change with zero code impact.

---

## Phase 4: Guided vs Unguided Differentiation

> **Type:** Engine + UI + content change
> **Impact:** Medium
> **Effort:** Medium
> **Depends on:** Phases 1-2 (scoring via `correct` must be in place)
> **STATE_VERSION change:** Yes → bump to `2` with migration function
> **Goal:** Unguided mode is a real challenge, not just "same thing without hints"

### 4A: Explicit branching — replace `guidedOnly` with `unguidedNextStep`

The original plan proposed a `guidedOnly: true` flag on wrong-path correction steps, with the engine silently skipping them in unguided mode. This is ambiguous — "skip" could mean "skip the step entirely" or "skip but still advance through its nextStep chain." Instead, use **explicit branching:**

On any choice that has a wrong-path branch, add an `unguidedNextStep` field:

```js
{
    id: "step_check_status",
    type: "checkpoint",
    question: "Is the Google integration healthy?",
    choices: [
        {
            label: "Active with 1 issue",
            correct: true,
            nextStep: "step_find_timestamp",      // same in both modes
        },
        {
            label: "It's broken",
            correct: false,
            nextStep: "step_status_correction",    // guided: show correction explanation
            unguidedNextStep: "step_find_timestamp", // unguided: skip correction, go straight to next real step
        },
    ],
}
```

**Engine behavior:**
```js
const targetStep = (!coachMarksEnabled && choice.unguidedNextStep)
    ? choice.unguidedNextStep
    : choice.nextStep;
advanceStep(targetStep);
```

This is explicit, predictable, and testable. Every wrong-path fork has two clearly defined destinations. The dev-mode validator can check that both `nextStep` and `unguidedNextStep` point to valid step IDs.

### 4B: Track scores per mode

Bump `STATE_VERSION` to `2`. The score shape changes from:
```js
{ correct: 5, total: 6, startTime, timeMs }
```
to:
```js
{ guided: { correct: 5, total: 6, startTime, timeMs }, unguided: null }
```

Write a migration function as described in the Cross-Cutting Concerns section.

### 4C: Different completion card by mode

- **Guided:** "Investigation complete! You resolved the ticket with some coaching. Ready to try unguided?"
- **Unguided:** "Investigation complete. Score: 8/10 — 2 wrong calls. Time: 3m 22s."

### 4D: Display both scores in TicketInbox

Completed tickets show: "Guided: 5/6 · Unguided: 4/5" (or just one if only one mode has been played).

### Implementation Checklist

- [ ] Add `unguidedNextStep` to relevant choices in scenarios
- [ ] Update engine to branch on `unguidedNextStep` vs `nextStep` based on `coachMarksEnabled`
- [ ] Update `validateScenarios()` to check `unguidedNextStep` references
- [ ] Bump `STATE_VERSION` to `2` with migration function
- [ ] Add unit test for `migrateState` v1→v2
- [ ] Modify `acceptTicket` to key scores by mode
- [ ] Update completion card rendering in `InvestigationView`
- [ ] Update `TicketInbox` to display per-mode scores
- [ ] Add `unguidedNextStep` to all wrong-path choices in all 11 scenarios

### Phase Gate

```bash
npm run lint   # ✅
npm test       # ✅ (including migrateState test)
npm run e2e    # ✅
npm run build  # ✅
```

### Done Criteria

- [ ] `STATE_VERSION === 2` with working migration from v1
- [ ] Unit test confirms v1 scores migrate to `{ guided: {...}, unguided: null }` shape
- [ ] Wrong choices branch differently in guided vs unguided mode
- [ ] Completion card shows mode-appropriate messaging
- [ ] Ticket inbox shows per-mode scores

### Rollback

**Partially reversible.** The STATE_VERSION bump is the one-way gate. To roll back:
- Revert code changes via git
- Users who already migrated to v2 will have their state dropped (version mismatch returns null)
- This only affects dev/testing users, not a production concern

---

## Phase 5: Dashboard State Variations

> **Type:** Architecture + data change
> **Impact:** High (unlocks Phase 6 and future scenario variety)
> **Effort:** High
> **STATE_VERSION change:** No (data variants are not persisted)
> **Goal:** Dashboard pages can show different data depending on the active scenario

### The Problem

Dashboard pages always show the same static data from `src/data/defaults/`. Troubleshooting scenarios need error states.

### Design: Data Overlay System

#### 5A: Merge semantics (CRITICAL)

Data overrides use **replace semantics for arrays, shallow merge for objects:**

```js
// Rule: arrays are REPLACED, not concatenated
// Rule: objects are shallow-merged (one level deep)

function applyOverrides(defaults, overrides) {
    const result = { ...defaults };
    for (const [key, value] of Object.entries(overrides)) {
        if (Array.isArray(value)) {
            // Arrays: REPLACE entirely (e.g., syncHistory, issues)
            result[key] = value;
        } else if (value && typeof value === "object" && !Array.isArray(value)) {
            // Objects: shallow merge one level
            result[key] = { ...defaults[key], ...value };
        } else {
            // Primitives: replace
            result[key] = value;
        }
    }
    return result;
}
```

**Why replace, not merge for arrays?** Because troubleshooting scenarios need to show a *specific* sync history (e.g., one failed entry), not the default entries plus one failed entry. The scenario author must provide the complete array they want rendered.

Example:
```js
// In scenarios.js
settings: {
    dataOverrides: {
        idm: {
            providerStatus: "error",           // primitive: replaces "active"
            syncHistory: [                      // array: REPLACES entire default array
                { date: "02/19/2026", status: "failed", error: "OAuth token expired" },
                { date: "02/18/2026", status: "success" },
            ],
            issues: [                           // array: REPLACES entire default (empty) array
                { type: "sync_failure", message: "OAuth token expired. Re-authenticate." }
            ],
            stats: { created: 0, issues: 3 }    // object: shallow merges with default stats
        }
    }
}
```

#### 5B: DataVariantContext

New context: `src/context/DataVariantContext.jsx`

```jsx
import { createContext, useContext, useMemo } from "react";
import { useInstructional } from "@/context/InstructionalContext";
import * as defaults from "@/data/defaults";

const DataVariantContext = createContext(defaults);

export function DataVariantProvider({ children }) {
    const { activeScenario } = useInstructional();
    const overrides = activeScenario?.settings?.dataOverrides ?? {};

    const data = useMemo(() => {
        const result = {};
        for (const [pageKey, pageDefaults] of Object.entries(defaults)) {
            result[pageKey] = overrides[pageKey]
                ? applyOverrides(pageDefaults, overrides[pageKey])
                : pageDefaults;
        }
        return result;
    }, [overrides]);

    return <DataVariantContext.Provider value={data}>{children}</DataVariantContext.Provider>;
}

export function useDataVariant() {
    return useContext(DataVariantContext);
}
```

#### 5C: Integrate into DashboardShell

Wrap dashboard content with the provider:

```jsx
// In DashboardShell.jsx
<InstructionalProvider>
    <DataVariantProvider>
        <DashboardShellContent ...>
            {children}
        </DashboardShellContent>
    </DataVariantProvider>
</InstructionalProvider>
```

#### 5D: Migrate pages to use context

Pages switch from static imports to context:

```jsx
// Before:
import { idmData } from "@/data/defaults/idm";

// After:
const { idm: idmData } = useDataVariant();
```

Start with the IDM page (most scenarios target it), then migrate others as needed.

#### 5E: Default behavior unchanged

When no scenario is active or no overrides exist, `useDataVariant()` returns the unchanged defaults. Zero visual change for existing users.

### Implementation Checklist

- [ ] Define `applyOverrides` function with replace-for-arrays semantics
- [ ] Create `DataVariantContext.jsx` with `DataVariantProvider` and `useDataVariant` hook
- [ ] Add unit tests for `applyOverrides` (especially array replace vs object merge)
- [ ] Wrap `DashboardShell` with `DataVariantProvider`
- [ ] Migrate IDM page component to `useDataVariant()`
- [ ] Create data overrides for the 3 troubleshooting scenarios
- [ ] Test that default data still works when no scenario is active
- [ ] Migrate other pages as needed

### Phase Gate

```bash
npm run lint   # ✅
npm test       # ✅ (including applyOverrides unit tests)
npm run e2e    # ✅
npm run build  # ✅
```

### Done Criteria

- [ ] `useDataVariant()` returns correct merged data for active scenario
- [ ] `useDataVariant()` returns unchanged defaults when no scenario active
- [ ] IDM page renders error states from troubleshooting scenario overrides
- [ ] Unit tests cover array-replace, object-merge, and primitive-replace behaviors
- [ ] No visual regression on existing (non-troubleshooting) scenarios

### Rollback

Reversible: remove DataVariantProvider, revert page components to static imports. No persistence impact.

---

## Phase 6: Add Troubleshooting Scenarios

> **Type:** Content + data (`scenarios.js` + data defaults)
> **Impact:** High
> **Effort:** Medium-High
> **Depends on:** Phase 5 (needs dashboard state variations for error states)
> **STATE_VERSION change:** No
> **Goal:** Scenarios where something is WRONG and the trainee must diagnose it

### New Scenarios

#### Scenario: "Sync Failure Investigation"
**Ticket from IT Coordinator:** "Teachers are telling me new students don't have Google accounts. Something might be wrong with the sync. Can you look into it?"
**Dashboard state:** Sync History shows a failed sync. Provider card shows error status.
**Investigation:** Navigate to IDM → notice error status → check sync history → identify failed sync → read error message → check events → determine root cause → report back

#### Scenario: "Missing Teacher Account"
**Ticket from Secretary:** "We hired a new teacher, Betty Bauch, last week and she still can't log into Google. Can you figure out why?"
**Dashboard state:** Events tab shows a failed account creation with a conflict error.
**Investigation:** Navigate to IDM → check events → find the conflict → determine duplicate email → check credential format → report back

#### Scenario: "Stale Provisioning"
**Ticket from Tech Director:** "I'm not confident our provisioning is actually running. How do we verify it's working and when it last ran?"
**Dashboard state:** Sync timestamp shows 2 weeks ago. Sync may be paused.
**Investigation:** Check sync timestamp → notice it's stale → check if paused → review last sync → check events → report back

### New Module in curriculum.js

```js
{
    id: "mod_troubleshooting",
    title: "Troubleshooting",
    prerequisites: ["mod_review_provision"],
    scenarioIds: ["scenario_sync_failure", "scenario_missing_teacher", "scenario_stale_provisioning"],
    bossIntro: "Real talk — most of your day won't be green checkmarks. Things break. Syncs fail. Accounts go missing. These tickets are based on real issues I dealt with. Welcome to the real job.",
    bossCompletion: "You handled those like a pro. I'm officially not worried about leaving anymore. Good luck — you've got this.",
}
```

### Implementation Checklist

- [ ] Write scenario steps for all 3 troubleshooting scenarios (with `correct` flags)
- [ ] Define data overrides each scenario needs (uses Phase 5 `DataVariantProvider`)
- [ ] Add `data-instruction-target` attributes for any new dashboard elements
- [ ] Add Module 7 to `curriculum.js`
- [ ] Test all 3 scenarios end-to-end in both modes

### Phase Gate

```bash
npm run lint   # ✅
npm test       # ✅
npm run e2e    # ✅
npm run build  # ✅
```

### Done Criteria

- [ ] 3 troubleshooting scenarios exist and are playable
- [ ] Each shows a distinct error-state dashboard
- [ ] Module 7 unlocks after Module 6 completion
- [ ] All scenarios have `correct` flags and `unguidedNextStep` where applicable

### Rollback

Fully reversible: remove scenarios from `scenarios.js`, remove module from `curriculum.js`. No engine changes in this phase.

---

## Phase Dependency & Execution Order

```
Phase 1 (new interaction model) ──→ START HERE
    │
    ├──→ Phase 2+3 (rewrite scenarios + characters) ──→ do together
    │
    ├──→ Phase 4 (guided/unguided + STATE_VERSION bump) ──→ after Phase 2
    │
    └──→ Phase 5 (data variants) ──→ after Phase 2
            │
            └──→ Phase 6 (troubleshooting) ──→ after Phase 5
```

### Recommended Build Order

1. **Phase 1** — New InvestigationView + engine normalizer + choice scoring. Convert 1A.
2. **Phase 2 + 3** — Rewrite all scenarios (with `correct` flags) + reframe characters.
3. **Phase 4** — Guided/unguided differentiation + STATE_VERSION 2 migration.
4. **Phase 5** — Data variant system (`DataVariantProvider` + `applyOverrides`).
5. **Phase 6** — Troubleshooting scenarios (uses Phase 5 data variants).

### Phase Count Note

The original plan had 8 phases. This revision has 6 because:
- "Score Everything" (old Phase 4) was eliminated as a standalone phase — `correct` scoring is built into Phase 1's engine work and applied during Phase 2's scenario rewrites (no double-touch).

---

## Success Metrics

After all phases, the simulator should:

- [ ] Present coworker requests as static tickets, not live chat quizzes
- [ ] Have trainees spending >60% of their time navigating and clicking in the dashboard
- [ ] Frame ALL questions as coming from the training system (coach), not the coworker
- [ ] End every scenario with a "report back" resolution that tests synthesis
- [ ] Include a visible investigation checklist showing progress through each scenario
- [ ] Ask zero "count the rows" questions — all questions require judgment or diagnosis
- [ ] Include at least 3 troubleshooting scenarios with error-state dashboards
- [ ] Score both checkpoint choices and observe/input answers
- [ ] Differentiate guided (learning) and unguided (challenge) modes meaningfully
- [ ] Feel like "your first week on the job, learning from a mentor who's leaving"
- [ ] Make Clever support agents think "oh, THIS is what the admin experiences"

---

## Changelog: What Was Fixed in This Plan Revision

This section documents the 7 mandatory fixes applied to the plan (from v2 → v3).

### 1. Staged migration / backward compatibility (was: hard cutover)

**Before:** Plan said "rename `actions` to `choices` and `text` to `question`" with no compatibility layer — all 11 scenarios would have to be rewritten atomically or the engine would break.

**After:** Added `normalizeStep()` function that reads both old (`text`/`actions`/`sender`) and new (`question`/`choices`) field names via `??` fallback. Added `STEP_TYPE_MAP` that maps all 7 type names (old + new) to 3 internal processing categories. Old scenarios keep working indefinitely. No flag day.

### 2. Persistence migration for STATE_VERSION (was: silent data wipe)

**Before:** `loadState()` returned `null` when `parsed.version !== STATE_VERSION` — silently wiping all user progress (scores, completed scenarios, module completions) on any version bump.

**After:** Added `migrateState()` chain pattern — v1→v2→v3 — that transforms old state into new shape. Added unit test requirement. Explicit rules: bump only when persisted shape changes (Phase 4), always write a migration, chain migrations for version-skippers.

### 3. Phase gates: lint, test, e2e, build (was: not specified)

**Before:** No verification step between phases. Tests could silently break and accumulate across phases.

**After:** Cross-cutting "Phase Gate Checklist" requires `npm run lint`, `npm test`, `npm run e2e`, `npm run build` to all pass before any phase is done. Rule: if a phase breaks an existing test, fix it in that phase — no deferring.

### 4. Data override merge semantics (was: undefined)

**Before:** The data overlay phase said "overlay data" without specifying what happens when you merge arrays like `syncHistory` or `issues`. Default JS spread (`...`) would shallow-merge object properties but arrays could silently concatenate or be overwritten depending on implementation.

**After:** Explicit `applyOverrides()` function with documented rules: arrays REPLACE entirely (scenario author provides the complete array they want), objects shallow-merge one level, primitives replace. Rationale included (troubleshooting scenarios need specific history, not default + extra).

### 5. Replace `guidedOnly` with explicit `unguidedNextStep` (was: ambiguous skip)

**Before:** Plan used `guidedOnly: true` on wrong-path correction steps. "Skip in unguided mode" was ambiguous — skip the step entirely? Skip but still follow its nextStep chain? Different interpretations produce different behavior.

**After:** Replaced with `unguidedNextStep` field on individual choices. Each wrong-path fork has two explicit destinations: `nextStep` (guided → show correction) and `unguidedNextStep` (unguided → skip correction, proceed to next real step). Engine logic is a single ternary. Dev-mode validator checks both references.

### 6. No double-touch: `correct` flags written during scenario rewrites (was: separate scoring phase)

**Before:** Plan had Phase 2 (rewrite scenarios) and Phase 4 (add `correct` flags to all choices) as separate passes. This meant touching every scenario twice and risking inconsistency between passes.

**After:** "Score on Write" rule — `correct: true/false` is added to every scored choice at the time a scenario is rewritten in Phase 2. The engine support for `choices[].correct` scoring is built in Phase 1. No separate scoring phase exists. Former "Phase 4: Score Everything" was eliminated entirely.

### 7. Rollback and done criteria per phase (was: not specified)

**Before:** No way to know when a phase was "done" or how to back out if something went wrong.

**After:** Every phase has a **Done Criteria** checklist (specific, verifiable checkboxes), a **Rollback** section (what to revert and what's irreversible), and a **Phase Gate** (lint/test/e2e/build). Cross-cutting Rollback Strategy section explains the general principles (content-only = git revert; STATE_VERSION bump = one-way gate).

### Phase count change

Consolidated from 8 phases to 6. "Score Everything" eliminated (merged into Phases 1+2). Phase numbering follows dependency order: Data Variants (Phase 5) before Troubleshooting (Phase 6).

---

## Remaining Risks

Known risks and open questions that are NOT addressed in this plan.

### High Risk

**R1: CoachMark DOM targeting may break during InvestigationView migration.**
The CoachMark component finds hint targets via `getElementById` → `data-instruction-target` → `data-nav-id`. When InvestigationView replaces ConversationView in the right panel, the DOM layout changes. CoachMark uses `getBoundingClientRect()` for positioning — if the scrollable container changes, spotlights could render in the wrong position or fail to find elements. **Mitigation:** Manual QA of every hint target after Phase 1. Automated test not practical (layout-dependent).

**R2: 11 scenario rewrites are a large content surface area with no automated quality gate.**
Phase 2 rewrites all 11 scenarios. The dev-mode `validateScenarios()` catches broken step references but NOT content quality (e.g., whether questions require judgment, whether task density is ≥40%, whether `correct` flags are present on all scored choices). A bad rewrite could ship with no automated warning. **Mitigation:** Add a CI-time scenario linter that checks: every `checkpoint`/`resolution` choice has a `correct` field, at least 40% of steps are type `task`, no step has `text` without `question` (flags incomplete migration).

**R3: E2e tests are brittle and coupled to specific button text.**
`helpdesk-flow.spec.js` matches `getByRole("button", { name: /Open/i })` and `getByRole("button", { name: /^💡 Guided/i })`. Any label change (which Phase 1 likely introduces) breaks e2e without a code bug. **Mitigation:** Use `data-testid` attributes instead of label matching for structural flow tests. Keep label-based selectors only for tests that specifically verify label copy.

### Medium Risk

**R4: `migrateState()` chain has no downgrade path.**
If STATE_VERSION is bumped to 2 in Phase 4, and you need to revert Phase 4, users with v2 state will have their progress dropped (v2 > v1, `loadState` returns null). This is acceptable for dev/testing but would be a problem if the app were in production use. **Mitigation:** Documented in Rollback section. For production, would need a downgrade migration or a "version ceiling" check.

**R5: `applyOverrides` shallow merge is only one level deep.**
If a page data default has nested objects (`defaults.idm.providerCard.settings.syncConfig`), the override will replace the entire `providerCard` key, not deep-merge into `syncConfig`. Scenario authors must provide complete replacement objects for any nested key they override. **Mitigation:** Document this clearly in the scenario authoring guide. Consider adding a `deepMerge` utility later if scenarios need fine-grained overrides.

**R6: Module prerequisites are enforced but module completion check may be wrong.**
`curriculum.js` uses `scenarioIds` arrays per module to determine completion. If Phase 6 adds Module 7 but the completion check doesn't account for new scenarios (e.g., hardcoded count somewhere), modules may incorrectly show as complete. **Mitigation:** Verify that completion is calculated as `completedScenarios ⊇ module.scenarioIds`, not as a count.

### Low Risk

**R7: CSS Modules class name collisions between InvestigationView and ConversationView.**
Both components coexist in the codebase during migration. CSS Modules scoping should prevent collisions, but shared parent styles in `RightPanel.module.css` could affect layout of the new component. **Mitigation:** Use distinct container class names. Test both views render correctly side-by-side (different scenarios).

**R8: `DataVariantProvider` re-renders all page children on scenario change.**
`useMemo` in the provider depends on `overrides`, which changes when `activeScenario` changes. This could cause unnecessary re-renders of all dashboard pages. **Mitigation:** Unlikely to be perceptible with 25 lightweight pages. If perf becomes an issue, add `React.memo` to page components or split context by page key.

**R9: No accessibility audit of the new InvestigationView.**
The plan defines layout and interaction but doesn't specify ARIA roles, keyboard navigation, or screen reader support for the investigation checklist. **Mitigation:** Add `role="list"` / `role="listitem"` to checklist, `aria-current="step"` to active step, and keyboard focus management. Should be addressed during Phase 1 implementation.

**R10: Security files exclusion zone is stated but not enforced.**
The plan says "do not modify `src/lib/auth.js`, `src/lib/security/*`, or `next.config.mjs`" but there's no guardrail preventing accidental edits. **Mitigation:** Rely on code review. Optionally add a git pre-commit hook that warns on changes to those paths.
