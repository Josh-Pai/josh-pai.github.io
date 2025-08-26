import { PortfolioHeader } from "@/components/portfolio/PortfolioHeader";
import { PortfolioBio } from "@/components/portfolio/PortfolioBio";
import { SocialLinks } from "@/components/portfolio/SocialLinks";
import { TabsContent } from "@/components/portfolio/TabsContent";
import airbnbCover from "@/assets/covers/predicting-airbnb-listing-prices.png";
import supplyChainCover from "@/assets/covers/supply-chain-cover.jpg";
import predictiveCover from "@/assets/covers/predictive-analytics-cover.jpg";

const Index = () => {
  const portfolioData = {
    name: "Josh Pai",
    title: "Data Scientist/Analyst, Supply Chain",
    location: "San Francisco Bay Area",
    bio: "Passionate data scientist with expertise in machine learning, supply chain optimization, and predictive analytics. I transform complex data into actionable insights that drive business impact and operational efficiency.",
    social: {
      linkedin: "https://www.linkedin.com/in/josh-pai/",
      github: "https://github.com/josh-pai",
      email: "paijn@mail.uc.edu"
    },
    projects: [
      {
        title: "Machine Learning Project: Predicting Airbnb Listing Prices",
        description: "This project focused on building a machine learning pipeline to predict Airbnb listing prices in New York City. The goal was to develop an accurate pricing model while uncovering key features that influence Airbnb prices. ",
        coverImage: airbnbCover,
        link: "https://www.linkedin.com/pulse/machine-learning-project-predicting-airbnb-listing-prices-josh-pai-8ggic",
        tags: ["Python", "Machine Learning", "Data Science", "Regression", "Feature Engineering"],
        date: "Apr 28, 2025"
      },
      {
        title: "Supply Chain Optimization Dashboard",
        description: "Created an interactive dashboard for supply chain performance monitoring, featuring real-time KPI tracking, demand forecasting, and inventory optimization algorithms that improved efficiency by 23%.",
        coverImage: supplyChainCover,
        tags: ["Supply Chain", "Dashboard", "Analytics", "Optimization", "Forecasting"],
        date: "Jan 22, 2024"
      },
      {
        title: "Title 3",
        description: "Implemented time series forecasting models to predict product demand across multiple regions, integrating seasonal patterns, market trends, and external factors to reduce forecast error by 35%.",
        coverImage: predictiveCover,
        tags: ["Time Series", "Forecasting", "Demand Planning", "Statistical Modeling"],
        date: "Sep 08, 2023"
      }
    ],
    experience: [
      {
        title: "Data Scientist",
        company: "Supply Chain Analytics Corp",
        period: "2023 - Present",
        location: "San Francisco, CA",
        description: [
          "Developed machine learning models for demand forecasting and inventory optimization",
          "Led cross-functional analytics projects resulting in $2M+ annual cost savings",
          "Built automated reporting pipelines reducing manual work by 60%",
          "Mentored junior analysts on best practices in data science and statistical modeling"
        ]
      },
      {
        title: "Supply Chain Analyst",
        company: "Global Logistics Solutions",
        period: "2021 - 2023", 
        location: "Oakland, CA",
        description: [
          "Analyzed supply chain performance metrics and identified optimization opportunities",
          "Created data visualization dashboards for executive-level reporting",
          "Collaborated with operations teams to implement data-driven process improvements",
          "Reduced supply chain costs by 15% through strategic data analysis and recommendations"
        ]
      },
      {
        title: "Business Intelligence Analyst",
        company: "Tech Startup Inc",
        period: "2020 - 2021",
        location: "San Jose, CA", 
        description: [
          "Built ETL pipelines and data warehouses for business intelligence reporting",
          "Developed KPI dashboards tracking business performance across multiple departments",
          "Conducted A/B testing analysis to optimize product features and user experience",
          "Automated reporting processes, saving 20+ hours per week of manual work"
        ]
      }
    ],
    skills: [
      "Python", "R", "SQL", "Machine Learning", "Statistical Analysis",
      "Supply Chain Analytics", "Demand Forecasting", "Inventory Optimization",
      "Data Visualization", "Tableau", "Power BI", "Pandas", "NumPy",
      "Scikit-learn", "TensorFlow", "Time Series Analysis", "A/B Testing",
      "ETL Processes", "Data Warehousing", "Business Intelligence",
      "Project Management", "Cross-functional Collaboration"
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Mobile: Stack vertically, Desktop/Tablet: Two columns */}
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* Left Column - Personal Information */}
          <div className="lg:w-1/3 xl:w-2/5 lg:sticky lg:top-8 lg:self-start">
            <PortfolioHeader 
              name={portfolioData.name}
              title={portfolioData.title}
              location={portfolioData.location}
            />
            
            <PortfolioBio bio={portfolioData.bio} />
            
            <SocialLinks 
              linkedin={portfolioData.social.linkedin}
              github={portfolioData.social.github}
              email={portfolioData.social.email}
            />
          </div>
          
          {/* Right Column - Content Tabs */}
          <div className="lg:w-2/3 xl:w-3/5 mt-8 lg:mt-0">
            <TabsContent 
              projects={portfolioData.projects}
              experience={portfolioData.experience}
              skills={portfolioData.skills}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;