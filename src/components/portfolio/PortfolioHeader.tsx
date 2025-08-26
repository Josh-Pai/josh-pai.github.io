import profileImage from "@/assets/profile.jpg";

interface PortfolioHeaderProps {
  name: string;
  title: string;
  location?: string;
}

export const PortfolioHeader = ({ name, title, location }: PortfolioHeaderProps) => {
  return (
    <header className="text-center mb-8">
      <div className="relative inline-block mb-6">
        <img 
          src={profileImage} 
          alt={`${name} - Profile Photo`}
          className="w-36 h-36 rounded-full border-4 border-primary/20 shadow-lg object-cover mx-auto"
        />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-2 border-background"></div>
      </div>
      
      <h1 className="text-4xl font-bold text-foreground mb-2">{name}</h1>
      <p className="text-xl text-muted-foreground mb-2">{title}</p>
      {location && (
        <p className="text-sm text-muted-foreground">{location}</p>
      )}
    </header>
  );
};