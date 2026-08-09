import React from 'react';
import { Building2, Target, Compass, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutScreen: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#6750a4] bg-[#e1d4fd] px-3.5 py-1 rounded-full">
          ABOUT VIBE & IEDC
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1b20] tracking-tight">
          Fueling Student Entrepreneurship at GEC Kozhikode
        </h1>
        <p className="text-base sm:text-lg text-[#494551] leading-relaxed">
          The Innovation and Entrepreneurship Development Centre (IEDC) at Government Engineering College Kozhikode is the hub for technical innovation, product design, and venture creation.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Student Innovators', value: '1,200+' },
          { label: 'Startups Incubated', value: '45+' },
          { label: 'Grant Funding Raised', value: '₹1.2 Cr+' },
          { label: 'Patent Filings', value: '18' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[28px] border border-[#cbc4d2]/35 shadow-sm text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#4f378a] mb-1">{stat.value}</h3>
            <p className="text-xs sm:text-sm font-semibold text-[#494551]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-[#cbc4d2]/35 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#e1d4fd] flex items-center justify-center text-[#4f378a]">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-[#1d1b20]">Our Mission</h2>
          <p className="text-sm text-[#494551] leading-relaxed">
            To cultivate a vibrant entrepreneurial mindset among engineering students by providing world-class prototyping facilities, industry mentorship, regulatory guidance, and seed capital access.
          </p>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-[#cbc4d2]/35 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#e1d4fd] flex items-center justify-center text-[#4f378a]">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-[#1d1b20]">Our Vision</h2>
          <p className="text-sm text-[#494551] leading-relaxed">
            To transform GEC Kozhikode into a nationally recognized innovation springboard where student research directly leads to high-impact commercial ventures and deep-tech intellectual property.
          </p>
        </div>
      </div>

      {/* Campus Infrastructure Highlights */}
      <div className="bg-[#f8f2fa] p-8 sm:p-12 rounded-[40px] border border-[#cbc4d2]/30 space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-[#1d1b20] mb-2">Campus Prototyping Infrastructure</h2>
          <p className="text-sm text-[#494551]">
            Our Maker Space is equipped for rapid hardware, software, and bio-tech prototyping 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            '3D Printers & CNC Fabrication Lab',
            'GPU Compute Clusters for AI Training',
            'IoT Sensor Calibration Benches',
            'Dedicated Co-working Incubator Space',
            'IPR & Patent Search Legal Desk',
            'High-Speed Testing & Fiber Mesh'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#cbc4d2]/20">
              <CheckCircle2 className="w-5 h-5 text-[#4f378a] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#1d1b20]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
