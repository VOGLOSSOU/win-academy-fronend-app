import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CoursesSection from '@/components/CoursesSection';
import TargetSection from '@/components/TargetSection';
import PresentationSection from '@/components/PresentationSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <PresentationSection />
      <TargetSection />
      <HowItWorksSection />
      <CoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  );
}
