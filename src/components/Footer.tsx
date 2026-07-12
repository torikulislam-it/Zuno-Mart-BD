import React from 'react';
import { Facebook, ShieldCheck, RefreshCw, Truck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18181c] text-gray-400 border-t border-gray-900 pt-10 pb-20 md:pb-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Core Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-gray-800/80 mb-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">সারা বাংলাদেশে হোম ডেলিভারি</h4>
              <p className="text-xs text-gray-500 mt-0.5">ঢাকার ভিতরে ২৪-৪৮ ঘণ্টা, ঢাকার বাইরে ২-৩ দিন</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">১০০% ক্যাশ অন ডেলিভারি</h4>
              <p className="text-xs text-gray-500 mt-0.5">পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ মূল্য পরিশোধ করুন</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
              <RefreshCw size={22} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">সহজ রিটার্ন পলিসি</h4>
              <p className="text-xs text-gray-500 mt-0.5">পণ্য ত্রুটিপূর্ণ হলে ৭ দিনের মধ্যে পরিবর্তনযোগ্য</p>
            </div>
          </div>
        </div>

        {/* Brand Information and Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 text-center md:text-left">
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="bg-[#ffbd11] text-black font-extrabold text-sm px-4 py-1.5 rounded-full inline-block self-center md:self-start shadow-md">
              ⚡ ফটাফট ডিল
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              আমরা আপনাকে দিচ্ছি বাংলাদেশের সেরা আকর্ষণীয় এবং ট্রেন্ডিং পণ্যের শতভাগ অরিজিনাল কোয়ালিটি ও সবচেয়ে কম দামে দ্রুত ডেলিভারি সুবিধা।
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-2.5">
            <h4 className="text-white font-bold text-sm">যোগাযোগ করুন</h4>
            <p className="text-xs text-gray-400">হেল্পলাইন: 01334747918</p>
            <p className="text-xs text-gray-400">ইমেইল: support@fatafatideal.xyz</p>
            <p className="text-xs text-gray-400">সময়: সকাল ৯ টা থেকে রাত ১০ টা (প্রতিদিন)</p>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-3">
            <h4 className="text-white font-bold text-sm">আমাদের সোশ্যাল মিডিয়া</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#1877f2] hover:text-white text-gray-300 p-2.5 rounded-full transition-all active:scale-90 border border-gray-700/50"
                aria-label="Facebook Page"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice bar */}
        <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-600 font-mono">
          <span>&copy; {new Date().getFullYear()} Fatafati Deal Shop. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Crafted with <Heart size={10} className="fill-red-500 text-red-500 animate-pulse" /> for premium eCommerce.
          </span>
        </div>
      </div>
    </footer>
  );
};
