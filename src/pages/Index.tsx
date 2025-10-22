import PublicNav from "@/components/PublicNav";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-professionals.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PublicNav />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/90" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Verified Local Professionals
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Connect with trusted pros in your city. Fast lead sharing, simple pricing.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nyc">New York</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                  <SelectItem value="houston">Houston</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="hvac">HVAC</SelectItem>
                  <SelectItem value="carpentry">Carpentry</SelectItem>
                </SelectContent>
              </Select>
              
              <Link to="/directory" className="w-full">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-10">
                  Find Pros
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose Pro Town Network?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={CheckCircle2}
              title="Verified Professionals"
              description="Every pro is verified to ensure quality and trustworthiness for your projects."
            />
            <FeatureCard
              icon={Zap}
              title="Fast Lead Sharing"
              description="Connect with customers instantly through our streamlined lead sharing system."
            />
            <FeatureCard
              icon={DollarSign}
              title="Simple Pricing"
              description="Transparent pricing with no hidden fees. Pay only for the leads you receive."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of professionals already using Pro Town Network
          </p>
          <Link to="/pro/login">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started as a Pro
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Pro Town Network. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
