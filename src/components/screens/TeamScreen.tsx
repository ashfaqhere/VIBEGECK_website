import React from 'react';
import { EXECOM_MEMBERS } from '../../data/mockData';
import { Mail, Linkedin } from 'lucide-react';
import { useSiteImages } from '../../context/ImageContext';

export const TeamScreen: React.FC = () => {
  const { images } = useSiteImages();

  const membersList = EXECOM_MEMBERS.map((mbr) => {
    const ctxImage = images.execom.find(e => e.id === mbr.id)?.avatar;
    const avatar = (ctxImage && !ctxImage.includes('unsplash')) ? ctxImage : mbr.avatar;
    return {
      ...mbr,
      avatar
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#6750a4] bg-[#e1d4fd] px-3.5 py-1 rounded-full">
          LEADERSHIP COMMITTEE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1b20] tracking-tight">
          Executive Committee (Execom)
        </h1>
        <p className="text-base sm:text-lg text-[#494551]">
          The dedicated student leads driving VIBE's innovation programs, hackathons, and founder support at GEC Kozhikode.
        </p>
      </div>

      {/* Grid of Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {membersList.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-[32px] p-6 border border-[#cbc4d2]/35 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
          >
            <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#4f378a] to-[#7f52ff] group-hover:scale-105 transition-transform">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-2 border-white"
              />
            </div>

            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6750a4] bg-[#e1d4fd] px-3 py-1 rounded-full">
                {member.role}
              </span>
              <h3 className="text-xl font-bold text-[#1d1b20] mt-2">{member.name}</h3>
              {member.department && <p className="text-xs text-[#7a7582] font-medium">{member.department}</p>}
              {(member.branch || member.year) && (
                <p className="text-[11px] text-[#7a7582]">
                  {member.branch} {member.year ? `(${member.year})` : ''}
                </p>
              )}
            </div>

            <p className="text-xs text-[#494551] leading-relaxed line-clamp-3 bg-[#f8f2fa] p-3 rounded-2xl w-full">
              "{member.bio}"
            </p>

            <div className="flex items-center gap-2 pt-2">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 bg-[#f8f2fa] hover:bg-[#e1d4fd] text-[#1d1b20] rounded-full transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4 text-[#4f378a]" />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#4f378a] text-white hover:bg-[#3d2a6c] rounded-full transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
