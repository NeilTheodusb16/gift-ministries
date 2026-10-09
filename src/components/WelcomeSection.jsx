import React from 'react';
import { Compass, BookOpen, Heart, MessageCircle } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-cream-100 border-b border-amber-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Welcome Card */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-800">
                <Compass className="w-6 h-6 text-churchBlue-500" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-navy-800">
                Welcome to Our Fellowship
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We believe in the transforming power of God's Word and the importance of walking together in faith. Join us online for sermons, prayer, giving, and encouragement.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-gold-600">Gathering in Faith Together</span>
              <span>Online Church Fellowship</span>
            </div>
          </div>

          {/* Growing Together Grid */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-churchBlue-500">
                A place to grow
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy-800">
                Growing Together in Christ
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Explore the latest messages, send a prayer request, support ministry through giving, or connect with us through WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6">
              <a
                href="#sermons"
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-navy-800 hover:text-white text-slate-700 transition-all duration-200 group text-sm font-medium"
              >
                <BookOpen className="w-4 h-4 text-churchBlue-500 group-hover:text-gold-300" />
                <span>Latest Sermons</span>
              </a>
              <a
                href="#prayer"
                className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 hover:bg-navy-800 hover:text-white text-slate-700 transition-all duration-200 group text-sm font-medium"
              >
                <Heart className="w-4 h-4 text-churchBlue-500 group-hover:text-gold-300" />
                <span>Prayer & Give</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
