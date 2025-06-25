
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
