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
    location: "Cincinnati Metropolitan Area",
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
      }
    ],
    experience: [
      {
        title: "Technical Product Manager",
        company: "JFJ TECH",
        period: "Mar 2020 - Jul 2024",
        location: "San Francisco, CA",
        description: [
          "Led the product roadmap for a 1M-user e-commerce platform by translating in-depth user behavior analysis and market trends into actionable strategies, resulting in a 20% YoY revenue increase.",
          "Implemented comprehensive data analysis and reporting in Power BI, conducting sales, market trends, and competitive analysis, driving data-informed decision-making processes in marketing and operation teams.",
          "Architected a fraud detection system by defining requirements and engineering features with Python and SQL, reducing fraudulent transactions by 70%."
        ]
      },
      {
        title: "Project Manager",
        company: "JFJ Productions",
        period: "Feb 2019 - Mar 2020", 
        location: "Oakland, CA",
        description: [
          "Translated customer insights and performance data into detailed user stories and product specifications, improving cross-team clarity and accelerating development cycles.",
          "Utilized Jira and Excel to monitor team performance and key delivery metrics, analyzing sprint velocity to identify and resolve process bottlenecks, which improved on-time delivery by 18%."
        ]
      },
      {
        title: "Data Analyst",
        company: "JFJ Productions",
        period: "Mar 2020 - Jan 2021",
        location: "San Jose, CA", 
        description: [
          "Analyzed supply chain fulfillment data using SQL, Python (Pandas, NumPy), and Tableau to identify inefficiencies in inventory turnover, improving operational efficiency by 15%.",
          "Collaborated with cross-functional operations and finance teams to define and track logistics KPIs, implementing data-driven process optimizations that reduced average fulfillment time by 25%."
        ]
      },
      {
        title: "Software Engineer",
        company: "Wistron",
        period: "Oct 2014 - Aug 2016",
        location: "San Jose, CA", 
        description: [
          "Managed Bill of Materials (BOM) and supplier specifications within the Teamcenter PLM system, and engineered automated ETL pipelines with Python to consolidate this data for accurate BI reporting.",
          "Automated the generation of weekly procurement and material inventory reports by querying MySQL and processing JSON data exports with JavaScript and Excel VBA, leading to a 12% improvement in supplier on-time delivery."
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