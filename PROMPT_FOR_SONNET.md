# Implementation Prompt for District Simulator Refactor

You are refactoring an existing Next.js 16 (App Router) + React 19 application located at `/Users/tomleger/repo/principaljonessimulator`. This is a customer support training simulator for Clever Dashboard. It simulates the Clever admin dashboard on the left and a chat panel with "District Admin" on the right.

**Read every source file before modifying it. Do not guess at file contents.**

Execute the following 4 phases in order. After each phase, run `npm run build` to verify there are no errors. Fix any errors before moving to the next phase. The app must look and behave identically after each phase — these are refactors, not visual changes (except for the new login page in Phase 3).

---

## PHASE 1: DRY Cleanup — Create Missing Shared Components & Enforce Reuse

### Step 1.1: Create `<PageHeader>` component

Create `src/components/ui/PageHeader.jsx` with its own `PageHeader.module.css`.

Props:
- `title` (string, required) — the page title rendered as `<h1>`
- `subtitle` (string, optional) — rendered as `<p>` below title
- `actions` (ReactNode, optional) — rendered to the right of the title (for buttons, dropdowns, etc.)
- `className` (string, optional)

This replaces the repeated pattern found in nearly every page:
```jsx
<div className={styles.header}>
  <h1 className={styles.title}>Title</h1>
  ...buttons...
</div>
```

Style it to match the existing pattern: flex row, space-between, bottom margin, h1 is `font-size: 24px; font-weight: 600; color: var(--text-primary)`.

### Step 1.2: Create `<Modal>` component

Create `src/components/ui/Modal.jsx` with its own `Modal.module.css`.

Props:
- `isOpen` (bool) — controls visibility
- `onClose` (function) — called when overlay clicked or X clicked
- `title` (string) — modal header text
- `children` (ReactNode) — modal body content
- `className` (string, optional)

This replaces the hand-built modals in:
- `AdminTeam.jsx` (lines 203-267) — "Add team member" modal
- `Profile.jsx` (lines 184-269) — "Edit Profile" modal

The modal must:
- Render a dark overlay (`rgba(0,0,0,0.5)`) that closes on click
- Stop propagation on the content div
- Have an X close button in the header (use `<Icon name="xCircle" size={24} />`)
- Use `z-index: var(--z-modal)` from globals.css

### Step 1.3: Create `<Pagination>` component

Create `src/components/ui/Pagination.jsx` with its own `Pagination.module.css`.

Props:
- `currentPage` (number)
- `totalPages` (number)
- `onPageChange` (function)
- `className` (string, optional)

This replaces the repeated pagination pattern in:
- `AdminTeam.jsx` (lines 196-200)
- `Badges.jsx` (lines 80-84)
- `DataBrowser.jsx` (multiple render functions, e.g. lines 246-256, 290-296, 375-381, 450-456)
- `PeoplePage.jsx` (lines 106-117)
- `Library.jsx` (lines 135-150)

### Step 1.4: Create `<FilterBar>` component

Create `src/components/ui/FilterBar.jsx` with its own `FilterBar.module.css`.

Props:
- `filters` (array of `{ label, options }`) — renders select dropdowns
- `searchPlaceholder` (string, default "Search")
- `onSearchChange` (function)
- `className` (string, optional)

This replaces the repeated filter pattern in:
- `AdminTeam.jsx` (lines 113-136) — User Type + Role filters + search
- `AddApplications.jsx` (lines 75-91) — App Type + App Subject + search
- `AccessLogs.jsx` (lines 23-38) — date filters + reference search

### Step 1.5: Update barrel exports

Add the new components to `src/components/ui/index.js`:
```js
export { PageHeader } from "./PageHeader";
export { Modal } from "./Modal";
export { Pagination } from "./Pagination";
export { FilterBar } from "./FilterBar";
```

### Step 1.6: Refactor page components to use shared UI components

**CRITICAL: Read each file before editing. The app must look identical after this step.**

For each file below, replace the hand-built patterns with the shared components. Keep all data and behavior the same.

**`AdminTeam.jsx`:**
- Replace the hand-built header (lines 61-89) with `<PageHeader>` + `<DropdownMenu>` passed as `actions`
- Replace the hand-built info banner (lines 92-98) with `<InfoBanner variant="info">`
- Replace the hand-built tabs (lines 101-110) with `<Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />`  (add `useState` for `activeTab`)
- Replace the hand-built table (lines 139-193) with `<DataTable>` using column config with custom `render` functions for the name cell, MFA badge, and actions cell
- Replace the hand-built modal (lines 203-267) with `<Modal>`
- Replace the hand-built pagination (lines 196-200) with `<Pagination>`
- Replace the hand-built filters (lines 113-136) with `<FilterBar>`
- Import all from `@/components/ui`

