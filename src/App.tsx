import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/student/Chat";
import Discover from "./pages/student/Discover";
import Profile from "./pages/student/Profile";
import History from "./pages/student/History";
import Events from "./pages/admin/Events";
import CreatorTools from "./pages/admin/CreatorTools";
import AdminAnalytics from "./pages/admin/Analytics";
import MenuManager from "./pages/canteen/MenuManager";
import CanteenAnalytics from "./pages/canteen/CanteenAnalytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Student */}
          <Route path="/student/chat" element={<Chat />} />
          <Route path="/student/discover" element={<Discover />} />
          <Route path="/student/profile" element={<Profile />} />
          <Route path="/student/history" element={<History />} />
          {/* Club Admin */}
          <Route path="/admin/events" element={<Events />} />
          <Route path="/admin/creator" element={<CreatorTools />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          {/* Canteen Owner */}
          <Route path="/canteen/menu" element={<MenuManager />} />
          <Route path="/canteen/analytics" element={<CanteenAnalytics />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
