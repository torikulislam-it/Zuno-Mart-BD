import React, { useState, useEffect } from 'react';
import { Product, Order } from '../types';
import { User, Phone, MapPin, Truck, ChevronRight, MessageSquare, PhoneCall, ShoppingCart, ShoppingBag, CheckCircle, Ticket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrderFormProps {
  product: Product;
  onOrderSuccess: (order: Order) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({ product, onOrderSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [district, setDistrict] = useState('dhaka-inside');
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Delivery configuration
  const deliveryCharge = 70;
  const productTotal = product.price * quantity;
  const discountTotal = promoDiscount;
  const grandTotal = Math.max(0, productTotal + deliveryCharge - discountTotal);

  // Auto scroll to form helper when triggered or quick order selected
  useEffect(() => {
    // If targeted, we can handle scroll smoothly
  }, [product]);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    
    const code = promoCode.trim().toUpperCase();
    if (!code) return;

    if (code === 'Fatafati' || code === 'FREE50' || code === 'DISCOUNT50') {
      setPromoDiscount(50);
      setPromoSuccess('৳৫০ ডিসকাউন্ট সফলভাবে প্রয়োগ করা হয়েছে!');
    } else if (code === 'SAVE100' && productTotal >= 1000) {
      setPromoDiscount(100);
      setPromoSuccess('৳১০০ ডিসকাউন্ট সফলভাবে প্রয়োগ করা হয়েছে!');
    } else {
      setPromoError('অকার্যকর বা মেয়াদোত্তীর্ণ প্রোমো কোড!');
      setPromoDiscount(0);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobileNumber.trim() || !fullAddress.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate database write / checkout api request
    setTimeout(() => {
      const newOrder: Order = {
        id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        product,
        quantity,
        fullName,
        mobileNumber,
        fullAddress,
        district: district === 'dhaka-inside' ? 'ঢাকার ভেতরে' : 'ঢাকার বাইরে',
        deliveryCharge,
        totalPrice: grandTotal,
        createdAt: new Date().toLocaleDateString('bn-BD'),
        status: 'confirmed'
      };

      onOrderSuccess(newOrder);
      setIsSubmitting(false);

      // Reset Form fields
      setFullName('');
      setMobileNumber('');
      setFullAddress('');
      setQuantity(1);
      setPromoCode('');
      setPromoDiscount(0);
      setPromoSuccess('');
    }, 1200);
  };

  // Pre-fill social chat messages
  const getWhatsAppLink = () => {
    const message = `হ্যালো! আমি "${product.title}" অর্ডার করতে চাই।\n` +
      `পরিমাণ: ${quantity} পিস\n` +
      `ডেলিভারি এলাকা: ${district === 'dhaka-inside' ? 'ঢাকার ভেতরে' : 'ঢাকার বাইরে'}\n` +
      `মোট মূল্য: ৳${grandTotal}\n` +
      `আমার নাম: ${fullName || '(নাম লিখুন)'}\n` +
      `মোবাইল: ${mobileNumber || '(নম্বর লিখুন)'}\n` +
      `ঠিকানা: ${fullAddress || '(ঠিকানা লিখুন)'}`;
    
    return `https://wa.me/8801315779093?text=${encodeURIComponent(message)}`;
  };

  const getMessengerLink = () => {
    return `https://m.me/fatafatideal`; // Simulated Messenger chat link
  };

  return (
    <div id="checkout-form-section" className="bg-[#1e2530] text-white rounded-3xl p-5 md:p-8 shadow-xl border border-gray-800">
      {/* Heading */}
      <div className="text-center mb-6">
        <h3 className="font-extrabold text-xl md:text-2xl text-amber-400">
          অর্ডার করতে নিচের ফর্মটি পূরণ করুন
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          বিনা অগ্রিম পেমেন্টে ক্যাশ অন ডেলিভারিতে পণ্যটি পেতে আপনার সঠিক তথ্য দিন
        </p>
      </div>

      {/* Internal Mini Product Summary */}
      <div className="bg-[#141a24] p-3 rounded-2xl border border-gray-800 mb-6 flex gap-3.5 items-center">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shrink-0">
          <img src={product.images[0]} alt={product.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-xs md:text-sm line-clamp-1 text-gray-200">
            {product.banglaTitle || product.title}
          </h4>
          <p className="text-[10px] text-gray-500 truncate">{product.title}</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-emerald-400 font-extrabold text-xs md:text-sm">
              ৳{product.price}
            </span>
            <span className="text-gray-500 line-through text-[10px] md:text-xs">
              ৳{product.originalPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Form Form Grid */}
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4.5">
        
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
            <User size={13} className="text-amber-400" />
            আপনার নাম <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="যেমনঃ মোঃ আবুল কালাম"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#141a24] text-white border border-gray-800 rounded-xl py-3 pl-3 pr-10 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-medium placeholder-gray-600"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
            <Phone size={13} className="text-amber-400" />
            মোবাইল নম্বর <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              required
              pattern="^(?:\+88|01)?\d{11}$"
              placeholder="01XXXXXXXXX"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full bg-[#141a24] text-white border border-gray-800 rounded-xl py-3 pl-3 pr-10 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-mono placeholder-gray-600"
            />
          </div>
          <span className="text-[10px] text-gray-500 leading-none">সঠিক ১১ ডিজিটের মোবাইল নম্বরটি লিখুন</span>
        </div>

        {/* Full Address */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
            <MapPin size={13} className="text-amber-400" />
            সম্পূর্ণ ঠিকানা <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={2}
            placeholder="গ্রাম/রোড, থানা, জেলা"
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
            className="w-full bg-[#141a24] text-white border border-gray-800 rounded-xl py-3 px-3.5 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-medium placeholder-gray-600 leading-relaxed"
          />
        </div>

        {/* District Dropdown Selector */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
            <Truck size={13} className="text-amber-400" />
            ডেলিভারি এলাকা <span className="text-red-500">*</span>
          </label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full bg-[#141a24] text-white border border-gray-800 rounded-xl py-3 px-3.5 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all font-semibold"
          >
            <option value="dhaka-inside">ঢাকার ভিতরে — ৳৭০</option>
            <option value="dhaka-outside">ঢাকার বাইরে — ৳৭০</option>
          </select>
        </div>

        {/* Quantity Selector + Promo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
          {/* Quantity Selector */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-gray-300">পরিমাণ (পিস)</span>
            <div className="flex items-center bg-[#141a24] border border-gray-800 rounded-xl overflow-hidden h-11 justify-between px-2">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 font-black text-lg flex items-center justify-center text-amber-400 transition-all active:scale-90"
              >
                -
              </button>
              <span className="font-extrabold text-sm px-4 text-white font-mono">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 font-black text-lg flex items-center justify-center text-amber-400 transition-all active:scale-90"
              >
                +
              </button>
            </div>
          </div>

          {/* Promo Coupon Form */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-gray-300 flex items-center gap-1">
              <Ticket size={12} className="text-amber-400" />
              প্রোমো কোড (ঐচ্ছিক)
            </span>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="কোড লিখুন"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#141a24] border border-gray-800 rounded-xl px-3 text-xs uppercase focus:border-amber-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="bg-amber-500 hover:bg-amber-600 text-black text-xs font-extrabold px-3.5 rounded-xl transition-colors active:scale-95 shrink-0 h-11"
              >
                প্রয়োগ
              </button>
            </div>
            {promoError && <p className="text-[10px] text-red-400 font-bold mt-0.5 leading-none">{promoError}</p>}
            {promoSuccess && <p className="text-[10px] text-emerald-400 font-bold mt-0.5 leading-none">{promoSuccess}</p>}
            {!promoError && !promoSuccess && (
              <span className="text-[10px] text-gray-500 leading-none">টিপস: ট্রাই করুন `Fatafati`</span>
            )}
          </div>
        </div>

        {/* Pricing Summary Block */}
        <div className="bg-[#141a24] p-4 rounded-2xl border border-gray-800 mt-3 flex flex-col gap-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>উপ-মোট (পণ্যের দাম):</span>
            <span className="font-bold text-white">৳{productTotal}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>ডেলিভারি চার্জ:</span>
            <span className="font-bold text-white">৳{deliveryCharge}</span>
          </div>
          {promoDiscount > 0 && (
            <div className="flex justify-between text-xs text-emerald-400">
              <span>প্রোমো ডিসকাউন্ট:</span>
              <span className="font-bold">- ৳{promoDiscount}</span>
            </div>
          )}
          <div className="border-t border-gray-800/80 pt-2.5 mt-1 flex justify-between text-sm md:text-base">
            <span className="font-extrabold text-amber-400">সর্বমোট মূল্য:</span>
            <span className="font-black text-emerald-400 font-mono text-lg md:text-xl">
              ৳{grandTotal}
            </span>
          </div>
        </div>

        {/* Action Button: Confirm Order */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-600 text-black font-black text-base md:text-lg py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_4px_18px_rgba(251,191,36,0.3)] hover:shadow-xl hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 mt-2 cursor-pointer"
        >
          <ShoppingCart size={20} className="fill-black" />
          <span>
            {isSubmitting ? 'অর্ডার প্রসেস হচ্ছে...' : 'অর্ডার কনফার্ম করুন'}
          </span>
          <ChevronRight size={20} />
        </button>
      </form>

      {/* Alternative Social Contact Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 border-t border-gray-800/80 pt-5">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:shadow-md"
        >
          <MessageSquare size={16} className="fill-white" />
          <span>WhatsApp এ অর্ডার করুন</span>
        </a>

        <a
          href={getWhatsAppLink()} // Fallback URL or Messenger link if required, let's keep it clean
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 hover:shadow-md"
        >
          <PhoneCall size={16} />
          <span>ফোনে কথা বলতে ক্লিক করুন</span>
        </a>
      </div>
      
      <p className="text-center text-[10px] text-gray-500 mt-4 leading-relaxed font-mono">
        Hotline: 01315779093 | 100% Secure Checkout SSL Encrypted
      </p>
    </div>
  );
};
