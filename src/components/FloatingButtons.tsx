import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingButtonsProps {
  onScrollToCheckout: () => void;
  showStickyBuy: boolean;
  productName: string;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ 
  onScrollToCheckout, 
  showStickyBuy,
  productName 
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsAppLink = "https://wa.me/8801315779093?text=" + encodeURIComponent(`হ্যালো! আমি আপনার স্টোর থেকে পণ্য কিনতে আগ্রহী।`);

  return (
    <>
      {/* Floating Side Buttons (WhatsApp & Scroll to Top) */}
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 flex flex-col gap-3 z-40">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-[0_4px_16px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all cursor-pointer border border-emerald-400"
          title="Order via WhatsApp"
        >
          <MessageCircle size={24} className="fill-white" />
        </motion.a>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-900/90 hover:bg-slate-900 text-white p-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all cursor-pointer border border-slate-700"
              title="Scroll to Top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile-Only Sticky Bottom Buy Bar */}
      <AnimatePresence>
        {showStickyBuy && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 p-3 flex items-center justify-between gap-4 z-40 md:hidden shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold font-sans leading-none">অর্ডার করতে</span>
              <span className="text-xs text-gray-800 font-extrabold line-clamp-1 mt-0.5 max-w-[150px]">{productName}</span>
            </div>

            <button
              onClick={onScrollToCheckout}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_3px_10px_rgba(245,158,11,0.2)] active:scale-95"
            >
              <ShoppingCart size={14} className="fill-black" />
              <span>এখনি অর্ডার করুন</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
