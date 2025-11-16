import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutDoctor from "@/components/AboutDoctor";
import Services from "@/components/Services";
import Team from "@/components/Team";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ReelsVideos from "@/components/ReelsVideos";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loading from "@/components/Loading";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      {isLoading ? (
        <Loading onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <HeroSlider />
          <AboutDoctor />
          <Services />
          <Team />
          <ReelsVideos />
          <BeforeAfter />
          <Testimonials />
          <Locations />
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </LanguageProvider>
  );
};

export default Index;
