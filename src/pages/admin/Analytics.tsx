import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const engagementData = [
  { name: "HackCampus", value: 95 },
  { name: "Resume WS", value: 90 },
  { name: "AI/ML WS", value: 88 },
  { name: "Movie Night", value: 85 },
  { name: "Open Mic", value: 82 },
];

const categoryData = [
  { name: "Workshop", value: 35, color: "hsl(215, 80%, 56%)" },
  { name: "Cultural", value: 30, color: "hsl(260, 70%, 58%)" },
  { name: "Hackathon", value: 15, color: "hsl(160, 84%, 39%)" },
  { name: "Sports", value: 12, color: "hsl(38, 92%, 60%)" },
  { name: "Seminar", value: 8, color: "hsl(350, 80%, 60%)" },
];

export default function AdminAnalytics() {
  return (
    <DashboardLayout role="club_admin">
      <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold">Event Analytics</h1>
          <p className="text-muted-foreground text-sm">Track engagement and attendance trends</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[{ label: "Total Events", value: "10" }, { label: "Avg Engagement", value: "78%" }, { label: "This Week", value: "4" }].map((s) => (
            <Card key={s.label}>
              <CardContent className="p-4 text-center">
                <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="font-display text-lg">Top Events by Engagement</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="font-display text-lg">Events by Category</CardTitle></CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                    {categoryData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
