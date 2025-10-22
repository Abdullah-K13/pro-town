import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, TrendingUp, Mail } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { label: "Active Professionals", value: "156", icon: Users, trend: "+12 this month" },
    { label: "Total Leads", value: "2,847", icon: Mail, trend: "+234 this week" },
    { label: "Revenue", value: "$45,290", icon: DollarSign, trend: "+18% vs last month" },
    { label: "Growth Rate", value: "23%", icon: TrendingUp, trend: "Increasing" },
  ];
  
  const recentActivity = [
    { id: 1, type: "New Professional", name: "Mike Johnson - Electrical", time: "5 min ago" },
    { id: 2, type: "Lead Generated", name: "Jane Doe → John Smith", time: "12 min ago" },
    { id: 3, type: "Verification", name: "Sarah Wilson verified", time: "1 hour ago" },
    { id: 4, type: "New Professional", name: "Bob Davis - HVAC", time: "2 hours ago" },
  ];
  
  return (
    <div className="flex min-h-screen bg-secondary/30">
      <DashboardSidebar role="admin" />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of platform performance</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm font-medium mb-2">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.trend}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-accent hover:bg-accent/90 text-accent-foreground">
                Add New City
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Add Professional
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Generate Report
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between pb-3 border-b border-border last:border-0"
                  >
                    <div>
                      <div className="text-sm font-medium">{activity.type}</div>
                      <div className="text-xs text-muted-foreground">{activity.name}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
