import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TargetSection from '@/components/TargetSection';
import PresentationSection from '@/components/PresentationSection';
import CoursesSection from '@/components/CoursesSection';
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
      <TargetSection />
      <PresentationSection />
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
