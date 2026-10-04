import React from 'react';
import { ShieldCheck } from 'lucide-react';

const TrustBanner = () => {
  return (
    <div className="bg-teal-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
          <div className="flex-shrink-0 bg-teal-800 p-3 rounded-full">
            <ShieldCheck className="text-teal-100" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Reliable information. Simple guidance.
            </h3>
            <p className="text-teal-100 max-w-2xl text-sm md:text-base">
              Get guidance based on authorized government documents, schemes, guidelines, and government resolutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
