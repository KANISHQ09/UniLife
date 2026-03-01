# UniLife — AI-Powered Campus Lifestyle Platform

## Overview
UniLife is a comprehensive campus companion application designed to help students discover food, events, and travel plans through an intuitive AI chat interface. The platform serves multiple campus stakeholders by providing dedicated dashboards for Students, Club Admins, and Canteen Owners to manage content, discover recommendations, and analyze engagement.

## Features

### 🎓 For Students
* **AI Chat Interface:** Natural language search for campus life (e.g., "Find lunch under ₹150").
* **Smart Recommendation Engine:** Context-aware suggestions based on budget, location, and past ratings with "Why this?" explanations.
* **Discovery Feed:** Browse trending, newly added, and "hidden gem" campus options.
* **Budget Planning:** AI-generated optimized plans for meals, weekend itineraries, and study breaks.
* **Feedback System:** Rate and review recommendations to improve future AI suggestions.

### 🏛️ For Club Admins
* **Event Manager:** Create and manage campus events, workshops, and hackathons.
* **AI Creator Tools:** Generate event descriptions, social media captions, and poster copy using AI.
* **Event Analytics:** Track engagement and attendance trends.

### 🏪 For Canteen Owners
* **Menu Manager:** Easily add and edit menu items, categorized by type (veg/non-veg) and price.
* **Menu Analytics:** Monitor popular items and order trends.

## Tech Stack

**Frontend:**
* **Framework:** React 18 with TypeScript
* **Build Tool:** Vite
* **Routing:** React Router v6
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui (Radix UI primitives)
* **State Management/Data Fetching:** TanStack React Query
* **Forms & Validation:** React Hook Form + Zod
* **Animations:** Framer Motion, Tailwind CSS Animate
* **Charts:** Recharts

**Backend / BaaS:**
* **Database & Auth:** Supabase (PostgreSQL)
* **Cloud Functions:** Lovable Cloud / Edge Functions

## Project Structure (Routes)

The application features role-based routing:

* `/` - Landing Page
* `/login`, `/signup` - Authentication
* **Student Routes:** `/student/chat`, `/student/discover`, `/student/profile`, `/student/history`
* **Admin Routes:** `/admin/events`, `/admin/creator`, `/admin/analytics`
* **Canteen Routes:** `/canteen/menu`, `/canteen/analytics`

## Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd unilife

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

4. Open your browser and navigate to http://localhost:5173.
