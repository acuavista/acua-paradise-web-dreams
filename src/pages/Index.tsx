
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import IntroductionSection from '../components/IntroductionSection';
import PropertiesSection from '../components/PropertiesSection';
import HousesSection from '../components/HousesSection';
import WhyCartagenaSection from '../components/WhyCartagenaSection';
import AdvantageSection from '../components/AdvantageSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import GallerySection from '../components/GallerySection';
import MissionSection from '../components/MissionSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-light">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
        scrollToSection={scrollToSection}
      />
      
      <HeroSection heroRef={heroRef} />
      <IntroductionSection />
      <PropertiesSection />
      <HousesSection />
      <WhyCartagenaSection />
      <AdvantageSection />
      <TestimonialsSection />
      <BlogSection />
      <GallerySection />
      <MissionSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
