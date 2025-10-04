import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-dark">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="flex justify-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
            Available for opportunities
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Satwik Indupuri
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            Fresher
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A tech enthusiast crafting smart, user-friendly digital experiences.
          From front-end design to AI-powered solutions — I build with creativity and purpose.
          Let’s turn imagination into innovation. 🚀
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="default" size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          {/* <a href="../resume.pdf" />
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 transition-all duration-300">
            Download Resume
          </Button> */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="https://github.com/Satwikindupuri" 
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/satwik-indupuri-459b22252/" 
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="satwikindupuri@gmail.com" 
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;