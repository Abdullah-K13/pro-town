import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const ProLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-primary">Pro Town Network</span>
          </div>
          <CardTitle className="text-2xl">Professional Login</CardTitle>
          <CardDescription>
            Sign in to access your professional dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Link to="/pro/dashboard">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Sign In
              </Button>
            </Link>
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a href="#" className="text-accent hover:underline">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProLogin;
