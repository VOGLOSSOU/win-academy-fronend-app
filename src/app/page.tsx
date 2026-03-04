import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TargetSection from '@/components/TargetSection';
import PresentationSection from '@/components/PresentationSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import PartnersSection from '@/components/PartnersSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TargetSection />
      <PresentationSection />
      <HowItWorksSection />
      <StatsSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
