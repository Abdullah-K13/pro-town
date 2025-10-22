import PublicNav from "@/components/PublicNav";
import ProCard from "@/components/ProCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockPros = [
  { id: "1", name: "John Smith", category: "Plumbing", city: "New York", verified: true },
  { id: "2", name: "Sarah Johnson", category: "Electrical", city: "New York", verified: true },
  { id: "3", name: "Mike Davis", category: "HVAC", city: "Los Angeles", verified: false },
  { id: "4", name: "Emily Brown", category: "Carpentry", city: "Chicago", verified: true },
  { id: "5", name: "Robert Wilson", category: "Plumbing", city: "Houston", verified: true },
  { id: "6", name: "Lisa Anderson", category: "Electrical", city: "Chicago", verified: true },
];

const Directory = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <PublicNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Find Local Professionals</h1>
          <p className="text-muted-foreground mb-6">
            Browse verified professionals in your area
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            <Select>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Filter by City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="nyc">New York</SelectItem>
                <SelectItem value="la">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="houston">Houston</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="hvac">HVAC</SelectItem>
                <SelectItem value="carpentry">Carpentry</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPros.map((pro) => (
            <ProCard key={pro.id} {...pro} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Directory;
