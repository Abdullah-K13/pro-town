import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle2, TrendingUp } from "lucide-react";

const ProDashboard = () => {
  const stats = [
    { label: "Total Leads", value: "24", icon: Mail, trend: "+12%" },
    { label: "Verification Status", value: "Verified", icon: CheckCircle2, color: "text-accent" },
    { label: "Response Rate", value: "94%", icon: TrendingUp, trend: "+5%" },
  ];
  
  const recentLeads = [
    { id: 1, name: "Jane Doe", service: "Kitchen Plumbing", date: "2 hours ago" },
    { id: 2, name: "Bob Wilson", service: "Bathroom Repair", date: "5 hours ago" },
    { id: 3, name: "Alice Brown", service: "Water Heater", date: "1 day ago" },
  ];
  
  return (
    <div className="flex min-h-screen bg-secondary/30">
      <DashboardSidebar role="pro" />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, John!</h1>
          <p className="text-muted-foreground">Here's what's happening with your business</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`h-5 w-5 ${stat.color || "text-muted-foreground"}`} />
                    {stat.trend && (
                      <Badge variant="secondary" className="text-xs">
                        {stat.trend}
                      </Badge>
                    )}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="font-semibold">{lead.name}</div>
                    <div className="text-sm text-muted-foreground">{lead.service}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{lead.date}</div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
              View All Leads
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProDashboard;
