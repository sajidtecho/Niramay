# Niramay
निRamay — Food Redistribution &amp; Community Impact Platform

निRamay is a mobile-first, single-page React application designed to reduce food waste by connecting donors (restaurants/caterers) with recipients (NGOs/food banks) while enabling community engagement through events, volunteering, and posts.
This project currently functions as a frontend-only interactive demo using mocked data, with planned integration for real backend and real-time systems.

🚀 Features
✅ Donor Module

Add food donation details

View & manage active donations

Real-time impact stats

🎯 Recipient Module

Browse available donations

View donation details

Claim donations

Location-based DonationMap UI

🌍 Community & Engagement

Events listing

Volunteer opportunities

Community posts & replies

Impact tracker with periodic (simulated) updates

🤖 HelpBot (AI Integration)

Powered by Google Gemini API via @google/genai

Provides guidance, answers questions, and assists users in navigating features

🧱 Tech Stack
Layer	Tools
Frontend	React 19, TypeScript, Vite
Design Pattern	Modular Component-Based Architecture
AI Integration	Google Gemini API (@google/genai)
State Management	React state (App-level), props-based flow
Dev Tools	Vite Dev Server, TypeScript


root/
├── App.tsx
├── index.tsx
├── components/
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Modal.tsx
├── modules/
│   ├── donor/
│   ├── recipient/
│   ├── community/
│   ├── community_engagement/
│   └── help/
└── README.md

All core logic (donation create/claim, posts, replies, stat updates) lives centrally in App.tsx
Data sources like MOCK_DONATIONS, MOCK_EVENTS simulate backend data
useEffect simulates real-time impact stat updates every 5 seconds

npm run dev	Start local dev server
npm run build	Make production build
npm run preview	Preview production build

🧪 Observations & Current Limitations

⚠️ No backend or database yet
All data is temporary (in-memory)
⚠️ No authentication system
Roles are selected manually (Donor, Recipient, Community)
⚠️ No tests (unit or e2e)
Should be added using Vitest, RTL, Playwright
⚠️ AI key is required and must be kept secure (.env not committed)

📌 Recommended Enhancements
🟦 Short-Term

Add ESLint + Prettier
Add .env.example file
Improve accessibility & performance (Lighthouse)
Add UI/UX polish, form validation

🟩 Medium-Term

Add backend (Node/Nest/Fastify) for:
Auth (JWT/OAuth)
Donor/recipient data persistence
Real-time updates (WebSockets)

🟧 Long-Term

Launch as end-to-end platform:
Verified donors
NGO onboarding
Live tracking & logistics
Admin dashboard

📊 Data Flow (High-Level)

User selects a role → UI loads corresponding view
Mock data is fetched from constants
Any action (add donation, claim donation, post reply) updates central state in App.tsx
Components receive updated props → UI re-renders
Impact stats auto-update every 5 seconds

🔖 Developer Checklist
 Add .env.example
 Add linting + formatting
 Add unit tests
 Implement backend API
 Add CI pipeline (GitHub Actions)
 Add accessibility improvements

📄 License
This project is currently for educational/demo purposes. Add licensing per your requirement (MIT recommended).
