# Sonnet Task Queue — District Simulator

Use one task at a time. Do not combine tasks.

Global constraints for every task:
- JavaScript only
- CSS Modules only
- No new dependencies unless task says so
- No visual changes unless task says so
- No opportunistic refactors
- Run `npm run build` at end
- Visual safety check: review touched page CSS module(s) and remove/flag orphaned class refs before finishing
- Output: changed files, summary, build result, risks

---

## TASK 01 — Baseline safety checkpoint
**Objective:** Capture safe starting state.

**Allowed files:** none (read-only)

**Do:**
1. Confirm branch + git status
2. Run `npm run build`
3. Report baseline

---

## TASK 02 — Add `PageHeader`
**Allowed files:**
- `src/components/ui/PageHeader.jsx`
- `src/components/ui/PageHeader.module.css`
- `src/components/ui/index.js`

---

## TASK 03 — Add `Modal`
**Allowed files:**
- `src/components/ui/Modal.jsx`
- `src/components/ui/Modal.module.css`
- `src/components/ui/index.js`

---

## TASK 04 — Add `Pagination`
**Allowed files:**
- `src/components/ui/Pagination.jsx`
- `src/components/ui/Pagination.module.css`
- `src/components/ui/index.js`

---

## TASK 05 — Add `FilterBar`
**Allowed files:**
- `src/components/ui/FilterBar.jsx`
- `src/components/ui/FilterBar.module.css`
- `src/components/ui/index.js`

---

## TASK 06 — Refactor `MyApplications.jsx`
**Allowed files:**
- `src/components/pages/MyApplications.jsx`
- optional matching CSS module

**Requirements:** use `PageHeader`, `InfoBanner`, `DataTable` with parity.

---

## TASK 07 — Refactor `AddApplications.jsx`
**Allowed files:**
- `src/components/pages/AddApplications.jsx`
- optional matching CSS module

**Requirements:** use `PageHeader`, `InfoBanner`, `FilterBar`, `DataTable`.

---

## TASK 08 — Refactor `Badges.jsx`
**Allowed files:**
- `src/components/pages/Badges.jsx`
- optional matching CSS module

**Requirements:** use `DataTable`, `Pagination`.

---

## TASK 09 — Refactor `AccessLogs.jsx`
**Allowed files:**
- `src/components/pages/AccessLogs.jsx`
- optional matching CSS module

**Requirements:** replace hand-built table with `DataTable`.

---

## TASK 10 — Refactor `PeoplePage.jsx`
**Allowed files:**
- `src/components/dashboard/pages/PeoplePage.jsx`
- optional matching CSS module

**Requirements:** use `PageHeader`, `DataTable`, `Pagination` and preserve search/filter behavior.

---

## TASK 11 — Refactor `Library.jsx`
**Allowed files:**
- `src/components/pages/Library.jsx`
- optional matching CSS module

**Requirements:** use shared `Tabs`, `DataTable`, `Pagination`.

---

## TASK 12 — Refactor `SSOSettings.jsx`
**Allowed files:**
- `src/components/pages/SSOSettings.jsx`
- optional matching CSS module

**Requirements:** replace local tab rendering with shared `Tabs`.

---

## TASK 13 — Refactor `PortalSettings.jsx`
**Allowed files:**
- `src/components/pages/PortalSettings.jsx`
- optional matching CSS module

**Requirements:** use shared `Tabs`, `InfoBanner`, shared icon source.

---

## TASK 14 — Refactor `Profile.jsx`
**Allowed files:**
- `src/components/pages/Profile.jsx`
- optional matching CSS module

**Requirements:** use shared `Tabs`, `Modal`; map repeated email preference blocks.

---

## TASK 15 — Icon consolidation for DRY parity
**Allowed files:**
- `src/components/ui/Icons.jsx`
- `src/components/pages/IDM.jsx`
- `src/components/pages/LicenseManager.jsx`
- `src/components/pages/PortalSettings.jsx`

**Requirements:** move/standardize local SVGs to shared icons where practical; remove duplicate local icon definitions.

---

## TASK 16A — Refactor `AdminTeam.jsx` (header/filter shell)
**Allowed files:**
- `src/components/pages/AdminTeam.jsx`
- optional matching CSS module

**Requirements:** apply `PageHeader`, `InfoBanner`, `Tabs`, `FilterBar` only.

## TASK 16B — Refactor `AdminTeam.jsx` (table/pagination)
**Allowed files:**
- `src/components/pages/AdminTeam.jsx`
- optional matching CSS module

**Requirements:** migrate table to `DataTable`, pagination to shared `Pagination`, keep row actions.

## TASK 16C — Refactor `AdminTeam.jsx` (modal)
**Allowed files:**
- `src/components/pages/AdminTeam.jsx`
- optional matching CSS module

**Requirements:** migrate add-member modal to shared `Modal`, preserve behavior.

---

## TASK 17 — Refactor `DataBrowser.jsx` pass 1
**Allowed files:**
- `src/components/pages/DataBrowser.jsx`
- optional matching CSS module

**Requirements:** convert only 1–2 render blocks to `DataTable`; keep others unchanged.

## TASK 18 — Refactor `DataBrowser.jsx` pass 2+
Repeat Task 17 until complete, one small pass at a time.

---

## TASK 19 — Add data defaults scaffold + ScenarioContext together
**Allowed files:**
- `src/data/defaults/index.js`
- `src/context/ScenarioContext.jsx`
- `src/app/page.js`
- optional: minimal default domain files needed for first wired pages

**Requirements:** create provider + wire app root + safe initial scenario shape.

---

## TASK 20 — Extract + wire domain batch A (leaf pages)
**Scope recommendation:** `team`, `applications`, `accessLogs`, `badges`, `people`

**Allowed files:**
- corresponding `src/data/defaults/*.js`
- only components consuming those domains

---

## TASK 21 — Extract + wire domain batch B
**Scope recommendation:** `dashboard`, `chat`, `profile`, `ssoSettings`, `portalSettings`

**Allowed files:**
- corresponding `src/data/defaults/*.js`
- only components consuming those domains

---

## TASK 22 — Extract + wire domain batch C (layout/complex)
**Scope recommendation:** `dataBrowser`, `sidebar`, `topNav`, `sisSync`

**Allowed files:**
- corresponding `src/data/defaults/*.js`
- only components consuming those domains

---

## TASK 23 — Install auth scaffold deps/config
**Allowed files:**
- `package.json` / lockfile
- `src/lib/auth.js`
- `src/app/api/auth/[...nextauth]/route.js`

**Requirements:** add `next-auth`, `bcryptjs`; base Google + credentials config.

---

## TASK 24 — Login page
**Allowed files:**
- `src/app/login/page.js`
- `src/app/login/page.module.css`

---

## TASK 25 — Session provider + TopNav wiring
**Allowed files:**
- `src/components/Providers.jsx`
- `src/app/layout.js`
- `src/components/layout/TopNav.jsx`

---

## TASK 26 — Route protection middleware
**Allowed files:**
- `src/middleware.js`

**Requirements:** Next.js middleware must be in `src/middleware.js` (not `src/app/*`).

---

## TASK 27 — Env docs + deploy readiness
**Allowed files:**
- `.env.example`
- `.gitignore` (if needed)
- `README.md` deploy/auth section

---

## Suggested per-task closing format
1. **Changed files**
2. **What changed**
3. **Build result**
4. **Open risks/questions**
5. **Suggested next task number**
