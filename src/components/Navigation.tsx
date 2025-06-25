
import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollY, 
  scrollToSection 
}) => {
  const navItems = ['Home', 'Properties', 'Houses', 'Why Cartagena', 'Blog', 'Testimonials', 'Pricing', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'backdrop-blur-lg bg-black/20 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-6xl font-medium tracking-tight">
            AcuaBeach
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
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
          {navItems.map((item) => (
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
  );
};

export default Navigation;
