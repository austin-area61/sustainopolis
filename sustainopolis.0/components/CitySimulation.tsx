import React from "react";
import { Construction } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CitySimulation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">City Simulation</CardTitle>
          <CardDescription className="text-center">Coming Soon</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Construction className="w-24 h-24 text-muted-foreground mb-4" />
          <p className="text-center text-muted-foreground">
            We're working hard to bring you an immersive city simulation
            experience. Stay tuned for updates!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CitySimulation;
