import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  linkedin?: string;
  github?: string;
  email?: string;
}

export const SocialLinks = ({ linkedin, github, email }: SocialLinksProps) => {
  const links = [
    {
      icon: Linkedin,
      href: linkedin,
      label: "LinkedIn Profile",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      href: github,
      label: "GitHub Profile", 
      color: "hover:text-gray-800"
    },
    {
      icon: Mail,
      href: email ? `mailto:${email}` : undefined,
      label: "Email Contact",
      color: "hover:text-red-600"
    }
  ].filter(link => link.href);

  return (
    <section className="mb-12">
      <div className="flex justify-center gap-4">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <Button
              key={index}
              variant="outline" 
              size="lg"
              asChild
              className="group transition-all duration-300 hover:shadow-md"
            >
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <IconComponent className={`h-5 w-5 transition-colors ${link.color}`} />
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
};