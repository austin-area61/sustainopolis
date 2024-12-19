import React from 'react';
import { Trash2, Zap, Users, BarChart2 } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const CitySimulation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-lg shadow overflow-hidden">
        <img src="/placeholder.svg?height=400&width=800" alt="City Simulation" className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow p-2 flex space-x-2">
          <Button variant="ghost" size="icon">
            <Trash2 size={20} className="text-green-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <Zap size={20} className="text-yellow-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <Users size={20} className="text-blue-600" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow p-4 max-w-sm">
          <h3 className="font-semibold text-green-800">Current Mission: Clean Streets</h3>
          <p className="text-sm text-gray-600 mt-1">Implement a city-wide recycling program</p>
          <Progress value={60} className="mt-2" />
          <p className="text-sm text-gray-600 mt-1">60% Complete</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pollution Level</CardTitle>
            <Trash2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Moderate</div>
            <Progress value={50} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Energy Efficiency</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Population Happiness</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">High</div>
            <Progress value={80} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economic Growth</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Steady</div>
            <Progress value={65} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Simulation Controls</CardTitle>
          <CardDescription>Make decisions to improve your city</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button>Implement Policy</Button>
          <Button>Allocate Resources</Button>
          <Button>Launch Initiative</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CitySimulation;

