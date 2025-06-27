
import React from 'react';
import { TrendingUp, Globe, DollarSign } from 'lucide-react';

const WhyCartagenaSection: React.FC = () => {
  return (
    <section id="why-cartagena" className="py-2 px-4">
      <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
        <div className="glass-card p-12">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-8">
            Why Cartagena: Invest in Colombia's Next Real Estate Boom
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
            Cartagena is a rapidly appreciating real estate market with exponential growth potential. Property values 
            are currently increasing sharply, poised for further significant surges upon the completion of the second 
            international airport. This is your unparalleled opportunity to secure your investment on the ground floor 
            of a flourishing Caribbean paradise, where a $200,000 beachfront lot can offer value comparable to 
            multi-million dollar properties in Florida.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-medium mb-2">Rapid Appreciation</h3>
              <p className="text-white/80">Property values increasing 15-20% annually</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-medium mb-2">Strategic Location</h3>
              <p className="text-white/80">UNESCO World Heritage city with growing tourism</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-medium mb-2">Value Opportunity</h3>
              <p className="text-white/80">Fraction of comparable US coastal property prices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCartagenaSection;
