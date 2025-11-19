# Project Report — निRamay

**Location:** `PROJECT_REPORT.md` (repo root)

**Generated:** 2025-11-19

---

**1. Executive summary**

`निRamay` is a single-page, mobile-first React application (Vite) that models a food redistribution platform connecting donors (restaurants/caterers) with recipients (NGOs/food banks) and community engagement features. It uses mocked data to simulate donations, events, volunteer opportunities, and community posts. The app appears oriented toward real-time/near-real-time interactions (periodic impact stat updates and in-memory state changes).


**2. Project purpose & scope**

- Purpose: Minimize food waste by enabling donors to list food, recipients to claim donations, and the community to engage (events, posts, volunteers).
- Scope: Frontend-only SPA with client-side mock data, components for Donor, Recipient, Community, and a HelpBot component. No backend integration present in the repo (mocked flows imply later integration points).


**3. Tech stack & build**

- Language: TypeScript + JSX/TSX
- Framework: React (v19)
- Bundler / Dev Server: Vite (v6)
- Dev tooling: TypeScript, `@vitejs/plugin-react`
- Key dependency: `@google/genai` (present in `package.json`) — likely for AI features (HelpBot / assistant integration).

Scripts (from `package.json`):
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview build

Run instructions (from `README.md`):
- `npm install`
- Set `GEMINI_API_KEY` in `.env.local` (used by AI/GenAI integrations)
- `npm run dev`


**4. Repo structure & notable files**

- Root: `App.tsx`, `index.tsx`, `package.json`, `tsconfig.json`, `vite.config.ts`, `metadata.json`, `README.md`.
- `components/`: small presentational pieces (`Header`, `Footer`, `Card`, `Modal`, `LiabilityTooltip`).
- `modules/`:
  - `community/`: `CommunityView`, `ImpactTracker`, `HeroSection`, `AvailableDonations`, etc.
  - `community_engagement/`: `CommunityEngagementView`, `EventsSection`, `VolunteerSection`, `MessagingSection`.
  - `donor/`: `DonorView`, `DonationForm`, `DonationDashboard`.
  - `recipient/`: `DonationList`, `DonationDetails`, `DonationMap`, `RecipientView`.
  - `help/`: `HelpBot` (likely integrates with `@google/genai`).

App wiring (from `App.tsx`):
- Central state in `App` with mocked constants (`MOCK_DONATIONS`, `MOCK_EVENTS`, etc.).
- Role-based rendering: `Role.Donor`, `Role.Recipient`, `Role.Community`, `Role.Public` determine which view is shown.
- Handlers in `App` manage add donation, claim donation, add post, add reply — all update in-memory state and impact stats.
- `useEffect` implements periodic increments to impact stats (every 5s) to simulate real-time updates.


**5. Data flow & architecture notes**

- Client-only stateful SPA; all core domain actions are simulated in memory and originate in `App.tsx`.
- Components receive props from `App` and emit events (callbacks) for changes — good separation for a frontend demo.
- No persistence layer or API routes are present; the design lends itself to adding REST or GraphQL endpoints for persistence and real-time (WebSocket) updates.


**6. Security & env**

- `GEMINI_API_KEY` expected in `.env.local` per README — keep secret and not checked into VCS.
- No server-side secrets or backend config in repo.


**7. Observations & potential issues**

- UI and flows are presentational / demo-quality; robust production concerns (auth, input validation, rate-limiting) aren't implemented.
- No linting / formatting tooling visible (ESLint, Prettier). Adding them would improve code quality.
- No tests present — unit and integration tests should be added.
- Accessibility (a11y) not explicitly covered; audits (axe, Lighthouse) recommended.
- `@google/genai` is in `package.json` but the degree of integration is unknown — confirm HelpBot usage and ensure secure key handling.
- Backend integration missing: mapping to actual donors/recipients, authenticated user sessions, and persistence are required for production.


**8. Recommendations / next steps**

- Short-term (developer experience):
  - Add ESLint + Prettier and TypeScript strict settings (`tsconfig.json` adjustments) to enforce consistency.
  - Add an `.env.example` to show required env vars (e.g., `GEMINI_API_KEY`).
  - Add a basic README section for development profile and deployment steps.

- Medium-term (stability & QA):
  - Add unit tests for key components and handlers (React Testing Library + Vitest/Jest).
  - Add end-to-end tests (Playwright) around main flows: add donation, claim donation, community posts.
  - Add accessibility checks and fixes (semantic HTML, ARIA where needed).

- Architecture & features:
  - Introduce a backend (Node/Express/Nest/Fastify or serverless functions) to persist donations, users, and claims.
  - Add authentication/authorization (OAuth2 or JWT) for donor and recipient roles.
  - Replace mocked data with API integration and add real-time updates (WebSocket or server push) for live claims.
  - Implement rate-limiting and input validation on server-side.

- Deployment & CI/CD:
  - Add a `build` pipeline (GitHub Actions) to run lint, tests, and build.
  - Deploy to static hosting (Vercel, Netlify) for frontend; if backend added, use relevant cloud services (Cloud Run, AWS ECS, or serverless).


**9. Quick developer checklist**

- [ ] Add `.env.example`
- [ ] Add linting and formatting
- [ ] Add unit tests and CI run for them
- [ ] Add basic backend or API mocks (for staging)
- [ ] Protect `GEMINI_API_KEY` and restrict usage
- [ ] Accessibility and performance audit


**10. How to run locally (copied & clarified)**

1. Install dependencies:

```powershell
npm install
```

2. Create `.env.local` with:

```text
GEMINI_API_KEY=<your_key_here>
```

3. Start dev server:

```powershell
npm run dev
```


**11. Where I looked**

- `README.md`
- `package.json`
- `metadata.json`
- `App.tsx`
- `modules/` and `components/` directory layout (inspected repo tree)


---

If you want, I can:
- Generate this as a PDF or shorter executive one-page summary.
- Create an `.env.example`, add ESLint + Prettier config, or scaffold basic GitHub Actions CI that runs lint and tests.
- Begin implementing a minimal server API (Node + SQLite) to persist donations and wire one endpoint.

Which next step would you like me to take?