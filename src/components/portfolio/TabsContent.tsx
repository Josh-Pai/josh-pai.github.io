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
                      📈 Master of Science in Information Systems candidate at the University of Cincinnati, passionate about the full data lifecycle — from engineering robust data pipelines to building predictive machine learning models and delivering actionable business insights.
                    </p>
                    <p className="mb-4">
                      With a background in product development and project analysis, I discovered my true passion lies in using data to solve tangible problems. My hands-on experience ranges from analyzing supply chain data to improve operational efficiency, to building fraud detection models with Python, and to designing A/B tests that reduced customer cart abandonment.
                    </p>
                    <p className="mb-4">
                      This drive led me to deepen my expertise. I am actively seeking Data Science, Data Engineering, or Business Analytics co-op/internship opportunities for 2025 where I can contribute my skills in:
                    </p>
                    <p>
                      ✅ Business Intelligence & Analytics: Creating insightful dashboards (Power BI, Tableau) and translating complex data into clear, data-driven recommendations.<br></br>
                      ✅ Data Science & Machine Learning: Building predictive models (forecasting, classification), NLP, and conducting statistical experiments (A/B testing).<br></br>
                      ✅ Data Engineering: Developing and automating ETL pipelines on cloud platforms like AWS (Glue, Redshift) to ensure data integrity and accessibility.
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