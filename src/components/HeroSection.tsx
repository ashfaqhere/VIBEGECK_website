import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useSiteImages } from '../context/ImageContext';

interface HeroSectionProps {
  onOpenBecomeMember: () => void;
  onOpenSubmitIdea: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBecomeMember,
  onOpenSubmitIdea
}) => {
  const { images } = useSiteImages();

  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#6750a4] uppercase bg-[#e1d4fd]/60 px-3 py-1 rounded-full">
              GOVERNMENT ENGINEERING COLLEGE KOZHIKODE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1b20] leading-[1.08]">
            WHERE IDEAS <br />
            <span className="text-[#6750a4] bg-clip-text text-transparent bg-gradient-to-r from-[#4f378a] via-[#6750a4] to-[#7f52ff]">
              BECOME VENTURES.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#494551] leading-relaxed max-w-xl font-normal">
            The premier innovation and entrepreneurship ecosystem empowering student founders at GEC Kozhikode.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBecomeMember}
              className="px-6 py-3.5 text-sm font-semibold rounded-full btn-primary-purple flex items-center gap-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Become Member
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenSubmitIdea}
              className="px-6 py-3.5 text-sm font-semibold rounded-full btn-secondary-white cursor-pointer shadow-sm hover:bg-[#f2ecf4]"
            >
              Submit Idea
            </button>
          </div>
        </div>

        {/* Right Column Featured IEDC Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/4.2] rounded-[32px] overflow-hidden shadow-2xl border border-white/40 group">
            {/* Background Image configured via SiteImages */}
            <img
              src={images.heroBanner}
              alt="IEDC Innovation Hub"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Ambient purple/cyan light overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-purple-950/20 to-transparent" />

            {/* Glowing IEDC Badge Card on top of photo */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-dark-card text-white backdrop-blur-xl border border-white/20">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight text-white mb-1">
                    IEDC
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200 font-medium leading-snug">
                    Innovation and Entrepreneurship Development Centre
                  </p>
                </div>
                <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
                  <Sparkles className="w-5 h-5 text-purple-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
