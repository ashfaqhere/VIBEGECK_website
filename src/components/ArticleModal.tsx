import React, { useState } from 'react';
import { CommunityArticle } from '../types';
import { X, Heart, MessageSquare, Share2, Calendar, Clock, Bookmark, Send } from 'lucide-react';

interface ArticleModalProps {
  article: CommunityArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const [likes, setLikes] = useState(article.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    { name: 'Rohan (CSE S7)', text: 'Inspiring story! The IEDC Maker Space was crucial for our pilot hardware testing as well.', date: '2 days ago' },
    { name: 'Kavya M.', text: 'Is there a workshop on applying for the KSUM grant coming up?', date: 'Yesterday' }
  ]);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([
      ...comments,
      { name: 'You (Student Member)', text: commentText, date: 'Just now' }
    ]);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white text-[#1d1b20] rounded-[32px] max-w-3xl w-full my-auto overflow-hidden shadow-2xl border border-[#cbc4d2]/30 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Sticky Header Close */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-[#cbc4d2]/20 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6750a4] bg-[#e1d4fd] px-3 py-1 rounded-full">
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-[#7a7582] hover:text-[#1d1b20] hover:bg-zinc-100 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Banner Image */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1d1b20] tracking-tight leading-snug mb-4">
              {article.title}
            </h1>

            {/* Author details */}
            <div className="flex items-center gap-3 py-3 border-y border-[#cbc4d2]/20">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#cbc4d2]"
              />
              <div>
                <h4 className="text-sm font-bold text-[#1d1b20]">{article.author.name}</h4>
                <p className="text-xs text-[#7a7582]">{article.author.role}</p>
              </div>
              <div className="ml-auto text-xs text-[#7a7582] flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Article Text Content */}
          <div className="prose prose-purple max-w-none text-sm sm:text-base text-[#494551] leading-relaxed space-y-4">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-[#1d1b20] pt-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('> ')) {
                return (
                  <blockquote key={idx} className="border-l-4 border-[#4f378a] bg-[#f8f2fa] p-4 rounded-r-2xl italic font-medium text-[#1d1b20]">
                    {paragraph.replace('> ', '')}
                  </blockquote>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Likes & Sharing Bar */}
          <div className="flex items-center justify-between py-4 border-t border-[#cbc4d2]/20">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                hasLiked
                  ? 'bg-red-50 text-red-600 border border-red-200'
                  : 'bg-[#f8f2fa] text-[#1d1b20] hover:bg-[#e1d4fd]'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-red-600 text-red-600' : ''}`} />
              <span>{likes} Applauds</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('Article link copied to clipboard!')}
                className="p-2.5 rounded-full bg-[#f8f2fa] hover:bg-[#e1d4fd] text-[#1d1b20] cursor-pointer"
                title="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="pt-4 border-t border-[#cbc4d2]/20">
            <h4 className="text-base font-bold text-[#1d1b20] mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#4f378a]" />
              Discussion ({comments.length})
            </h4>

            <form onSubmit={handleAddComment} className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Share your thoughts or ask a question..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-[#f2ecf4] rounded-2xl border border-[#cbc4d2]/40 focus:outline-none focus:border-[#4f378a]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#4f378a] text-white rounded-2xl text-xs font-semibold hover:bg-[#3d2a6c] cursor-pointer flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                Post
              </button>
            </form>

            <div className="space-y-3">
              {comments.map((c, i) => (
                <div key={i} className="p-3.5 bg-[#f8f2fa] rounded-2xl border border-[#cbc4d2]/30 text-xs">
                  <div className="flex justify-between font-bold text-[#1d1b20] mb-1">
                    <span>{c.name}</span>
                    <span className="text-[10px] text-[#7a7582] font-normal">{c.date}</span>
                  </div>
                  <p className="text-[#494551]">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
