import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex flex-col justify-center">
              <span className="text-2xl font-bold text-teal-700">GrievanceAI</span>
              <span className="text-xs text-gray-500 hidden sm:block">Disaster Compensation Assistance</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium">How It Works</a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 font-medium">About</a>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 rounded-md">Home</a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 rounded-md">How It Works</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 rounded-md">About</a>
            <a 
              href={WHATSAPP_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-md mt-4 text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
