import React from 'react';
import { pastorInfo } from '../data/pastorInfo';
import { Calendar, Award, Clock, Languages, Church, Sparkles, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function PastorProfile() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-600 bg-gold-200/50 px-3 py-1 rounded-full">
            Servant of Christ
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-800">
            About Our Pastor
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A life dedicated to Christ, pastoral ministry, teaching God's Word, and equipping others for ministry.
          </p>
        </div>

        {/* Profile Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 bg-navy-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl lg:sticky lg:top-28 space-y-6 border border-navy-700">
            <div className="text-center pb-6 border-b border-white/10">
              <div className="w-24 h-24 mx-auto rounded-full bg-white p-2 shadow-inner mb-4 flex items-center justify-center">
                <img
                  src="/GIFT.png"
                  alt="GIFT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {pastorInfo.name}
              </h3>
              <p className="text-gold-300 font-medium text-sm mt-1">
                {pastorInfo.title}
              </p>
            </div>

            {/* Quick Facts List */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 pt-2">
                <Calendar className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase tracking-wider text-gold-300">Born Again</strong>
                  <span className="text-slate-200">{pastorInfo.bornAgain}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-white/10">
                <Award className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase tracking-wider text-gold-300">Ordained</strong>
                  <span className="text-slate-200">{pastorInfo.ordained}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-white/10">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase tracking-wider text-gold-300">Pastoral Experience</strong>
                  <span className="text-slate-200">{pastorInfo.experienceYears}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-white/10">
                <Languages className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase tracking-wider text-gold-300">Languages</strong>
                  <span className="text-slate-200">{pastorInfo.languages.join(' · ')}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-white/10">
                <Church className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase tracking-wider text-gold-300">Present Ministry</strong>
                  <span className="text-slate-200">{pastorInfo.presentMinistry}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-white/10">
                <Sparkles className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[10px] uppercase tracking-wider text-gold-300">Founder</strong>
                  <span className="text-slate-200">{pastorInfo.founder}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Personal & Spiritual Background */}
            <div className="bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-navy-800 text-white">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-800">
                  Personal & Spiritual Background
                </h3>
              </div>
              {pastorInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ministry Highlights */}
            <div className="bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-navy-800">
                Ministry & Leadership
              </h3>
              {pastorInfo.ministryDetails.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Ministry Vision */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-navy-800">
                Ministry Vision
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pastorInfo.visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-cream-50 border border-amber-900/10 hover:border-gold-500 transition-all duration-200 flex items-start space-x-3 group"
                  >
                    <span className="w-8 h-8 rounded-full bg-gold-200 text-navy-900 font-bold flex items-center justify-center shrink-0 text-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                      {index + 1}
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed pt-0.5">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Training */}
            <div className="bg-cream-100 p-6 sm:p-8 rounded-2xl border border-amber-900/10 space-y-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-navy-800" />
                <h3 className="font-serif text-2xl font-bold text-navy-800">
                  Education & Training
                </h3>
              </div>
              
              <ul className="space-y-3">
                {pastorInfo.education.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-900 font-semibold">{item.degree}</strong>
                      <span className="text-slate-600 font-medium"> — {item.institution}</span>
                      {item.year && <span className="text-slate-500 text-xs ml-2 bg-white px-2 py-0.5 rounded border border-slate-200">{item.year}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
