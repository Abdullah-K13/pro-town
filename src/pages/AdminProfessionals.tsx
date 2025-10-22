import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Search, MoreVertical } from "lucide-react";

const AdminProfessionals = () => {
  const professionals = [
    { id: 1, name: "John Smith", city: "New York", category: "Plumbing", verified: true, subscription: "Premium" },
    { id: 2, name: "Sarah Johnson", city: "New York", category: "Electrical", verified: true, subscription: "Basic" },
    { id: 3, name: "Mike Davis", city: "Los Angeles", category: "HVAC", verified: false, subscription: "Premium" },
    { id: 4, name: "Emily Brown", city: "Chicago", category: "Carpentry", verified: true, subscription: "Basic" },
    { id: 5, name: "Robert Wilson", city: "Houston", category: "Plumbing", verified: true, subscription: "Premium" },
  ];
  
  return (
    <div className="flex min-h-screen bg-secondary/30">
      <DashboardSidebar role="admin" />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Professionals Management</h1>
          <p className="text-muted-foreground">Manage and verify professional accounts</p>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Professionals</CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search professionals..."
                    className="pl-10 w-64"
                  />
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Add Professional
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 font-semibold">City</th>
                    <th className="text-left py-3 px-4 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 font-semibold">Verified</th>
                    <th className="text-left py-3 px-4 font-semibold">Subscription</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {professionals.map((pro) => (
                    <tr key={pro.id} className="border-b border-border hover:bg-secondary/50">
                      <td className="py-4 px-4 font-medium">{pro.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">{pro.city}</td>
                      <td className="py-4 px-4 text-muted-foreground">{pro.category}</td>
                      <td className="py-4 px-4">
                        <Switch checked={pro.verified} />
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant={pro.subscription === "Premium" ? "default" : "secondary"}>
                          {pro.subscription}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminProfessionals;
