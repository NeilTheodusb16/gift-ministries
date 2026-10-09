import React from 'react';
import { Play, HeartHandshake, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Hero() {
  return (
    <header id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-navy-950 via-navy-800 to-churchBlue-600 text-white overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d9c58f_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      {/* Soft Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-churchBlue-500/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gold-500/15 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-gold-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>GIFT Ministries</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Faith. Hope. <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Community.</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              A place to hear God's Word, grow in faith, share prayer requests, and stay connected wherever you are.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#sermons"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-navy-900 hover:bg-cream-100 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 fill-navy-900" />
                <span>Watch Latest Sermon</span>
              </a>
              <a
                href="#prayer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                <HeartHandshake className="w-5 h-5 text-gold-300" />
                <span>Submit Prayer Request</span>
              </a>
            </div>
          </div>

          {/* Hero Feature Card / Quick Highlight */}
          <div className="lg:col-span-4">
            <div className="glass-dark p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 space-y-6">
              <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
                <div className="relative w-16 h-16 shrink-0">
                  <img
                    src="/logo.jpg"
                    alt=""
                    aria-hidden="true"

                  />
                  <img
                    src={logo}
                    alt="GIFT Ministries Logo"
                    className="absolute inset-[15%] w-[70%] h-[70%] rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">GIFT Ministries</h3>
                  <p className="text-xs text-gold-300 font-medium">Gathering in Faith Together</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>20+ Years of Faithful Pastoral Ministry</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>GIFT Baptist Church, Madhurawada, Visakhapatnam</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#about"
                  className="block text-center text-xs uppercase tracking-wider font-bold text-gold-300 hover:text-white transition-colors"
                >
                  Explore Pastor Profile &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
