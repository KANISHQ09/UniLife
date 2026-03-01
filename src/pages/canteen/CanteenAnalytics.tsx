import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { menuItems } from "@/data/mock-data";

export default function CanteenAnalytics() {
  const myItems = menuItems.filter((i) => i.canteenId === "c1").sort((a, b) => b.popularity - a.popularity);
  const chartData = myItems.map((i) => ({ name: i.name, popularity: i.popularity, rating: i.rating * 20 }));

  return (
    <DashboardLayout role="canteen_owner">
      <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold">Menu Analytics</h1>
          <p className="text-muted-foreground text-sm">Green Bites Café — Popular items and trends</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[{ label: "Total Items", value: myItems.length.toString() }, { label: "Avg Rating", value: (myItems.reduce((a, b) => a + b.rating, 0) / myItems.length).toFixed(1) }, { label: "Top Item", value: myItems[0]?.name || "-" }].map((s) => (
            <Card key={s.label}>
              <CardContent className="p-4 text-center">
                <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle className="font-display text-lg">Popularity by Item</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="popularity" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
