import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface ProCardProps {
  id: string;
  name: string;
  category: string;
  city: string;
  verified: boolean;
  photo?: string;
}

const ProCard = ({ id, name, category, city, verified, photo }: ProCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-muted relative">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <Building2 className="h-16 w-16" />
          </div>
        )}
        {verified && (
          <Badge className="absolute top-2 right-2 bg-accent hover:bg-accent/90">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{category}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          {city}
        </div>
        <Link to={`/pro/${id}`}>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Share My Info
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProCard;

import { Building2 } from "lucide-react";
