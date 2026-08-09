import React from 'react';
import { ARTICLES } from '../data/mockData';
import { CommunityArticle, ScreenType } from '../types';
import { ArrowUpRight, Clock } from 'lucide-react';
import { useSiteImages } from '../context/ImageContext';

interface CommunityPulseProps {
  onSelectArticle: (article: CommunityArticle) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const CommunityPulseSection: React.FC<CommunityPulseProps> = ({
  onSelectArticle,
  onNavigate
}) => {
  const { images } = useSiteImages();

  // Merge articles with context image overrides
  const articlesList = ARTICLES.map((art, idx) => ({
    ...art,
    image: images.articles[idx]?.image || art.image
  }));

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b20] tracking-tight mb-2">
            Community Pulse
          </h2>
          <p className="text-base sm:text-lg text-[#494551]">
            Latest insights, stories, and updates from GEC Kozhikode.
          </p>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="text-xs sm:text-sm font-semibold text-[#4f378a] hover:text-[#3d2a6c] flex items-center gap-1 cursor-pointer group"
        >
          View All
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articlesList.map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="bg-white rounded-[28px] overflow-hidden border border-[#cbc4d2]/35 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
          >
            {/* Card Header Image */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#4f378a] uppercase shadow-sm">
                {article.category}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1d1b20] group-hover:text-[#4f378a] transition-colors leading-snug mb-2.5">
                  {article.title}
                </h3>
                <p className="text-sm text-[#494551] line-clamp-3 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#cbc4d2]/20 flex items-center justify-between text-xs text-[#7a7582] font-medium">
                <span>{article.date}</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
