import DashboardLayout from "@/components/DashboardLayout";
import RecommendationCard from "@/components/RecommendationCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuItems, events, travelSuggestions } from "@/data/mock-data";
import { RecommendationCard as RecType } from "@/types";
import { TrendingUp, Sparkles, Star } from "lucide-react";

function toRecCards(type: "food" | "event" | "travel", items: any[]): RecType[] {
  if (type === "food") {
    return items.map((i) => ({
      id: i.id, type: "food", title: i.name, subtitle: i.canteenName,
      price: i.price, rating: i.rating, reason: `Popular with ${i.popularity}% of students`, tags: [i.isVeg ? "Veg" : "Non-Veg", i.category],
    }));
  }
  if (type === "event") {
    return items.map((i) => ({
      id: i.id, type: "event", title: i.title, subtitle: `${i.clubName} • ${i.date}`,
      rating: i.popularity / 20, reason: `Trending with ${i.popularity}% engagement`, tags: [i.category, i.location],
    }));
  }
  return items.map((i) => ({
    id: i.id, type: "travel", title: i.title, subtitle: `${i.location} • ${i.duration}`,
    price: i.estimatedCost, rating: i.rating, reason: i.highlights[0], tags: [i.duration, "Travel"],
  }));
}

export default function Discover() {
  const trendingFood = [...menuItems].sort((a, b) => b.popularity - a.popularity).slice(0, 4);
  const trendingEvents = [...events].sort((a, b) => b.popularity - a.popularity).slice(0, 4);
  const hiddenGems = menuItems.filter((i) => i.popularity < 70 && i.rating >= 4.0);

  return (
    <DashboardLayout role="student">
      <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
        <div>
          <h1 className="font-display text-2xl font-bold">Discover</h1>
          <p className="text-muted-foreground text-sm">Explore trending, new, and hidden gems on campus</p>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-4">
            <section>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h2 className="font-display font-semibold">Trending This Week</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {toRecCards("food", trendingFood.slice(0, 2)).map((r) => <RecommendationCard key={r.id} rec={r} />)}
                {toRecCards("event", trendingEvents.slice(0, 2)).map((r) => <RecommendationCard key={r.id} rec={r} />)}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-campus-amber" />
                <h2 className="font-display font-semibold">Hidden Gems</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {toRecCards("food", hiddenGems.slice(0, 4)).map((r) => <RecommendationCard key={r.id} rec={r} />)}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-campus-violet" />
                <h2 className="font-display font-semibold">Weekend Getaways</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {toRecCards("travel", travelSuggestions.slice(0, 4)).map((r) => <RecommendationCard key={r.id} rec={r} />)}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="food" className="mt-4">
            <div className="grid md:grid-cols-2 gap-3">
              {toRecCards("food", menuItems).map((r) => <RecommendationCard key={r.id} rec={r} />)}
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-4">
            <div className="grid md:grid-cols-2 gap-3">
              {toRecCards("event", events).map((r) => <RecommendationCard key={r.id} rec={r} />)}
            </div>
          </TabsContent>

          <TabsContent value="travel" className="mt-4">
            <div className="grid md:grid-cols-2 gap-3">
              {toRecCards("travel", travelSuggestions).map((r) => <RecommendationCard key={r.id} rec={r} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
