
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/lovable-uploads/2e8bde97-c8d3-4902-bc1f-f93ac25425e6.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 leading-tight">
          Get Your Own Piece of this Paradise
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
