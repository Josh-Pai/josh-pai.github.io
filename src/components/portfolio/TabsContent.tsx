import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Database } from "lucide-react";

interface Project {
  title: string;
  description: string;
  coverImage: string;
  link?: string;
  tags: string[];
  date: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

interface TabsContentProps {
  projects: Project[];
  experience: Experience[];
  skills: string[];
}

export const TabsContent = ({ projects, experience, skills }: TabsContentProps) => {
  const [activeTab, setActiveTab] = useState<"blog" | "about">("blog");

  return (
    <section className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-secondary rounded-lg p-1">
          <Button
            variant="ghost"
            onClick={() => setActiveTab("blog")}
            className={activeTab === "blog" ? "portfolio-tab-active" : "portfolio-tab-inactive"}
          >
            Blog
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("about")}
            className={activeTab === "about" ? "portfolio-tab-active" : "portfolio-tab-inactive"}
          >
            About
          </Button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === "blog" && (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="portfolio-card-hover cursor-pointer overflow-hidden" onClick={() => {
                if (project.link) {
                  if (project.link.startsWith('http')) {
                    window.open(project.link, '_blank');
                  } else {
                    // Handle internal routing here if needed
                    console.log('Navigate to internal page:', project.link);
                  }
                }
              }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "about" && (
          <div className="space-y-8">
            {/* Self Introduction */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">About Me</h3>
              <Card className="portfolio-card-hover">
                <CardContent className="pt-6">
                  <div className="prose max-w-none text-muted-foreground">
                    <p className="mb-4">
                      I'm a passionate data scientist with a strong background in supply chain analytics and machine learning. 
                      My journey began with a fascination for uncovering patterns in complex datasets and has evolved into a 
                      career focused on transforming raw data into strategic business insights.
                    </p>
                    <p className="mb-4">
                      With over 4 years of experience in the field, I specialize in predictive analytics, demand forecasting, 
                      and supply chain optimization. I've had the privilege of working with cross-functional teams to implement 
                      data-driven solutions that have generated millions in cost savings and operational improvements.
                    </p>
                    <p className="mb-4">
                      My approach combines technical expertise with business acumen, ensuring that every model I build and 
                      every analysis I conduct serves a clear strategic purpose. I'm particularly passionate about machine 
                      learning applications in supply chain management and enjoy mentoring junior analysts in best practices.
                    </p>
                    <p>
                      When I'm not diving deep into datasets, I enjoy staying current with the latest developments in AI and 
                      machine learning, contributing to open-source projects, and sharing insights through technical blog posts 
                      and industry presentations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Professional Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="portfolio-card-hover">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};