**`MyApplications.jsx`:**
- Replace the hand-built header (lines 38-41) with `<PageHeader title="My applications" actions={<button>Add applications</button>} />`
- Replace the hand-built info banner (lines 44-51) with `<InfoBanner variant="info">`
- Replace the hand-built table (lines 54-107) with `<DataTable>` using column config with custom `render` functions

**`SSOSettings.jsx`:**
- Replace the hand-built tabs (lines 22-32) with `<Tabs>` from ui
- Replace the entire `SSOSettings.jsx` file's tab rendering with the shared `<Tabs>` component

**`AddApplications.jsx`:**
- Replace the hand-built header (lines 60-62) with `<PageHeader>`
- Replace the hand-built info banner (lines 65-72) with `<InfoBanner>`
- Replace the hand-built filters (lines 75-91) with `<FilterBar>`
- Replace the hand-built table (lines 94-123) with `<DataTable>`

**`Library.jsx`:**
- Replace the hand-built tabs (lines 194-204) with `<Tabs>`
- The `ApplicationsTab` sub-component's table (lines 103-133) should use `<DataTable>`
- The `ApplicationsTab` pagination (lines 135-150) should use `<Pagination>`

**`Badges.jsx`:**
- Already uses `<Tabs>` and `<InfoBanner>` — good!
- Replace the hand-built table (lines 49-78) with `<DataTable>`
- Replace the hand-built pagination (lines 80-84) with `<Pagination>`

**`DataBrowser.jsx`:**
- Replace the hand-built tabs (lines 506-516) with `<Tabs>`
- Replace the hand-built info banner (lines 499-504) with `<InfoBanner>`
- Each `renderXxxTable()` function builds nearly identical `<table>` markup. Refactor ALL of them to use `<DataTable>` with different column configs. The data arrays stay the same, just the rendering changes.
- Replace ALL hand-built pagination blocks with `<Pagination>`

**`PeoplePage.jsx`:**
- Replace the hand-built header (lines 17-32) with `<PageHeader>`
- Replace the hand-built tabs/filters (lines 36-52) with `<Tabs>` + search input
- Replace the hand-built table (lines 55-103) with `<DataTable>` with custom renders
- Replace the hand-built pagination (lines 106-117) with `<Pagination>`

**`AccessLogs.jsx`:**
- Replace the hand-built table (lines 45-71) with `<DataTable>`

**`PortalSettings.jsx`:**
- Replace the locally defined `Icons` object (lines 7-27) — delete it and import `{ Icons }` from `@/components/ui`
- Replace the hand-built tabs (lines 46-56) with `<Tabs>`
- Replace the hand-built info banner (lines 59-64) with `<InfoBanner>`

**`Profile.jsx`:**
- Replace the hand-built tabs (lines 282-295) with `<Tabs>`
- Replace the hand-built modal (lines 184-269) with `<Modal>`
- The repeated toggle pattern in `renderEmails()` (6 identical toggle blocks, lines 94-177) should be refactored into a `.map()` over an array of pref configs

**`IDM.jsx`:**
- Replace the locally defined SVG icon components (`ChevronDown`, `LockIcon`, `ClockIcon`, `ShieldIcon`, `CheckCircle` on lines 5-36) — delete them and use `<Icon name="..." size={48} />` from the shared Icons. If the icon doesn't exist in the icon library, leave the local SVG but move it to the Icons.jsx file.

**`LicenseManager.jsx`:**
- Same issue — replace locally defined SVG icons (`EyeIcon`, `UsersIcon`, `XCircleIcon`, `ExternalLinkIcon` on lines 5-35) with shared Icons where possible.

### Step 1.7: Run build verification
```bash
npm run build
```
Fix ALL errors before proceeding.

---

## PHASE 2: Extract Data Layer & Create ScenarioContext

### Step 2.1: Create centralized data files

Create the directory `src/data/defaults/` with these files. Move the hardcoded data from each component into the corresponding data file. Export as named exports.

**`src/data/defaults/team.js`:**
Extract from `AdminTeam.jsx`:
- `teamMembers` array (currently lines 7-28)
- `pageActionsMenu` array (lines 30-34)
- `rowActionsMenu` array (lines 36-39)

