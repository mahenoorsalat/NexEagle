import doctorsTeam from "@/assets/doctors-team.jpg";

const TeamSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={doctorsTeam} 
                alt="Professional healthcare team powered by NexEagle"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 bg-cream rounded-full text-sm font-medium">
              Trusted by Healthcare Professionals
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold">
              Powering{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                500+ Healthcare
              </span>{" "}
              Facilities Across India
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Join hundreds of clinics, hospitals, and healthcare providers who have transformed their operations with NexEagle's AI-powered platform. Our solutions are designed specifically for the Indian healthcare ecosystem, ensuring compliance, scalability, and exceptional patient care.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Healthcare Facilities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Patients Daily</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
