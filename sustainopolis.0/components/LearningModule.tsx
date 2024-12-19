import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const LearningModule: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="bg-white rounded-lg p-4 shadow">
        <h1 className="text-2xl font-bold text-green-800">Waste Management</h1>
      </header>

      <div className="bg-white rounded-lg p-4 shadow">
        <div className="relative">
          <img src="/placeholder.svg?height=200&width=400" alt="Course content" className="w-full h-48 object-cover rounded-lg" />
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
            <ChevronRight size={24} />
          </button>
        </div>
        <h2 className="text-xl font-semibold mt-4">Recycling Basics</h2>
        <p className="mt-2 text-gray-600">Learn about different types of recyclable materials and how to properly sort them.</p>
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center">
        <CheckCircle className="mr-2" size={20} />
        <span>Mark as Complete</span>
      </button>
    </div>
  );
};

export default LearningModule;

