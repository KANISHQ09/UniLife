import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageSquare, Compass, User, History, Calendar, Sparkles, BarChart3, UtensilsCrossed, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const studentNav: NavItem[] = [
  { label: "Chat", path: "/student/chat", icon: MessageSquare },
  { label: "Discover", path: "/student/discover", icon: Compass },
  { label: "History", path: "/student/history", icon: History },
  { label: "Profile", path: "/student/profile", icon: User },
];

const adminNav: NavItem[] = [
  { label: "Events", path: "/admin/events", icon: Calendar },
  { label: "Creator Tools", path: "/admin/creator", icon: Sparkles },
  { label: "Analytics", path: "/admin/analytics", icon: BarChart3 },
];

const canteenNav: NavItem[] = [
  { label: "Menu", path: "/canteen/menu", icon: UtensilsCrossed },
  { label: "Analytics", path: "/canteen/analytics", icon: BarChart3 },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "student" | "club_admin" | "canteen_owner";
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = role === "student" ? studentNav : role === "club_admin" ? adminNav : canteenNav;
  const roleLabel = role === "student" ? "Student" : role === "club_admin" ? "Club Admin" : "Canteen Owner";

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <div className="p-5 bg-white border-b border-sidebar-border">
          <Link to="/" className="font-display text-xl font-bold text-gradient flex items-center gap-3">
            <img src="/logo.png" alt="UniLife" className="w-20 h-auto object-contain" />
          </Link>
          <p className="text-xs text-black mt-1">{roleLabel} Dashboard</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent",
                  location.pathname === item.path && "bg-sidebar-accent text-sidebar-foreground font-medium"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-sidebar-border">
          <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground/50 hover:text-sidebar-foreground" onClick={() => navigate("/")}>
            <LogOut className="w-4 h-4" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="flex-1 flex flex-col">
        <header className="md:hidden flex items-center justify-between h-14 px-4 border-b bg-card">
          <Link to="/" className="font-display text-xl font-bold text-gradient flex items-center gap-3">
            <img src="/logo.png" alt="UniLife" className="w-20 h-auto object-contain" />
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </header>

        {mobileOpen && (
          <div className="md:hidden bg-card border-b p-2 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3",
                    location.pathname === item.path && "bg-muted font-medium"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
