
import React from 'react';

const ParadiseGallerySection: React.FC = () => {
  const galleryImages = [
    '/lovable-uploads/ad8a077f-6bbb-4e03-90c6-77548383c05f.png',
    '/lovable-uploads/03ec796e-f85a-455a-a824-bb2546ecd616.png',
    '/lovable-uploads/68f3efc7-0335-4042-b130-cff6b2fa8298.png',
    '/lovable-uploads/06c972c6-ab0e-467a-8e5e-6db9dd33ce1e.png',
    '/lovable-uploads/facd91d9-f361-4178-a91e-f9c693f65063.png',
    '/lovable-uploads/06023877-fe2a-4aab-aa35-dcc9f6f6f16c.png',
    '/lovable-uploads/5555ff63-3c02-43e4-97a8-a42c369a982f.png',
    '/lovable-uploads/45d3a96e-6354-44bc-8281-c4fbba72a3a1.png',
    '/lovable-uploads/4a29844e-19ed-443d-8095-a6dc1ab4a8a5.png',
    '/lovable-uploads/d7afc008-a719-47d8-96d0-a99b37a71d68.png',
    '/lovable-uploads/6bcb673c-de07-4891-9269-666d3033b94f.png',
    '/lovable-uploads/dfea186a-c804-4729-b7b8-b620b3e6550f.png',
    '/lovable-uploads/27901c6d-a934-433a-b001-84c373d1ea27.png',
    
  ];

  return (
    <section className="py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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

export default ParadiseGallerySection;
