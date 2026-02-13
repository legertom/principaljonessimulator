# Principal Jones Simulator

A training simulator for the Clever Dashboard, built with Next.js 16 (App Router) and NextAuth.js.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Copy `.env.example` to `.env.local` and add your keys:
   ```bash
   cp .env.example .env.local
   # Add your GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET
   # Generate NEXTAUTH_SECRET: openssl rand -base64 32
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Authentication

Authentication is handled by **NextAuth.js** with two providers:
1. **Google OAuth**: Requires valid credentials in `.env.local`.
2. **Credentials (Dev)**: Hardcoded admin access for rapid testing.
   - **Email**: `principal@example.com` (or any email)
   - **Password**: `password`

> **Note**: Routes are protected by middleware. Unauthenticated users are redirected to `/login`.

## Scenario Data Structure

All simulator data is driven by `src/data/defaults/index.js`, which exports a `defaultScenario` object.
The application state hydration flow is:
1. `Providers.jsx` initializes `ScenarioContext`.
2. `ScenarioContext` loads `defaultScenario`.
3. Components consume data via `useScenario()` hook.

Domains split across:
- `team`, `applications`, `people`, `badges`, `accessLogs`
- `dashboard`, `chat`, `profile`, `ssoSettings`, `portalSettings`
- `sidebar`, `topNav`, `sisSync`, `dataBrowser`

## Deployment

Deploy on [Vercel](https://vercel.com).
Ensure you add the Environment Variables from `.env.example` to your Vercel Project Settings.

