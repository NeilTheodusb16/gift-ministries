import React from 'react';
import WelcomeSection from '../components/WelcomeSection';
import PastorProfile from '../components/PastorProfile';
import WhatsAppCTA from '../components/WhatsAppCTA';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <WelcomeSection />
      <PastorProfile />
      <WhatsAppCTA />
    </div>
  );
}
