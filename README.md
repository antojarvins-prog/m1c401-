# RESET 360° — Institutional Clinical Rehabilitation Website
### SPJ | Bengaluru, Karnataka, India
**"A New Beginning. A Different Way of Living."**

An integrated, evidence-informed residential rehabilitation web application for alcohol and substance-use disorders, built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, designed for direct deployment on **Vercel**.

---

## 🌟 Key Platform Features

1. **Post-Crisis Clinical Distinction:** Clear architectural boundaries distinguishing residential rehabilitation from acute hospital detoxification.
2. **The 90-Day Patient Journey:** Interactive 7-stage roadmap (Understand, Stabilise, Reset the Mind, Recondition, Rebuild Identity, Real-Life Practice, Reintegrate).
3. **MIND360 Behavioural Curriculum:** 4 pillars (Think, Feel, Act, Live), 9-week syllabus, and an interactive **Trigger Simulation Lab** (therapist-guided role-play scenarios).
4. **LIFE360 12-Month Aftercare Framework:** Structured continuity covering family, career, independent living, and clinical relapse prevention.
5. **The 15-Bed Sanctuary (2,710 Sq. Ft.):** Detailed architectural space breakdown and daily living schedule.
6. **20+ Multidisciplinary Team:** Dedicated staffing for 15 residents with Medical Director clinical primacy.
7. **Interactive Confidential Suitability Screener:** Self-assessment triage for families and individuals.
8. **Non-Coercive Care Charter:** Explicit ethical pledge complying with the Mental Healthcare Act, 2017 (zero punitive punishment, zero forced pickups, total dignity).

---

## 🚀 One-Click Vercel Deployment

This repository is pre-configured with `vercel.json` and a root `package.json`.

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New..." → "Project"**.
3. Import this repository.
4. If asked for **Root Directory**, you can either leave it as default (`.`) or select `frontend`.
5. Click **Deploy**. Vercel will build and assign a live shareable URL (e.g. `https://reset360-spj.vercel.app`).

### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 💻 Local Development

To run the platform locally on your machine:

```bash
# Navigate to frontend
cd frontend

# Install dependencies (if not already installed)
npm install

# Start local Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Repository Structure

```
d:/m1c401-/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx             # Sticky header with triage bar
│   │   │   ├── Hero.tsx               # Cinematic hero with 4 core metrics
│   │   │   ├── ClinicalDistinction.tsx # Acute detox vs rehabilitation boundary
│   │   │   ├── CarePhilosophy.tsx     # 6 principles & Non-coercive charter
│   │   │   ├── Journey90Days.tsx      # 7-stage milestone interactive explorer
│   │   │   ├── Mind360Curriculum.tsx  # 4 pillars & Trigger Simulation Lab
│   │   │   ├── Life360Aftercare.tsx   # 12-month cadence & reintegration
│   │   │   ├── FacilitySpaces.tsx     # 2,710 sq. ft. space model & day schedule
│   │   │   ├── TeamStaffing.tsx       # 20+ staffing model & clinical governance
│   │   │   ├── SuitabilityScreener.tsx # 4-step interactive self-assessment
│   │   │   ├── AdmissionWorkflow.tsx  # 5-step admission protocol
│   │   │   ├── FAQ.tsx                # High-trust accordion Q&A
│   │   │   ├── ConsultationModal.tsx  # Confidential booking dialog
│   │   │   └── Footer.tsx             # Complete institutional footer
│   │   ├── pages/
│   │   │   ├── _app.tsx
│   │   │   └── index.tsx              # Master presentation page
│   │   └── styles/
│   │       └── globals.css            # Custom design tokens, glassmorphism, glows
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
├── vercel.json                        # Vercel deployment specification
├── package.json                       # Root script forwarding
└── .gitignore
```

---

## 🛡️ Care Philosophy

> *"Addiction is treatable without moral judgment. Medical safety comes first. Psychiatric care is essential. Recovery is individual. Behaviour changes through practice. Recovery continues after discharge."*
