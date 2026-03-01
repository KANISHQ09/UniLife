import { Canteen, MenuItem, CampusEvent, TravelSuggestion, RecommendationCard } from "@/types";

export const canteens: Canteen[] = [
  { id: "c1", name: "Green Bites Café", location: "Main Building, Ground Floor", description: "Fresh, healthy options with a focus on vegetarian cuisine", rating: 4.3 },
  { id: "c2", name: "Spice Junction", location: "Engineering Block B", description: "Authentic Indian flavors with budget-friendly combos", rating: 4.5 },
  { id: "c3", name: "The Fuel Stop", location: "Sports Complex", description: "Quick bites, smoothies, and energy foods", rating: 4.1 },
];

export const menuItems: MenuItem[] = [
  // Green Bites Café
  { id: "m1", canteenId: "c1", canteenName: "Green Bites Café", name: "Paneer Tikka Wrap", price: 120, category: "wraps", isVeg: true, rating: 4.4, popularity: 85 },
  { id: "m2", canteenId: "c1", canteenName: "Green Bites Café", name: "Veg Thali", price: 110, category: "thali", isVeg: true, rating: 4.6, popularity: 92 },
  { id: "m3", canteenId: "c1", canteenName: "Green Bites Café", name: "Caesar Salad", price: 90, category: "salads", isVeg: true, rating: 4.2, popularity: 60 },
  { id: "m4", canteenId: "c1", canteenName: "Green Bites Café", name: "Cold Coffee", price: 60, category: "beverages", isVeg: true, rating: 4.5, popularity: 88 },
  { id: "m5", canteenId: "c1", canteenName: "Green Bites Café", name: "Masala Dosa", price: 80, category: "south_indian", isVeg: true, rating: 4.3, popularity: 78 },
  // Spice Junction
  { id: "m6", canteenId: "c2", canteenName: "Spice Junction", name: "Chicken Biryani", price: 150, category: "biryani", isVeg: false, rating: 4.7, popularity: 95 },
  { id: "m7", canteenId: "c2", canteenName: "Spice Junction", name: "Butter Chicken + Naan", price: 160, category: "north_indian", isVeg: false, rating: 4.6, popularity: 90 },
  { id: "m8", canteenId: "c2", canteenName: "Spice Junction", name: "Chole Bhature", price: 100, category: "north_indian", isVeg: true, rating: 4.4, popularity: 82 },
  { id: "m9", canteenId: "c2", canteenName: "Spice Junction", name: "Egg Roll", price: 70, category: "rolls", isVeg: false, rating: 4.3, popularity: 75 },
  { id: "m10", canteenId: "c2", canteenName: "Spice Junction", name: "Dal Tadka + Rice", price: 90, category: "combos", isVeg: true, rating: 4.2, popularity: 70 },
  { id: "m11", canteenId: "c2", canteenName: "Spice Junction", name: "Mutton Curry", price: 180, category: "north_indian", isVeg: false, rating: 4.5, popularity: 65 },
  // The Fuel Stop
  { id: "m12", canteenId: "c3", canteenName: "The Fuel Stop", name: "Protein Smoothie", price: 130, category: "beverages", isVeg: true, rating: 4.4, popularity: 80 },
  { id: "m13", canteenId: "c3", canteenName: "The Fuel Stop", name: "Grilled Sandwich", price: 80, category: "snacks", isVeg: true, rating: 4.1, popularity: 72 },
  { id: "m14", canteenId: "c3", canteenName: "The Fuel Stop", name: "Chicken Burger", price: 140, category: "burgers", isVeg: false, rating: 4.3, popularity: 85 },
  { id: "m15", canteenId: "c3", canteenName: "The Fuel Stop", name: "French Fries", price: 60, category: "snacks", isVeg: true, rating: 4.0, popularity: 68 },
  { id: "m16", canteenId: "c3", canteenName: "The Fuel Stop", name: "Energy Bar Pack", price: 50, category: "snacks", isVeg: true, rating: 3.9, popularity: 55 },
];

