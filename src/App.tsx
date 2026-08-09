import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { EventGallerySection } from './components/EventGallerySection';
import { ExecomSection } from './components/ExecomSection';
import { CommunityPulseSection } from './components/CommunityPulseSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { ArticleModal } from './components/ArticleModal';
import { SubmitIdeaModal } from './components/SubmitIdeaModal';
import { BecomeMemberModal } from './components/BecomeMemberModal';
import { ImageProvider } from './context/ImageContext';

import { AboutScreen } from './components/screens/AboutScreen';
import { WingsScreen } from './components/screens/WingsScreen';
import { FundingScreen } from './components/screens/FundingScreen';
import { ProjectsScreen } from './components/screens/ProjectsScreen';
import { TeamScreen } from './components/screens/TeamScreen';

import { CommunityArticle, ScreenType } from './types';

function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedArticle, setSelectedArticle] = useState<CommunityArticle | null>(null);
  const [isSubmitIdeaOpen, setIsSubmitIdeaOpen] = useState(false);
  const [isBecomeMemberOpen, setIsBecomeMemberOpen] = useState(false);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf7ff] text-[#1d1b20] selection:bg-[#e1d4fd] selection:text-[#4f378a]">
      {/* Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenSubmitIdea={() => setIsSubmitIdeaOpen(true)}
        onOpenBecomeMember={() => setIsBecomeMemberOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <>
            <HeroSection
              onOpenBecomeMember={() => setIsBecomeMemberOpen(true)}
              onOpenSubmitIdea={() => setIsSubmitIdeaOpen(true)}
            />
            <EventGallerySection />
            <ExecomSection />
            <CommunityPulseSection
              onSelectArticle={(art) => setSelectedArticle(art)}
              onNavigate={handleNavigate}
            />
            <CtaBannerSection
              onOpenBecomeMember={() => setIsBecomeMemberOpen(true)}
            />
          </>
        )}

        {currentScreen === 'about' && <AboutScreen />}

        {currentScreen === 'wings' && (
          <WingsScreen
            onOpenSubmitIdea={() => setIsSubmitIdeaOpen(true)}
            onOpenBecomeMember={() => setIsBecomeMemberOpen(true)}
          />
        )}

        {currentScreen === 'funding' && (
          <FundingScreen
            onOpenSubmitIdea={() => setIsSubmitIdeaOpen(true)}
          />
        )}

        {currentScreen === 'projects' && <ProjectsScreen />}

        {currentScreen === 'team' && <TeamScreen />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSubmitIdea={() => setIsSubmitIdeaOpen(true)}
        onOpenBecomeMember={() => setIsBecomeMemberOpen(true)}
      />

      {/* Modals */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <SubmitIdeaModal
        isOpen={isSubmitIdeaOpen}
        onClose={() => setIsSubmitIdeaOpen(false)}
      />

      <BecomeMemberModal
        isOpen={isBecomeMemberOpen}
        onClose={() => setIsBecomeMemberOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <MainApp />
    </ImageProvider>
  );
}
