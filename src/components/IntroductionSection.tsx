
import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-12">
          We Finance Up To 90% of Your First Acquisition
        </h2>
        <div className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto text-center space-y-6">
          <p>
            AcuaBeach empowers working-class Americans to own prime buildable lots in vibrant Cartagena, Colombia. 
            Experience truly hassle-free ownership with our unique financing, full-service support from acquisition 
            to development, and expert guidance to make your vision a reality.
          </p>
          <p>
            From securing your perfect lot to building your dream home, we provide comprehensive support every step 
            of the way. Our revolutionary financing model makes tropical property ownership accessible to everyone, 
            not just the wealthy elite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
