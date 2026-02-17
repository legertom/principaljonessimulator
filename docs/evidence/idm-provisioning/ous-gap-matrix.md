# OUs Step Gap Matrix

> Generated 2026-02-16 via live Clever re-discovery
> Updated 2026-02-16 — added Section 3 (sub-OU format builder) findings from full clickthrough
> Updated 2026-02-17 — marked Section 3 + Format Editor as implemented

## Summary

| Category | Total Controls | Implemented | Missing | Severity |
|----------|---------------|-------------|---------|----------|
| Student OUs Edit | 8 | 7 | 1 | P2 |
| Teacher OUs Edit | 7 | 6 | 1 | P2 |
| Staff OUs Edit | 8 | 7 | 1 | P2 |
| Archive OU Edit | 4 | 4 | 0 | — |
| Ignored OUs Edit | 4 | 4 | 0 | — |
| OUs Overview | 6 | 6 | 0 | — |
| Sub-OU Format Editor (modal) | 8 | 7 | 1 | P2 |

---

## OUs Overview (Step 5 main view)

| Interaction | Live Behavior | Simulator Behavior | Gap | Severity |
|-------------|--------------|-------------------|-----|----------|
| Card grid layout | 2-column grid with 5 cards | 2-column grid with 5 cards | None | — |
| Progress bar | Shows "5 of 5 steps" with green fill | Shows "5 of 5 steps" with green fill | None | — |
| Completed badges | Green "✓ Completed" pill on each card | Green "✓ Completed" pill on each card | None | — |
| Edit buttons | Navigate to sub-route (e.g., `/ous/students-ous`) | Shows toast only ("Editing X OU configuration...") | **Blocker** | P1 |
| Card labels | "OUS CREATED" / "ARCHIVE OU" / "IGNORED OUS" | Matches live | None | — |
| Card values | Template paths (e.g., `/Students/{{school_name}}/{{student.grade}}`) | Matches live | None | — |

---

## Student OUs Edit (`/ous/students-ous`)

| Interaction | Live Behavior | Simulator Behavior | Gap | Severity |
|-------------|--------------|-------------------|-----|----------|
| Edit view navigation | Replaces step content with Student OUs edit UI; breadcrumb: `← Back | Organize OUs | Student OUs` | Not implemented — toast only | **Blocker** | P1 |
| Section 1: Preview user | Dropdown to select student; shows Clever Data card (School, Grade, Graduation Year) | Not implemented | **High** | P1 |
| Section 2: Parent OU tree | Radio buttons with Google Org Unit hierarchy (expandable tree); "Students" selected; Refresh button | Not implemented | **Blocker** | P1 |
| Preview panel (right sidebar) | Tree visualization: Fort Virgilfield > Students > Treutelside Middle School > 7 > Rogelio Waelchi | Not implemented | **High** | P1 |
| Clever Tip panel (right sidebar) | "Don't see a parent OU? Create one in Google Admin Console" | Not implemented | **Medium** | P2 |
| Next step button | Reveals Section 3 in-place (does NOT navigate away) | Not implemented | **Blocker** | P1 |
| Section 3: Sub-OU template | "Which sub-OUs do you want to create inside of /Students OU? (Optional)" with template `/ {{school_name}} / {{student.grade}}` | Not implemented | **Blocker** | P1 |
| Edit your format link | Opens "Build a format for student sub-OUs" modal (see Format Editor section) | Not implemented | **High** | P1 |
| OU placement preview | Shows "Rogelio Waelchi's OU placement — Example OU /Students/Treutelside Middle School/7" | Not implemented | **High** | P1 |
| Clever Tip (section 3) | "Clever will dynamically create sub-OUs based on student profile data or match existing sub-OUs (case insensitive) within **Student Users**." | Not implemented | **Medium** | P2 |
| Save button | Saves config and returns to OUs overview hub | Not implemented | **Blocker** | P1 |

---

## Teacher OUs Edit (`/ous/teachers-ous`)

| Interaction | Live Behavior | Simulator Behavior | Gap | Severity |
|-------------|--------------|-------------------|-----|----------|
| Edit view navigation | Same pattern as Student OUs; breadcrumb: `← Back | Organize OUs | Teacher OUs` | Not implemented | **Blocker** | P1 |
| Section 1: Preview user | Dropdown for teacher; Clever Data: School, Title | Not implemented | **High** | P1 |
| Section 2: Parent OU tree | Same radio tree; path shows `/Users/Staff/Teachers` | Not implemented | **Blocker** | P1 |
| Preview panel | Tree: Fort Virgilfield > Users > Staff > Teachers > Betty Bauch | Not implemented | **High** | P1 |
| Clever Tip panel | Same as Student variant but "teachers" | Not implemented | **Medium** | P2 |
| Next step button | Reveals Section 3 in-place (does NOT navigate away) | Not implemented | **Blocker** | P1 |
| Section 3: Sub-OU template | "Which sub-OUs do you want to create inside of /Users/Staff/Teachers OU? (Optional)" — NO pre-built template, shows "Build your format" blue button instead | Not implemented | **Blocker** | P1 |
| Build your format button | Opens same format editor modal as Student/Staff but starts empty | Not implemented | **High** | P1 |
| OU placement preview | Shows "Betty Bauch's OU placement — Example OU /Users/Staff/Teachers" (no sub-OU since no format) | Not implemented | **High** | P1 |
| Clever Tip (section 3) | "Clever will dynamically create sub-OUs... within **Teacher Users**." | Not implemented | **Medium** | P2 |
| Save button | Saves config and returns to OUs overview hub | Not implemented | **Blocker** | P1 |

