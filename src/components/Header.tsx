import React from 'react';
import { ScreenType } from '../types';
import { ArrowRight, Menu, X } from 'lucide-react';
import { VibeLogo } from './VibeLogo';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSubmitIdea: () => void;
  onOpenBecomeMember: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenSubmitIdea,
  onOpenBecomeMember
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { label: string; screen: ScreenType }[] = [
    { label: 'About', screen: 'about' },
    { label: 'Wings', screen: 'wings' },
    { label: 'Funding', screen: 'funding' },
    { label: 'Projects', screen: 'projects' },
    { label: 'Team', screen: 'team' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass-header border-b border-[#cbc4d2]/30 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none cursor-pointer"
        >
          <VibeLogo size="md" />
        </button>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#494551]">
          {navItems.map((item) => {
            const isActive = currentScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`transition-colors cursor-pointer py-1 relative ${
                  isActive ? 'text-[#4f378a] font-semibold' : 'hover:text-[#1d1b20]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4f378a] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenSubmitIdea}
            className="px-4 py-2 text-xs font-semibold rounded-full btn-secondary-white cursor-pointer hover:shadow-sm"
          >
            Submit Idea
          </button>
          
          <button
            onClick={onOpenBecomeMember}
            className="px-4.5 py-2 text-xs font-semibold rounded-full btn-primary-purple flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            Become Member
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1d1b20] focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#cbc4d2]/30 flex flex-col gap-3 px-2">
          {navItems.map((item) => (
            <button
              key={item.screen}
              onClick={() => handleNavClick(item.screen)}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentScreen === item.screen ? 'bg-[#e1d4fd] text-[#4f378a]' : 'text-[#1d1b20]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-[#cbc4d2]/20">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSubmitIdea(); }}
              className="w-full py-2.5 text-xs font-semibold rounded-full btn-secondary-white text-center"
            >
              Submit Idea
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBecomeMember(); }}
              className="w-full py-2.5 text-xs font-semibold rounded-full btn-primary-purple flex items-center justify-center gap-1.5"
            >
              Become Member
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
