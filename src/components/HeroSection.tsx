
import React from 'react';

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroRef }) => {
  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight text-white drop-shadow-lg">
          Get Your Own Piece of this Paradise
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
