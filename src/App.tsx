import { useState, useEffect } from 'react';
import { products as initialProducts } from './data/products';
import { Product, Order, Review } from './types';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ImageSlider } from './components/ImageSlider';
import { FAQSection } from './components/FAQSection';
import { ReviewSection } from './components/ReviewSection';
import { OrderForm } from './components/OrderForm';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, Sparkles, CheckCircle, Package, Truck, ShieldCheck, 
  ChevronRight, Calendar, User, Phone, MapPin, Printer, ShoppingBag, ArrowRight, ShoppingCart
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'home' | 'details'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(initialProducts[0]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  // Track dynamically submitted user reviews per product in state
  const [productReviews, setProductReviews] = useState<Record<string, Review[]>>(() => {
    const record: Record<string, Review[]> = {};
    initialProducts.forEach((p) => {
      record[p.id] = p.reviews;
    });
    return record;
  });

  // Track success order details for modal display
  const [latestOrder, setLatestOrder] = useState<Order | null>(null);
  
  // Track cart simulation
  const [cartCount, setCartCount] = useState(0);

  // Monitor scroll for mobile sticky "Buy Now" button
  const [showStickyBuy, setShowStickyBuy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (view === 'details') {
        const checkoutForm = document.getElementById('checkout-form-section');
        if (checkoutForm) {
          const rect = checkoutForm.getBoundingClientRect();
          // Hide buy button if checkout form is visible on screen or scroll position is small
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setShowStickyBuy(false);
          } else if (window.scrollY > 300) {
            setShowStickyBuy(true);
          } else {
            setShowStickyBuy(false);
          }
        }
      } else {
        setShowStickyBuy(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  // Navigate to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selectedProduct]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setView('details');
  };

  const handleQuickOrder = (product: Product) => {
    setSelectedProduct(product);
    setView('details');
    // Allow slight delay for page transition, then scroll to form smoothly
    setTimeout(() => {
      const formEl = document.getElementById('checkout-form-section');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const handleAddReview = (newReview: Review) => {
    setProductReviews((prev) => ({
      ...prev,
      [selectedProduct.id]: [newReview, ...prev[selectedProduct.id]]
    }));
  };

  const handleOrderSuccess = (order: Order) => {
    setLatestOrder(order);
    setCartCount((prev) => prev + order.quantity);
  };

  const handleScrollToCheckout = () => {
    const formEl = document.getElementById('checkout-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Get active product reviews from state
  const activeReviews = productReviews[selectedProduct.id] || selectedProduct.reviews;

  // Derive unique categories for filter
  const categories = ['all', 'dental', 'hair', 'wellness', 'grooming'];
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'all': return 'সব প্রোডাক্ট';
      case 'dental': return 'দাঁতের যত্ন';
      case 'hair': return 'চুলের যত্ন';
      case 'wellness': return 'ব্যক্তিগত স্বাস্থ্য';
      case 'grooming': return 'গ্রুমিং এক্সেসরিজ';
      default: return cat;
    }
  };

  // Assign categories dynamically to product items
  const getProductCategory = (p: Product) => {
    if (p.id.includes('toothbrush') || p.id.includes('whitener') || p.id.includes('v34')) return 'dental';
    if (p.id.includes('shampoo')) return 'hair';
    if (p.id.includes('wash')) return 'wellness';
    if (p.id.includes('razor')) return 'grooming';
    return 'wellness';
  };

  const filteredProducts = categoryFilter === 'all' 
    ? initialProducts 
    : initialProducts.filter(p => getProductCategory(p) === categoryFilter);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-amber-500 selection:text-black antialiased">
      {/* Dynamic Header */}
      <Header onGoHome={() => setView('home')} cartCount={cartCount} />

      {/* Main Container Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 py-6 md:py-10"
            >
              {/* Premium Promo Hero Banner */}
              <div className="relative rounded-3xl overflow-hidden bg-radial from-[#222a36] via-[#1a202c] to-[#0f1319] text-white p-6 md:p-12 mb-10 shadow-xl border border-gray-800">
                <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

                <div className="max-w-xl relative z-10">
                  <div className="inline-flex items-center gap-2.5 bg-amber-500/15 border border-amber-500/30 px-3.5 py-1 rounded-full text-amber-400 text-xs font-extrabold mb-4 uppercase tracking-wider">
                    <Sparkles size={12} className="animate-pulse" />
                    <span>১০০% অরিজিনাল ট্রেন্ডিং গ্যাজেটস</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans tracking-tight">
                    ফটাফট ডিল - সেরা মানের <span className="text-amber-400">প্রিমিয়াম কালেকশন</span>
                  </h1>
                  
                  <p className="text-gray-400 text-xs md:text-sm mt-3 leading-relaxed font-medium">
                    আমরা সরাসরি আমদানিকৃত সেরা ও গুণগত মান সম্পন্ন কসমেটিকস ও পার্সোনাল কেয়ার প্রোডাক্ট সরবরাহ করে থাকি। ক্যাশ অন ডেলিভারিতে চেক করে অর্ডার গ্রহণ করুন।
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 font-bold bg-[#141a24] px-3.5 py-2 rounded-xl border border-gray-800">
                      <CheckCircle size={14} className="text-emerald-500" />
                      <span>অগ্রিম টাকা ছাড়াই অর্ডার</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 font-bold bg-[#141a24] px-3.5 py-2 rounded-xl border border-gray-800">
                      <Truck size={14} className="text-amber-400" />
                      <span>দ্রুত হোম ডেলিভারি</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Category Filtering Tabs */}
              <div className="mb-8 overflow-x-auto no-scrollbar py-2 flex gap-2 md:justify-center border-b border-gray-200">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`whitespace-nowrap px-4.5 py-2 rounded-full text-xs md:text-sm font-bold transition-all focus:outline-none ${
                      categoryFilter === cat
                        ? 'bg-[#1e1e24] text-white shadow-md scale-102 border-amber-400'
                        : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {getCategoryLabel(cat)}
                  </button>
                ))}
              </div>

              {/* Product Grid Area */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onSelect={handleProductSelect}
                    onQuickOrder={handleQuickOrder}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-4 py-6 md:py-10"
            >
              {/* Back Navigation Bar */}
              <button
                onClick={() => setView('home')}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200 font-bold text-xs md:text-sm px-4.5 py-2.5 rounded-xl transition-all shadow-xs mb-6 cursor-pointer focus:outline-none active:scale-95"
              >
                <ChevronLeft size={16} />
                <span>সব প্রোডাক্ট দেখুন</span>
              </button>

              {/* Main Product Presentation Card */}
              <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xs border border-gray-100 mb-8 flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Left Side: Product Gallery */}
                <div className="w-full md:w-1/2">
                  <ImageSlider images={selectedProduct.images} title={selectedProduct.title} />
                </div>

                {/* Right Side: Primary Actions & Meta */}
                <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
                  <div>
                    {/* Discount badge + verified purchase metadata */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                        {selectedProduct.discountBadge}
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold bg-gray-100 px-2.5 py-1 rounded-md">
                        {selectedProduct.soldCount || "ভেরিফাইড প্রোডাক্ট"}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-black text-gray-800 leading-tight">
                      {selectedProduct.banglaTitle || selectedProduct.title}
                    </h2>
                    
                    <p className="text-gray-400 text-xs font-medium mt-1">
                      {selectedProduct.title}
                    </p>

                    {/* Price display block */}
                    <div className="flex items-baseline gap-2.5 mt-3">
                      <span className="text-3xl font-black text-emerald-600">
                        ৳{selectedProduct.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm md:text-base font-semibold">
                        ৳{selectedProduct.originalPrice}
                      </span>
                    </div>

                    {/* Short checklist of benefits */}
                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <h4 className="text-xs font-black text-gray-800 uppercase tracking-wider mb-2.5">
                        প্রোডাক্টের মূল সুবিধাসমূহ:
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {selectedProduct.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600 font-medium">
                            <span className="text-emerald-500 shrink-0 mt-0.5">✔</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Immediate Promotional Banner Box */}
                  <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-800 mt-4 shadow-md flex flex-col gap-2.5 relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 text-amber-500/5 font-black text-6xl select-none">
                      DEAL
                    </div>
                    <p className="text-sm font-black text-center text-amber-400 leading-snug">
                      {selectedProduct.banglaTitle || selectedProduct.title} এর স্পেশাল প্যাকেজ মাত্র ৳{selectedProduct.price} টাকায়!
                    </p>
                    <button
                      onClick={handleScrollToCheckout}
                      className="w-full bg-[#ffbd11] hover:bg-[#ffcf33] text-black font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-md active:scale-95"
                    >
                      এখনি অর্ডার করুন
                    </button>
                  </div>
                </div>
              </div>

              {/* Detailed Key Benefits Section */}
              <div className="bg-amber-50/40 rounded-3xl p-5 md:p-8 border border-amber-100 mb-8">
                <h3 className="font-extrabold text-gray-800 text-lg md:text-xl mb-4 text-center">
                  {selectedProduct.longBenefitsTitle || "কেন ব্যবহার করবেন আমাদের এই প্রিমিয়াম প্রোডাক্ট?"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  {selectedProduct.longBenefits.map((bullet, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-2xl border border-amber-100/50 flex items-start gap-3 shadow-xs">
                      <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-semibold">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Specifications Section if exists */}
              {selectedProduct.specs && selectedProduct.specs.length > 0 && (
                <div className="bg-white rounded-3xl p-5 md:p-8 border border-gray-100 mb-8 shadow-xs">
                  <h3 className="font-extrabold text-gray-800 text-base md:text-lg mb-4">
                    টেকনিক্যাল স্পেসিফিকেশন
                  </h3>
                  <div className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-100">
                    {selectedProduct.specs.map((sp, idx) => (
                      <div key={idx} className="flex text-xs md:text-sm p-3 gap-4">
                        <span className="w-1/3 text-gray-500 font-bold">{sp.label}</span>
                        <span className="w-2/3 text-gray-800 font-medium">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Review Section */}
              <div className="mb-8">
                <ReviewSection
                  reviews={activeReviews}
                  onAddReview={handleAddReview}
                />
              </div>

              {/* FAQ Accordion Section */}
              <div className="mb-8">
                <FAQSection faqs={selectedProduct.faqs} />
              </div>

              {/* Trust badges and COD notices */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs">
                  <span className="text-emerald-500 text-2xl">📦</span>
                  <h4 className="font-extrabold text-gray-800 text-sm mt-1">পণ্য খুলে দেখার সুবিধা</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-medium">ডেলিভারি ম্যানের সামনে চেক করে মূল্য দিন</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs">
                  <span className="text-amber-500 text-2xl">🛡</span>
                  <h4 className="font-extrabold text-gray-800 text-sm mt-1">১০০% ক্যাশ ব্যাক গ্যারান্টি</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-medium">বর্ণনার সাথে অমিল থাকলে তাৎক্ষণিক রিটার্ন</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs">
                  <span className="text-blue-500 text-2xl">⚡</span>
                  <h4 className="font-extrabold text-gray-800 text-sm mt-1">২৪/৭ কাস্টমার সাপোর্ট</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-medium">যেকোনো তথ্যে ফোন করুন: 01334747918</p>
                </div>
              </div>

              {/* Core Order Form Section */}
              <OrderForm product={selectedProduct} onOrderSuccess={handleOrderSuccess} />

              {/* Floating control trigger buttons */}
              <FloatingButtons 
                onScrollToCheckout={handleScrollToCheckout} 
                showStickyBuy={showStickyBuy} 
                productName={selectedProduct.banglaTitle || selectedProduct.title}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Success Order Overlay Invoice Modal */}
      <AnimatePresence>
        {latestOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white text-gray-800 max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              {/* Header */}
              <div className="bg-slate-900 text-white p-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial from-amber-500/10 to-transparent pointer-events-none" />
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-emerald-500/20">
                  <CheckCircle size={26} className="text-white" />
                </div>
                <h3 className="font-extrabold text-lg md:text-xl text-amber-400">
                  আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!
                </h3>
                <p className="text-[11px] text-gray-400 mt-1">
                  অর্ডার ট্র্যাকিং আইডি: <span className="font-mono text-white font-black">{latestOrder.id}</span>
                </p>
              </div>

              {/* Invoice / Receipt Details */}
              <div className="p-5 md:p-6 flex flex-col gap-4">
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  আমাদের একজন প্রতিনিধি আপনার মোবাইল নম্বরে কল করে অর্ডারটি নিশ্চিত করবেন। দয়া করে আপনার মোবাইল সচল রাখুন।
                </p>

                {/* Delivery details */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs flex flex-col gap-2.5">
                  <h4 className="font-extrabold text-gray-800 border-b border-gray-200 pb-1.5 uppercase tracking-wider text-[10px] text-gray-500">
                    ডেলিভারি তথ্য
                  </h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <User size={13} className="text-gray-400 mt-0.5 shrink-0" />
                    <span className="font-semibold text-gray-800">{latestOrder.fullName}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <Phone size={13} className="text-gray-400 mt-0.5 shrink-0" />
                    <span className="font-mono font-semibold text-gray-800">{latestOrder.mobileNumber}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin size={13} className="text-gray-400 mt-0.5 shrink-0" />
                    <span className="font-medium text-gray-700 leading-normal">{latestOrder.fullAddress} ({latestOrder.district})</span>
                  </div>
                </div>

                {/* Tracking Visualizer */}
                <div className="py-2">
                  <h4 className="font-extrabold text-[10px] text-gray-400 uppercase tracking-wider mb-3.5 text-center sm:text-left">
                    অর্ডার স্ট্যাটাস ট্র্যাকার
                  </h4>
                  <div className="grid grid-cols-4 text-center relative">
                    {/* Progress Connecting Line */}
                    <div className="absolute top-3 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0">
                      <div className="h-full bg-amber-500 w-[33.33%] transition-all duration-1000" />
                    </div>

                    {[
                      { icon: <ShoppingCart size={13} />, label: "পেন্ডিং", active: true },
                      { icon: <Package size={13} />, label: "প্যাকিং", active: true },
                      { icon: <Truck size={13} />, label: "শিপড", active: false },
                      { icon: <CheckCircle size={13} />, label: "ডেলিভারি", active: false }
                    ].map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center z-10">
                        <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center transition-all duration-500 ${
                          step.active ? 'bg-amber-500 text-black shadow-md' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {step.icon}
                        </div>
                        <span className={`text-[10px] font-bold mt-1.5 ${step.active ? 'text-gray-800' : 'text-gray-400'}`}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Breakdown Invoice */}
                <div className="border-t border-dashed border-gray-200 pt-3 flex flex-col gap-1.5 text-xs">
                  <div className="flex justify-between text-gray-500">
                    <span>{latestOrder.product.banglaTitle || latestOrder.product.title} (x{latestOrder.quantity}):</span>
                    <span className="font-semibold text-gray-800">৳{latestOrder.product.price * latestOrder.quantity}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>ডেলিভারি চার্জ:</span>
                    <span className="font-semibold text-gray-800">৳{latestOrder.deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between text-gray-800 font-extrabold border-t border-gray-100 pt-2 text-sm mt-0.5">
                    <span className="text-amber-500 font-black">সর্বমোট পরিশোধযোগ্য মূল্য:</span>
                    <span className="font-black text-emerald-600 font-mono">৳{latestOrder.totalPrice}</span>
                  </div>
                </div>

                {/* Print & Close Buttons */}
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Printer size={13} />
                    <span>রশিদ প্রিন্ট করুন</span>
                  </button>

                  <button
                    onClick={() => {
                      setLatestOrder(null);
                      setView('home'); // Go back to Home
                    }}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-2.5 rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-md"
                  >
                    শপিং চালিয়ে যান
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
