import React, { useState } from 'react';
import { STARTUPS } from '../../data/mockData';
import { ExternalLink, Award, Sparkles, Building2 } from 'lucide-react';
import { useSiteImages } from '../../context/ImageContext';

interface AlumniStartup {
  name: string;
  domain: string;
  institution: string;
  achievement: string;
  badge: string;
}

const ALUMNI_STARTUPS: AlumniStartup[] = [
  {
    name: 'Genrobotics',
    domain: 'Robotics & Social Innovation',
    institution: 'GEC Barton Hill Alum',
    achievement: 'Created Bandicoot — India\'s robotic solution for eliminating manual scavenging.',
    badge: 'Robotics Leader'
  },
  {
    name: 'Sastra Robotics',
    domain: 'Robotic Testing Systems',
    institution: 'GEC Sreekrishnapuram Alum',
    achievement: 'Develops automated robotic testing solutions used by top global tech brands.',
    badge: 'Industrial Automation'
  },
  {
    name: 'EyeROV',
    domain: 'Underwater Robotics',
    institution: 'CET Alum',
    achievement: 'Builds underwater drones (ROVs) for marine research, defense & offshore inspection.',
    badge: 'Deep Tech'
  },
  {
    name: 'NavAlt Solar',
    domain: 'Solar & Electric Boats',
    institution: 'Kerala Tech Innovators',
    achievement: 'Manufactured India\'s first solar-powered ferry (Aditya), transforming marine transport.',
    badge: 'CleanTech'
  },
  {
    name: 'CareStack',
    domain: 'Healthcare SaaS Platform',
    institution: 'Kerala Student Founders',
    achievement: 'Globally recognized cloud platform serving thousands of dental clinics worldwide.',
    badge: 'Global SaaS'
  }
];

export const ProjectsScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { images } = useSiteImages();

  const categories = ['All', 'AI & SaaS', 'AgriTech', 'MedTech'];

  // Override banner images with context config
  const startupsList = STARTUPS.map((st, idx) => ({
    ...st,
    bannerImage: images.startups[idx]?.bannerImage || st.bannerImage
  }));

  const filteredStartups = startupsList.filter((startup) => {
    if (activeCategory === 'All') return true;
    return startup.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#6750a4] bg-[#e1d4fd] px-3.5 py-1 rounded-full">
          FOUNDER SHOWCASE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1b20] tracking-tight">
          Student Startups Incubated at VIBE
        </h1>
        <p className="text-base sm:text-lg text-[#494551]">
          Discover ventures founded by GEC Kozhikode students currently raising capital, prototyping hardware, and scaling operations.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#4f378a] text-white shadow-sm'
                : 'bg-white text-[#494551] border border-[#cbc4d2]/40 hover:bg-[#f8f2fa]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredStartups.map((startup) => (
          <div
            key={startup.id}
            className="bg-white rounded-[32px] overflow-hidden border border-[#cbc4d2]/35 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={startup.bannerImage}
                  alt={startup.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#4f378a]">
                  {startup.stage}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{startup.logo}</span>
                  <h3 className="text-xl font-bold text-[#1d1b20]">{startup.name}</h3>
                </div>

                <p className="text-xs font-semibold text-[#6750a4]">{startup.tagline}</p>
                <p className="text-xs text-[#494551] leading-relaxed line-clamp-3">{startup.description}</p>

                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-[#7a7582] block mb-1">Founders</span>
                  <div className="flex flex-wrap gap-1">
                    {startup.founders.map((founder, i) => (
                      <span key={i} className="text-xs bg-[#f8f2fa] text-[#1d1b20] px-2.5 py-0.5 rounded-full font-medium">
                        {founder}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#cbc4d2]/20 mt-4 flex items-center justify-between text-xs">
              <span className="font-bold text-[#4f378a]">{startup.fundingRaised}</span>
              {startup.websiteUrl && (
                <a
                  href={startup.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1d1b20] hover:text-[#4f378a] font-bold flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Alumni Impact Section (From Orientation PDF) */}
      <section className="bg-gradient-to-br from-[#1d1b20] via-[#2d2242] to-[#120e1a] text-white rounded-[40px] p-8 sm:p-12 relative overflow-hidden space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e1d4fd] bg-white/10 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#e1d4fd]" />
            ALUMNI IMPACT & KERALA INSPIRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            They Started as Engineering Students.
          </h2>
          <p className="text-sm sm:text-base text-purple-200/80">
            Every breakthrough startup began as a student project. The Kerala Startup Mission (KSUM) and campus IEDC network have enabled 8,000+ startups, ₹6,000 Cr+ funding, and 10L+ sq.ft of incubation space across the state.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALUMNI_STARTUPS.map((alumni, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#e1d4fd]/40 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#e1d4fd] bg-[#e1d4fd]/10 px-2.5 py-0.5 rounded-full">
                  {alumni.badge}
                </span>
                <Award className="w-4 h-4 text-[#e1d4fd]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{alumni.name}</h3>
                <p className="text-xs text-purple-300 font-medium">{alumni.domain}</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">{alumni.institution}</p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                "{alumni.achievement}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#e1d4fd]/10 rounded-2xl p-6 border border-[#e1d4fd]/20 text-center">
          <p className="text-sm font-semibold text-purple-100">
            "Your idea could be next. Every successful venture began as a classroom project — yours starts at VIBE IEDC GEC Kozhikode."
          </p>
        </div>
      </section>
    </div>
  );
};
