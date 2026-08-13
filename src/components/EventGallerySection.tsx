import React, { useState } from 'react';
import { EVENT_IMAGES } from '../data/mockData';
import { EventImage } from '../types';
import { Calendar, Eye, X } from 'lucide-react';
import { useSiteImages } from '../context/ImageContext';

export const EventGallerySection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventImage | null>(null);
  const { images } = useSiteImages();

  // Map mock data with image context overrides
  const eventsList = EVENT_IMAGES.map((evt, idx) => ({
    ...evt,
    imageUrl: images.events[idx]?.imageUrl || evt.imageUrl
  }));

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1d1b20] tracking-tight mb-2">
          Live from VIBE
        </h2>
        <p className="text-base sm:text-lg text-[#494551]">
          Experience the energy of our community events.
        </p>
      </div>

      {/* Gallery Carousel / Grid */}
      <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar pt-2 snap-x">
        {eventsList.map((evt) => (
          <div
            key={evt.id}
            onClick={() => setSelectedEvent(evt)}
            className="flex-none w-72 sm:w-80 h-[380px] sm:h-[420px] rounded-[32px] relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 snap-start border border-black/5"
          >
            <img
              src={evt.imageUrl}
              alt={evt.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Content overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col justify-end">
              <span className="text-[11px] font-semibold tracking-wider text-purple-300 uppercase mb-1">
                {evt.category} • {evt.date}
              </span>
              <h3 className="text-lg font-bold text-white line-clamp-2 mb-2 leading-snug">
                {evt.title}
              </h3>
              <p className="text-xs text-zinc-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {evt.description}
              </p>
            </div>

            {/* Hover view badge */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1d1b20] text-white rounded-3xl max-w-2xl w-full overflow-hidden border border-white/10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/70 p-2 rounded-full text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-96 w-full">
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b20] via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                <Calendar className="w-4 h-4" />
                <span>{selectedEvent.category}</span>
                <span>•</span>
                <span>{selectedEvent.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedEvent.description}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-5 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-zinc-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
