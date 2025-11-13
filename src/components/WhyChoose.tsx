import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Shield, FileX } from "lucide-react";
import doctorTech from "@/assets/doctor-tech.jpg";

const WhyChoose = () => {
  const features = [
    {
      icon: Zap,
      title: "3x Faster Processing",
      description: "AI-powered systems process patient data three times faster than traditional methods",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "40% Revenue Boost",
      description: "Streamlined operations lead to significant revenue increases for healthcare facilities",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "99.9% Uptime",
      description: "Reliable cloud infrastructure ensures your systems are always available",
      color: "text-primary"
    },
    {
      icon: FileX,
      title: "Zero Paperwork",
      description: "Complete digital transformation eliminates paper-based processes",
      color: "text-secondary"
    }
  ];

  return (
    <section id="why-nexeagle" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            WHY CHOOSE NEXEAGLE
          </h2>
          <h3 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Transform Your Healthcare Facility
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI-driven healthcare management with proven results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-cream flex items-center justify-center`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h4 className="text-xl font-bold">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={doctorTech} 
                alt="Healthcare professional using advanced medical technology"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
