import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

export default function WhatsAppCTA() {
  const whatsappUrl = "https://wa.me/?text=Hello%20Grace%20Fellowship%20GIFT%20Ministries";

  return (
    <>
      {/* Chat With Us Section */}
      <section id="whatsapp" className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <MessageCircle className="w-9 h-9" />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-800">
              Chat With Us
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
              Connect through WhatsApp for prayer, the latest sermon, information about the church, giving, or to speak with someone directly.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-base"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
}
