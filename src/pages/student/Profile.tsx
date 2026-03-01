import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const allInterests = ["Technology", "Sports", "Music", "Art", "Photography", "Gaming", "Reading", "Cooking", "Travel", "Fitness"];
const foodOptions = ["Veg", "Non-Veg", "Vegan"];

export default function Profile() {
  const [name, setName] = useState("Alex Student");
  const [campus, setCampus] = useState("Main Campus");
  const [interests, setInterests] = useState(["Technology", "Travel", "Music"]);
  const [foodPrefs, setFoodPrefs] = useState(["Veg"]);
  const [budgetMin, setBudgetMin] = useState("50");
  const [budgetMax, setBudgetMax] = useState("200");

  const toggleItem = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  return (
    <DashboardLayout role="student">
      <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground text-sm">Customize your preferences for better recommendations</p>
        </div>

        <Card>
          <CardHeader><CardTitle className="font-display text-lg">Basic Info</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Campus</Label>
              <Input value={campus} onChange={(e) => setCampus(e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-display text-lg">Interests</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {allInterests.map((i) => (
                <Badge
                  key={i}
                  variant={interests.includes(i) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleItem(interests, setInterests, i)}
                >
                  {i}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-display text-lg">Food Preferences</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {foodOptions.map((f) => (
                <Badge
                  key={f}
                  variant={foodPrefs.includes(f) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleItem(foodPrefs, setFoodPrefs, f)}
                >
                  {f}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-display text-lg">Budget Range</CardTitle></CardHeader>
          <CardContent className="flex gap-4">
            <div className="space-y-2 flex-1">
              <Label>Min (₹)</Label>
              <Input type="number" value={budgetMin} onChange={(e) => setBudgetMin(e.target.value)} />
            </div>
            <div className="space-y-2 flex-1">
              <Label>Max (₹)</Label>
              <Input type="number" value={budgetMax} onChange={(e) => setBudgetMax(e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <Button className="w-full gradient-hero border-0">Save Preferences</Button>
      </div>
    </DashboardLayout>
  );
}
