import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const challenges = [
  {
    title: "Climate Change",
    description: "Understanding the global impact of rising temperatures",
    videoUrl: "#",
  },
  {
    title: "Plastic Pollution",
    description: "Exploring solutions to reduce plastic waste in our oceans",
    videoUrl: "#",
  },
  {
    title: "Deforestation",
    description: "Examining the consequences of global forest loss",
    videoUrl: "#",
  },
  {
    title: "Water Scarcity",
    description: "Addressing the growing global water crisis",
    videoUrl: "#",
  },
];

const GlobalChallenges: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {challenges.map((challenge, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{challenge.title}</CardTitle>
            <CardDescription>{challenge.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Watch Infographic
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GlobalChallenges;