---

## Staff OUs Edit (`/ous/staff-ous`)

| Interaction | Live Behavior | Simulator Behavior | Gap | Severity |
|-------------|--------------|-------------------|-----|----------|
| Edit view navigation | Same pattern as Student/Teacher; breadcrumb: `← Back | Organize OUs | Staff OUs` | Not implemented | **Blocker** | P1 |
| Section 1: Preview user | Dropdown for staff; Clever Data: Title only | Not implemented | **High** | P1 |
| Section 2: Parent OU tree | Same radio tree; path: `/Users/Staff/{{staff.department}}` | Not implemented | **Blocker** | P1 |
| Preview panel | Tree: Fort Virgilfield > Users > Staff > Operations > Oswaldo Pouros | Not implemented | **High** | P1 |
| Clever Tip panel | Same as Student variant but "staff" | Not implemented | **Medium** | P2 |
| Next step button | Reveals Section 3 in-place (does NOT navigate away) | Not implemented | **Blocker** | P1 |
| Section 3: Sub-OU template | "Which sub-OUs do you want to create inside of /Users/Staff OU? (Optional)" with pre-built template `/ {{staff.department}}` | Not implemented | **Blocker** | P1 |
| Edit your format link | Opens "Build a format for staff sub-OUs" modal (see Format Editor section) | Not implemented | **High** | P1 |
| OU placement preview | Shows "Oswaldo Pouros's OU placement — Example OU /Users/Staff/Operations" | Not implemented | **High** | P1 |
| Clever Tip (section 3) | "Want to use another staff attribute for organizing OUs? Learn more about the extension fields..." | Not implemented | **Medium** | P2 |
| Save button | Saves config and returns to OUs overview hub | Not implemented | **Blocker** | P1 |

---

## Archive OU Edit (`/ous/archive-ou`)

| Interaction | Live Behavior | Simulator Behavior | Gap | Severity |
|-------------|--------------|-------------------|-----|----------|
| Edit view navigation | Different layout from user-type OUs; no user preview section; breadcrumb: `← Back | Organize OUs | Archive OU` | Not implemented | **Blocker** | P1 |
| Section 1: Parent OU tree | Radio tree; currently "Fort Virgilfield Elementary School" selected; sub-text: "Users will be placed in sub-OU for their type: /Students, /Teachers, /Staff" | Not implemented | **Blocker** | P1 |
| Archive OU Preview | Shows `//Students`, `//Teachers`, `//Staff` paths under selected OU | Not implemented | **High** | P1 |
| Section 2: Archive action | 3 radio options: (a) Move + suspend + archive, (b) Move + suspend [selected], (c) Move only | Not implemented | **Blocker** | P1 |
| Clever Tip panel | "Clever uses SIS ID to reactivate user accounts if they return to the district in less than a year." | Not implemented | **Medium** | P2 |
| Save button | Saves and returns to OUs overview | Not implemented | **Blocker** | P1 |

---

## Ignored OUs Edit (`/ous/ignored-ous`)

| Interaction | Live Behavior | Simulator Behavior | Gap | Severity |
|-------------|--------------|-------------------|-----|----------|
| Edit view navigation | Different layout; breadcrumb: `← Back | Organize OUs | Ignored OU` | Not implemented | **Blocker** | P1 |
| Section 1: OU checkboxes | **Checkboxes** (multi-select, not radio); explanatory text about what "ignored" means | Not implemented | **Blocker** | P1 |
| Ignored OU Preview | Shows `/` for currently ignored paths | Not implemented | **High** | P1 |
| Clever Tip panel | "OUs you selected in previous steps to place Clever users cannot be ignored." | Not implemented | **Medium** | P2 |
| Skip button | Skips without saving; returns to OUs overview | Not implemented | **High** | P1 |
| Next step button | Saves and advances to next step | Not implemented | **Blocker** | P1 |

---

## Sub-OU Format Editor (Modal — shared by Student/Teacher/Staff)

