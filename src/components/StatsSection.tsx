import { Users, TrendingUp, Clock, Headphones } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: "Patients Served Daily",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "System Uptime",
      color: "text-secondary"
    },
    {
      icon: Clock,
      value: "30 Sec",
      label: "Average Response Time",
      color: "text-primary"
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "AI Support Available",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-background rounded-2xl shadow-sm">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
