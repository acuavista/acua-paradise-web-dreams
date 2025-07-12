// This is a dummy change to force a new Netlify deploy and re-detection.
import React from 'react';
// ... rest of your code ...


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
          <form name="contact" data-netlify="true" data-netlify-recaptcha="true" className="space-y-6"> 
            <input type="hidden" name="form-name" value="contact" />
          {/* NEW FORM FIELDS START HERE */}
            <div className="grid md:grid-cols-2 gap-6"><div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="first-name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="last-name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-2">State/Province</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="State/Province"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-2">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Interest Checkboxes */}
            <div>
              <label className="block text-sm font-medium mb-3">I'm interested in (select all that apply):</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="interest[]" value="land" className="form-checkbox text-purple-600 rounded" />
                  <span>Land</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="interest[]" value="camping-spot" className="form-checkbox text-purple-600 rounded" />
                  <span>Camping Spot</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="interest[]" value="vacation-home" className="form-checkbox text-purple-600 rounded" />
                  <span>Vacation Home</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="interest[]" value="permanent-home" className="form-checkbox text-purple-600 rounded" />
                  <span>Permanent Home</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="interest[]" value="run-airbnb" className="form-checkbox text-purple-600 rounded" />
                  <span>Run Airbnb</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="interest[]" value="co-founder" className="form-checkbox text-purple-600 rounded" />
                  <span>Co-founder</span>
                </label>
                <label className="flex items-center space-x-2 col-span-2 sm:col-span-3">
                  <input type="checkbox" name="interest[]" value="other-specify" id="otherInterestCheckbox" className="form-checkbox text-purple-600 rounded" />
                  <span>Other:</span>
                  <input
                    type="text"
                    name="other-interest-text"
                    className="flex-grow ml-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors text-sm"
                    placeholder="Please specify"
                  />
                </label>
              </div>
            </div>

            {/* Other Marketing Info: How did you hear about us? */}
            <div>
              <label htmlFor="howHear" className="block text-sm font-medium mb-2">How did you hear about us?</label>
              <select
                id="howHear"
                name="how-hear"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                <option value="search-engine">Search Engine (Google, Bing, etc.)</option>
                <option value="social-media">Social Media</option>
                <option value="friend-referral">Friend/Referral</option>
                <option value="online-ad">Online Ad</option>
                <option value="article-blog">Article/Blog Post</option>
                <option value="other-marketing">Other</option>
              </select>
            </div>
          
            {/* Message box */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                rows={4}
                name="message"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your tropical property dreams and questions...">
              </textarea>
            </div>

           
            {/* NEW FORM FIELDS END HERE */}
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
