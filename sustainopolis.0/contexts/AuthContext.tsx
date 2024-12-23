import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  interests: string[];
  recommendedCourse: string | null;
  selectedCourses: { name: string; progress: number }[];
  avatar: string;
  about: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // In a real app, you would validate credentials against a backend
    // For this example, we'll just set a mock user
    setUser({
      id: "1",
      name: "Eco Warrior",
      email: email,
      interests: [],
      recommendedCourse: null,
      selectedCourses: [],
      avatar: "",
      about: "",
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedUser: Partial<User>) => {
    setUser((prevUser) => {
      if (prevUser) {
        return { ...prevUser, ...updatedUser };
      }
      return null;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
