import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Church } from 'lucide-react';
import logo from '../assets/logo.jpg';
export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="GIFT Ministries Logo"
                className="h-11 w-auto rounded-full object-cover transition-transform group-hover:scale-105 duration-200 drop-shadow-sm"
              />
              <div>

                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  GIFT Ministries
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Gathering in Faith Together · Online Christian Church. Dedicated to preaching God's Word, equipping leaders, and extending His kingdom.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-white font-bold text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-300 transition-colors">About Our Pastor</Link></li>
              <li><Link to="/sermons" className="hover:text-gold-300 transition-colors">Sermons & YouTube</Link></li>
              <li><Link to="/prayer-give" className="hover:text-gold-300 transition-colors">Prayer Requests</Link></li>
              <li><Link to="/prayer-give" className="hover:text-gold-300 transition-colors">Giving & Tithes</Link></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-white font-bold text-base">Ministry & Location</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <Church className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>GIFT Baptist Church, Madhurawada, Visakhapatnam, AP</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>contact@giftministries.org</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>WhatsApp / Phone Support Available</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} GIFT Ministries. All rights reserved.</p>
          <p className="flex items-center">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 mx-1 fill-red-500" /> for GIFT Ministries
          </p>
        </div>

      </div>
    </footer>
  );
}
