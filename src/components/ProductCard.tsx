import React from 'react';
import { Product } from '../types';
import { ShoppingCart, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickOrder: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onQuickOrder }) => {
  // Simple Bengali number conversion
  const toBanglaNum = (num: number) => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, (digit) => banglaDigits[parseInt(digit, 10)]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
    >
      <div onClick={() => onSelect(product)} className="cursor-pointer relative overflow-hidden aspect-square bg-gray-50">
        {/* Discount Badge */}
        <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-md z-10 animate-pulse">
          {product.discountBadge}
        </span>

        {/* Product Image */}
        <img
          src={product.images[0]}
          alt={product.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
        />

        {/* Hover quick view overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <span className="bg-white/90 text-gray-900 p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Eye size={18} />
          </span>
        </div>
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-grow justify-between">
        <div onClick={() => onSelect(product)} className="cursor-pointer">
          {/* Sold count badge if present */}
          {product.soldCount && (
            <span className="inline-block text-[10px] bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded-md mb-1.5 border border-amber-100">
              🔥 {product.soldCount}
            </span>
          )}

          {/* Title in Bangla first for hyper local feel, fallback to english */}
          <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug line-clamp-2 hover:text-amber-500 transition-colors">
            {product.banglaTitle || product.title}
          </h3>
          
          <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5 font-medium">
            {product.title}
          </p>

          {/* Price tags */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-emerald-600 font-black text-base md:text-lg">
              ৳{product.price}
            </span>
            <span className="text-gray-400 line-through text-xs md:text-sm font-medium">
              ৳{product.originalPrice}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-3.5 flex flex-col gap-2">
          <button
            onClick={() => onSelect(product)}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95"
          >
            <span>বিস্তারিত দেখুন</span>
          </button>
          
          <button
            onClick={() => onQuickOrder(product)}
            className="w-full bg-[#1e1e24] hover:bg-amber-500 hover:text-black text-white font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 group shadow-md hover:shadow-lg active:scale-95"
          >
            <span>অর্ডার করুন</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
