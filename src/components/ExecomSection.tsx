import React, { useState } from 'react';
import { EXECOM_MEMBERS } from '../data/mockData';
import { ExecomMember } from '../types';
import { Linkedin, Mail, X } from 'lucide-react';
import { useSiteImages } from '../context/ImageContext';

export const ExecomSection: React.FC = () => {
  const [activeMember, setActiveMember] = useState<ExecomMember | null>(null);
  const { images } = useSiteImages();

  // Merge mock data with image overrides from context
  const membersList = EXECOM_MEMBERS.map((mbr) => {
    const ctxImage = images.execom.find(e => e.id === mbr.id)?.avatar;
    const avatar = (ctxImage && !ctxImage.includes('unsplash')) ? ctxImage : mbr.avatar;
    return {
      ...mbr,
      avatar
    };
  });

  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f8f2fa]/60 rounded-[40px] my-12 border border-[#cbc4d2]/20 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-200/30 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#6750a4] bg-[#e1d4fd] px-3.5 py-1 rounded-full">
          LEADERSHIP TEAM (12 MEMBERS)
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b20] tracking-tight mt-3 mb-3">
          Meet the Executive Committee
        </h2>
        <p className="text-base sm:text-lg text-[#494551]">
          The driving force behind VIBE's initiatives, hackathons, and community growth at GEC Kozhikode.
        </p>
      </div>

      {/* Constellation Network Grid Container */}
      <div className="relative max-w-6xl mx-auto py-4">
        {/* SVG Network Lines background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal connecting dashes */}
          <line x1="12.5%" y1="18%" x2="87.5%" y2="18%" stroke="#cbc4d2" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="12.5%" y1="50%" x2="87.5%" y2="50%" stroke="#cbc4d2" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="12.5%" y1="82%" x2="87.5%" y2="82%" stroke="#cbc4d2" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        </svg>

        {/* 12 Execom Members Grid (3 rows x 4 cols on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6 relative z-10">
          {membersList.map((member) => (
            <div
              key={member.id}
              onClick={() => setActiveMember(member)}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-3 rounded-full p-1 bg-gradient-to-tr from-[#cbc4d2] to-white group-hover:from-[#4f378a] group-hover:to-[#7f52ff] transition-all duration-300 shadow-md group-hover:scale-105 group-hover:shadow-purple-900/10">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>
              <h3 className="font-bold text-base text-[#1d1b20] group-hover:text-[#4f378a] transition-colors leading-tight">
                {member.name}
              </h3>
              <p className="text-xs text-[#6750a4] font-bold mt-1 bg-[#e1d4fd]/50 px-2.5 py-0.5 rounded-full inline-block">
                {member.role}
              </p>
              {member.department && (
                <p className="text-[11px] text-[#7a7582] font-medium mt-0.5">
                  {member.department}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Member Bio Modal */}
      {activeMember && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-[#1d1b20] rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-[#cbc4d2]/40 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 p-2 text-[#7a7582] hover:text-[#1d1b20] rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#4f378a] to-[#7f52ff] mb-4">
                <img
                  src={activeMember.avatar}
                  alt={activeMember.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#6750a4] bg-[#e1d4fd] px-3 py-1 rounded-full mb-2">
                {activeMember.role} {activeMember.department ? `• ${activeMember.department}` : ''}
              </span>

              <h3 className="text-2xl font-extrabold text-[#1d1b20] mb-1">
                {activeMember.name}
              </h3>
              {(activeMember.branch || activeMember.year) && (
                <p className="text-xs text-[#7a7582] mb-4 font-medium">
                  {activeMember.branch} {activeMember.year ? `(${activeMember.year})` : ''}
                </p>
              )}

              <p className="text-sm text-[#494551] leading-relaxed mb-6 bg-[#f8f2fa] p-4 rounded-2xl border border-[#cbc4d2]/30">
                "{activeMember.bio}"
              </p>

              <div className="flex items-center gap-3">
                {activeMember.email && (
                  <a
                    href={`mailto:${activeMember.email}`}
                    className="flex items-center gap-1.5 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold rounded-full text-[#1d1b20] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#4f378a]" />
                    Email
                  </a>
                )}
                {activeMember.linkedin && (
                  <a
                    href={activeMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#4f378a] text-white hover:bg-[#3d2a6c] text-xs font-semibold rounded-full transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
