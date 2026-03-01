import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Sparkles, FileText, Share2, Image } from "lucide-react";
import { useState } from "react";

export default function CreatorTools() {
  const [descInput, setDescInput] = useState("");
  const [descOutput, setDescOutput] = useState("");
  const [captionInput, setCaptionInput] = useState("");
  const [captionTone, setCaptionTone] = useState("casual");
  const [captionOutput, setCaptionOutput] = useState("");

  const generateDescription = () => {
    setDescOutput("🎉 **HackCampus 2026** — The ultimate 24-hour coding challenge is here!\n\nGot a world-changing idea? Bring your laptop, your team, and your A-game. With a ₹50K prize pool and mentors from top startups, this is your chance to build something amazing.\n\n📅 March 15, 2026 | 📍 Innovation Lab\n\nRegister now — limited spots available!");
  };

  const generateCaption = () => {
    const captions: Record<string, string> = {
      casual: "🔥 HackCampus 2026 is ON! 24 hours of coding, ₹50K in prizes, and endless pizza 🍕 Grab your squad and register now! #HackCampus #CodingLife",
      professional: "Join us for HackCampus 2026 — a 24-hour hackathon with a ₹50,000 prize pool. Network with industry mentors and showcase your innovation. Register today.",
      hype: "🚀 ARE YOU READY?! 💻 HackCampus 2026 drops March 15! ₹50K up for grabs! 24 HOURS of pure adrenaline coding! DON'T MISS THIS! 🔥🔥🔥 #HackCampus",
    };
    setCaptionOutput(captions[captionTone] || captions.casual);
  };

  return (
    <DashboardLayout role="club_admin">
      <div className="p-4 md:p-6 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold">AI Creator Tools</h1>
          <p className="text-muted-foreground text-sm">Generate event descriptions, captions, and more with AI</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Description Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2"><FileText className="w-4 h-4" /> Event Description</CardTitle>
              <CardDescription>Turn bullet points into a polished event description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="Enter key points, e.g.:&#10;- 24-hour hackathon&#10;- ₹50K prize pool&#10;- March 15 at Innovation Lab" value={descInput} onChange={(e) => setDescInput(e.target.value)} rows={5} />
              <Button className="w-full gradient-hero border-0" onClick={generateDescription}>
                <Sparkles className="w-4 h-4 mr-2" /> Generate Description
              </Button>
              {descOutput && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm whitespace-pre-wrap">{descOutput}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Caption Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-lg flex items-center gap-2"><Share2 className="w-4 h-4" /> Social Caption</CardTitle>
              <CardDescription>Generate captions for social media posts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="Describe your event briefly..." value={captionInput} onChange={(e) => setCaptionInput(e.target.value)} rows={3} />
              <div className="space-y-2">
                <Label>Tone</Label>
                <Select value={captionTone} onValueChange={setCaptionTone}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual & Fun</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="hype">Hype & Energetic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full gradient-hero border-0" onClick={generateCaption}>
                <Sparkles className="w-4 h-4 mr-2" /> Generate Caption
              </Button>
              {captionOutput && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm">{captionOutput}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
