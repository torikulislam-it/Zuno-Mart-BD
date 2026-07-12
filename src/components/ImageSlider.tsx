import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageSliderProps {
  images: string[];
  title: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Main Large Image Display */}
      <div 
        onClick={() => setIsZoomed(true)}
        className="relative bg-gray-50 rounded-2xl overflow-hidden aspect-square border border-gray-100 cursor-zoom-in group shadow-sm"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${title} view ${activeIndex + 1}`}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Hover zoom overlay indicator */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs p-2 rounded-full text-gray-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn size={18} />
        </div>

        {/* Slider Controls (Only visible if more than 1 image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all active:scale-90"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all active:scale-90"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/25 px-2.5 py-1 rounded-full backdrop-blur-xs">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails list (Only if more than 1 image) */}
      {images.length > 1 && (
        <div className="flex gap-2.5 mt-3 justify-center">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                idx === activeIndex ? 'border-amber-500 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Zoom Portal */}
      <AnimatePresence>
        {isZoomed && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-md transition-all"
            >
              <X size={24} />
            </button>
            
            <div className="max-w-3xl max-h-[85vh] w-full h-full flex items-center justify-center relative">
              <img 
                src={images[activeIndex]} 
                alt={title} 
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
