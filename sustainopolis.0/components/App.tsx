import React, { useState } from "react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import CourseProgress from "./CourseProgress";
import CitySimulation from "./CitySimulation";
import Profile from "./Profile";
import Login from "./Login";
import Onboarding from "./Onboarding";
import dynamic from "next/dynamic";
import GlobalChallenges from "./GlobalChallenges";
import RealLifeImpact from "./RealLifeImpact";

const motion = dynamic(
  () => import("framer-motion").then((mod) => mod.motion),
  { ssr: false }
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

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
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "dashboard" && (
            <Dashboard
              onEnterSimulation={() => handleTabChange("simulation")}
              onViewCourses={() => handleTabChange("courses")}
              onViewChallenges={() => handleTabChange("challenges")}
              onViewImpact={() => handleTabChange("impact")}
            />
          )}
          {activeTab === "courses" && <CourseProgress />}
          {activeTab === "simulation" && <CitySimulation />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "challenges" && <GlobalChallenges />}
          {activeTab === "impact" && <RealLifeImpact />}
        </motion.div>
      </AnimatePresence>
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
