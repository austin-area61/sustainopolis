import React from "react";
import {
  ArrowRight,
  BookOpen,
  MapIcon as City,
  Globe,
  Zap,
  Award,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardProps {
  onEnterSimulation: () => void;
  onViewCourses: () => void;
  onViewChallenges: () => void;
  onViewImpact: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  onEnterSimulation,
  onViewCourses,
  onViewChallenges,
  onViewImpact,
}) => {
  const { user } = useAuth();

  const currentCourse = user?.selectedCourses?.[0] || {
    name: "No course selected",
    progress: 0,
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Learning Hours
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Start learning today!
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Courses Started
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {user?.selectedCourses?.length || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Courses selected during onboarding
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              City Sustainability Score
            </CardTitle>
            <City className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0/100</div>
            <Progress value={0} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Real-Life Impact Streak
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 days</div>
            <p className="text-xs text-muted-foreground">
              Start making an impact!
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Course</CardTitle>
          <CardDescription>{currentCourse.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={currentCourse.progress} className="mt-2" />
          <p className="mt-2 text-sm text-muted-foreground">
            {currentCourse.progress}% Complete
          </p>
          <Button className="mt-4" onClick={onViewCourses}>
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>City Simulation</CardTitle>
            <CardDescription>
              Apply your knowledge to solve real issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              Unlock city simulation by completing courses
            </p>
            <Button onClick={onEnterSimulation}>
              View Simulation
              <City className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Global Challenges</CardTitle>
            <CardDescription>
              Learn about current global sustainability issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">
              Explore interactive infographics
            </p>
            <Button onClick={onViewChallenges}>
              View Challenges
              <Globe className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Real-Life Impact</CardTitle>
          <CardDescription>Track your sustainable habits</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm text-muted-foreground">
            Start logging your eco-friendly actions
          </p>
          <Button onClick={onViewImpact}>
            Log Actions
            <Zap className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
