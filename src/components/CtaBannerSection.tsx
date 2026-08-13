import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

interface CtaBannerSectionProps {
  onOpenBecomeMember: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  onOpenBecomeMember
}) => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto my-12 text-center relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e1d4fd]/40 to-transparent pointer-events-none rounded-[48px]" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1b20] leading-tight">
          Your next startup begins here.
        </h2>

        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenBecomeMember}
            className="px-8 py-4 text-base font-bold rounded-full btn-primary-purple inline-flex items-center gap-2.5 cursor-pointer shadow-lg hover:shadow-purple-950/20 hover:scale-105 active:scale-95"
          >
            Apply Now
            <Rocket className="w-5 h-5 text-purple-200" />
          </button>
        </div>
      </div>
    </section>
  );
};
