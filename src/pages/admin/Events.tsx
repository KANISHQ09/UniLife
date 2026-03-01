import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/mock-data";
import { Plus, Edit, Calendar, MapPin, Users } from "lucide-react";

const categoryColors: Record<string, string> = {
  workshop: "bg-campus-blue/10 text-campus-blue",
  hackathon: "bg-campus-teal/10 text-campus-teal",
  cultural: "bg-campus-violet/10 text-campus-violet",
  sports: "bg-campus-amber/10 text-campus-amber",
  seminar: "bg-campus-rose/10 text-campus-rose",
  club_meeting: "bg-muted text-muted-foreground",
};

export default function Events() {
  return (
    <DashboardLayout role="club_admin">
      <div className="p-4 md:p-6 max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold">Event Manager</h1>
            <p className="text-muted-foreground text-sm">Create and manage campus events</p>
          </div>
          <Button className="gradient-hero border-0"><Plus className="w-4 h-4 mr-2" />Add Event</Button>
        </div>

        <div className="grid gap-4">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-[var(--shadow-card)] transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold">{event.title}</h3>
                      <Badge className={categoryColors[event.category] || ""}>{event.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{event.date} at {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{event.popularity}% engagement</span>
                    </div>
                  </div>
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
