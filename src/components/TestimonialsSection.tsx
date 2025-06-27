
import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Success Stories from Paradise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join hundreds of satisfied property owners who've made their tropical dreams come true with AcuaBeach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-green-400 text-sm font-medium">{testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
