
import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Investment Opportunities
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose from our carefully curated selection of prime lots in Cartagena.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Premium Beachfront Lot */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-medium mb-2">Premium Beachfront Lot</h3>
              <div className="mb-4">
                <span className="text-3xl font-medium">$200,000</span>
                <span className="text-white/60 ml-2">$100/sf</span>
              </div>
              <p className="text-white/80 mb-6">Direct ocean access, unparalleled views. The pinnacle of Caribbean luxury.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Highest appreciation potential
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Exclusive front-row location
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Ultimate privacy
                </li>
              </ul>
              <button className="neu-button w-full">View Details & Inquire</button>
            </div>
          </div>

          {/* Beach Access Lot - Recommended */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                Recommended
              </span>
            </div>
            <div className="glass-card p-6 h-full border-2 border-yellow-400/30">
              <h3 className="text-xl font-medium mb-2">Beach Access Lot</h3>
              <div className="mb-4">
                <span className="text-3xl font-medium">$140,000</span>
                <span className="text-white/60 ml-2">$70/sf</span>
              </div>
              <p className="text-white/80 mb-6">Short, easy walk to pristine beaches. The perfect blend of luxury, convenience, and value.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Strong investment return
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Accessible luxury
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Vibrant community proximity
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Ideal for rental income
                </li>
              </ul>
              <button className="neu-button w-full">View Details & Inquire</button>
            </div>
          </div>

          {/* Tropical Paradise Lot */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-medium mb-2">Tropical Paradise Lot</h3>
              <div className="mb-4">
                <span className="text-3xl font-medium">$55,000</span>
                <span className="text-white/60 ml-2">$27.5/sf</span>
              </div>
              <p className="text-white/80 mb-6">Secluded, lush, and serene inland properties. Embrace nature's tranquility.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Most affordable entry
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Peaceful retreat
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Expansive greenery
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Strong long-term growth
                </li>
              </ul>
              <button className="neu-button w-full">View Details & Inquire</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
