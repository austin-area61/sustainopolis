const interestAvatars: { [key: string]: string[] } = {
  "Urban Planning": [
    "https://example.com/urban-planning-avatar-1.png",
    "https://example.com/urban-planning-avatar-2.png",
    "https://example.com/urban-planning-avatar-3.png",
  ],
  "Waste Management": [
    "https://example.com/waste-management-avatar-1.png",
    "https://example.com/waste-management-avatar-2.png",
    "https://example.com/waste-management-avatar-3.png",
  ],
  "Water Conservation": [
    "https://example.com/water-conservation-avatar-1.png",
    "https://example.com/water-conservation-avatar-2.png",
    "https://example.com/water-conservation-avatar-3.png",
  ],
  "Renewable Energy": [
    "https://example.com/renewable-energy-avatar-1.png",
    "https://example.com/renewable-energy-avatar-2.png",
    "https://example.com/renewable-energy-avatar-3.png",
  ],
  "Sustainable Agriculture": [
    "https://example.com/sustainable-agriculture-avatar-1.png",
    "https://example.com/sustainable-agriculture-avatar-2.png",
    "https://example.com/sustainable-agriculture-avatar-3.png",
  ],
  "Green Transportation": [
    "https://example.com/green-transportation-avatar-1.png",
    "https://example.com/green-transportation-avatar-2.png",
    "https://example.com/green-transportation-avatar-3.png",
  ],
};

export function getRandomAvatar(interests: string[]): string {
  const availableAvatars = interests.flatMap(
    (interest) => interestAvatars[interest] || []
  );

  if (availableAvatars.length === 0) {
    return "https://example.com/default-avatar.png";
  }

  const randomIndex = Math.floor(Math.random() * availableAvatars.length);
  return availableAvatars[randomIndex];
}
