// Import necessary libraries and components
import React, { useState } from "react"; // React and useState hook for managing state
import Image from "next/image"; // Next.js Image component for optimized images
import { useAuth } from "../contexts/AuthContext"; // Custom hook for authentication context
import { Button } from "@/components/ui/button"; // UI component for buttons
import { Input } from "@/components/ui/input"; // UI component for input fields
import { Label } from "@/components/ui/label"; // UI component for labels
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // UI components for tabs
import { Facebook, Leaf, LogIn, Mail } from "lucide-react"; // Icon components from lucide-react

// Define the interface for the component props
interface LoginProps {
  onLoginSuccess: () => void; // Function to call on successful login
}

// Define the Login component
const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const { login } = useAuth(); // Get the login function from auth context

  // Handle form submission and catch errors  by try catch method
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await login(email, password); // Attempt to log in with email and password
      onLoginSuccess(); // Call the onLoginSuccess function on successful login
    } catch (error) {
      console.error("Login failed:", error); // Log any errors
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/bg-image.jpg"
        alt="Sustainopolis Background"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black opacity-5 backdrop-blur-sm"></div>
      {/* Main container */}
      <div className="relative z-10 w-full max-w-6xl flex bg-white bg-opacity-60 shadow-xl rounded-lg overflow-hidden">
        {/* Left side - App description */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-green-800">
            Welcome to Sustainopolis
          </h1>
          <div className="flex items-center mb-6">
            {/* Icons for visual appeal */}
            <Leaf className="w-8 h-8 text-green-500 mr-2" />
            <Leaf className="w-8 h-8 text-green-600" />
            <Leaf className="w-8 h-8 text-green-700 ml-2" />
            <Leaf className="w-8 h-8 text-green-800 ml-2" />
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Embark on a journey to create a sustainable future. Learn, simulate,
            and make real-world impact.
          </p>
        </div>

        {/* Right side - Login form */}
        <div className="w-1/2 p-8 bg-green-50">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Button>
              </form>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-green-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" required />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-green-50 px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Button variant="outline" className="w-full">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
