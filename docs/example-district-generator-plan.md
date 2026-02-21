# Example District Generator — Embedded App Plan

## Objective
Add an **Example District Generator** as a first-class app tile in the portal so users can generate Clever-spec demo district datasets, download CSV bundles, and load data directly into simulator flows.

## Why this is a good idea
- Improves demos/training (no dependence on real district data)
- Enables repeatable scenario testing
- Supports multi-user environment (~50 concurrent users) with deterministic templates
- Keeps simulator data lifecycle inside one product experience

## Product Scope
### In scope (v1)
1. New portal app tile: `Example District Generator`
2. Dashboard page with template-driven district generation UI
3. CSV bundle download (Clever-style files)
4. "Load into simulator" action to activate generated dataset in current session
5. Basic validation and error injection toggles for testing scenarios

### Out of scope (v1)
- Production SIS ingestion pipeline replacement
- Large-scale async data processing workers
- Cross-org sharing/permissions model beyond basic account scoping

## UX Flow
1. User logs in and sees new **Example District Generator** app tile in portal
2. User opens generator page
3. User selects template and size knobs (schools/students/teachers/sections)
4. User optionally toggles error scenarios (duplicate IDs, missing refs, invalid emails)
5. User clicks **Generate**
6. User can:
   - **Download CSV ZIP**
   - **Load into simulator** (SIS Sync/Data Browser/IDM reflect generated data)

## Technical Architecture
### Frontend
- New page component: `src/components/pages/ExampleDistrictGenerator.jsx`
- New styles module for page UI
- Add to dashboard page map and portal app defaults

### Shared generation library
Port and adapt logic from local repo:
- `/Users/tomleger/repo/example-district-generator/src/dataGenerator.ts`
- `/Users/tomleger/repo/example-district-generator/src/csvExporter.ts`
- `/Users/tomleger/repo/example-district-generator/src/types.ts`

Target location in simulator app:
- `src/lib/districtGenerator/types.ts`
- `src/lib/districtGenerator/generate.ts`
- `src/lib/districtGenerator/exportCsv.ts`
- `src/lib/districtGenerator/templates.ts`

### Data model (v1)
Use app/session storage first, then optional persistence:
- `activeGeneratedDataset`
- `generatedAt`
- `templateId`
- `config` (counts + toggles)
- normalized entities (schools/students/teachers/sections/enrollments/staff)

### Backend (recommended path)
Keep Vercel for v1:
- Next.js route handlers for optional persistence/metadata
- Blob storage (Vercel Blob or S3) for zip payloads (if needed)
- Postgres for saved datasets/session pointers (optional phase 2)

No immediate Railway migration required.

## Integration Points
1. **Portal Lobby**
   - Add app tile metadata and launch target
2. **Dashboard routing**
   - Map route key to generator page
3. **SIS Sync Upload/Last Attempted Sync**
   - Allow “Load generated dataset” to populate tables
4. **Data Browser**
   - Read active dataset when present
5. **IDM/Provisioning previews**
   - Use generated records for sample users where applicable

## Validation Rules (v1)
- Required files represented in exported ZIP:
  - `schools.csv`
  - `students.csv`
  - `teachers.csv`
  - `sections.csv`
  - `enrollments.csv`
  - `staff.csv` (optional)
- Required headers by file template
- Referential integrity checks (e.g., enrollments reference existing students/sections)

## Implementation Plan (PR sequence)
### PR 1 — Scaffold app + portal wiring
- Add portal tile + route + placeholder generator page
- Add feature flag support (optional)
- Add smoke test for app visibility/navigation

### PR 2 — Port generation core
- Port generator/types/exporter into `src/lib/districtGenerator`
- Add unit tests for deterministic generation and CSV output
- Add template presets:
  - elementary-small
  - middle-standard
  - highschool-large
  - mixed-k12

### PR 3 — Build UI + local activation
- Build controls and generation preview counts
- Add Download ZIP action
- Add “Load into simulator” action
- Wire simulator pages to active generated dataset

### PR 4 — Scenario/error modes + QA
- Add controlled error injection toggles
- Add validation summary panel
- Add e2e coverage:
  - generate → download
  - generate → load into simulator
  - reload persistence for active dataset in session

### PR 5 (optional) — Persistence and sharing
- Add API + DB persistence for saved datasets
- Add saved dataset picker/history
- Add “duplicate dataset” and “reset demo district” actions

## Testing Strategy
### Unit tests
- Generator determinism from seed/template
- CSV row/header correctness
- Validation error classification

### Integration tests
- Route wiring and portal app launch
- Dataset activation into simulator state

### E2E tests
- Full user flow: generate → load → verify in SIS Sync/Data Browser
- Download ZIP integrity checks

## Operational Notes
- For ~50 concurrent users, this architecture is safe on Vercel for v1
- Add background worker only if generation/validation becomes long-running
- Keep generated data clearly labeled as **simulated/demo** to avoid confusion with production sync

## Deliverables Checklist
- [ ] Portal app tile appears for logged-in users
- [ ] Generator page available in dashboard
- [ ] Template-based data generation works
- [ ] CSV ZIP export works
- [ ] “Load into simulator” updates downstream pages
- [ ] Tests passing (lint/unit/e2e)
- [ ] Documentation updated
