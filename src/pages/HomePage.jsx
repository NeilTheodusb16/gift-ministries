import React from 'react';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import SermonsSection from '../components/SermonsSection';
import WhatsAppCTA from '../components/WhatsAppCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <SermonsSection />
      <WhatsAppCTA />
    </>
  );
}
