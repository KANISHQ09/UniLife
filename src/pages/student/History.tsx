import DashboardLayout from "@/components/DashboardLayout";
import RecommendationCard from "@/components/RecommendationCard";
import { sampleRecommendations } from "@/data/mock-data";

export default function History() {
  return (
    <DashboardLayout role="student">
      <div className="p-4 md:p-6 max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold">Recommendation History</h1>
          <p className="text-muted-foreground text-sm">Your past suggestions — rate them to improve future picks</p>
        </div>
        <div className="space-y-3">
          {[...sampleRecommendations, ...sampleRecommendations].map((rec, i) => (
            <RecommendationCard key={`${rec.id}-${i}`} rec={{ ...rec, id: `${rec.id}-${i}` }} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
