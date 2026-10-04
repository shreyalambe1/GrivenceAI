import React from 'react';
import { MessageCircle, Info } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-teal-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block text-teal-800">Get the Right</span>
              <span className="block text-teal-600">Disaster Compensation Information — Simply.</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              GrievanceAI helps you understand government disaster compensation schemes, eligibility, required documents, and application procedures in simple language.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 sm:flex sm:justify-center lg:justify-start gap-4 flex-col sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg transition-colors shadow-sm"
              >
                <MessageCircle className="mr-2" size={24} />
                Chat on WhatsApp
              </a>
              <a
                href="#how-it-works"
                className="mt-3 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50 md:py-4 md:text-lg transition-colors shadow-sm"
              >
                <Info className="mr-2" size={24} />
                How It Works
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md bg-white border border-gray-100 p-6 flex flex-col items-center">
              <div className="w-full h-64 bg-teal-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                {/* Abstract visual representation instead of copyrighted logo */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                   <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                   <MessageCircle size={32} className="text-green-500" />
                </div>
                <div className="flex flex-col space-y-4 items-center">
                    <div className="w-32 h-4 bg-teal-200 rounded"></div>
                    <div className="w-48 h-4 bg-teal-200 rounded"></div>
                    <div className="w-24 h-4 bg-teal-200 rounded"></div>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500 text-center uppercase tracking-wide">
                Connecting Citizens with Government Assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
