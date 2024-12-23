import React, { useState } from "react";
import {
  Award,
  Clock,
  Settings,
  Zap,
  RefreshCw,
  LogOut,
  Trash2,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getRandomAvatar } from "../utils/avatarGenerator";

const Profile: React.FC = () => {
  const { user, updateUser, logout, deleteAccount } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [about, setAbout] = useState(user?.about || "");

  const handleSave = () => {
    if (user) {
      updateUser({
        ...user,
        name,
        avatar,
        about,
      });
      setIsOpen(false);
    }
  };

  const generateRandomAvatar = () => {
    if (user) {
      const newAvatar = getRandomAvatar(user.interests);
      setAvatar(newAvatar);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleDeleteAccount = () => {
    deleteAccount();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-green-800">
              {user?.name || "Eco Warrior"}
            </CardTitle>
            <CardDescription>Sustainability Novice</CardDescription>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(true)}
              >
                <Settings size={24} className="text-gray-600" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="avatar"
                    className="text-sm font-medium text-gray-700"
                  >
                    Avatar URL
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="avatar"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <Button onClick={generateRandomAvatar} size="icon">
                      <RefreshCw size={16} />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="about"
                    className="text-sm font-medium text-gray-700"
                  >
                    About
                  </label>
                  <Textarea
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="What motivates your passion for eco-friendly services?"
                  />
                </div>
              </div>
              <Button onClick={handleSave}>Save Changes</Button>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <img
              src={user?.avatar || "/placeholder.svg?height=100&width=100"}
              alt="User Avatar"
              className="w-24 h-24 rounded-full"
            />
            <p className="text-gray-600">
              {user?.about || "No bio provided yet."}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Learning Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Clock size={32} className="text-green-600" />
              <span className="text-2xl font-bold text-green-600">0</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Badges Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Award size={32} className="text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">0</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>City Sustainability Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-green-500 h-full rounded-full"
                style={{ width: "0%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 text-right">0/100</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Streak</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap size={32} className="text-yellow-500" />
              <span className="text-3xl font-bold text-green-600">0 days</span>
            </div>
            <p className="text-sm text-gray-600">
              Keep learning to build your streak!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {user?.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
            {user?.interests.length === 0 && (
              <p className="text-gray-600">No interests selected yet.</p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleLogout}
          className="flex items-center"
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="flex items-center">
              <Trash2 className="mr-2 h-4 w-4" /> Delete Account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteAccount}>
                Yes, delete my account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Profile;
