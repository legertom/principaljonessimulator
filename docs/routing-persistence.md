# Routing Persistence

## Route map

- `/` -> Portal Lobby
- `/dashboard` -> Redirects to `/dashboard/dashboard`
- `/dashboard/[page]` -> Dashboard page for any valid nav key
- `/dashboard/idm/provisioning/[step]` -> IDM provisioning wizard step

## Supported dashboard page keys

- `dashboard`
- `my-applications`
- `add-applications`
- `lms-connect`
- `library-controls`
- `sis-sync`
- `custom-data`
- `data-browser`
- `idm`
- `license-manager`
- `admin-team`
- `access-logs`
- `sso-settings`
- `badges`
- `classroom-mfa`
- `portal-settings`
- `organize-district-portal`
- `communication`
- `troubleshoot-login`
- `troubleshoot-sharing`
- `data-quality`
- `portal-analytics`
- `edtech-analytics`
- `reports`
- `profile`

## Provisioning step format

`[step]` accepts either:

- canonical slug (`connect`, `management-level`, `users`, `credentials`, `ous`, `groups`, `summary`, `preview`)
- numeric step index (`1`-`8`)

All numeric steps are normalized to canonical slug routes.
Example: `/dashboard/idm/provisioning/4` normalizes to `/dashboard/idm/provisioning/credentials`.

## URL/state behavior

- URL is the source of truth for portal/dashboard/page/provisioning-step location.
- Sidebar and top-nav actions use `router.push` for user navigation.
- Invalid page or step params are normalized with `router.replace` to safe defaults:
  - invalid page -> `dashboard`
  - invalid provisioning step -> `connect`
- Browser back/forward works naturally between portal, dashboard pages, and provisioning steps.

## Migration notes

- The old in-memory `appMode`/`activeNav` shell in `src/app/page.js` was replaced by App Router segments.
- Dashboard page component mapping now lives in `src/lib/dashboard-pages.js`.
- Route parsing/building/validation is centralized in `src/lib/routing.js`.

## Known limitations

- Wizard form values still persist in localStorage (`idm-provisioning-state`) for convenience; only step/location state is URL-based.
