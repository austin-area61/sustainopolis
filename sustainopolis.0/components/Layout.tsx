import React from 'react';
import { Home, BookOpen, MapIcon as City, User, Globe, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'dashboard' | 'courses' | 'simulation' | 'profile' | 'challenges' | 'impact';
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab }) => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-green-50">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Sustainopolis</h1>
        <nav className="space-y-4">
          <a href="#" className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'dashboard' ? 'bg-green-700' : 'hover:bg-green-500'}`}>
            <Home size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'courses' ? 'bg-green-700' : 'hover:bg-green-500'}`}>
            <BookOpen size={20} />
            <span>Courses</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'simulation' ? 'bg-green-700' : 'hover:bg-green-500'}`}>
            <City size={20} />
            <span>City Simulation</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'challenges' ? 'bg-green-700' : 'hover:bg-green-500'}`}>
            <Globe size={20} />
            <span>Global Challenges</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'impact' ? 'bg-green-700' : 'hover:bg-green-500'}`}>
            <Zap size={20} />
            <span>Real-Life Impact</span>
          </a>
          <a href="#" className={`flex items-center space-x-2 p-2 rounded ${activeTab === 'profile' ? 'bg-green-700' : 'hover:bg-green-500'}`}>
            <User size={20} />
            <span>Profile</span>
          </a>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-green-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
            <img src="/placeholder.svg?height=32&width=32" alt="User Avatar" className="w-8 h-8 rounded-full" />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>

        {/* Bottom navigation for mobile */}
        <nav className="md:hidden flex justify-around bg-green-600 text-white py-2">
          <a href="#" className={`p-2 rounded ${activeTab === 'dashboard' ? 'bg-green-700' : ''}`}>
            <Home size={24} />
          </a>
          <a href="#" className={`p-2 rounded ${activeTab === 'courses' ? 'bg-green-700' : ''}`}>
            <BookOpen size={24} />
          </a>
          <a href="#" className={`p-2 rounded ${activeTab === 'simulation' ? 'bg-green-700' : ''}`}>
            <City size={24} />
          </a>
          <a href="#" className={`p-2 rounded ${activeTab === 'profile' ? 'bg-green-700' : ''}`}>
            <User size={24} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Layout;

