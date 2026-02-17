# OUs Route Trace

> Full clickthrough 2026-02-16

## Starting point
- URL: `https://schools.clever.com/identity-management/setup/ous/staff-ous?configID=54646ef9-1528-4737-9888-428e8dbbf3d0`

## Route transitions

### Staff OUs → Section 3 (in-place expansion)
- before: `/identity-management/setup/ous/staff-ous?configID=...`
- action: Clicked "Next step" (ref_21)
- after: URL unchanged — Section 3 appeared below Section 2
- button changed: "Next step" → "Save"

### Staff OUs → OUs Hub
- before: `/identity-management/setup/ous/staff-ous?configID=...`
- action: Clicked "Save" (ref_21)
- after: `/identity-management/setup/ous?configID=...`

### OUs Hub → Student OUs
- before: `/identity-management/setup/ous?configID=...`
- action: Clicked "Edit" on Student OUs card (ref_315)
- after: `/identity-management/setup/ous/students-ous?configID=...`

### Student OUs → Section 3 (in-place expansion)
- before: `/identity-management/setup/ous/students-ous?configID=...`
- action: Clicked "Next step" (ref_399)
- after: URL unchanged — Section 3 appeared with `{{school_name}}/{{student.grade}}` template

### Student OUs → OUs Hub (via breadcrumb)
- before: `/identity-management/setup/ous/students-ous?configID=...`
- action: Clicked "Organize OUs" breadcrumb (ref_339)
- after: `/identity-management/setup/ous?configID=...`

### OUs Hub → Teacher OUs
- before: `/identity-management/setup/ous?configID=...`
- action: Clicked "Edit" on Teacher OUs card (ref_443)
- after: `/identity-management/setup/ous/teachers-ous?configID=...`

### Teacher OUs → Section 3 (in-place expansion)
- before: `/identity-management/setup/ous/teachers-ous?configID=...`
- action: Clicked "Next step" (ref_521)
- after: URL unchanged — Section 3 appeared with "Build your format" button (no pre-built template)

### Teacher OUs → OUs Hub (via breadcrumb)
- before: `/identity-management/setup/ous/teachers-ous?configID=...`
- action: Clicked "Organize OUs" breadcrumb (ref_462)
- after: `/identity-management/setup/ous?configID=...`

### OUs Hub → Archive OU
- before: `/identity-management/setup/ous?configID=...`
- action: Clicked "Edit" on Archive OU card (ref_574)
- after: `/identity-management/setup/ous/archive-ou?configID=...`

### Archive OU → OUs Hub (via breadcrumb)
- before: `/identity-management/setup/ous/archive-ou?configID=...`
- action: Clicked "Organize OUs" breadcrumb (ref_583)
- after: `/identity-management/setup/ous?configID=...`

### OUs Hub → Ignored OUs
- before: `/identity-management/setup/ous?configID=...`
- action: Clicked "Edit" on Ignored OUs card (ref_654)
- after: `/identity-management/setup/ous/ignored-ous?configID=...`

### Ignored OUs → OUs Hub (via breadcrumb)
- before: `/identity-management/setup/ous/ignored-ous?configID=...`
- action: Clicked "Organize OUs" breadcrumb (ref_659)
- after: `/identity-management/setup/ous?configID=...`

## Sub-flows completed
- [x] Student OUs (`students-ous`)
- [x] Teacher OUs (`teachers-ous`)
- [x] Staff OUs (`staff-ous`)
- [x] Archive OU (`archive-ou`)
- [x] Ignored OUs (`ignored-ous`)

## Blocked points
- None — all sub-flows traversed successfully

## Key discovery
- "Next step" on Student/Teacher/Staff OUs does NOT navigate to the next sub-flow
- Instead it reveals Section 3 (sub-OU format builder) in-place
- "Save" button then returns to the OUs hub overview
- The hub is the central routing point — Edit buttons navigate to sub-flows, Save/breadcrumb returns to hub
