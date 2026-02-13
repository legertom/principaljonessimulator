# Clever Sync Validation Rules (Simulator-Oriented)

This file defines validation behaviors for IDM/DataBrowser training scenarios.
It is intentionally practical: these rules should drive error states, hints, and troubleshooting prompts.

## 1) File presence rules
Hard fail if any required file is missing in a sync batch:
- `schools.csv`
- `students.csv`
- `teachers.csv`
- `sections.csv`
- `enrollments.csv`

Warn (not hard fail) if supplemental files are missing:
- `staff.csv`

Warn if deprecated file appears:
- `admins.csv` (deprecated)

## 2) Filename integrity
- Filenames must match expected names exactly.
- Unknown filenames should be ignored with warning, not crash.

## 3) Header integrity
- Every CSV must include all required headers for that file type.
- Unknown extra columns are allowed unless explicitly blocked.
- Duplicate header names => fail file validation.

## 4) Primary key integrity
- IDs must be non-empty, trimmed strings.
- IDs must be unique within each file.
- Treat IDs as opaque strings (no numeric coercion).

## 5) Referential integrity
- `students.school_id` must reference an existing school.
- `teachers.school_id` must reference an existing school.
- `sections.school_id` must reference an existing school.
- `enrollments.student_id` must reference an existing student.
- `enrollments.section_id` must reference an existing section.

If references fail:
- Mark row invalid
- Surface clear error with row number + missing foreign key

## 6) Row quality checks
- Empty required fields => row error
- Duplicate rows by key => row error
- Invalid email formats (where present) => warning/error based on strictness level
- Invalid date formats (where present) => row error

## 7) Batch outcome policy
- If file-level validation fails: file status = Failed, sync status = Failed
- If only row-level errors: file status = Partial, sync status = Warning/Partial
- If no errors: file status = Success

## 8) UX copy patterns
Use realistic support phrasing:
- "`enrollments.csv` references unknown `section_id` values"
- "`students.csv` is missing required column `<column_name>`"
- "`admins.csv` is deprecated; move records to supported files"

## 9) Scenario seeds to include
- Missing `sections.csv`
- Orphan enrollments (student missing)
- Orphan enrollments (section missing)
- Duplicate student IDs
- Invalid date format in term/section fields
- Deprecated `admins.csv` present with no `staff.csv`

## 10) TODO (from full Clever spec)
Once full PDF is parsed, replace generic rules with exact per-file column requirements and strict type/enum constraints.
