import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../config';

const WhatsAppCTA = () => {
  return (
    <section className="bg-teal-800 py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 800 800">
          <defs>
            <pattern id="pattern-boxes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-boxes)"></rect>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Need help understanding your compensation?
        </h2>
        <p className="mt-4 text-xl text-teal-100 mb-10">
          Chat with GrievanceAI on WhatsApp and get step-by-step guidance.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-teal-900 bg-green-400 hover:bg-green-300 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <MessageCircle className="mr-3" size={28} />
          Start Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
