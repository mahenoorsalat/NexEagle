import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import hospitalModern from "@/assets/hospital-modern.jpg";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={hospitalModern} 
          alt="Modern healthcare facility"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Healthcare Facility?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of healthcare providers who have already revolutionized their operations with NexEagle
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 border-2"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Expert
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "HIPAA Compliant", icon: "🔒" },
              { label: "Made in India", icon: "🇮🇳" },
              { label: "GST Invoicing", icon: "📄" },
              { label: "WhatsApp Support", icon: "💬" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-background/80 backdrop-blur-sm rounded-lg"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
