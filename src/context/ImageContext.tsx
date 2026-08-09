import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteImagesConfig, DEFAULT_SITE_IMAGES, GOOGLE_FORM_LINKS } from '../config/images';

interface ImageContextType {
  images: SiteImagesConfig;
  updateImage: (category: keyof SiteImagesConfig, keyOrIndex: string | number, newUrl: string) => void;
  updateLogo: (newLogoUrl: string) => void;
  updateHeroBanner: (newBannerUrl: string) => void;
  resetToDefault: () => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  openGoogleForm: (type: 'membership' | 'ideaSubmission') => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<SiteImagesConfig>(() => {
    const saved = localStorage.getItem('vibe_site_images_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.logo || parsed.logo === '/vibe-logo.svg') {
          parsed.logo = DEFAULT_SITE_IMAGES.logo;
        }
        if (!parsed.heroBanner || parsed.heroBanner.includes('1518770660439')) {
          parsed.heroBanner = DEFAULT_SITE_IMAGES.heroBanner;
        }
        // Ensure execom uses current local uploaded avatars if cached was old unsplash
        if (parsed.execom && Array.isArray(parsed.execom)) {
          parsed.execom = DEFAULT_SITE_IMAGES.execom.map((defItem) => {
            const savedItem = parsed.execom.find((e: any) => e.id === defItem.id);
            if (savedItem && savedItem.avatar && !savedItem.avatar.includes('unsplash')) {
              return savedItem;
            }
            return defItem;
          });
        }
        return { ...DEFAULT_SITE_IMAGES, ...parsed };
      } catch (e) {
        console.error('Failed to parse saved images', e);
      }
    }
    return DEFAULT_SITE_IMAGES;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('vibe_site_images_v2', JSON.stringify(images));
  }, [images]);

  const updateLogo = (newLogoUrl: string) => {
    setImages((prev) => ({ ...prev, logo: newLogoUrl }));
  };

  const updateHeroBanner = (newBannerUrl: string) => {
    setImages((prev) => ({ ...prev, heroBanner: newBannerUrl }));
  };

  const updateImage = (
    category: keyof SiteImagesConfig,
    keyOrIndex: string | number,
    newUrl: string
  ) => {
    setImages((prev) => {
      const copy = { ...prev };
      if (Array.isArray(copy[category])) {
        const arr = [...(copy[category] as any[])];
        if (typeof keyOrIndex === 'number' && arr[keyOrIndex]) {
          if (category === 'events') arr[keyOrIndex].imageUrl = newUrl;
          else if (category === 'execom') arr[keyOrIndex].avatar = newUrl;
          else if (category === 'articles') arr[keyOrIndex].image = newUrl;
          else if (category === 'startups') arr[keyOrIndex].bannerImage = newUrl;
        } else if (typeof keyOrIndex === 'string') {
          const idx = arr.findIndex((item) => item.id === keyOrIndex);
          if (idx !== -1) {
            if (category === 'events') arr[idx].imageUrl = newUrl;
            else if (category === 'execom') arr[idx].avatar = newUrl;
            else if (category === 'articles') arr[idx].image = newUrl;
            else if (category === 'startups') arr[idx].bannerImage = newUrl;
          }
        }
        return { ...copy, [category]: arr };
      }
      return prev;
    });
  };

  const resetToDefault = () => {
    setImages(DEFAULT_SITE_IMAGES);
    localStorage.removeItem('vibe_site_images');
  };

  const openGoogleForm = (type: 'membership' | 'ideaSubmission') => {
    const link = GOOGLE_FORM_LINKS[type];
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        updateImage,
        updateLogo,
        updateHeroBanner,
        resetToDefault,
        isCustomizerOpen,
        setIsCustomizerOpen,
        openGoogleForm
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useSiteImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useSiteImages must be used within an ImageProvider');
  }
  return context;
};
