import { Link, useLocation } from "react-router-dom";
import { Building2, LayoutDashboard, Users, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  role: "pro" | "admin";
}

const DashboardSidebar = ({ role }: DashboardSidebarProps) => {
  const location = useLocation();
  
  const proLinks = [
    { to: "/pro/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/pro/profile", icon: UserCircle, label: "My Profile" },
  ];
  
  const adminLinks = [
    { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/professionals", icon: Users, label: "Professionals" },
  ];
  
  const links = role === "pro" ? proLinks : adminLinks;
  
  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border">
      <div className="p-6 border-b border-border">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Building2 className="h-5 w-5 text-accent" />
          Pro Town Network
        </Link>
        <p className="text-xs text-muted-foreground mt-1">
          {role === "pro" ? "Professional Portal" : "Admin Portal"}
        </p>
      </div>
      
      <nav className="p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <Link key={link.to} to={link.to}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isActive && "bg-accent/10 text-accent hover:bg-accent/20"
                )}
              >
                <Icon className="h-4 w-4 mr-2" />
                {link.label}
              </Button>
            </Link>
          );
        })}
      </nav>
      
      <div className="absolute bottom-0 w-64 p-4 border-t border-border">
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
