import React, { useState } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import CourseProgress from "./CourseProgress";
import CitySimulation from "./CitySimulation";
import Profile from "./Profile";
import Login from "./Login";
import Onboarding from "./Onboarding";

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "courses" | "simulation" | "profile" | "challenges" | "impact"
  >("dashboard");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleTabChange = (
    tab:
      | "dashboard"
      | "courses"
      | "simulation"
      | "profile"
      | "challenges"
      | "impact"
  ) => {
    setActiveTab(tab);
  };

  const handleEnterSimulation = () => {
    setActiveTab("simulation");
  };

  const handleLoginSuccess = () => {
    setShowOnboarding(true);
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  if (!user) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <Layout activeTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === "dashboard" && (
        <Dashboard onEnterSimulation={handleEnterSimulation} />
      )}
      {activeTab === "courses" && <CourseProgress />}
      {activeTab === "simulation" && <CitySimulation />}
      {activeTab === "profile" && <Profile />}
      {/* TODO: Add components for 'challenges' and 'impact' tabs */}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
