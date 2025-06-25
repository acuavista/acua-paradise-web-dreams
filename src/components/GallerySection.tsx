
import React from 'react';
import { galleryImages } from '../data/galleryImages';

const GallerySection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Paradise Gallery
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore the breathtaking beauty of Cartagena through our curated collection of properties and locations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
