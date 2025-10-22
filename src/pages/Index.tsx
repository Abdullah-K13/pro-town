import React, { useState } from "react";
import PublicNav from "@/components/PublicNav";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle2,
  Zap,
  DollarSign,
  Users,
  ShieldCheck,
  Timer,
  Link2,
  TrendingUp,
  Wrench,
  Phone,
  Mail,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-professionals.jpg";

// US-only target: full state list (including DC)
const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine",
  "Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
  "Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia",
  "Washington","West Virginia","Wisconsin","Wyoming"
];

// ---------------------------------------------
// Landing page with Customer/Professional views
// Keep theme/colors; adds a top toggle & tailored sections
// ---------------------------------------------

const Index: React.FC = () => {
  const [mode, setMode] = useState<"customer" | "pro">("customer");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PublicNav />

      {/* Top toggle */}
      <div className="sticky top-0 z-30 border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">View as</span>
          <div className="flex rounded-full p-1 bg-muted">
            <Button
              variant={mode === "customer" ? "default" : "ghost"}
              className={`rounded-full px-4 h-8 ${
                mode === "customer" ? "bg-accent text-accent-foreground" : ""
              }`}
              onClick={() => setMode("customer")}
            >
              Customer
            </Button>
            <Button
              variant={mode === "pro" ? "default" : "ghost"}
              className={`rounded-full px-4 h-8 ${
                mode === "pro" ? "bg-accent text-accent-foreground" : ""
              }`}
              onClick={() => setMode("pro")}
            >
              Professional
            </Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[640px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/90" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {mode === "customer" ? (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Find Verified Local Professionals
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                We connect you directly with trusted pros — no commissions, no middlemen. Fast, transparent, and verified.
              </p>
              {/* Quick search */}
              <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {US_STATES.map((s) => (
                        <SelectItem key={s} value={s.toLowerCase().replaceAll(' ', '-')}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="handyman">Handyman</SelectItem>
                      <SelectItem value="electrician">Electrician</SelectItem>
                      <SelectItem value="plumber">Plumber</SelectItem>
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
            </>
          ) : (
            <>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get Listed. Get Verified. Grow Your Business.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Join Pro Town Network. One subscription, zero commissions. Clients contact you directly.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <Link to="/pro/login">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Become a Pro
                  </Button>
                </Link>
                <Link to="/pro/subscribe">
                  <Button size="lg" variant="secondary" className="text-primary">
                    View Plans
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Shared trust band */}
      <section className="py-6 border-y border-border bg-card">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">2,500+</p>
            <p className="text-sm text-muted-foreground">Verified Pros</p>
          </div>
          <div>
            <p className="text-3xl font-bold">30+</p>
            <p className="text-sm text-muted-foreground">Cities Covered</p>
          </div>
          <div>
            <p className="text-3xl font-bold"><span className="align-middle">&lt; 10 min</span></p>
            <p className="text-sm text-muted-foreground">Avg. First Response</p>
          </div>
          <div>
            <p className="text-3xl font-bold">0%</p>
            <p className="text-sm text-muted-foreground">Commission</p>
          </div>
        </div>
      </section>

      {mode === "customer" ? <CustomerSections /> : <ProSections />}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Pro Town Network. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

// ------------------------------
// Customer view sections
// ------------------------------
const CustomerSections: React.FC = () => {
  return (
    <>
      {/* Why choose us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pro Town Network?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={ShieldCheck}
              title="Verified Professionals"
              description="ID & background checks, trade verification, and ongoing quality audits."
            />
            <FeatureCard
              icon={Zap}
              title="Fast Lead Sharing"
              description="We route your request to relevant pros in minutes so you get quick responses."
            />
            <FeatureCard
              icon={Link2}
              title="Direct Connection"
              description="You contact the pro directly. No platform commission — ever."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <StepCard step="1" title="Tell us your need" icon={<Wrench className="w-5 h-5" />}>
              Post a brief request with your city and service type.
            </StepCard>
            <StepCard step="2" title="We verify & match" icon={<ShieldCheck className="w-5 h-5" />}>
              We match you with vetted professionals in your area.
            </StepCard>
            <StepCard step="3" title="Connect directly" icon={<Phone className="w-5 h-5" />}>
              Get the pro’s phone & email to coordinate instantly.
            </StepCard>
            <StepCard step="4" title="Hire with confidence" icon={<BadgeCheck className="w-5 h-5" />}>
              Pay the pro directly. We stay out of the way.
            </StepCard>
          </div>
          <div className="text-center mt-10">
            <Link to="/directory">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Browse Professionals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof band */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Trusted by Homeowners & Businesses</h3>
          <p className="text-white/90 max-w-3xl mx-auto">
            Our verification and review system keeps quality high. If a job doesn’t go right, we’ll help you find a solution fast.
          </p>
        </div>
      </section>
    </>
  );
};

// ------------------------------
// Pro view sections
// ------------------------------
const ProSections: React.FC = () => {
  return (
    <>
      {/* Benefits */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Built for Professionals</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={CheckCircle2}
              title="Verified Listing"
              description="Stand out with a verified badge after our checks."
            />
            <FeatureCard
              icon={DollarSign}
              title="Subscription — No Commission"
              description="Simple monthly or yearly plans. Keep 100% of what you earn."
            />
            <FeatureCard
              icon={Users}
              title="Referrals & Leads"
              description="A dedicated referral link and portal to share with customers."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Choose a Plan</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <PricingCard
              title="Monthly"
              price="$20"
              subtitle="Billed monthly"
              features={[
                "Verified profile & listing",
                "Direct customer contact (phone/email)",
                "Lead notifications",
                "Referral link & portal",
                "City & category targeting",
              ]}
              ctaText="Start Monthly"
              ctaTo="/pro/subscribe?plan=monthly"
            />
            <PricingCard
              title="Yearly"
              price="$150"
              subtitle="Best value — 2 months free"
              features={[
                "All Monthly features",
                "Priority placement",
                "Early access to new categories",
                "Badge: Yearly Verified",
              ]}
              highlight
              ctaText="Start Yearly"
              ctaTo="/pro/subscribe?plan=yearly"
            />
          </div>
        </div>
      </section>

      {/* How it works for Pros */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold mb-8 text-center">How You’ll Work on Pro Town</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <StepCardLight title="Apply & Verify" icon={<ShieldCheck className="w-5 h-5" />}>Submit ID/trade documents and pass our checks.</StepCardLight>
            <StepCardLight title="Subscribe & Go Live" icon={<TrendingUp className="w-5 h-5" />}>Pick Monthly or Yearly — your listing goes live.</StepCardLight>
            <StepCardLight title="Get Leads Directly" icon={<Mail className="w-5 h-5" />}>Customers contact you via phone/email — no commission.</StepCardLight>
          </div>
          <div className="text-center mt-10">
            <Link to="/pro/login">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Listed Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Admin/Demographics note (public facing, brief) */}
      <section className="py-12 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h4 className="text-xl font-semibold mb-2">Smart Matching & Insights</h4>
          <p className="text-muted-foreground">
            Behind the scenes, our admin dashboard tracks referrals, registrations, and where demand is highest by city/state — helping us route leads faster and keep your calendar full.
          </p>
        </div>
      </section>
    </>
  );
};

// ------------------------------
// Small shared components
// ------------------------------
const StepCard: React.FC<{
  step?: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ step, title, icon, children }) => (
  <div className="rounded-2xl bg-white border border-border p-5 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      {step && (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">
          {step}
        </span>
      )}
      {icon}
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-sm text-muted-foreground">{children}</p>
  </div>
);

const StepCardLight: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="rounded-2xl bg-white/10 border border-white/20 p-5">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-sm text-white/90">{children}</p>
  </div>
);

const PricingCard: React.FC<{
  title: string;
  price: string;
  subtitle?: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
  ctaTo: string;
}> = ({ title, price, subtitle, features, highlight, ctaText, ctaTo }) => (
  <div
    className={`relative rounded-2xl border p-6 md:p-8 ${
      highlight
        ? "border-accent shadow-xl ring-2 ring-accent/40 bg-white"
        : "border-border bg-card shadow-sm"
    }`}
  >
    {highlight && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 shadow">
        Best Value
      </span>
    )}
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <div className="text-4xl font-bold mb-1">{price}</div>
    {subtitle && <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>}
    <ul className="space-y-2 mb-6">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
          <span className="text-foreground/90">{f}</span>
        </li>
      ))}
    </ul>
    <Link to={ctaTo}>
      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
        {ctaText}
      </Button>
    </Link>
  </div>
);