| Interaction | Live Behavior | Simulator Behavior | Gap | Severity |
|-------------|--------------|-------------------|-----|----------|
| Modal title | "Build a format for [user-type] sub-OUs" | Not implemented | **Blocker** | P1 |
| Format rows (draggable) | Rows with up/down arrows, type label (Text/Variable), value, and X remove button | Not implemented | **Blocker** | P1 |
| Text row | Editable text input (e.g., `/`) | Not implemented | **High** | P1 |
| Variable row | Dropdown selector (e.g., `Department`) with warning for optional variables | Not implemented | **High** | P1 |
| Add buttons | 4 buttons: `+ Add "/"`, `+ Add an SIS Variable`, `+ Add Custom Text`, `+ Add a Function ▼` | Not implemented | **Blocker** | P1 |
| Functions dropdown | 15 functions: Concatenate, Contains, Conditional, First, Ignore If Null, Initials, Length, Substring, Text After, Text After Last, Text Before, To Lowercase, To Uppercase, Trim Left, Capitalize after Delimiter | Not implemented | **High** | P1 |
| Right panel: Current OUs | Collapsible "Current OUs >" section | Not implemented | **Medium** | P2 |
| Right panel: Preview | User dropdown + live preview of format result (e.g., "Department = Operations, This staff's sub-OU will be /Operations") | Not implemented | **High** | P1 |
| Links | "Learn more about formats" / "Start over" / "use the advanced format editor" | Not implemented | **Medium** | P2 |
| Save format / Cancel buttons | "Save format" (blue) and "Cancel" (outlined) at bottom-left | Not implemented | **Blocker** | P1 |

---

## Evidence References

| Screenshot ID | Description |
|--------------|-------------|
| ss_1037ud37y | Live OUs overview (step 5 main view) |
| ss_58103jxsl | Live Student OUs edit view |
| ss_6923qe412 | Live Teacher OUs edit view |
| ss_6200f5i3c | Live Staff OUs edit view |
| ss_57722v4nb | Live Archive OU edit view |
| ss_7806ou2z5 | Live Ignored OUs edit view |
| ss_7939gqn1j | Staff OUs — initial view (full clickthrough session) |
| ss_08557txpg | Staff OUs — Students tree expanded |
| ss_4286imf30 | Staff OUs — Section 3 revealed after Next step |
| ss_6397njzbs | Staff OUs — Format editor modal open |
| ss_0363a1jl7 | Staff OUs — Format editor functions dropdown (first half) |
| ss_7972hcu62 | Staff OUs — Format editor functions dropdown (second half) |
| ss_2957tbtb8 | OUs hub/overview page (all 5 cards) |
| ss_4206fus80 | Student OUs — initial view |
| ss_8037g3k7a | Student OUs — Section 3 revealed with {{school_name}}/{{student.grade}} |
| ss_2974h6ksl | Teacher OUs — initial view |
| ss_5864u4s31 | Archive OU — full page with archive action radios |
| ss_5963zpu80 | Ignored OUs — full page with checkboxes |

---

## Implementation Notes

### Shared components needed:
1. **GoogleOrgUnitTree** — Reusable tree with radio (single-select) or checkbox (multi-select) mode
2. **OUPreviewPanel** — Right sidebar showing OU path preview hierarchy
3. **CleverTipPanel** — Right sidebar tip box
4. **SubOUFormatEditor** — Modal for building sub-OU format templates (Text/Variable/Function rows with drag-and-drop)
5. **SubOUFormatPreview** — Inline preview showing template tags and user OU placement

### Data model additions needed:
- `ouMappings` keyed by user type with `selectedOU`, `archiveAction`, `ignoredOUs[]`
- `subOUFormats` keyed by user type with format template (array of Text/Variable/Function segments)
- Google Org Unit tree structure (deterministic mock data)
- Sample user data per type for preview section

### View types:
- **UserTypeOUEdit** (shared by students/teachers/staff) — sections 1+2+3, preview + tip sidebars, "Next step" → "Save"
- **ArchiveOUEdit** — OU tree + archive preview + archive action radios, "Save"
- **IgnoredOUsEdit** — checkbox tree + ignored preview, "Skip" + "Next step"
- **SubOUFormatEditorModal** — shared modal with format builder rows, function dropdown, and live preview

### Key behaviors discovered in clickthrough:
1. **"Next step" expands in-place** — clicking it on Student/Teacher/Staff OUs does NOT navigate away; it reveals Section 3 (sub-OU format builder) below Section 2
2. **Button text changes** — "Next step" becomes "Save" after Section 3 appears
3. **"Save" navigates to hub** — clicking Save returns to the OUs overview page (not the next sub-flow)
4. **Teacher OUs has no pre-built format** — shows "Build your format" button instead of template tags
5. **Student OUs uses two variables** — `{{school_name}}/{{student.grade}}` (multi-level)
6. **Staff OUs uses one variable** — `{{staff.department}}` (single-level)
7. **Archive OU has no Section 3** — directly shows archive action radios
8. **Ignored OUs uses checkboxes** — multi-select (not radios); has "Skip" button alongside "Next step"
9. **Format editor has 15 functions** — from Concatenate to Capitalize after Delimiter
10. **Format editor has 4 add-types** — "/", SIS Variable, Custom Text, Function
