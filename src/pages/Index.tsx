
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
    },
    {
      name: "Carlos Mendez",
      location: "Phoenix, Arizona",
      image: "/images/testimonial6.jpg",
      quote: "As a first-time international property buyer, I was nervous about the process. The AcuaBeach team made everything so easy and transparent. Now I have my own slice of Caribbean paradise that I can visit anytime or rent out for extra income.",
      result: "First-time international buyer successfully secured rental income property"
    },
    {
      name: "Lisa Park",
      location: "Seattle, Washington",
      image: "/images/testimonial7.jpg", 
      quote: "After years of dreaming about a tropical getaway, AcuaBeach made it happen. The 90% financing option was a game-changer for me. Now I have my own beachfront lot where I can build my retirement home. The team was professional and supportive throughout the entire process.",
      result: "Secured dream retirement property with innovative financing"
    },
    {
      name: "Robert Johnson",
      location: "Atlanta, Georgia",
      image: "/images/testimonial8.jpg",
      quote: "I was looking for an investment opportunity that would diversify my portfolio beyond traditional stocks and bonds. AcuaBeach offered exactly what I needed - a tangible asset in a growing market with incredible potential. The financing terms were unbeatable, and I now own two lots that I plan to develop over the next few years.",
      result: "Diversified investment portfolio with high-growth tropical real estate"
    }
  ];

  const lotCategories = [
    {
      title: "Beachfront Properties",
      description: "Wake up to the Caribbean Sea. Direct access to pristine sands and unparalleled views. Your ultimate luxury escape.",
      image: "/lovable-uploads/boquilaPlayaHotels.png",
      price: "$200,000",
      pricePerSqFt: "$100/sf"
    },
    {
      title: "Beach Access Properties", 
      description: "Just steps from the shore. Enjoy beach living without the beachfront premium. The perfect balance of value and convenience.",
      image: "/lovable-uploads/56a22ae8-3d6d-4ba7-8201-dffcf2eb9132.png",
      price: "$140,000",
      pricePerSqFt: "$70/sf",
      recommended: true
    },
    {
      title: "Tropical Paradise Properties",
      description: "Secluded havens nestled amidst lush Colombian landscapes. Ideal for tranquil retreats and connecting with nature.",
      image: "/lovable-uploads/46049fac-37d0-4492-b0c8-8141c080f816.png", 
      price: "$55,000",
      pricePerSqFt: "$27.5/sf"
    }
  ];

  const houseTypes = [
    {
      title: "A-Frame Homes",
      description: "Modern architectural marvels that blend seamlessly with nature. These distinctive triangular homes offer stunning views and efficient use of space, perfect for those seeking contemporary tropical living.",
      image: "/lovable-uploads/e18db10d-ae77-430f-8492-3247cfa7ee8c.png"
    },
    {
      title: "Two-Story Homes", 
      description: "Spacious family retreats with multiple levels of luxury. These elegant homes maximize views and living space, featuring traditional Caribbean architecture with modern amenities.",
      image: "/lovable-uploads/ff3f2c8a-caa1-4efe-a171-403f8a3fc150.png"
    },
    {
      title: "Luxury Homes",
      description: "Premium residences with pools and upscale finishes. These sophisticated homes feature resort-style amenities, gourmet kitchens, and expansive outdoor living spaces for ultimate tropical luxury.",
      image: "/lovable-uploads/5b6a1c4d-3411-4d3d-955c-f70875c8e2d8.png"
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

  const blogPosts = [
    {
      title: "Why Cartagena is the Next Miami",
      excerpt: "Discover why savvy investors are turning their attention to Colombia's Caribbean coast and how property values are set to skyrocket.",
      date: "June 20, 2024",
      category: "Investment",
      image: "/lovable-uploads/d6c37a1e-5d79-4349-a555-4c8e072c5d4b.png",
      readTime: "5 min read",
      slug: "why-cartagena-is-the-next-miami"
    },
    {
      title: "Building Your Dream Home",
      excerpt: "From design to construction, learn everything you need to know about creating your perfect tropical retreat.",
      date: "June 15, 2024",
      category: "Construction",
      image: "/lovable-uploads/bdb9c6ab-5072-4565-ab27-553acc0e72b4.png",
      readTime: "8 min read",
      slug: "building-your-dream-home"
    },
    {
      title: "90% Financing: How We Make Paradise Accessible",
      excerpt: "Understanding our revolutionary financing model that's opening doors to tropical property ownership for everyone.",
      date: "June 10, 2024",
      category: "Financing",
      image: "/lovable-uploads/Palm2.png",
      readTime: "6 min read",
      slug: "90-percent-financing-how-we-make-paradise-accessible"
    }
  ];

  const handleBlogClick = (slug: string) => {
    // For now, we'll just scroll to the top or you can implement actual blog routing
    console.log(`Navigating to blog post: ${slug}`);
    // In a real application, you would navigate to the blog post
    // For example: navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-light">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'backdrop-blur-lg bg-white/90 border-b border-gray-200' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
              AcuaBeach
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Properties', 'Houses', 'Why Cartagena', 'Blog', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-black hover:text-gray-600 transition-colors duration-200 text-lg tracking-wide font-medium"
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
              {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-y-0 right-0 w-80 bg-white/95 backdrop-blur-xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-20 px-6 space-y-6">
            {['Home', 'Properties', 'Houses', 'Why Cartagena', 'Blog', 'Testimonials', 'Pricing', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-left text-black hover:text-gray-600 transition-colors duration-200 text-xl font-medium"
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/lovable-uploads/2e8bde97-c8d3-4902-bc1f-f93ac25425e6.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight text-white drop-shadow-lg">
            Get Your Own Piece of this Paradise
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-2 px-4">
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-6">
            We Finance Up To 90% of Your First Acquisition
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

      {/* Why Cartagena Section */}
      <section id="why-cartagena" className="py-2 px-4">
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

      {/* Blog Section */}
      <section id="blog" className="py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and news from the world of tropical real estate investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glass-card h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    {post.title === "90% Financing: How We Make Paradise Accessible" && (
                      <div className="absolute bottom-4 right-4">
                        <img 
                          src="/lovable-uploads/blackDeal.png" 
                          alt="Special Deal" 
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                      <span className="mx-2">•</span>
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-medium mb-3 tracking-tight">{post.title}</h3>
                    <p className="text-white/80 mb-4 leading-relaxed">{post.excerpt}</p>
                    <button 
                      onClick={() => handleBlogClick(post.slug)}
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center cursor-pointer"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section 
        className="py-2 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/lovable-uploads/224e6347-54c1-4aeb-b393-bf4c2e4418ca.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-8 text-white drop-shadow-lg">
            Your Dream, Our Commitment: The AcuaBeach Advantage
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto mb-12 drop-shadow-md">
            At AcuaBeach, we are passionately dedicated to helping the average travel enthusiast realize their dream 
            of owning a piece of tropical paradise. We stand alone in the market by offering an unprecedented up to 90% 
            financing because we own all our prime lots outright, cutting out intermediaries. Beyond acquisition, we are 
            a full-service organization providing comprehensive support for developing your acquired lot(s), transforming 
            your vision into reality, whether it's an A-frame, Mediterranean, or any other style.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-medium mb-2 text-white">90% Financing</h3>
              <p className="text-white/80 text-sm">Unmatched financing options make ownership accessible</p>
            </div>
            <div className="text-center">
              <Home className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-medium mb-2 text-white">Full-Service Support</h3>
              <p className="text-white/80 text-sm">From lot to dream home, we handle everything</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-medium mb-2 text-white">Prime Locations</h3>
              <p className="text-white/80 text-sm">We own the best lots outright, no intermediaries</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-medium mb-2 text-white">Transparent Process</h3>
              <p className="text-white/80 text-sm">Clear, honest communication every step of the way</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
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

      {/* Testimonials Section */}
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

      {/* Paradise Gallery Section */}
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
            {[
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
              '/lovable-uploads/beachAccess.png',
              '/lovable-uploads/beachFront3.png',
              '/lovable-uploads/Manza.png',
              '/lovable-uploads/FloorPanWpool.png'
            ].map((image, index) => (
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

      {/* Mission Statement Section */}
      <section 
        className="py-2 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/lovable-uploads/47bc7e11-e60d-4420-a0f1-ca6075a64b96.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 relative z-10">
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

      {/* Contact Section */}
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

      {/* FAQ Section */}
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

      {/* Footer */}
      <footer className="py-2 px-4 border-t border-white/10">
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
