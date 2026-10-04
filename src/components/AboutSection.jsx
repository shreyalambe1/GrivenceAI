import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About GrievanceAI
              </h2>
            </div>
            
            <div className="prose prose-teal prose-lg text-gray-600 mx-auto">
              <p className="mb-6">
                <strong>GrievanceAI</strong> is an AI-powered assistance system designed to simplify access to disaster compensation information in Maharashtra. 
              </p>
              <p className="mb-6">
                It uses Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs) to retrieve relevant information from authorized documents and present it in a clear and understandable manner.
              </p>
              <p>
                The project is intended to reduce the difficulty of searching through multiple government documents and understanding complex administrative information. We aim to bridge the gap between complex official policies and citizens who need assistance during difficult times.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-8 sm:px-12 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-500">
              GrievanceAI provides informational assistance based on available authorized documents. It does not replace official government authorities, legal advice, or the official application process. Users should verify important information with the concerned government authority. We do not approve or process compensation applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
