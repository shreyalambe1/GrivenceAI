import React from 'react';
import { Search, CheckCircle, IndianRupee, FileText, Navigation, Languages } from 'lucide-react';

const services = [
  {
    title: 'Identify Your Loss',
    description: 'Human injury/loss, Animal loss, Agricultural loss, Disaster-related damage.',
    icon: Search,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Check Eligibility',
    description: 'Understand whether a compensation scheme may apply to your specific situation.',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Know Compensation',
    description: 'Understand the applicable assistance and compensation information available.',
    icon: IndianRupee,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    title: 'Document Checklist',
    description: 'Find the exact documents required for the relevant government application.',
    icon: FileText,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    title: 'Application Guidance',
    description: 'Understand the application steps and identify the concerned government authority.',
    icon: Navigation,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    title: 'Marathi & English',
    description: 'Make information easier to understand through multilingual interaction.',
    icon: Languages,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How GrievanceAI Can Help
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We simplify complex administrative information into easy-to-understand steps.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-xl shadow-sm px-6 pb-8 h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="-mt-6">
                      <div className={`inline-flex items-center justify-center p-3 rounded-xl shadow-sm ${service.bgColor} ${service.color}`}>
                        <Icon size={28} aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 text-xl font-semibold text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-base text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
