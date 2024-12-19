import React from 'react';
import { Award, Clock, Settings, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <header className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-800">Profile</h1>
        <button className="p-2 bg-gray-100 rounded-full">
          <Settings size={24} className="text-gray-600" />
        </button>
      </header>

      <div className="bg-white rounded-lg p-6 shadow text-center">
        <img src="/placeholder.svg?height=100&width=100" alt="User Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-green-800">{user?.name || 'Eco Warrior'}</h2>
        <p className="text-gray-600">Sustainability Novice</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 rounded-lg p-4 text-center">
          <Clock size={32} className="text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold text-green-800">Total Learning Hours</h3>
          <p className="text-2xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-blue-100 rounded-lg p-4 text-center">
          <Award size={32} className="text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-blue-800">Badges Earned</h3>
          <p className="text-2xl font-bold text-blue-600">0</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold text-green-800 mb-2">City Sustainability Score</h3>
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <div className="bg-green-500 h-full rounded-full" style={{ width: '0%' }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-600 text-right">0/100</p>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-green-800">Current Streak</h3>
          <Zap size={20} className="text-yellow-500" />
        </div>
        <p className="text-3xl font-bold text-green-600">0 days</p>
        <p className="text-sm text-gray-600 mt-1">Keep learning to build your streak!</p>
      </div>

      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-semibold text-green-800 mb-2">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {user?.interests.map((interest, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
              {interest}
            </span>
          ))}
          {user?.interests.length === 0 && (
            <p className="text-gray-600">No interests selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

