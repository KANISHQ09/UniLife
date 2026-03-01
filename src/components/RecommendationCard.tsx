import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Star, Utensils, Calendar, MapPin, Coffee } from "lucide-react";
import { RecommendationCard as RecType } from "@/types";
import { useState } from "react";

const typeIcons = { food: Utensils, event: Calendar, travel: MapPin, study_break: Coffee };

export default function RecommendationCard({ rec }: { rec: RecType }) {
  const [feedback, setFeedback] = useState<"liked" | "disliked" | null>(null);
  const Icon = typeIcons[rec.type];

  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-display font-semibold truncate">{rec.title}</h4>
              {rec.price && <span className="text-sm font-semibold text-primary whitespace-nowrap">₹{rec.price}</span>}
            </div>
            <p className="text-sm text-muted-foreground">{rec.subtitle}</p>
            {rec.rating && (
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3.5 h-3.5 fill-campus-amber text-campus-amber" />
                <span className="text-xs font-medium">{rec.rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Why this? */}
        <div className="mt-3 p-2.5 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-primary">Why this? </span>
            {rec.reason}
          </p>
        </div>

        {/* Tags & Feedback */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {rec.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-7 w-7 ${feedback === "liked" ? "text-primary bg-primary/10" : ""}`}
              onClick={() => setFeedback(feedback === "liked" ? null : "liked")}
            >
              <ThumbsUp className="w-3.5 h-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-7 w-7 ${feedback === "disliked" ? "text-destructive bg-destructive/10" : ""}`}
              onClick={() => setFeedback(feedback === "disliked" ? null : "disliked")}
            >
              <ThumbsDown className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
