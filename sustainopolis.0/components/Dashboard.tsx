import React from 'react';
import { ArrowRight, BookOpen, MapIcon as City, Globe, Zap, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardProps {
  onEnterSimulation: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onEnterSimulation }) => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Learning Hours</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5</div>
            <p className="text-xs text-muted-foreground">+0.5 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">+1 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">City Sustainability Score</CardTitle>
            <City className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65/100</div>
            <Progress value={65} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Real-Life Impact Streak</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Course</CardTitle>
            <CardDescription>Waste Management Fundamentals</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={30} className="mt-2" />
            <p className="mt-2 text-sm text-muted-foreground">30% Complete</p>
            <Button className="mt-4">
              Continue Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>City Simulation</CardTitle>
            <CardDescription>Apply your knowledge to solve real issues</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-muted-foreground">Current mission: Implement a city-wide recycling program</p>
            <Button onClick={onEnterSimulation}>
              Enter Simulation
              <City className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Global Challenge</CardTitle>
          <CardDescription>Collaborate with learners worldwide</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold">Design a Zero-Emission Transportation System</h3>
          <p className="mt-2 text-sm text-muted-foreground">Deadline: 7 days remaining</p>
          <Button className="mt-4" variant="outline">
            View Challenge
            <Globe className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Real-Life Impact</CardTitle>
          <CardDescription>Track your sustainable habits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Today's Goal: Reduce plastic usage</h3>
              <p className="text-sm text-muted-foreground">Log your actions to maintain your streak!</p>
            </div>
            <Button variant="outline">
              Log Action
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

