import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "BookNest",
      description: "MERN Stack Online Bookstore",
      //React.js, Node.js, Express.js, MongoDB, CSS, Thunder Client
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS", "Thunder Client"],
      features: [
        "User authentication & profiles",
        "Book browsing & search",
        "Shopping cart",
        "Order history & tracking"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "MadeByRosy – Customized Arts Website",
      description: "Built a responsive website for an Instagram-based art seller to showcase and sell personalized artworks.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Responsive design",
        "Gallery showcase",
        "Contact form",
        "Social media integration"
      ],
      github: "#",
      demo: "https://madebyrosy.netlify.app/",
      status: "Completed"
    },
    // {
    //   title: "Weather Analytics Dashboard",
    //   description: "Data visualization platform for weather analytics with interactive charts, historical data analysis, and predictive modeling.",
    //   technologies: ["React", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
    //   features: [
    //     "Interactive data visualizations",
    //     "Historical weather analysis",
    //     "API integration",
    //     "Responsive design"
    //   ],
    //   github: "#",
    //   demo: "#",
    //   status: "In Progress"
    // }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="px-2 py-1 text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/20 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;