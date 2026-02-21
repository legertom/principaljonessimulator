# Build Instructions: Portal Lobby Simulation

You are implementing a **Portal Lobby experience** in the `principaljonessimulator` Next.js app.

## Objective

Recreate the real Clever District Admin **Portal/Lobby** experience (what customers see right after login) and make it the simulator’s entry point.

- The **Portal/Lobby** should be the default post-login view.
- The **chat panel must NOT appear** on the portal.
- The **chat panel appears only when a user enters the Dashboard simulation**.
- Portal apps act as launchers into different simulator skill modules.

## Critical context

- This simulator currently focuses on dashboard training with a right-side chat panel.
- We now need a realistic **front door** based on a live Clever district portal.
- The live reference is accessible via browser relay; use page-by-page inspection to replicate layout and UX patterns.
- Do not hardcode brittle values from one session; create reusable data-driven structures.

## Implementation requirements

### 1) Architecture split: Portal vs Dashboard mode

Refactor app layout/state so there are two high-level modes:

1. `portal` mode (lobby)
   - Full-width app content
   - No chat panel
2. `dashboard` mode (training workspace)
   - Existing dashboard layout
   - Chat panel visible on the right

Implement this with clean top-level state + conditional layout rendering.  
Avoid duplicating large layout code.

### 2) New Portal page/components

Create a dedicated portal module:

- `src/components/portal/PortalLobby.jsx`
- `src/components/portal/PortalAppGrid.jsx`
- `src/components/portal/PortalAppCard.jsx`
- `src/components/portal/portal.module.css` (or split module CSS files)

Include:
- District header / context area
- App grid/cards that resemble real Clever portal patterns
- Search/filter affordances if applicable
- App icons, titles, short descriptions
- Optional sections like “Resources” if present in reference

### 3) Data-driven portal config

Create structured seed data:

- `src/data/defaults/portalLobby.js`

It should include:
- district metadata (name/logo placeholder)
- list of apps
  - id
  - label
  - icon key/path
  - category
  - launch target (which simulator module/mode opens)
  - enabled/disabled/coming-soon flags

No inline giant arrays in component files.

### 4) App-launch behavior

Define launch mapping so clicking portal apps does one of:

- enter dashboard mode + open a specific nav target (where chat appears), or
- open other future simulator modules (placeholder page allowed for now)

Examples:
- “Dashboard” app → dashboard mode + main dashboard page
- “SIS Sync Trainer” app → dashboard mode + `sis-sync`
- “Admin Team Trainer” app → dashboard mode + `admin-team`
- unsupported apps → clean “Coming soon” placeholder in portal mode

### 5) Keep auth flow intact

- Existing NextAuth login should remain functional.
- After login, route lands in portal lobby.
- Keep middleware/auth protection behavior unchanged unless necessary.

### 6) UX parity goals (from live district reference)

Using browser relay snapshots/page inspection, replicate:
- spacing rhythm
- card proportions
- typography hierarchy
- top-level navigation feel
- hover/focus states
- empty/loading states

Don’t clone proprietary branding exactly; emulate structure and interaction patterns.

### 7) Accessibility + quality

- semantic headings/landmarks
- keyboard focus visibility
- aria labels for interactive elements
- responsive behavior for desktop/laptop widths
- no regressions in existing dashboard/chat experience

## Browser-driven reverse-engineering workflow (required)

Use browser access to inspect the live district portal **page-by-page** and document findings before final UI pass.

Create:
- `docs/portal-reference-audit.md`

For each inspected page/section include:
- URL/title
- structural breakdown (header, nav, cards, sections)
- interaction notes (hover/click/menus)
- what to replicate now vs later
- screenshots references (if captured)

Then apply those findings to implementation.

## Threading + handoff protocol (required)

Use **separate focused threads** and do not continue blindly. At the end of each thread, stop and output a handoff message that tells the user exactly what to do next.

### Thread order

1. **Thread A — Architecture/Layout**
   - Implement portal vs dashboard top-level mode
   - Enforce chat visibility rules (chat only in dashboard mode)
   - Wire basic navigation between modes

2. **Thread B — Portal UI/Styling**
   - Build portal components and realistic layout polish
   - Improve spacing, hierarchy, and interaction states

3. **Thread C — Data + Launch Mapping**
   - Add `portalLobby` seed data model
   - Connect app cards to launch targets/modes
   - Add clean placeholders for not-yet-supported apps

4. **Thread D — Live Browser Audit**
   - Inspect real district portal page-by-page via browser access
   - Write `docs/portal-reference-audit.md`
   - List what was replicated now vs deferred

5. **Thread E — Integration + Validation**
   - Run lint/build
   - Fix regressions
   - Summarize final changed files and any known debt

### Mandatory end-of-thread output format

At the end of each thread, output exactly:

- `THREAD COMPLETE: <A|B|C|D|E>`
- `WHAT CHANGED:` (bulleted files + concise summary)
- `VALIDATION:` (what was tested in this thread)
- `NEXT THREAD:` (the exact next thread to start)
- `COPY/PASTE NEXT PROMPT:` (a short prompt the user can paste into a new thread)

### Guardrails

- Keep each thread scoped; do not start the next thread’s work early.
- If blocked, output `BLOCKED:` with exact unblock steps.
- Preserve existing behavior unless required for the objective.
- Call out pre-existing lint issues separately from newly introduced issues.

## Deliverables

1. Working portal lobby as simulator entry point
2. Clean mode switch between portal and dashboard
3. Data model for portal apps
4. Browser audit doc
5. Summary of changed files + rationale

## Acceptance criteria

- Login succeeds → lands on Portal Lobby
- Portal shows app cards and district context
- Clicking supported app enters dashboard mode with chat panel visible
- Returning to portal hides chat panel again
- Existing dashboard flows still work
- Lint/build pass (or list any pre-existing lint debt separately)
