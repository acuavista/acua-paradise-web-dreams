
import React from 'react';
import { Shield, Home, Award, Zap } from 'lucide-react';

const AcuaBeachAdvantageSection: React.FC = () => {
  return (
    <section 
      className="py-2 px-4 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/lovable-uploads/224e6347-54c1-4aeb-b393-bf4c2e4418ca.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-8 text-white drop-shadow-lg">
          Your Dream, Our Commitment: The AcuaBeach Advantage
        </h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto mb-12 drop-shadow-md">
          At AcuaBeach, we are passionately dedicated to helping the average travel enthusiast realize their dream 
          of owning a piece of tropical paradise. We stand alone in the market by offering an unprecedented up to 90% 
          financing because we own all our prime lots outright, cutting out intermediaries. Beyond acquisition, we are 
          a full-service organization providing comprehensive support for developing your acquired lot(s), transforming 
          your vision into reality, whether it's an A-frame, Mediterranean, or any other style.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-lg font-medium mb-2 text-white">90% Financing</h3>
            <p className="text-white/80 text-sm">Unmatched financing options make ownership accessible</p>
          </div>
          <div className="text-center">
            <Home className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-medium mb-2 text-white">Full-Service Support</h3>
            <p className="text-white/80 text-sm">From lot to dream home, we handle everything</p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-medium mb-2 text-white">Prime Locations</h3>
            <p className="text-white/80 text-sm">We own the best lots outright, no intermediaries</p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-lg font-medium mb-2 text-white">Transparent Process</h3>
            <p className="text-white/80 text-sm">Clear, honest communication every step of the way</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcuaBeachAdvantageSection;
