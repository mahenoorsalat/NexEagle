import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Clock } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-cream border-accent text-foreground w-fit">
              <Sparkles className="h-3 w-3 mr-1" />
              REVOLUTIONARY HEALTHCARE AI
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Healthcare with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              For clinics & hospitals built specifically for India's healthcare ecosystem
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">3x faster processing</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">40% revenue boost</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cream rounded-full">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Zero paperwork</span>
              </div>
            </div>

            <p className="text-sm font-medium text-foreground">
              EasyHMS + Doc-E AI + EasyPharm
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-base font-semibold group"
              >
                Book Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base font-semibold border-2"
              >
                Get Instant Quote
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                💡 Powering 500+ Healthcare Facilities Across India
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroDoctor} 
                alt="Professional healthcare provider using NexEagle AI system"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg border border-border animate-float">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Patients Daily</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-background p-4 rounded-xl shadow-lg border border-border animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
