import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

const PublicNav = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
          <Building2 className="h-6 w-6 text-accent" />
          Pro Town Network
        </Link>
        
        <div className="flex items-center gap-3">
          <Link to="/pro/login">
            <Button variant="ghost">Pro Login</Button>
          </Link>
          <Link to="/admin/login">
            <Button variant="ghost">Admin</Button>
          </Link>
          <Link to="/directory">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Find Pros
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;
