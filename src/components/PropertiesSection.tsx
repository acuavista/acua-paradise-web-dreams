
import React from 'react';
import { lotCategories } from '../data/lotCategories';

const PropertiesSection: React.FC = () => {
  return (
    <section id="properties" className="py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Choose Your Perfect Lot
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From beachfront luxury to tropical retreats, find the perfect location for your Caribbean dream home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lotCategories.map((lot, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 relative group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {lot.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}
              <div className="glass-card h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={lot.image}
                    alt={lot.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 tracking-tight">{lot.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">{lot.description}</p>
                  <a
  href="#contact" // Keep href for accessibility and fallback
  className="neu-button w-full text-center block"
  onClick={(e) => {
    e.preventDefault(); // Prevent React Router from handling this as a route
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Manually update the URL hash without triggering router re-render
      window.history.pushState(null, '', '#contact');
    }
  }}
>
  View Details & Inquire
</a>
                    
      
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
