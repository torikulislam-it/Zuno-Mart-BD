import React, { useState } from 'react';
import { Review } from '../types';
import { Star, MessageSquare, CheckCircle, ShieldCheck, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReviewSectionProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, onAddReview }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Math for aggregate ratings
  const totalReviews = reviews.length;
  const avgRating = Number((reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1));

  // Count stars for chart
  const starCounts = [0, 0, 0, 0, 0];
  reviews.forEach((r) => {
    const starIdx = Math.min(5, Math.max(1, Math.round(r.rating))) - 1;
    starCounts[starIdx]++;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `rev-user-${Date.now()}`,
      userName: name,
      rating,
      comment,
      date: "আজকে",
      verified: true
    };

    onAddReview(newReview);
    setName('');
    setComment('');
    setRating(5);
    setShowAddForm(false);
  };

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-xs">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="text-amber-500 animate-spin-slow" size={22} />
          <h3 className="font-extrabold text-gray-800 text-lg md:text-xl">
            সম্মানিত গ্রাহকদের রিভিউ
          </h3>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-xs bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-3.5 py-1.5 rounded-lg shadow-xs hover:shadow-md transition-all active:scale-95"
        >
          {showAddForm ? 'রিভিউ বন্ধ করুন' : 'রিভিউ দিন'}
        </button>
      </div>

      {/* Aggregate Score Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-amber-50/50 p-4 md:p-5 rounded-2xl mb-6 border border-amber-100">
        <div className="md:col-span-4 text-center">
          <p className="text-4xl md:text-5xl font-black text-gray-800 font-mono leading-none">
            {avgRating || 5.0}
          </p>
          <div className="flex justify-center gap-0.5 my-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={18}
                className={s <= Math.round(avgRating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 font-medium">
            মোট {totalReviews}টি ভেরিফাইড রিভিউ
          </p>
        </div>

        {/* Rating Bars */}
        <div className="md:col-span-8 flex flex-col gap-1.5">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = starCounts[stars - 1];
            const pct = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
            return (
              <div key={stars} className="flex items-center gap-2.5 text-xs text-gray-600">
                <span className="w-3 font-bold text-gray-700">{stars}</span>
                <Star size={12} className="fill-gray-400 text-gray-400" />
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                    style={{ width: `${pct}%` }} 
                  />
                </div>
                <span className="w-8 text-right font-medium text-gray-400">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Write Review Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.form
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 overflow-hidden flex flex-col gap-3"
          >
            <h4 className="font-extrabold text-gray-800 text-sm md:text-base">
              আপনার সৎ মতামত দিন
            </h4>

            {/* Star selector */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-gray-500 font-bold">রেটিং দিন:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={() => setRating(star)}
                    className="p-1 transition-transform active:scale-125 focus:outline-none"
                  >
                    <Star
                      size={20}
                      className={
                        star <= (hoverRating ?? rating)
                          ? "fill-amber-500 text-amber-500"
                          : "text-gray-300"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  required
                  placeholder="যেমনঃ মোঃ আশরাফুল"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm bg-white border border-gray-200 rounded-lg p-2.5 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">
                  আপনার মন্তব্য
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="পণ্যটি আপনার কেমন লেগেছে? গুণগত মান কেমন?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full text-sm bg-white border border-gray-200 rounded-lg p-2.5 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-2 px-4 rounded-lg self-end shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              রিভিউ জমা দিন
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="flex flex-col gap-4">
        {reviews.map((rev) => (
          <div 
            key={rev.id} 
            className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
          >
            {/* Header info */}
            <div className="flex justify-between items-start gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                  <User size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-xs md:text-sm flex items-center gap-1.5">
                    {rev.userName}
                    {rev.verified && (
                      <span className="text-[9px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded-full flex items-center gap-0.5 font-medium">
                        <CheckCircle size={8} className="fill-emerald-600 text-white" />
                        ভেরিফাইড ক্রেতা
                      </span>
                    )}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={10}
                          className={s <= rev.rating ? "fill-amber-500 text-amber-500" : "text-gray-200"}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">{rev.date}</span>
                  </div>
                </div>
              </div>

              {/* Secure Transaction Tag */}
              <span className="text-[10px] text-gray-400 flex items-center gap-0.5 font-medium hidden sm:flex">
                <ShieldCheck size={12} className="text-emerald-500" />
                সুরক্ষিত ক্রয়
              </span>
            </div>

            {/* Comment */}
            <p className="mt-2.5 text-xs md:text-sm text-gray-600 leading-relaxed font-normal">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
