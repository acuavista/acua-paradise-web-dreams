
import React from 'react';

const MissionStatementSection: React.FC = () => {
  return (
    <section 
      className="py-2 px-4 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/lovable-uploads/47bc7e11-e60d-4420-a0f1-ca6075a64b96.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 relative z-10">
        <div className="glass-card p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
            Our Mission: Democratizing Tropical Homeownership
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            AcuaBeach was founded on the belief that owning a piece of tropical paradise shouldn't be limited to 
            multimillionaires and Hollywood stars. Our mission is to democratize access to prime international real estate, 
            providing unparalleled financing, transparent processes, and comprehensive support to empower individuals and 
            families to build equity and secure their dreams in a vibrant, flourishing market like Cartagena.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatementSection;
