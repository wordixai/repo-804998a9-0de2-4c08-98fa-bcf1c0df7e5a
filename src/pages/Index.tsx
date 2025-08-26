import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import WhyMacaronSection from '@/components/WhyMacaronSection';
import PlaybookSection from '@/components/PlaybookSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TechSection from '@/components/TechSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="w-full relative bg-gradient-to-br bg-[#F9F7F1] min-h-screen overflow-x-hidden">
      {/* Noise Filter SVG */}
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <filter id="noiseFilter" x="0" y="0" width="100" height="100" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <NavBar />
      
      <div className="flex w-full min-h-full flex-col items-center pt-[44px] md:pt-[64px]">
        <HeroSection />
        <WhyMacaronSection />
        <PlaybookSection />
        <TestimonialsSection />
        <TechSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;