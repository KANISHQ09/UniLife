import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Compass, Utensils, Calendar, Sparkles, TrendingUp, MapPin, Star } from "lucide-react";
import BorderAnimationButton from "@/components/nurui/border-button";
import CountUp from "react-countup";
import { InfoCard } from "@/components/nurui/info-card";

const features = [
  { icon: MessageSquare, title: "AI Chat Assistant", description: "Ask anything — find food, events, or plan trips with natural language", color: "campus-teal" },
  { icon: Compass, title: "Smart Discovery", description: "Trending, new, and hidden gems you haven't tried yet", color: "campus-blue" },
  { icon: Utensils, title: "Campus Food Guide", description: "Every canteen menu with prices, ratings, and diet filters", color: "campus-amber" },
  { icon: Calendar, title: "Events & Activities", description: "Workshops, hackathons, cultural events — never miss out", color: "campus-violet" },
  { icon: MapPin, title: "Weekend Trips", description: "AI-planned getaways that fit your budget and schedule", color: "campus-rose" },
  { icon: Sparkles, title: "Why This?", description: "Every recommendation comes with a clear explanation", color: "campus-teal" },
];

const stats = [
  { value: 5000, label: "Active Students" },
  { value: 120, label: "Campus Events" },
  { value: 350, label: "Food Spots" },
  { value: 25, label: "Universities" }
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
          <Link to="/" className="font-display text-xl font-bold text-gradient flex items-center gap-3">
            <img src="/logo.png" alt="UniLife" className="w-20 h-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="border-2 border-transparent hover:border-black/80 hover:bg-white transform transition duration-200 hover:scale-105 rounded-md px-4">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-transparent border-2 p-5 text-black hover:bg-black hover:text-white transform transition duration-200 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.04]" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className="font-display tracking-tight mb-6 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-6xl md:text-8xl font-medium">Your campus life,</span>
            <span className="block mt-2 text-3xl md:text-4xl font-medium text-muted-foreground">brilliantly simplified !!!</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
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
              <BorderAnimationButton text="Start Exploring" className="size-lg hover:scale-105 transform transition-transform duration-200 ease-out" />
            </Link>
            <Link to="/login">
              <Button size="lg" className="text-base bg-black text-white px-8 h-12 transform transition-transform duration-200 ease-out hover:scale-105 hover:bg-black/90 ">
                I have an account
              </Button>
            </Link>
          </motion.div>

          {/* Chat preview mockup */}
          <motion.div
            className="mt-12 sm:mt-16 lg:mt-20 w-full max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="shadow-[var(--shadow-elevated)] overflow-hidden">

              {/* Header */}
              <div className="bg-muted/50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 border-b">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-campus-rose" />
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-campus-amber" />
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-campus-teal" />

                <span className="ml-2 text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">
                  UniLife Chat
                </span>
              </div>

              <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">

                {/* User message */}
                <div className="flex justify-end">
                  <div className="gradient-hero rounded-2xl sm:rounded-3xl rounded-tr-md px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-4 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
                    <p className="text-sm sm:text-base lg:text-lg text-primary-foreground">
                      Find me lunch under ₹150, I'm vegetarian 🌱
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl sm:rounded-3xl rounded-tl-md px-4 sm:px-6 lg:px-7 py-3 sm:py-4 max-w-[95%] sm:max-w-[85%] lg:max-w-[75%]">

                    <p className="text-sm sm:text-base lg:text-lg font-semibold">
                      Here are 3 great options for you! 🍽️
                    </p>

                    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                      {[
                        { name: "Veg Thali", place: "Green Bites", price: "₹110", stars: "⭐ 4.6" },
                        { name: "Chole Bhature", place: "Spice Junction", price: "₹100", stars: "⭐ 4.4" },
                        { name: "Masala Dosa", place: "Green Bites", price: "₹80", stars: "⭐ 4.3" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="bg-background rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 flex items-center justify-between text-sm sm:text-base"
                        >
                          <div>
                            <p className="font-semibold text-sm sm:text-base">
                              {item.name}
                            </p>
                            <p className="text-muted-foreground text-xs sm:text-sm">
                              {item.place}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold text-primary text-sm sm:text-base lg:text-lg">
                              {item.price}
                            </p>
                            <p className="text-xs sm:text-sm">{item.stars}</p>
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
              <motion.div
                key={stat.label}
                className="text-center"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="font-display text-3xl md:text-5xl font-bold text-blue-500">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>

                <p className="text-xl text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div className="text-center mb-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Everything you need on campus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">One AI assistant that handles food, events, trips, and more — personalized to you.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <InfoCard
                  icon={<f.icon className="w-5 h-5" />}
                  title={f.title}
                  description={f.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="text-black border-2 overflow-hidden">
            <CardContent className="p-10 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to upgrade your campus life?
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-8">
                Join UniLife and let AI handle the planning while you enjoy the experience.
              </p>
              <Link to="/signup">
              <BorderAnimationButton text="Get Started Free" className="size-lg hover:scale-105 transform transition-transform duration-200 ease-out" />
            </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-display text-xl font-bold text-gradient flex items-center gap-3">
            <img src="/logo.png" alt="UniLife" className="w-20 h-auto object-contain" />
          </Link>
          <p className="text-sm text-muted-foreground">© 2026 UniLife. Built for students, by students.</p>
        </div>
      </footer>
    </div>
  );
}
