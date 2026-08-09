import React from 'react';
import { ScreenType } from '../types';
import { VibeLogo } from './VibeLogo';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenSubmitIdea: () => void;
  onOpenBecomeMember: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSubmitIdea, onOpenBecomeMember }) => {
  return (
    <footer className="bg-[#f8f2fa] border-t border-[#cbc4d2]/30 py-12 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand Info */}
        <div className="max-w-md">
          <div className="mb-3">
            <VibeLogo size="md" />
          </div>
          <p className="text-sm text-[#494551] leading-relaxed">
            © 2024–2025 VIBE GEC Kozhikode. Empowering the next generation of innovators and student entrepreneurs.
          </p>
          <p className="text-xs text-[#7a7582] mt-2">
            Innovation and Entrepreneurship Development Centre (IEDC) • Government Engineering College Kozhikode, West Hill, Kerala 673005.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="flex flex-wrap gap-12 text-sm text-[#494551]">
          <div>
            <h4 className="font-semibold text-[#1d1b20] mb-3 text-xs uppercase tracking-wider">Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#4f378a] cursor-pointer">
                  Community
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wings')} className="hover:text-[#4f378a] cursor-pointer">
                  Resources & Wings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('funding')} className="hover:text-[#4f378a] cursor-pointer">
                  Funding Schemes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-[#4f378a] cursor-pointer">
                  Startups Showcase
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1b20] mb-3 text-xs uppercase tracking-wider">Engage & Apply</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenSubmitIdea} className="hover:text-[#4f378a] cursor-pointer inline-flex items-center gap-1">
                  Submit Idea Google Form <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={onOpenBecomeMember} className="hover:text-[#4f378a] cursor-pointer inline-flex items-center gap-1">
                  Become Member Form <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-[#4f378a] cursor-pointer">
                  Execom Committee
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#4f378a] cursor-pointer">
                  About VIBE
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
