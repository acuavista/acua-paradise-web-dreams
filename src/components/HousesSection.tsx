
import React from 'react';
import { houseTypes } from '../data/houseTypes';

const HousesSection: React.FC = () => {
  return (
    <section id="houses" className="py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Dream Home Designs
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From modern A-frames to luxury estates, we build homes that match your vision and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {houseTypes.map((house, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="glass-card h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={house.image}
                    alt={house.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 tracking-tight">{house.title}</h3>
                  <p className="text-white/80 leading-relaxed">{house.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousesSection;
