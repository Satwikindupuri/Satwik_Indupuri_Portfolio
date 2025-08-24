import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer (MERN) Internship",
      company: "SmartInternz.",
      location: "Virtual",
      period: "July 2025",
      type: "Virtual Internship",
      description: "2 Months virtual internship on MERN stack development with SmartInternz.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub"],
      achievements: [
        "Worked on building full-stack web applications using MongoDB, Express.js, React, and Node.js.",
        "Gained hands-on experience in developing RESTful APIs, managing databases, and deploying applications."
      ]
    },
    {
      title: "Employability Skills Internship",
      company: " IBM SkillsBuild",
      location: "Virtual",
      period: "June 2024 - July 2024",
      type: "Virtual Internship",
      description: " 6-week virtual summer internship offered by IBM SkillsBuild",
      technologies: [
        "Communication", "Teamwork", "Problem-Solving", "Time Management", "Adaptability", "Critical Thinking"
      ],
      achievements: [
        "Focusing on employability and technical skills.",
        "Completed modules on professional communication, teamwork, and problem-solving in simulated business scenarios",
      ]
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Internships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful software solutions across different industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="text-lg font-semibold text-primary">{exp.company}</span>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit border-primary/20 text-primary">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="px-3 py-1 bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;