import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-teal-700">GrievanceAI</span>
            <p className="mt-2 text-gray-500 text-sm max-w-md">
              AI-Powered Disaster Compensation Assistance System
            </p>
            <p className="mt-4 text-sm text-gray-400 font-medium">
              Academic Project | 2026–27
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-base text-gray-500 hover:text-teal-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-base text-gray-500 hover:text-teal-600">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-500 hover:text-teal-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-500 hover:text-teal-600">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {currentYear} GrievanceAI Project. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Not an official Government of Maharashtra service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
