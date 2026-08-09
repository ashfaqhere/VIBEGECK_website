import React, { useState } from 'react';
import { FUNDING_SCHEMES } from '../../data/mockData';
import { IndianRupee, ShieldAlert, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FundingScreenProps {
  onOpenSubmitIdea: () => void;
}

export const FundingScreen: React.FC<FundingScreenProps> = ({ onOpenSubmitIdea }) => {
  const [filterType, setFilterType] = useState<string>('All');

  const filteredSchemes = FUNDING_SCHEMES.filter((scheme) => {
    if (filterType === 'All') return true;
    return scheme.grantType === filterType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#6750a4] bg-[#e1d4fd] px-3.5 py-1 rounded-full">
          PRE-SEED & GRANTS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1b20] tracking-tight">
          Funding & Grant Directory
        </h1>
        <p className="text-base sm:text-lg text-[#494551]">
          Explore government grants, university innovation funds, and soft seed loans available for student projects.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {['All', 'Equity-free', 'Grant', 'Soft Loan'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filterType === type
                ? 'bg-[#4f378a] text-white shadow-sm'
                : 'bg-white text-[#494551] border border-[#cbc4d2]/40 hover:bg-[#f8f2fa]'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-[32px] p-8 border border-[#cbc4d2]/35 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#7a7582]">{scheme.provider}</span>
                <span className="text-xs font-bold uppercase tracking-wider bg-[#e1d4fd] text-[#4f378a] px-3 py-1 rounded-full">
                  {scheme.grantType}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[#1d1b20]">{scheme.name}</h2>
              
              <div className="bg-[#f8f2fa] p-4 rounded-2xl border border-[#cbc4d2]/30 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#494551]">Maximum Grant Value</span>
                <span className="text-2xl font-extrabold text-[#4f378a]">{scheme.maxAmount}</span>
              </div>

              <p className="text-sm text-[#494551] leading-relaxed">{scheme.description}</p>

              <div>
                <h4 className="text-xs font-bold text-[#1d1b20] mb-2 uppercase tracking-wider">Eligibility Criteria</h4>
                <ul className="space-y-1.5">
                  {scheme.eligibility.map((crit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#494551]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4f378a] shrink-0" />
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#cbc4d2]/20 flex items-center justify-between text-xs">
              <span className="text-[#7a7582]">Deadline: <strong className="text-[#1d1b20]">{scheme.deadline}</strong></span>
              <button
                onClick={onOpenSubmitIdea}
                className="px-4 py-2 bg-[#4f378a] text-white font-bold rounded-full hover:bg-[#3d2a6c] cursor-pointer flex items-center gap-1.5"
              >
                Apply for Grant <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
