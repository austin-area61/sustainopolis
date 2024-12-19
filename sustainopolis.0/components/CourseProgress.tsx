import React from 'react';
import { Circle, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const CourseProgress: React.FC = () => {
  const { user } = useAuth();

  const courses = [
    { name: "Introduction to Sustainability", modules: 5 },
    { name: "Waste Management", modules: 4 },
    { name: "Renewable Energy", modules: 6 },
    { name: "Urban Planning", modules: 5 },
  ];

  return (
    <div className="space-y-6">
      <header className="bg-white rounded-lg p-4 shadow">
        <h1 className="text-2xl font-bold text-green-800">Course Progress</h1>
      </header>

      {courses.map((course, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold text-green-800 mb-4">{course.name}</h2>
          <Progress value={0} className="mb-2" />
          <p className="text-sm text-gray-600 mb-4">0% Complete</p>
          <ul className="space-y-2 mb-4">
            {Array.from({ length: course.modules }).map((_, moduleIndex) => (
              <li key={moduleIndex} className="flex items-center">
                <Circle className="text-gray-300 mr-2" size={20} />
                <span className="text-gray-500">Module {moduleIndex + 1}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full">
            Start Course
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      ))}

      <div className="bg-blue-100 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800">AI Recommendation</h3>
        <p className="mt-2 text-blue-600">
          {user?.recommendedCourse 
            ? `We recommend starting with ${user.recommendedCourse} based on your interests!` 
            : "Complete your interest survey to get personalized course recommendations!"}
        </p>
      </div>
    </div>
  );
};

export default CourseProgress;

