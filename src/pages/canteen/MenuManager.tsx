import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuItems } from "@/data/mock-data";
import { Plus, Edit, Star, TrendingUp } from "lucide-react";

export default function MenuManager() {
  const myItems = menuItems.filter((i) => i.canteenId === "c1"); // Mock: show Green Bites items

  return (
    <DashboardLayout role="canteen_owner">
      <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold">Menu Manager</h1>
            <p className="text-muted-foreground text-sm">Green Bites Café — Manage your menu items</p>
          </div>
          <Button className="gradient-hero border-0"><Plus className="w-4 h-4 mr-2" />Add Item</Button>
        </div>

        <div className="grid gap-3">
          {myItems.map((item) => (
            <Card key={item.id} className="hover:shadow-[var(--shadow-card)] transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${item.isVeg ? "bg-primary/10 text-primary" : "bg-campus-rose/10 text-campus-rose"}`}>
                    {item.isVeg ? "V" : "N"}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{item.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-campus-amber text-campus-amber" />{item.rating}</span>
                      <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" />{item.popularity}%</span>
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-primary">₹{item.price}</span>
                  <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
