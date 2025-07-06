import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { whyCardsData } from '../data/whyCards'; // Import your new data

// Define the props for the WhyCardsSection component
// This allows us to pass a different dataset if needed (e.g., for the second set of cards)
interface WhyCardsSectionProps {
  data: {
    title: string;
    image: string;
    excerpt: string;
    link: string;
  }[];
  sectionTitle: string; // Title for the section (e.g., "Why Invest With Us?")
  sectionDescription: string; // Description for the section
}

const WhyCardsSection: React.FC<WhyCardsSectionProps> = ({ data, sectionTitle, sectionDescription }) => {
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link); // Navigate to the specified link
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            {sectionTitle}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((card, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="glass-card h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* You can add special icons here if needed, similar to blog section's blackDeal.png */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{card.excerpt}</p>
                  <button
                    onClick={() => handleCardClick(card.link)}
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center cursor-pointer"
                  >
                    More Info <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCardsSection;
