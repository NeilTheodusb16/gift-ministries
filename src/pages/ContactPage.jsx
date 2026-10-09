import React from 'react';
import WhatsAppCTA from '../components/WhatsAppCTA';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <WhatsAppCTA />
      </div>
    </div>
  );
}