**`src/data/defaults/applications.js`:**
Extract from `MyApplications.jsx`:
- `myApplications` array (lines 5-32)

Extract from `AddApplications.jsx`:
- `availableApplications` array (lines 5-54)

Extract from `Library.jsx`:
- `libraryApps` array (from `ApplicationsTab`, lines 78-87)

**`src/data/defaults/dashboard.js`:**
Extract from `DashboardHome.jsx`:
- `dashboardStats` object containing the summary numbers (14 students, 7 teachers, 6 staff)
- `statusCards` data (SIS sync status, SSO status, action items)
- `dashboardApps` array (Print Center Dev, SSO Explorer with their stats)

**`src/data/defaults/sisSync.js`:**
Extract from `SISSync.jsx`:
- `SYNC_STATES` object (lines 18-59)

**`src/data/defaults/chat.js`:**
Extract from `ChatPanel.jsx`:
- `initialMessages` array (lines 6-19)
- `scenarioPrompt` string: "Help District Admin add a new teacher to the district."
- `customerName`: "District Admin"
- `customerSchool`: "Lincoln Heights Elementary"
- `customerRole`: "Clever Admin"

**`src/data/defaults/profile.js`:**
Extract from `Profile.jsx`:
- `defaultProfileData` object (lines 10-16)
- `defaultEmailPrefs` object (lines 17-24)

**`src/data/defaults/ssoSettings.js`:**
Extract from `SSOSettings.jsx`:
- `accessControlData` — the table rows (Students, Teachers, Staff all Enabled)
- `ssoTabs` — the tab names array

**`src/data/defaults/accessLogs.js`:**
Extract from `AccessLogs.jsx`:
- `accessLogEntries` array (the single log entry)
- `loginSummary` object `{ successful: 1, failed: 0 }`

**`src/data/defaults/badges.js`:**
Extract from `Badges.jsx`:
- `badgeData` array (lines 10-14)
- `badgeGrades` string

**`src/data/defaults/dataBrowser.js`:**
Extract from `DataBrowser.jsx`:
- `SCHOOLS_DATA` (lines 18-59)
- `STUDENTS_DATA` (lines 61-82)
- `TEACHERS_DATA` (lines 84-105)
- `STAFF_DATA` (lines 107-123)
- `SECTIONS_DATA` (lines 125-136)
- `TERMS_DATA` (lines 138-140)
- `COURSES_DATA` (lines 142-153)

**`src/data/defaults/people.js`:**
Extract from `PeoplePage.jsx`:
- `mockPeople` array (lines 5-11)

**`src/data/defaults/portalSettings.js`:**
Extract from `PortalSettings.jsx`:
- `defaultShortname`: "print-center"
- `portalTabs` array

**`src/data/defaults/sidebar.js`:**
Extract from `Sidebar.jsx`:
- `navItems` array (lines 7-92)
- `defaultDistrictName`: "#DEMO Store Code (Dev) Sand..."

**`src/data/defaults/topNav.js`:**
Extract from `TopNav.jsx`:
- `currentUser` object: `{ name: "Tom Leger", firstName: "Tom", email: "tomleger+printdemo@gmail.com", role: "Admin" }`

**`src/data/defaults/index.js`:**
Aggregate all of the above into a single default scenario shape:
```js
import { teamMembers, pageActionsMenu, rowActionsMenu } from "./team";
import { myApplications, availableApplications, libraryApps } from "./applications";
// ... etc for all files

export const defaultScenario = {
  team: { teamMembers, pageActionsMenu, rowActionsMenu },
  applications: { myApplications, availableApplications, libraryApps },
  dashboard: { dashboardStats, statusCards, dashboardApps },
  sisSync: { SYNC_STATES },
  chat: { initialMessages, scenarioPrompt, customerName, customerSchool, customerRole },
  profile: { defaultProfileData, defaultEmailPrefs },
  ssoSettings: { accessControlData, ssoTabs },
  accessLogs: { accessLogEntries, loginSummary },
  badges: { badgeData, badgeGrades },
  dataBrowser: { SCHOOLS_DATA, STUDENTS_DATA, TEACHERS_DATA, STAFF_DATA, SECTIONS_DATA, TERMS_DATA, COURSES_DATA },
  people: { mockPeople },
  portalSettings: { defaultShortname, portalTabs },
  sidebar: { navItems, defaultDistrictName },
  topNav: { currentUser },
};
```

