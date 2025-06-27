
import React from 'react';
import { faqs } from '../data/faqs';

const FAQSection: React.FC = () => {
  return (
    <section className="py-2 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80">
            Get answers to common questions about investing in Cartagena real estate.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 glass-card p-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
              <p className="text-white/80 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
