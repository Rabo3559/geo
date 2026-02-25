import { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Secteurs', href: '#sectors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +33 1 23 45 67 89</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> contact@geo-tracking-clone.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition">Espace Client</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">Geo<span className="text-blue-600">Tracking</span></span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg shadow-orange-500/30">
              Obtenir une démo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Obtenir une démo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
