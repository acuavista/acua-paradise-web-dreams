
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-2 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Start Your Paradise Journey
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to secure your piece of tropical paradise? Contact us today for a personalized consultation.
          </p>
        </div>

        <div className="glass-card p-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Lot Type</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors">
                  <option value="">Select a preference</option>
                  <option value="beachfront">Beachfront Properties</option>
                  <option value="beach-access">Beach Access Properties</option>
                  <option value="tropical">Tropical Paradise Properties</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your tropical property dreams..."
              ></textarea>
            </div>
            <button type="submit" className="neu-button w-full text-lg py-4">
              Get Started Today
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
