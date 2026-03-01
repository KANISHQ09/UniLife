import { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import RecommendationCard from "@/components/RecommendationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";
import { ChatMessage, RecommendationCard as RecType } from "@/types";
import { sampleRecommendations } from "@/data/mock-data";
import { motion, AnimatePresence } from "framer-motion";

const quickPrompts = [
  "Find lunch under ₹150 🍽️",
  "Events happening this week 📅",
  "Plan a weekend trip under ₹2000 🗺️",
  "Study break ideas ☕",
];

// Mock AI responses
function getMockResponse(input: string): { text: string; recommendations: RecType[] } {
  const lower = input.toLowerCase();
  if (lower.includes("lunch") || lower.includes("food") || lower.includes("eat")) {
    return {
      text: "Here are some great options based on your preferences! 🍽️",
      recommendations: sampleRecommendations.filter((r) => r.type === "food"),
    };
  }
  if (lower.includes("event") || lower.includes("workshop") || lower.includes("hackathon")) {
    return {
      text: "Check out these upcoming events on campus! 🎉",
      recommendations: sampleRecommendations.filter((r) => r.type === "event"),
    };
  }
  if (lower.includes("trip") || lower.includes("travel") || lower.includes("weekend")) {
    return {
      text: "Here's a budget-friendly getaway idea for you! 🗺️",
      recommendations: sampleRecommendations.filter((r) => r.type === "travel"),
    };
  }
  return {
    text: "I can help you find food, events, or plan trips! Try asking something like 'Find lunch under ₹150' or 'Events this week'.",
    recommendations: [],
  };
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hey! 👋 I'm your UniLife assistant. Ask me about campus food, events, or trips — I'll find the best options for you!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: text, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      const response = getMockResponse(text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.text,
        recommendations: response.recommendations.length > 0 ? response.recommendations : undefined,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <DashboardLayout role="student">
      <div className="flex flex-col h-[calc(100vh-3.5rem)] md:h-screen">
        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[85%] md:max-w-[70%] ${msg.role === "user" ? "gradient-hero rounded-2xl rounded-tr-md px-4 py-3" : ""}`}>
                  {msg.role === "user" ? (
                    <p className="text-sm text-primary-foreground">{msg.content}</p>
                  ) : (
                    <div className="space-y-3">
                      <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3">
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      {msg.recommendations && (
                        <div className="space-y-2 pl-1">
                          {msg.recommendations.map((rec) => (
                            <RecommendationCard key={rec.id} rec={rec} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Prompts */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <Button key={prompt} variant="outline" size="sm" className="text-xs" onClick={() => sendMessage(prompt)}>
                  <Sparkles className="w-3 h-3 mr-1" />
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t bg-card">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex gap-2 max-w-3xl mx-auto"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about food, events, or trips..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button type="submit" size="icon" className="gradient-hero border-0" disabled={!input.trim() || isTyping}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
