import React from 'react';
import { ShoppingBag, Phone, Heart } from 'lucide-react';

interface HeaderProps {
  onGoHome: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome, cartCount }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#1e1e24] text-white shadow-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left empty/placeholder to balance or logo on left for desktop */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 font-mono hidden sm:flex">
          <Phone size={14} className="text-yellow-400 animate-pulse" />
          <span>হটলাইন: 01315779093</span>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center sm:justify-center">
          <button
            onClick={onGoHome}
            className="flex items-center gap-1 focus:outline-none group active:scale-95 transition-transform"
            aria-label="Go to homepage"
          >
            {/* Custom styled logo resembling the yellow pill badge in screenshot */}
            <div className="bg-[#ffbd11] hover:bg-[#ffcf33] text-black font-extrabold text-sm md:text-lg px-4 py-1.5 rounded-full shadow-[0_4px_14px_rgba(255,189,17,0.3)] flex items-center gap-1.5 transition-all duration-300 transform group-hover:scale-105">
              <span className="text-xl">⚡</span>
              <span className="tracking-tight font-black font-sans">ফটাফট ডিল</span>
            </div>
          </button>
        </div>

        {/* Right shopping bag and wishlist count */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onGoHome}
            className="text-gray-300 hover:text-white transition-colors relative p-1.5 hidden md:block"
          >
            <Heart size={22} />
          </button>
          
          <button
            onClick={onGoHome} // For now clicking goes back to see catalog / listings
            className="bg-gray-800 hover:bg-gray-700 text-yellow-400 p-2 rounded-full transition-all duration-300 relative focus:outline-none active:scale-90"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1e1e24] animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