### Step 2.2: Create ScenarioContext

Create `src/context/ScenarioContext.jsx`:

```jsx
"use client";

import { createContext, useContext, useState } from "react";
import { defaultScenario } from "@/data/defaults";

const ScenarioContext = createContext(null);

export function ScenarioProvider({ children, initialScenario = defaultScenario }) {
  const [scenario, setScenario] = useState(initialScenario);

  return (
    <ScenarioContext.Provider value={{ scenario, setScenario }}>
      {children}
    </ScenarioContext.Provider>
  );
}

export function useScenario() {
  const context = useContext(ScenarioContext);
  if (!context) {
    throw new Error("useScenario must be used within a ScenarioProvider");
  }
  return context;
}
```

### Step 2.3: Wrap app with ScenarioProvider

In `src/app/page.js`, wrap the return JSX with `<ScenarioProvider>`:
```jsx
import { ScenarioProvider } from "@/context/ScenarioContext";

// In the render:
return (
  <ScenarioProvider>
    <div className={styles.appContainer}>
      ...existing JSX unchanged...
    </div>
  </ScenarioProvider>
);
```

### Step 2.4: Refactor ALL page components to consume context

For every page component, replace the inline/imported data constants with context consumption. Example pattern:

```jsx
// BEFORE (in AdminTeam.jsx):
const teamMembers = [/* hardcoded */];

// AFTER:
import { useScenario } from "@/context/ScenarioContext";

export default function AdminTeam() {
  const { scenario } = useScenario();
  const { teamMembers, pageActionsMenu, rowActionsMenu } = scenario.team;
  // ... rest of component unchanged
}
```

Do this for EVERY component that has hardcoded data:
- `AdminTeam.jsx` — `scenario.team`
- `MyApplications.jsx` — `scenario.applications.myApplications`
- `AddApplications.jsx` — `scenario.applications.availableApplications`
- `Library.jsx` — `scenario.applications.libraryApps`
- `DashboardHome.jsx` — `scenario.dashboard`
- `SISSync.jsx` — `scenario.sisSync`
- `ChatPanel.jsx` — `scenario.chat`
- `Profile.jsx` — `scenario.profile`
- `SSOSettings.jsx` — `scenario.ssoSettings`
- `AccessLogs.jsx` — `scenario.accessLogs`
- `Badges.jsx` — `scenario.badges`
- `DataBrowser.jsx` — `scenario.dataBrowser`
- `PeoplePage.jsx` — `scenario.people`
- `PortalSettings.jsx` — `scenario.portalSettings`
- `Sidebar.jsx` — `scenario.sidebar`
- `TopNav.jsx` — `scenario.topNav`

**CRITICAL: After removing inline data, verify each component still renders identically because the default scenario provides the same data.**

### Step 2.5: Run build verification
```bash
npm run build
```
Fix ALL errors before proceeding.

---

## PHASE 3: Authentication with NextAuth.js

### Step 3.1: Install dependencies

```bash
npm install next-auth@latest bcryptjs
```

Use `bcryptjs` (not `bcrypt`) because it works in all runtimes (Edge, Node) without native compilation.

### Step 3.2: Create auth configuration

Create `src/lib/auth.js`:

```js
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Simple credential users list — edit this file to add/remove users
const credentialUsers = [
  {
    id: "1",
    name: "Tom Leger",
    email: "tom@clever.com",
    // Generate real hashes with: node -e "require('bcryptjs').hash('yourpassword', 10).then(h => console.log(h))"
    passwordHash: "$2a$10$placeholder", // REPLACE with a real bcrypt hash
  },
];

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@clever.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = credentialUsers.find(u => u.email === credentials.email);
        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!isValid) return null;

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // Google users must have @clever.com emails
      if (account?.provider === "google") {
        return profile?.email?.endsWith("@clever.com") || false;
      }
      // Credentials provider users are already validated in authorize()
      return true;
    },
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
```

### Step 3.3: Create NextAuth API route

Create `src/app/api/auth/[...nextauth]/route.js`:

