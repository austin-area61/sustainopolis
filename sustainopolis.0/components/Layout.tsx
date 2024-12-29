"use client";

import React from "react";
import {
  Home,
  BookOpen,
  MapIcon as City,
  User,
  Globe,
  Zap,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
  activeTab:
    | "dashboard"
    | "courses"
    | "simulation"
    | "profile"
    | "challenges"
    | "impact";
  onTabChange: (
    tab:
      | "dashboard"
      | "courses"
      | "simulation"
      | "profile"
      | "challenges"
      | "impact"
  ) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  activeTab,
  onTabChange,
}) => {
  const { user } = useAuth();

  const navItems = [
    { name: "dashboard", icon: Home, label: "Dashboard" },
    { name: "courses", icon: BookOpen, label: "Courses" },
    { name: "simulation", icon: City, label: "City Simulation" },
    { name: "challenges", icon: Globe, label: "Global Challenges" },
    { name: "impact", icon: Zap, label: "Real-Life Impact" },
    { name: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex flex-col w-64 bg-card text-card-foreground p-4">
        <h1 className="text-2xl font-bold mb-8">Sustainopolis</h1>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={`flex items-center space-x-2 w-full justify-start ${
                activeTab === item.name
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary hover:text-secondary-foreground"
              }`}
              onClick={() => onTabChange(item.name as any)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card text-card-foreground shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h2>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-sm hover:text-primary transition-colors"
              onClick={() => onTabChange("profile")}
            >
              Welcome, {user?.name}
            </button>
            <img
              src={user?.avatar || "/placeholder.svg?height=32&width=32"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">{children}</main>

        {/* Bottom navigation for mobile */}
        <nav className="md:hidden flex justify-around bg-card text-card-foreground py-2">
          {navItems.slice(0, 4).map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={`p-2 rounded ${
                activeTab === item.name
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
              onClick={() => onTabChange(item.name as any)}
            >
              <item.icon size={24} />
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Layout;
