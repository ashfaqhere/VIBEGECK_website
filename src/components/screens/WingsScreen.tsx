import React from 'react';
import { WINGS } from '../../data/mockData';
import { Cpu, Rocket, Palette, ShieldCheck, ArrowRight, Users } from 'lucide-react';

interface WingsScreenProps {
  onOpenSubmitIdea: () => void;
  onOpenBecomeMember: () => void;
}

export const WingsScreen: React.FC<WingsScreenProps> = ({ onOpenSubmitIdea, onOpenBecomeMember }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Rocket className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#6750a4] bg-[#e1d4fd] px-3.5 py-1 rounded-full">
          SPECIALIZED WINGS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1b20] tracking-tight">
          Domain-Specific Innovation Cells
        </h1>
        <p className="text-base sm:text-lg text-[#494551]">
          VIBE operates four focused wings designed to take your idea from concept to prototype, brand, and patent.
        </p>
      </div>

      {/* Wings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WINGS.map((wing) => (
          <div
            key={wing.id}
            className="bg-white rounded-[32px] p-8 border border-[#cbc4d2]/35 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#e1d4fd] flex items-center justify-center text-[#4f378a]">
                  {getIcon(wing.iconName)}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7a7582] bg-[#f8f2fa] px-3 py-1 rounded-full">
                  <Users className="w-3.5 h-3.5 text-[#4f378a]" />
                  <span>{wing.membersCount} Active Members</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#1d1b20]">{wing.name}</h2>
              <p className="text-xs font-semibold text-[#6750a4] italic">{wing.tagline}</p>
              <p className="text-sm text-[#494551] leading-relaxed">{wing.description}</p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1b20] mb-2">Key Initiatives</h4>
                <div className="flex flex-wrap gap-2">
                  {wing.initiatives.map((init, idx) => (
                    <span key={idx} className="text-xs bg-[#f2ecf4] text-[#1d1b20] px-3 py-1 rounded-full font-medium">
                      • {init}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#cbc4d2]/20 flex items-center justify-between text-xs">
              <span className="text-[#7a7582]">Lead: <strong className="text-[#1d1b20]">{wing.lead}</strong></span>
              <button
                onClick={onOpenBecomeMember}
                className="text-[#4f378a] font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                Join Wing <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
