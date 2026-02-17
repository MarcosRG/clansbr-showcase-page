import HeroSection from "@/components/HeroSection";
import EquipmentSection from "@/components/EquipmentSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EquipmentSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