export const events: CampusEvent[] = [
  { id: "e1", title: "HackCampus 2026", description: "24-hour hackathon with ₹50K prize pool. Build solutions for campus problems.", date: "2026-03-15", time: "09:00", location: "Innovation Lab", category: "hackathon", clubName: "Tech Club", popularity: 95 },
  { id: "e2", title: "Photography Walk", description: "Explore campus through your lens. Open to all skill levels.", date: "2026-03-08", time: "16:00", location: "Main Gate", category: "cultural", clubName: "Shutter Club", popularity: 70 },
  { id: "e3", title: "AI/ML Workshop", description: "Hands-on workshop on building recommendation systems with Python.", date: "2026-03-10", time: "14:00", location: "CS Lab 3", category: "workshop", clubName: "Data Science Club", popularity: 88 },
  { id: "e4", title: "Open Mic Night", description: "Poetry, standup comedy, and music performances. Sign up to perform!", date: "2026-03-07", time: "19:00", location: "Amphitheatre", category: "cultural", clubName: "Literary Society", popularity: 82 },
  { id: "e5", title: "Startup Pitch Day", description: "Present your startup ideas to a panel of mentors and investors.", date: "2026-03-12", time: "10:00", location: "Auditorium", category: "seminar", clubName: "E-Cell", popularity: 75 },
  { id: "e6", title: "Badminton Tournament", description: "Inter-department badminton championship. Register in pairs.", date: "2026-03-09", time: "08:00", location: "Sports Complex", category: "sports", clubName: "Sports Committee", popularity: 65 },
  { id: "e7", title: "Resume Building Workshop", description: "Learn how to craft a standout resume with industry experts.", date: "2026-03-11", time: "15:00", location: "Seminar Hall", category: "workshop", clubName: "Placement Cell", popularity: 90 },
  { id: "e8", title: "Movie Night: Interstellar", description: "Outdoor screening with popcorn. Bring your own blankets!", date: "2026-03-06", time: "20:00", location: "Open Ground", category: "cultural", clubName: "Film Club", popularity: 85 },
  { id: "e9", title: "Robotics Demo Day", description: "Watch autonomous robots navigate mazes and complete tasks.", date: "2026-03-13", time: "11:00", location: "Robotics Lab", category: "workshop", clubName: "Robotics Club", popularity: 72 },
  { id: "e10", title: "Debate: AI Ethics", description: "Structured debate on the ethical implications of AI in education.", date: "2026-03-14", time: "16:30", location: "Conference Room", category: "seminar", clubName: "Debate Society", popularity: 60 },
];

export const travelSuggestions: TravelSuggestion[] = [
  { id: "t1", title: "Nandi Hills Sunrise Trek", description: "Early morning trek to catch the sunrise. Perfect for a weekend morning.", estimatedCost: 800, duration: "Half day", location: "Nandi Hills (60km)", rating: 4.6, highlights: ["Sunrise views", "Photography spots", "Breakfast at hilltop café"] },
  { id: "t2", title: "Pondicherry Weekend", description: "Beach town with French Quarter vibes. Great food and cycling.", estimatedCost: 3500, duration: "2 days", location: "Pondicherry (300km)", rating: 4.7, highlights: ["French Quarter walk", "Beach cycling", "Café hopping", "Auroville visit"] },
  { id: "t3", title: "Coorg Coffee Trail", description: "Explore coffee plantations, waterfalls, and misty hills.", estimatedCost: 4000, duration: "2 days", location: "Coorg (250km)", rating: 4.5, highlights: ["Coffee plantation tour", "Abbey Falls", "Raja's Seat viewpoint"] },
  { id: "t4", title: "Mysore Day Trip", description: "Royal palace, markets, and street food in one packed day.", estimatedCost: 1200, duration: "1 day", location: "Mysore (150km)", rating: 4.4, highlights: ["Mysore Palace", "Devaraja Market", "Chamundi Hills"] },
  { id: "t5", title: "Hampi Heritage Ride", description: "Ancient ruins, boulder landscapes, and riverside camping.", estimatedCost: 5000, duration: "3 days", location: "Hampi (350km)", rating: 4.8, highlights: ["Virupaksha Temple", "Coracle ride", "Sunset at Matanga Hill"] },
  { id: "t6", title: "Local Lake Picnic", description: "Pack some snacks and spend an afternoon by the lake. Budget-friendly!", estimatedCost: 200, duration: "Half day", location: "Ulsoor Lake (5km)", rating: 4.0, highlights: ["Boating", "Snack picnic", "Bird watching"] },
];

export const sampleRecommendations: RecommendationCard[] = [
  { id: "r1", type: "food", title: "Veg Thali", subtitle: "Green Bites Café", price: 110, rating: 4.6, reason: "Matches your veg preference and is under your ₹150 budget. Top-rated this week!", tags: ["Veg", "Budget-friendly", "Popular"] },
  { id: "r2", type: "event", title: "AI/ML Workshop", subtitle: "Data Science Club • Mar 10", rating: 4.5, reason: "Based on your interest in technology. 88% of attendees rated it excellent.", tags: ["Tech", "Hands-on", "Free"] },
  { id: "r3", type: "travel", title: "Local Lake Picnic", subtitle: "Ulsoor Lake • Half day", price: 200, rating: 4.0, reason: "Quick getaway within your budget. Great for a study break!", tags: ["Budget", "Nearby", "Relaxing"] },
  { id: "r4", type: "food", title: "Cold Coffee", subtitle: "Green Bites Café", price: 60, rating: 4.5, reason: "Most popular beverage on campus. Perfect for your afternoon energy boost.", tags: ["Beverage", "Popular", "Quick"] },
];
