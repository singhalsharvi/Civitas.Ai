# Civitas.AI 
### AI-powered civic issue reporting platform for Indian cities

[![Live Demo](https://img.shields.io/badge/Live%20Demo-civitasai--lemon.vercel.app-22D3EE?style=flat-square)](https://civitasai-lemon.vercel.app)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%201.5%20Flash-818CF8?style=flat-square)](https://ai.google.dev/)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-FBBF24?style=flat-square)](https://firebase.google.com/)

---

## Table of Contents
- [Project Overview](#project-overview)
- [The Problem & Solution](#the-problem--solution)
- [Core Feature Set](#core-feature-set)
- [Technical Architecture](#technical-architecture)
- [Demo Credentials](#demo-credentials)
- [Getting Started](#getting-started)

---

## Project Overview

Civitas.AI is a full-stack civic technology platform that bridges the gap between Indian citizens and their local government bodies. Citizens report infrastructure issues with a single photo — Gemini AI instantly analyzes it, assigns a severity score, and routes the complaint to the correct government department. Officers get a dedicated dashboard scoped to their department and state. No noise. Just actionable work.

---

## The Problem & Solution

**The Problem:** Civic issue reporting in Indian cities is fragmented — citizens don't know which department to contact, complaints get lost in manual processes, and there's zero visibility on resolution status.

**The Civitas.AI Solution:** One photo is all a citizen needs. Gemini 1.5 Flash handles categorization, severity scoring, department routing, and ETA estimation automatically. Government officers see only what's relevant to their department, and citizens track resolution in real time.

---

## Core Feature Set

### Citizen Portal

| Feature | Description |
|---------|-------------|
| **AI Issue Analysis** | Upload a photo and Gemini 1.5 Flash detects the issue category, assigns HIGH / MEDIUM / LOW severity, routes it to the correct department, and estimates resolution time |
| **CivitasBot** | Gemini-powered chatbot that answers questions about local issues, guides citizens through reporting, and provides area-wise status updates |
| **Live Map** | Leaflet.js map with real-time issue pins across the city, filterable by category and status |
| **Community Voting** | Citizens upvote issues — high-vote issues get automatically escalated to priority status |
| **Location Intelligence** | Issues filtered by state, district, and area — citizens only see what's relevant near them |

### Government Portal

| Feature | Description |
|---------|-------------|
| **Department Dashboard** | Officers see only issues routed to their department and state |
| **Status Management** | Full issue lifecycle: Open → In Progress → Resolved, with official government responses |
| **Officer Registration** | Gemini Vision validates government employee ID cards during officer signup |
| **Role Hierarchy** | Department heads (IAS officers) have elevated access over regular officers |

---

## Technical Architecture

| Component | Technology | Role |
|-----------|-----------|------|
| **Frontend** | React (CDN), HTML5, CSS3 | Single-page app with dual citizen / govt portals |
| **AI Engine** | Gemini 1.5 Flash | Image analysis, chatbot, ID card verification |
| **Database** | Firebase Firestore | Real-time issue storage and status sync |
| **Authentication** | Firebase Auth | Google Sign-In + email/password |
| **Maps** | Leaflet.js | Interactive issue mapping with location pins |
| **Deployment** | Vercel | Static hosting |

### AI Routing Flow

```
Citizen uploads photo
        ↓
Gemini 1.5 Flash analyzes image
        ↓
Returns: { category, severity, department, score, eta }
        ↓
Issue stored in Firestore → appears on correct officer's dashboard
        ↓
Officer updates status → citizen sees resolution in real time
```

---

## Coverage

- **10 Indian states** — Delhi, Karnataka, Maharashtra, Tamil Nadu, Telangana, West Bengal, Rajasthan, Gujarat, Uttar Pradesh, Punjab
- **9 issue categories** — Garbage, Water Leak, Pothole, Streetlight, Road Damage, Sewage, Fallen Tree, Encroachment, Other
- **10 government departments** — Roads, Electricity Board, Water Supply Board, Municipal Sanitation, Horticulture, Municipal Corporation, Revenue, Health, Police, and more

---

## Demo Credentials

### Citizen Portal
Register with any email or use Google Sign-In.

### Government Portal

| Officer | Department | State | Email | Password |
|---------|-----------|-------|-------|----------|
| Rajesh Kumar | Roads Department | Delhi | `roads@delhi.gov.in` | `roads2024` |
| IAS Priya Singh *(Head)* | Roads Department | Delhi | `roads.head@delhi.gov.in` | `head2024` |
| Amit Sharma | Water Supply Board | Delhi | `water@delhi.gov.in` | `water2024` |
| Suresh Yadav | Electricity Board | Delhi | `elec@delhi.gov.in` | `elec2024` |
| Deepak Mishra | Municipal Sanitation | Delhi | `sanit@delhi.gov.in` | `sanit2024` |
| Kiran Rao | Roads Department | Karnataka | `roads@bbmp.gov.in` | `roads2024` |
| Sunita Patil | Water Supply Board | Karnataka | `water@bwssb.gov.in` | `water2024` |

> Click any demo account on the login screen to auto-fill credentials instantly.

---

## Getting Started

### Prerequisites
- A modern browser (Chrome / Firefox)
- Python or VS Code with Live Server extension

### Run Locally

```bash
# Clone the repository
git clone https://github.com/singhalsharvi/Civitas.Ai.git
cd Civitas.Ai

# Serve locally (required — file:// blocks API calls)
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

> ⚠️ Do not open `index.html` directly via `file://` — Gemini API calls will be blocked by CORS.

---

## Built By

**Sharvi Singhal** 
[GitHub](https://github.com/singhalsharvi)

---

*Civitas.AI — Report it. Route it. Resolve it.*
