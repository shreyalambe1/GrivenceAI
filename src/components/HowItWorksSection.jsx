import React from 'react';
import { MessageSquare, Cpu, FileSearch, Smartphone } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Tell Us Your Problem',
    description: 'Describe your situation or loss in simple words.',
    icon: MessageSquare,
  },
  {
    id: 2,
    title: 'AI Understands Your Situation',
    description: 'Our system analyzes your specific needs.',
    icon: Cpu,
  },
  {
    id: 3,
    title: 'Relevant Government Information is Retrieved',
    description: 'We find applicable schemes from official documents.',
    icon: FileSearch,
  },
  {
    id: 4,
    title: 'Get Simple Guidance',
    description: 'Receive clear, actionable steps for your situation.',
    icon: Smartphone,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            A simple 4-step process to get the guidance you need.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-teal-100" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center text-center">
                  <div className="bg-white z-10 flex items-center justify-center w-24 h-24 rounded-full border-4 border-teal-50 shadow-md mb-6">
                    <div className="w-full h-full flex items-center justify-center rounded-full bg-teal-600 text-white">
                      <Icon size={32} />
                    </div>
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute top-0 right-1/2 transform translate-x-12 -translate-y-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm border-2 border-white">
                    {step.id}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
