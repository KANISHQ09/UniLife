

# UniLife — AI-Powered Campus Lifestyle Platform

## Overview
A campus companion app where students discover food, events, and travel plans through an AI chat interface, while admins and canteen owners manage content.

## Pages & Navigation

### Public
- **Landing Page** — Hero section explaining UniLife, feature highlights, CTA to sign up
- **Login / Sign Up** — Email-based auth with role selection (Student, Club Admin, Canteen Owner)

### Student Dashboard
- **Chat Interface (Main)** — Full-screen conversational AI where students type queries like "Find lunch under ₹150" or "Plan a weekend trip under ₹2000". AI responds with personalized recommendation cards including "Why this?" explanations
- **Discovery Feed** — Browse trending, new, and underrated items across food, events, and travel. Filter by category
- **My Profile** — Edit interests, food preferences, budget range, campus location
- **Recommendation History** — Past suggestions with ability to rate/feedback

### Club Admin Dashboard
- **Event Manager** — Create/edit campus events (workshops, hackathons, club meetings, cultural events)
- **AI Creator Tools** — Generate event posters (text descriptions), social media captions, and event descriptions using AI
- **Event Analytics** — View engagement and attendance trends

### Canteen Owner Dashboard
- **Menu Manager** — Add/edit food items with name, price, category (veg/non-veg), ratings
- **Menu Analytics** — Popular items, order trends

## Core Features

### 1. AI Chat Interface
- Natural language input with streaming AI responses
- Recommendation cards with image placeholders, pricing, ratings, and "Why this?" badges
- Context-aware: remembers preferences and conversation history within session

### 2. Smart Recommendation Engine
- AI considers: user preferences, budget, location, past ratings, popularity
- Each suggestion has an explainable reason
- Covers: canteen meals, campus events, day trip plans, study break ideas

### 3. Discovery Mode
- Trending section (most popular this week)
- Newly added items
- "Hidden gems" — underrated but highly rated options
- Prevents showing same recommendations repeatedly

### 4. Feedback System
- Like/dislike buttons on each recommendation
- Star ratings after trying a suggestion
- Feedback stored to improve future suggestions

### 5. Budget Planning
- Set max budget, available time, interests
- AI generates optimized plans (meal plans, weekend itineraries, study break activities)

### 6. AI Creator Tools (Club Admins)
- Generate event descriptions from bullet points
- Generate social media captions with tone selection
- AI-assisted poster text/copy generation

## Backend (Lovable Cloud + Supabase)

### Database Tables
- **profiles** — name, campus, avatar
- **user_roles** — role enum (student, club_admin, canteen_owner)
- **user_preferences** — interests, food prefs, budget range, location
- **canteens** — name, location, description
- **menu_items** — canteen_id, name, price, category, veg/non-veg, rating, image
- **events** — title, description, date, location, category, club_id, popularity
- **recommendations_log** — user_id, item_type, item_id, reason, timestamp
- **feedback** — user_id, recommendation_id, rating, liked

### Edge Functions
- **chat** — Processes natural language queries via Lovable AI, returns personalized recommendations
- **generate-content** — AI content generation for club creator tools

### Auth & Roles
- Email/password authentication
- Role-based access control with RLS policies
- Separate user_roles table (security best practice)

## Sample Data
- 3 canteens with 15+ menu items each
- 10+ campus events across categories
- 5+ travel/trip suggestions
- Pre-configured student preferences for demo

## Design
- Clean, modern UI with card-based layouts
- Chat interface as the primary interaction mode
- Mobile-responsive
- Color scheme: Fresh campus vibe with blues and greens

