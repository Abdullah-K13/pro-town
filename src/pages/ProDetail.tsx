import PublicNav from "@/components/PublicNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Phone, Mail, Building2 } from "lucide-react";
import { useParams } from "react-router-dom";

const ProDetail = () => {
  const { id } = useParams();
  
  // Mock data - would fetch based on id in real app
  const pro = {
    id,
    name: "John Smith",
    category: "Plumbing",
    city: "New York",
    verified: true,
    phone: "(555) 123-4567",
    email: "john.smith@example.com",
    description: "Licensed and insured plumber with over 15 years of experience serving the New York area. Specializing in residential and commercial plumbing repairs, installations, and emergency services.",
    services: ["Emergency Repairs", "Pipe Installation", "Water Heater Service", "Drain Cleaning"],
  };
  
  return (
    <div className="min-h-screen bg-secondary/30">
      <PublicNav />
      
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-24 w-24 text-muted-foreground" />
                </div>
                {pro.verified && (
                  <Badge className="w-full justify-center bg-accent hover:bg-accent/90">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Verified Professional
                  </Badge>
                )}
              </div>
              
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold mb-2">{pro.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{pro.category}</p>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  {pro.city}
                </div>
                
                <div className="space-y-4 mb-6">
                  <h2 className="text-xl font-semibold">About</h2>
                  <p className="text-muted-foreground">{pro.description}</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h2 className="text-xl font-semibold">Services</h2>
                  <div className="flex flex-wrap gap-2">
                    {pro.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {pro.phone}
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    {pro.email}
                  </div>
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                  Share My Contact Info
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProDetail;
