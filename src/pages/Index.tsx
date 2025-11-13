import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import WhyChoose from "@/components/WhyChoose";
import ProductsSection from "@/components/ProductsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <WhyChoose />
        <ProductsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
