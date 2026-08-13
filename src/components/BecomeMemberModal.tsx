import React from 'react';
import { X, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { GOOGLE_FORM_LINKS } from '../config/images';

interface BecomeMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BecomeMemberModal: React.FC<BecomeMemberModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const formUrl = GOOGLE_FORM_LINKS.membership;
  const iframeUrl = formUrl.includes('embedded=true') 
    ? formUrl 
    : `${formUrl}${formUrl.includes('?') ? '&' : '?'}embedded=true`;

  const handleOpenDirect = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white text-[#1d1b20] rounded-[32px] max-w-2xl w-full my-auto overflow-hidden shadow-2xl border border-[#cbc4d2]/40 relative animate-in fade-in zoom-in-95 flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#f8f2fa] border-b border-[#cbc4d2]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#4f378a] text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1d1b20]">Become a Member</h3>
              <p className="text-xs text-[#7a7582]">Official Membership Registration — VIBE GEC Kozhikode</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7a7582] hover:text-[#1d1b20] hover:bg-zinc-200/60 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Banner with Google Form Direct Link */}
        <div className="p-6 bg-gradient-to-br from-[#4f378a] to-[#322f35] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
              Google Form Active
            </div>
            <h4 className="text-lg font-bold text-white">Join VIBE IEDC GEC Kozhikode</h4>
            <p className="text-xs text-purple-200">Fill out the official registration form to get member access & benefits.</p>
          </div>
          
          <button
            onClick={handleOpenDirect}
            className="px-5 py-3 rounded-full bg-white text-[#4f378a] font-bold text-xs hover:bg-purple-50 transition-transform active:scale-95 cursor-pointer shrink-0 flex items-center gap-2 shadow-md"
          >
            <span>Open in Google Forms</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Embedded Google Form iframe container */}
        <div className="flex-1 min-h-[450px] bg-slate-50 relative">
          <iframe
            src={iframeUrl}
            className="w-full h-full min-h-[480px] border-0"
            title="VIBE Membership Google Form"
          >
            Loading form...
          </iframe>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#f8f2fa] border-t border-[#cbc4d2]/30 flex items-center justify-between text-xs text-[#7a7582]">
          <span>GEC Kozhikode Innovation Hub</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1d1b20] text-white rounded-full font-semibold hover:bg-black cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
