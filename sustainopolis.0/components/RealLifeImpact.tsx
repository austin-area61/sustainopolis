import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const impactAreas = [
  {
    title: "Energy Conservation",
    description: "Log your energy-saving activities",
    examples: [
      "Used energy-efficient appliances",
      "Turned off lights when not in use",
    ],
  },
  {
    title: "Waste Reduction",
    description: "Track your efforts to reduce waste",
    examples: ["Recycled materials", "Used reusable shopping bags"],
  },
  {
    title: "Sustainable Transportation",
    description: "Record your eco-friendly travel choices",
    examples: ["Biked to work", "Used public transportation"],
  },
  {
    title: "Water Conservation",
    description: "Monitor your water-saving actions",
    examples: ["Fixed leaky faucets", "Collected rainwater for plants"],
  },
];

const RealLifeImpact: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Log Your Eco-Friendly Actions</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {impactAreas.map((area, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{area.title}</CardTitle>
              <CardDescription>{area.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside mb-4">
                {area.examples.map((example, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {example}
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Log Action
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RealLifeImpact;
