import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Bot, Pill, FlaskConical, ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Building2,
      title: "EasyHMS",
      status: "Available Now",
      statusColor: "bg-secondary text-secondary-foreground",
      description: "Complete hospital management system",
      features: [
        "Patient Management",
        "Appointment Scheduling",
        "Billing & Insurance",
        "Inventory Management"
      ],
      available: true
    },
    {
      icon: Bot,
      title: "Doc-E",
      status: "Coming Soon",
      statusColor: "bg-accent text-accent-foreground",
      description: "AI Assistant for Doctors",
      features: [
        "AI Diagnosis Support",
        "Treatment Recommendations",
        "Medical Research Assistant",
        "Patient Communication"
      ],
      available: false
    },
    {
      icon: Pill,
      title: "EasyPharm",
      status: "Coming Soon",
      statusColor: "bg-accent text-accent-foreground",
      description: "Pharmacy Management",
      features: [
        "Inventory Tracking",
        "Prescription Management",
        "Supplier Integration",
        "Sales Analytics"
      ],
      available: false
    },
    {
      icon: FlaskConical,
      title: "EasyLab",
      status: "Coming Soon",
      statusColor: "bg-accent text-accent-foreground",
      description: "Laboratory Management",
      features: [
        "Test Management",
        "Result Processing",
        "Equipment Tracking",
        "Quality Control"
      ],
      available: false
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Our AI-Powered Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare management tools designed for modern facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <product.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <Badge className={product.statusColor}>
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{product.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={product.available ? "default" : "outline"} 
                  className={`w-full ${product.available ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                  disabled={!product.available}
                >
                  {product.available ? (
                    <>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    'Notify Me'
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