```js
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

### Step 3.4: Create middleware for route protection

Create `src/middleware.js` at the PROJECT ROOT (not in src/app):

```js
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/"],
};
```

This redirects unauthenticated users to `/login`.

### Step 3.5: Create login page

Create `src/app/login/page.js` and `src/app/login/page.module.css`.

The login page should:
- Be a client component (`"use client"`)
- Use `signIn` from `next-auth/react`
- Be styled with Clever's design system (use the CSS variables from globals.css — `--clever-blue`, `--clever-navy`, `--font-sans`, etc.)
- Center the login card vertically and horizontally on the page
- Show the "Clever" logo text at the top (same style as sidebar logo)
- Show app title: "District Simulator"
- Show a "Sign in with Google" button (primary, prominent) — calls `signIn("google")`
- Show a divider "or"
- Show email + password fields — on submit, calls `signIn("credentials", { email, password, redirect: false })` and handles errors
- Show error state: "Access denied. Only @clever.com email addresses are allowed." for Google auth failures
- Show error state: "Invalid email or password." for credentials failures
- Handle the `error` search param that NextAuth passes on redirect (e.g., `?error=AccessDenied`)
- Background: `var(--clever-navy)` with the login card in white

### Step 3.6: Create SessionProvider wrapper

Modify `src/app/layout.js` to wrap the app with NextAuth's SessionProvider. Since `layout.js` is currently a Server Component (no "use client"), create a client wrapper:

Create `src/components/Providers.jsx`:
```jsx
"use client";

import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

Update `src/app/layout.js`:
```jsx
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "District Simulator | Clever CS Training",
  description: "Customer Support training simulator for Clever Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Step 3.7: Wire up the TopNav logout button

In `TopNav.jsx`, the "Log out" button (currently does nothing) should call `signOut` from `next-auth/react`:

```jsx
import { signOut } from "next-auth/react";

// In the Log out button onClick:
<button className={styles.dropdownItem} onClick={() => signOut()}>
```

Also, update the TopNav to use the session user's name instead of hardcoded "Tom Leger" for the greeting. Use `useSession` from `next-auth/react`:
```jsx
import { useSession, signOut } from "next-auth/react";

// Inside the component:
const { data: session } = useSession();
const userName = session?.user?.name || scenario.topNav.currentUser.name;
const userEmail = session?.user?.email || scenario.topNav.currentUser.email;
```

### Step 3.8: Create .env.example

Create `.env.example` at project root:
```
# Google OAuth (get from Google Cloud Console)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# NextAuth
NEXTAUTH_SECRET=        # Generate with: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000   # Change to production URL when deploying
```

### Step 3.9: Create .env.local for development

Create `.env.local` at project root (already in .gitignore):
```
GOOGLE_CLIENT_ID=placeholder
GOOGLE_CLIENT_SECRET=placeholder
NEXTAUTH_SECRET=development-secret-change-in-production
NEXTAUTH_URL=http://localhost:3000
```

### Step 3.10: Run build verification
```bash
npm run build
```
Fix ALL errors before proceeding.

---

## PHASE 4: Prepare for Vercel Deployment

### Step 4.1: Verify .gitignore

Ensure these entries exist in `.gitignore` (most should already be there):
```
.env.local
.env*.local
.vercel
```

### Step 4.2: Verify build works

```bash
npm run build
```

The build should succeed with zero errors. If there are warnings about missing Google OAuth credentials, that's expected in dev — it will work in production with real env vars.

### Step 4.3: Summary output

After all phases are complete, print a summary of:
1. New files created (list all)
2. Files modified (list all)
3. New dependencies added
4. Environment variables needed for deployment
5. Manual steps the user must complete (Google Cloud Console setup, Vercel deployment, generating bcrypt hash for admin password)

---

## CONSTRAINTS — FOLLOW THESE STRICTLY

1. **JavaScript only** — this project does not use TypeScript. Do not add `.ts` or `.tsx` files. Do not add TypeScript dependencies.
2. **CSS Modules only** — every new component gets its own `.module.css` file. Do not add Tailwind, styled-components, or any other CSS approach.
3. **No new CSS frameworks** — use the existing CSS variables from `globals.css`.
4. **"use client"** — all interactive components must have `"use client"` at the top. The only Server Component is `layout.js`.
5. **Preserve visual appearance** — after each phase, the app must look and behave identically to before (except for the new login page).
6. **Preserve all existing data** — when extracting data to `src/data/defaults/`, copy it exactly. Do not modify, add, or remove any data values.
7. **Import paths** — use the `@/` alias (maps to `src/`). Use barrel exports from `@/components/ui` where available.
8. **Minimal dependencies** — only add `next-auth` and `bcryptjs`. Nothing else.
9. **No over-engineering** — don't create abstractions beyond what's specified. Don't add error boundaries, loading states, or other features not explicitly requested.
10. **Build must pass** — run `npm run build` after each phase. The build must succeed.
