export type UserRole = "student" | "club_admin" | "canteen_owner";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  campus: string;
  avatar?: string;
  role: UserRole;
}

export interface UserPreferences {
  interests: string[];
  foodPrefs: ("veg" | "non-veg" | "vegan")[];
  budgetRange: { min: number; max: number };
  location: string;
}

export interface Canteen {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  image?: string;
}

export interface MenuItem {
  id: string;
  canteenId: string;
  canteenName: string;
  name: string;
  price: number;
  category: string;
  isVeg: boolean;
  rating: number;
  image?: string;
  popularity: number;
}

export interface CampusEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: "workshop" | "hackathon" | "club_meeting" | "cultural" | "sports" | "seminar";
  clubName: string;
  popularity: number;
  image?: string;
}

export interface TravelSuggestion {
  id: string;
  title: string;
  description: string;
  estimatedCost: number;
  duration: string;
  location: string;
  rating: number;
  image?: string;
  highlights: string[];
}

export interface RecommendationCard {
  id: string;
  type: "food" | "event" | "travel" | "study_break";
  title: string;
  subtitle: string;
  price?: number;
  rating?: number;
  reason: string;
  image?: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  recommendations?: RecommendationCard[];
  timestamp: Date;
}

export interface Feedback {
  id: string;
  recommendationId: string;
  liked: boolean;
  rating?: number;
}
