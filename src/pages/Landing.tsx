import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Compass, Utensils, Calendar, Sparkles, TrendingUp, MapPin, Star } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "AI Chat Assistant", description: "Ask anything — find food, events, or plan trips with natural language", color: "campus-teal" },
  { icon: Compass, title: "Smart Discovery", description: "Trending, new, and hidden gems you haven't tried yet", color: "campus-blue" },
  { icon: Utensils, title: "Campus Food Guide", description: "Every canteen menu with prices, ratings, and diet filters", color: "campus-amber" },
  { icon: Calendar, title: "Events & Activities", description: "Workshops, hackathons, cultural events — never miss out", color: "campus-violet" },
  { icon: MapPin, title: "Weekend Trips", description: "AI-planned getaways that fit your budget and schedule", color: "campus-rose" },
  { icon: Sparkles, title: "Why This?", description: "Every recommendation comes with a clear explanation", color: "campus-teal" },
];

const stats = [
  { value: "45+", label: "Menu Items" },
  { value: "10+", label: "Campus Events" },
  { value: "6", label: "Trip Ideas" },
  { value: "3", label: "Canteens" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const } }),
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-xl font-bold text-gradient">UniLife</Link>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="gradient-hero border-0">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.04]" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              AI-Powered Campus Companion
            </span>
          </motion.div>
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your campus life,{" "}
            <span className="text-gradient">brilliantly simplified</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover food, events, and travel plans through a conversational AI that knows your preferences, budget, and campus.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/signup">
              <Button size="lg" className="gradient-hero border-0 text-base px-8 h-12">
                <Sparkles className="w-4 h-4 mr-2" /> Start Exploring
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-base px-8 h-12">
                I have an account
              </Button>
            </Link>
          </motion.div>

          {/* Chat preview mockup */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="shadow-[var(--shadow-elevated)] overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b">
                <div className="w-3 h-3 rounded-full bg-campus-rose" />
                <div className="w-3 h-3 rounded-full bg-campus-amber" />
                <div className="w-3 h-3 rounded-full bg-campus-teal" />
                <span className="ml-2 text-sm text-muted-foreground font-medium">UniLife Chat</span>
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-end">
                  <div className="gradient-hero rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm text-primary-foreground">Find me lunch under ₹150, I'm vegetarian 🌱</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[85%]">
                    <p className="text-sm">Here are 3 great options for you! 🍽️</p>
                    <div className="mt-2 space-y-2">
                      {[
                        { name: "Veg Thali", place: "Green Bites", price: "₹110", stars: "⭐ 4.6" },
                        { name: "Chole Bhature", place: "Spice Junction", price: "₹100", stars: "⭐ 4.4" },
                        { name: "Masala Dosa", place: "Green Bites", price: "₹80", stars: "⭐ 4.3" },
                      ].map((item) => (
                        <div key={item.name} className="bg-background rounded-lg p-2.5 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-muted-foreground">{item.place}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary">{item.price}</p>
                            <p>{item.stars}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} className="text-center" custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Everything you need on campus</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">One AI assistant that handles food, events, trips, and more — personalized to you.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-full hover:shadow-[var(--shadow-card)] transition-shadow border-border/60">
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-lg bg-${f.color}/10 flex items-center justify-center mb-4`}>
                      <f.icon className={`w-5 h-5 text-${f.color}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="gradient-hero border-0 overflow-hidden">
            <CardContent className="p-10 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to upgrade your campus life?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                Join UniLife and let AI handle the planning while you enjoy the experience.
              </p>
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="text-base px-8 h-12 bg-background text-foreground hover:bg-background/90">
                  <Star className="w-4 h-4 mr-2" /> Get Started Free
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-gradient">UniLife</p>
          <p className="text-sm text-muted-foreground">© 2026 UniLife. Built for students, by students.</p>
        </div>
      </footer>
    </div>
  );
}
