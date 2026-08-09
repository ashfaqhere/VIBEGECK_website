import React from 'react';
import { useSiteImages } from '../context/ImageContext';

interface VibeLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const VibeLogo: React.FC<VibeLogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const { images } = useSiteImages();

  // Dimensions
  const sizeMap = {
    sm: { height: 'h-8', logoWidth: 'w-8', text: 'text-base', subText: 'text-[8px]' },
    md: { height: 'h-10', logoWidth: 'w-10', text: 'text-xl', subText: 'text-[9px]' },
    lg: { height: 'h-16', logoWidth: 'w-16', text: 'text-3xl', subText: 'text-[11px]' }
  };

  const dims = sizeMap[size];

  // If the user specified a custom image logo (like a PNG or SVG URL)
  if (images.logo && images.logo !== '/vibe-logo.svg') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <img
          src={images.logo}
          alt="VIBE GEC Kozhikode"
          className={`${dims.height} object-contain rounded-lg`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* VIBE SVG Symbol */}
      <div className={`${dims.logoWidth} ${dims.height} flex-shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="vibeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b0ff" />
              <stop offset="60%" stopColor="#0066cc" />
              <stop offset="100%" stopColor="#0033aa" />
            </linearGradient>
          </defs>
          {/* Geometric Left Black Bars */}
          <polygon points="10,15 26,15 50,85 34,85" fill="#1d1b20" />
          <polygon points="30,15 42,15 56,55 44,55" fill="#1d1b20" />
          <polygon points="46,15 58,15 64,32 52,32" fill="#1d1b20" />
          {/* Geometric Right Cyan Loop */}
          <path
            d="M 60,15 L 90,15 L 90,40 L 72,40 C 82,48 82,62 70,70 L 50,85 L 50,65 L 68,54 C 76,49 76,43 70,40 L 50,40 L 50,25 L 64,25 Z"
            fill="url(#vibeGrad)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col justify-center text-left leading-none">
          <div className="flex items-center gap-1">
            <span className={`font-black tracking-tight text-[#1d1b20] ${dims.text}`}>
              V<span className="relative inline-block">
                i
                {/* Tie Icon over the 'i' */}
                <svg
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 text-[#1d1b20] fill-current"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12,2 16,6 15,14 12,22 9,14 8,6" />
                </svg>
              </span>
              BE
            </span>
            <span className="text-[10px] font-bold bg-[#e1d4fd] text-[#4f378a] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              GEC
            </span>
          </div>
          <span className={`font-bold tracking-wider text-[#6750a4] uppercase mt-0.5 ${dims.subText}`}>
            Innovation Ecosystem
          </span>
        </div>
      )}
    </div>
  );
};
