# Principal Jones Simulator

Prototype/MVP training simulator for Clever Customer Support: a high‑fidelity “Clever Dashboard” UI shell paired with a scenario-driven chat experience (Principal Jones) and in-product guidance (coach marks + hints).

This repo is intentionally front-end only and uses mock data. It is designed for fast iteration on:
- Navigation muscle memory (where to find X in the Dashboard)
- Guided workflows (tasks + hints)
- Lightweight knowledge checks (simple input validation)

## Tech Stack
- Next.js (App Router)
- React
- CSS Modules

## Getting Started

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Open `http://localhost:3000`.

Other commands:
```bash
npm run lint
npm run build
npm start
```

Testing: there is currently no `test` script and no test framework configured.

## App Architecture (High Level)

The app has two parts that run side-by-side:
1) **Dashboard Simulator**: a fake Dashboard shell (sidebar/top nav) with page components that look/feel like the real UI.
2) **Instructional Engine**: a scenario/step system that drives the chat, hints, and task completion checks.

### Key Files & Folders

**App Router**
- `src/app/layout.js`: wraps the app in `InstructionalProvider` and renders the global `CoachMark` overlay.
- `src/app/page.js`: main shell; maintains `activeNav`, renders `Sidebar`, `TopNav`, the selected page, and the always-on `ChatPanel`.

**Instructional engine**
- `src/context/InstructionalContext.js`: React context that tracks active scenario, current step, chat history, hint visibility, and score.
- `src/data/scenarios.js`: scenario/step definitions (curriculum content as data).

**UI composition**
- `src/components/layout/`: layout primitives (Sidebar, TopNav).
- `src/components/pages/`: page components that simulate Dashboard sections (each with a colocated `*.module.css`).
- `src/components/chat/ChatPanel.jsx`: renders chat history + response UI (buttons and input).
- `src/components/guidance/GuidancePanel.jsx`: renders the “TRAINING GUIDE” panel for task/input steps.
- `src/components/guidance/CoachMark.jsx`: spotlight + tooltip overlay for the current hint target.
- `src/components/ui/`: reusable UI primitives (icons, tabs, info banners, tables, etc.).
- `src/components/dashboard/pages/PlaceholderPage.jsx`: fallback when a nav id doesn’t have a dedicated page yet.

## How Training Scenarios Work

Scenarios live in `src/data/scenarios.js`. Each scenario has an ordered list of `steps`.

Supported step patterns:
- `type: "message"`: shows a chat message (from the customer or system) and can present multiple choice `actions`.
- `type: "task"`: prompts the learner to do something in the UI (typically navigation). Completion is checked via `goalRoute`.
- `type: "input"`: prompts the learner for typed input and validates it against `correctAnswer`.

Hints / coach marks:
- Steps can include a `hint` object: `{ target: "some-id", message: "..." }`.
- `CoachMark` finds a DOM element via `id="some-id"` or `data-nav-id="some-id"` and highlights it.
- Sidebar buttons already include `data-nav-id` attributes, so navigation items can be targeted by their nav ids.

Navigation goals:
- `Sidebar` calls `checkNavigationGoal(navId)` when the learner clicks a nav item.
- The instructional context compares the `navId` to the current step’s `goalRoute` and advances the scenario when it matches.

## Adding / Updating Content

### Add a new page (Dashboard section)
1) Create a new component in `src/components/pages/` (and a `*.module.css` if needed).
2) Add the nav item in `src/components/layout/Sidebar.jsx` (or route from `TopNav` if it’s profile-like).
3) Add the component to the `pageComponents` map in `src/app/page.js` using the same nav id.

If you add a nav id but don’t create a page yet, the app will render `PlaceholderPage` automatically.

### Add a new training scenario
1) Add a new scenario object to `src/data/scenarios.js`.
2) Update `InstructionalContext` defaults (or later add a scenario selector UI) to start your new scenario.
3) Use `goalRoute` values that match existing nav ids (see `src/components/layout/Sidebar.jsx`).
4) If you need coach marks for non-nav UI, add stable targets (e.g. `id="..."` or `data-instruction-target="..."`) to the relevant elements.

## Notes / Limitations (Current MVP)
- Single default scenario is hardcoded for dev in `InstructionalContext`.
- Answer validation is exact-match for input steps.
- No persistence (no users, progress tracking, reporting, or analytics).
- Mock data only; nothing is wired to real Clever systems.
