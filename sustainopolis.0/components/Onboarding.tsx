import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface OnboardingProps {
  onComplete: () => void;
}

const interests = [
  'Renewable Energy',
  'Waste Management',
  'Urban Planning',
  'Sustainable Agriculture',
  'Green Transportation',
  'Water Conservation',
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const { user, updateUser } = useAuth();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestChange = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const recommendedCourse = selectedInterests[0] || null; // Simple recommendation logic
      updateUser({
        ...user,
        interests: selectedInterests,
        recommendedCourse,
      });
      onComplete();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Welcome to Sustainopolis!</h2>
          <p className="mb-4 text-gray-600">Select your interests to get personalized course recommendations:</p>
          <div className="space-y-2">
            {interests.map((interest) => (
              <div key={interest} className="flex items-center">
                <Checkbox
                  id={interest}
                  checked={selectedInterests.includes(interest)}
                  onCheckedChange={() => handleInterestChange(interest)}
                />
                <Label htmlFor={interest} className="ml-2">{interest}</Label>
              </div>
            ))}
          </div>
          <Button type="submit" className="w-full mt-6">
            Complete Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;

