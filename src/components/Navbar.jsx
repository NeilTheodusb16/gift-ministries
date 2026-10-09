import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MessageCircle, BookOpen, User } from 'lucide-react';
import logo from '../assets/logo.jpg';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: BookOpen },
    { name: 'About Pastor', path: '/about', icon: User },
    { name: 'Sermons', path: '/sermons', icon: BookOpen },
    { name: 'Prayer & Give', path: '/prayer-give', icon: Heart },
    { name: 'Chat With Us', path: '/contact', icon: MessageCircle },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
        : 'bg-white py-4 border-b border-amber-900/10'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="GIFT Ministries Logo"
            className="h-11 w-auto rounded-full object-cover transition-transform group-hover:scale-105 duration-200 drop-shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-[16px] uppercase font-bold tracking-widest text-gold-600 mt-1">
              GIFT Ministries
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300 ${location.pathname === link.path
                ? 'text-navy-900 font-semibold after:w-full'
                : 'text-slate-700 hover:text-navy-800 after:w-0'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/prayer-give"
            className="bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
          >
            Prayer & Support
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-navy-800 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium text-base ${location.pathname === link.path
                  ? 'bg-cream-100 text-navy-900 font-bold'
                  : 'text-slate-700 hover:bg-cream-100 hover:text-navy-800'
                  }`}
              >
                <Icon className="w-5 h-5 text-gold-600" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              to="/prayer-give"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-navy-800 text-white font-medium py-3 rounded-lg shadow-sm"
            >
              Prayer Request & Giving
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

