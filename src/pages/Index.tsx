
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Star, Home, Users, MessageCircle, FileText, Calendar, ArrowRight, PlayCircle, Heart, Shield, Zap, Award, TrendingUp, DollarSign, Globe, Camera } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const testimonials = [
    {
      name: "Sarah Martinez",
      location: "Denver, Colorado",
      image: "/images/testimonial1.jpg",
      quote: "I never thought I could afford to own a property just a few blocks from the Caribbean sea. AcuaBeach not only made that possible, but I was able to get started with just a downpayment. The best part was I could use the property whenever I travel to Cartagena. Great people, great opportunity.",
      result: "Achieved affordable tropical property ownership with low down payment"
    },
    {
      name: "Michael Chen",
      location: "San Francisco, California",
      image: "/images/testimonial2.jpg",
      quote: "I was a bit skeptical at first, but I was pleasantly surprised when I visited the lots. I chose one on the spot, and the process was incredibly smooth. AcuaBeach delivered on every promise.",
      result: "Successfully acquired a prime lot, exceeding expectations"
    },
    {
      name: "Jessica Williams",
      location: "Austin, Texas",
      image: "/images/testimonial3.jpg",
      quote: "I am still in college, but because of the easy financing, I was able to buy a property a short walking distance from the beach. I am not ready to build yet, but I use it for camping when I go to Cartagena. Best thing ever.",
      result: "Student achieved beachfront property ownership with flexible financing"
    },
    {
      name: "David Rodriguez",
      location: "Miami, Florida",
      image: "/images/testimonial4.jpg",
      quote: "The transparency and support from AcuaBeach was exceptional. They guided me through every step, and now I own a piece of paradise that's already appreciating in value. My best investment decision ever.",
      result: "Secured high-appreciation investment property with full support"
    },
    {
      name: "Amanda Thompson",
      location: "Chicago, Illinois", 
      image: "/images/testimonial5.jpg",
      quote: "Working with AcuaBeach was seamless. Their financing options made my dream of owning tropical property a reality. The lot I purchased is perfect for the vacation home I'm planning to build.",
      result: "Turned tropical property dreams into reality with easy financing"
    }
  ];

  const lotCategories = [
    {
      title: "Beachfront Properties",
      description: "Wake up to the Caribbean Sea. Direct access to pristine sands and unparalleled views. Your ultimate luxury escape.",
      image: "/images/beachfront.jpg",
      price: "$200,000",
      pricePerSqFt: "$100/sf"
    },
    {
      title: "Beach Access Properties", 
      description: "Just steps from the shore. Enjoy beach living without the beachfront premium. The perfect balance of value and convenience.",
      image: "/images/ocean-wave.jpg",
      price: "$140,000",
      pricePerSqFt: "$70/sf",
      recommended: true
    },
    {
      title: "Tropical Paradise Properties",
      description: "Secluded havens nestled amidst lush Colombian landscapes. Ideal for tranquil retreats and connecting with nature.",
      image: "/images/tropical-paradise.jpg", 
      price: "$55,000",
      pricePerSqFt: "$27.5/sf"
    }
  ];

  const houseTypes = [
    {
      title: "A-Frame Homes",
      description: "Modern architectural marvels that blend seamlessly with nature. These distinctive triangular homes offer stunning views and efficient use of space, perfect for those seeking contemporary tropical living.",
      image: "/images/aframe.jpg"
    },
    {
      title: "Two-Story Homes", 
      description: "Spacious family retreats with multiple levels of luxury. These elegant homes maximize views and living space, featuring traditional Caribbean architecture with modern amenities.",
      image: "/images/palmatree-house.jpg"
    },
    {
      title: "Luxury Homes",
      description: "Premium residences with pools and upscale finishes. These sophisticated homes feature resort-style amenities, gourmet kitchens, and expansive outdoor living spaces for ultimate tropical luxury.",
      image: "/images/luxury-pool.jpg"
    }
  ];

  const faqs = [
    {
      question: "What financing options are available?",
      answer: "We offer up to 90% financing on all our properties. This means you can secure your tropical paradise with as little as 10% down. Our in-house financing eliminates traditional bank complications and makes ownership accessible to working-class Americans."
    },
    {
      question: "Are the properties legally owned and transferable?",
      answer: "Absolutely. All our properties come with clear title and are fully transferable. We handle all legal documentation and ensure complete compliance with Colombian real estate laws. You'll receive full legal ownership documents."
    },
    {
      question: "Can I visit the properties before purchasing?",
      answer: "Yes! We encourage site visits and can arrange guided tours of available lots. Many clients choose their perfect lot after seeing the stunning locations in person. We can also provide virtual tours for initial viewing."
    },
    {
      question: "What ongoing costs should I expect?",
      answer: "Property taxes in Colombia are very low, typically under $200 annually. There are no HOA fees for raw land. If you choose to build, we'll provide transparent cost estimates for construction and any applicable permits."
    },
    {
      question: "How does the building process work?",
      answer: "We provide full-service construction support. From architectural design to final construction, our team manages the entire process. We work with trusted local contractors and can build everything from prefab models starting at $30,000 to custom luxury homes."
    },
    {
      question: "Is Cartagena a safe investment location?",
      answer: "Cartagena is experiencing rapid growth and appreciation. The upcoming second international airport will significantly boost property values. The area is politically stable, tourism-focused, and has strong legal protections for foreign property owners."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-light">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'backdrop-blur-lg bg-black/20 border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-medium tracking-tight">
              AcuaBeach
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Properties', 'Houses', 'Why Cartagena', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-y-0 right-0 w-80 bg-black/90 backdrop-blur-xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-20 px-6 space-y-6">
            {['Home', 'Properties', 'Houses', 'Why Cartagena', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-left text-white/80 hover:text-white transition-colors duration-200 text-lg"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/slide1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-tight">
            Get Your Own Piece of this Paradise
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Affordable, Tropical, Caribbean Properties with Up To 90% Financing
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-12">
            Get your own piece of this Tropical Paradise with up to 90% Financing Today
          </h2>
          <div className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto text-center space-y-6">
            <p>
              AcuaBeach empowers working-class Americans to own prime buildable lots in vibrant Cartagena, Colombia. 
              Experience truly hassle-free ownership with our unique financing, full-service support from acquisition 
              to development, and expert guidance to make your vision a reality.
            </p>
            <p>
              From securing your perfect lot to building your dream home, we provide comprehensive support every step 
              of the way. Our revolutionary financing model makes tropical property ownership accessible to everyone, 
              not just the wealthy elite.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-2xl font-medium">{lot.price}</div>
                          <div className="text-white/80">{lot.pricePerSqFt}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 tracking-tight">{lot.title}</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">{lot.description}</p>
                    <button className="neu-button w-full">
                      View Details & Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Houses Section */}
      <section id="houses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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
                  <div className="h-64 bg-gradient-to-br from-green-500 to-blue-600 relative overflow-hidden">
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

      {/* Why Cartagena Section */}
      <section id="why-cartagena" className="py-20 px-4">
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-8">
              Why Cartagena: Invest in Colombia's Next Real Estate Boom
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
              Cartagena is a rapidly appreciating real estate market with exponential growth potential. Property values 
              are currently increasing sharply, poised for further significant surges upon the completion of the second 
              international airport. This is your unparalleled opportunity to secure your investment on the ground floor 
              of a flourishing Caribbean paradise, where a $200,000 beachfront lot can offer value comparable to 
              multi-million dollar properties in Florida.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-medium mb-2">Rapid Appreciation</h3>
                <p className="text-white/80">Property values increasing 15-20% annually</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-medium mb-2">Strategic Location</h3>
                <p className="text-white/80">UNESCO World Heritage city with growing tourism</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-medium mb-2">Value Opportunity</h3>
                <p className="text-white/80">Fraction of comparable US coastal property prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-8">
            Your Dream, Our Commitment: The AcuaBeach Advantage
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            At AcuaBeach, we are passionately dedicated to helping the average travel enthusiast realize their dream 
            of owning a piece of tropical paradise. We stand alone in the market by offering an unprecedented up to 90% 
            financing because we own all our prime lots outright, cutting out intermediaries. Beyond acquisition, we are 
            a full-service organization providing comprehensive support for developing your acquired lot(s), transforming 
            your vision into reality, whether it's an A-frame, Mediterranean, or any other style.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-medium mb-2">90% Financing</h3>
              <p className="text-white/80 text-sm">Unmatched financing options make ownership accessible</p>
            </div>
            <div className="text-center">
              <Home className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-medium mb-2">Full-Service Support</h3>
              <p className="text-white/80 text-sm">From lot to dream home, we handle everything</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-medium mb-2">Prime Locations</h3>
              <p className="text-white/80 text-sm">We own the best lots outright, no intermediaries</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-medium mb-2">Transparent Process</h3>
              <p className="text-white/80 text-sm">Clear, honest communication every step of the way</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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

      {/* Gallery Section */}
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={item}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-full h-full bg-black/20 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="glass-card p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Our Mission: Democratizing Tropical Homeownership
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              AcuaBeach was founded on the belief that owning a piece of tropical paradise shouldn't be limited to 
              multimillionaires and Hollywood stars. Our mission is to democratize access to prime international real estate, 
              providing unparalleled financing, transparent processes, and comprehensive support to empower individuals and 
              families to build equity and secure their dreams in a vibrant, flourishing market like Cartagena.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-medium mb-4">AcuaBeach</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Democratizing tropical property ownership through innovative financing and full-service support.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Properties</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Beachfront Lots</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beach Access Lots</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tropical Paradise Lots</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Property Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Construction Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Property Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-white/60">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@acuabeach.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Cartagena, Colombia
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 AcuaBeach. All rights reserved. | Making tropical property ownership accessible to everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
