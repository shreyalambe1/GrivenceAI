import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBanner from './components/TrustBanner';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhatsAppCTA from './components/WhatsAppCTA';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBanner />
        <ServicesSection />
        <HowItWorksSection />
        <WhatsAppCTA />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
