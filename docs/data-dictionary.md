# Clever Sync Data Dictionary (Working Draft)

Source baseline: **Clever SFTP Instructions v2.1.1 (Oct 3, 2025)**

## Canonical sync files
Required core files (uploaded together):
- `schools.csv`
- `students.csv`
- `teachers.csv`
- `sections.csv`
- `enrollments.csv`

Optional/commonly used supplemental files:
- `staff.csv`

Deprecated:
- `admins.csv` (**deprecated**)

## Naming conventions
- Prefer exact Clever file names above.
- Use snake_case headers for internal examples/mocks unless product docs require otherwise.
- Keep IDs stable and string-typed in fixtures (do not coerce numeric IDs).

## Entity relationships (for simulator realism)
- School is the parent entity for most records.
- Students and teachers are linked to schools.
- Sections link to schools and classes.
- Enrollments join students to sections.
- Staff is separate from teachers in many district workflows.

## UI mapping suggestions
Use this dictionary to keep IDM/DataBrowser labels realistic:
- Data Browser tabs should map to file domains: Schools, Students, Teachers, Sections, Enrollments, Staff
- Validation messages should mention actual filenames and IDs
- Sync troubleshooting should reference missing/invalid file-level dependencies

## Known ops details from source
- SFTP endpoint: `sftp://sftp.clever.com` (port 22)
- Upload cadence: as frequently as needed, not more than hourly
- Processing starts ~5 minutes after last activity
- Files are overwritten in place (not moved/deleted)

## TODO (fill from full PDF sections)
Add exact required/optional columns for each file from sections:
- 3.1 schools.csv
- 3.2 students.csv
- 3.3 teachers.csv
- 3.4 sections.csv
- 3.5 enrollments.csv
- 3.6 staff.csv
- 3.7 admins.csv (deprecated notes only)
