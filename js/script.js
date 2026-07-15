/**
 * Fatafati Deal — Premium static ecommerce checkout system
 * Built for cPanel/shared hosting (no Node.js/React required)
 */

// Global Configuration
const CONFIG = {
  // Option A: Google Sheet Apps Script Web App URL
  // Paste your deployed Google Apps Script URL here to automatically log orders!
  // Example: "https://script.google.com/macros/s/AKfycb.../exec"
  GOOGLE_SHEET_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxlC7oeEdpMxyyXBh2y1UbEOkFS0ddOC6Bpk5ZecmGKnrgvcB1138b5Y3W-ZjKs58iK/exec"
};

// Utility function to get UTM tracking and browser metadata
function getOrderTrackingData() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utmSource: urlParams.get('utm_source') || 'N/A',
    utmMedium: urlParams.get('utm_medium') || 'N/A',
    utmCampaign: urlParams.get('utm_campaign') || 'N/A',
    referrer: document.referrer || 'Direct / Bookmark',
    userAgent: navigator.userAgent || 'Unknown Device'
  };
}
// Global Products Data
const products = [
  {
    id: 'soft-toothbrush',
    title: "Micro-Nano Ultra soft Toothbrush 10000 bristles",
    banglaTitle: "Micro-Nano Ultra soft Toothbrush 10000 bristles",
    subtitle: "দাঁত ও মাড়ির সুরক্ষায় ১০০% কার্যকরী আল্ট্রা ফাইন মাইক্রো ন্যানো টুথব্রাশ",
    price: 590,
    originalPrice: 1180,
    discountBadge: "৫০% ছাড়",
    soldCount: "১২৪০ জন কিনেছেন",
    images: [
      "https://i.postimg.cc/T36CZf0Y/1773477951360-ixhjcb.webp",
      "https://i.postimg.cc/NFZmBjBt/10000-Superfine-Ultra-Soft-Bristles-Toothbrush-1.jpg",
      "https://i.postimg.cc/BbRH4n40/10000-Superfine-Ultra.jpg",
      "https://i.postimg.cc/dV6mpdDR/1774170509662-zl4r39.png",
      "https://i.postimg.cc/sgs4TKfJ/1774170335879-ke6mm1.png",
      "https://i.postimg.cc/sgs4TKf0/1774170375673-obsogf.png"
    ],
    features: [
      "১০,০০০ এর বেশি আল্ট্রা ফাইন মাইক্রো-ন্যানো ব্রিসলস যা দাঁতের প্রতিটি কোণ পরিষ্কার করে।",
      "একদম নরম এবং আরামদায়ক, কোনো প্রকার রক্তক্ষরণ বা ব্যথার সম্ভাবনা নেই।",
      "যেকোনো বয়সের মানুষের জন্য এবং সেনসিটিভ দাঁত ও মাড়ির জন্য অত্যন্ত কার্যকরী।",
      "৪টি ভিন্ন রঙের আকর্ষণীয় tube ar modde thakbe যা সহজে বহনযোগ্য।"
    ],
    longBenefitsTitle: "কেন ব্যবহার করবেন আমাদের আল্ট্রা ফাইন টুথব্রাশ?",
    longBenefits: [
      "১০,০০০+ আল্ট্রা সফট ব্রিসলস সাধারণ ব্রাশের চেয়ে ২০ গুণ বেশি নিখুঁত পরিষ্কার করে।",
      "জিহ্বা এবং গালের ভেতরের অংশ পরিষ্কার করার জন্য ব্যাক-সাইড স্ক্র্যাপার প্রযুক্তি।",
      "অতিরিক্ত কোমলতা মাড়ির ক্ষয়রোধ করে এবং এনামেলকে রাখে সুরক্ষিত।",
      "১০০% ব্যাকটেরিয়া প্রতিরোধী উন্নত মানের ফুড-গ্রেড হ্যান্ডেল ও ফাইবার।"
    ],
    description: "আমাদের এই আল্ট্রা-ফাইন টুথব্রাশ সেটটি বিশেষভাবে তৈরি করা হয়েছে তাদের জন্য যাদের দাঁত ও মাড়ি অত্যন্ত সংবেদনশীল। সাধারণ ব্রাশ ব্যবহারের ফলে যাদের মাড়ি থেকে রক্ত পড়ে বা ব্যথা হয়, তাদের জন্য এটি একটি ম্যাজিকের মতো কাজ করবে। এর প্রতিটি ব্রিসলস চুলের চেয়েও পাতলা, যা দাঁতের গভীরে প্রবেশ করে ময়লা ও প্লাক দূর করতে সক্ষম।",
    specs: [
      { label: "প্যাকেজ উপাদান", value: "৪ পিস প্রিমিয়াম টুথব্রাশ (মাল্টিকালার)" },
      { label: "ব্রিসল ম্যাটেরিয়াল", value: "আল্ট্রা ফাইন মাইক্রো ন্যানো ফাইবার" },
      { label: "হ্যান্ডেল ম্যাটেরিয়াল", value: "ফুড গ্রেড পিপি (BPA-Free)" },
      { label: "ব্যবহারের মেয়াদ", value: "ডাক্তারদের পরামর্শ অনুযায়ী ৩ মাস" }
    ],
    faqs: [
      {
        question: "ব্রাশগুলো কি সত্যিই নরম?",
        answer: "হ্যাঁ, এটি সাধারণ ব্রাশের চেয়ে অনেক গুণ বেশি নরম। এর ১২,০০০+ মাইক্রো ন্যানো ব্রিসলস আপনার দাঁত ও মাড়িতে তুলার মতো অনুভূতি দেবে।"
      },
      {
        question: "ঢাকার বাইরে ডেলিভারি কত দিনে পাওয়া যাবে?",
        answer: "ঢাকার বাইরে সাধারণত ২ থেকে ৩ কার্যদিবসের মধ্যে এবং ঢাকার ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে হোম ডেলিভারি দেওয়া হয়।"
      },
      {
        question: "পেমেন্ট কি ক্যাশ অন ডেলিভারি (COD)?",
        answer: "হ্যাঁ! আপনি পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ মূল্য পরিশোধ করতে পারবেন। কোনো অগ্রিম পেমেন্টের প্রয়োজন নেই।"
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        userName: "আব্দুল্লাহ আল মামুন",
        rating: 5,
        date: "১০ জুলাই, ২০২৬",
        comment: "অসাধারণ ব্রাশ! আমার মাড়ি থেকে রক্ত পড়ত, এই ব্রাশ ব্যবহার করার পর এখন আর কোনো সমস্যা হচ্ছে না। ৪টি ব্রাশের প্যাকেজ খুব সাশ্রয়ী। ধন্যবাদ ফটাফট ডিল!",
        verified: true
      },
      {
        id: 'rev-2',
        userName: "নুসরাত জাহান",
        rating: 5,
        date: "০৫ জুলাই, ২০২৬",
        comment: "অনেক নরম ব্রাশ, বাচ্চাদের জন্যও এটা ব্যবহার করা যাবে। দেখতেও খুব প্রিমিয়াম লাগে। কালারগুলো দারুণ!",
        verified: true
      }
    ]
  },
  {
    id: 'bamboo-soft-toothbrush',
    title: "Premium Bamboo Toothbrush  with Ten thousand Bristles",
    banglaTitle: "Premium Bamboo Toothbrush  with Ten thousand Bristles",
    subtitle: "পরিবেশবান্ধব ও দাঁতের সুরক্ষায় ১০০% প্রাকৃতিক চারকোল ব্যাম্বু টুথব্রাশ",
    price: 200,
    originalPrice: 800,
    displayPrice: "399 - 690",
    discountBadge: "৫০% ছাড়",
    soldCount: "৮৫০ জন কিনেছেন",
    images: [
      "https://i.postimg.cc/2605fkhM/Premium-Bamboo-Toothbrush-with-Ten-thousand-Bristles.png",
      "https://i.postimg.cc/d0Bs8sHG/1-bambo-toothbrush.jpg",
      "https://i.postimg.cc/s2cjpj6m/2-bambo-toothbrush.jpg",
      "https://i.postimg.cc/1zHmpmCJ/3-bambo-toothbrush.jpg",
      "https://i.postimg.cc/R0RScSsP/4-bambo-toothbrush.jpg"
    ],
    features: [
      "১০০% প্রাকৃতিক ও রিসাইকেবল ব্যাম্বু হ্যান্ডেল যা পরিবেশবান্ধব।",
      "চারকোল-ইনফিউজড সুপার সফট ব্রিসলস যা দাঁতের দুর্গন্ধ ও দাগ দূর করতে অত্যন্ত সহায়ক।",
      "অ্যান্টি-ব্যাকটেরিয়াল ফাইবার যা ব্রাশে জীবাণু জমতে দেয় না।",
      "প্যাকেজে রয়েছে ৪টি প্রিমিয়াম ব্যাম্বু টুথব্রাশ, যা দীর্ঘকাল ব্যবহারের উপযোগী।"
    ],
    longBenefitsTitle: "কেন চারকোল ব্যাম্বু সফট টুথব্রাশ ব্যবহার করবেন?",
    longBenefits: [
      "প্রাকৃতিক চারকোল ব্রিসলস দাঁতের হলদে ভাব এবং প্লাক প্রাকৃতিকভাবে শুষে নেয়।",
      "মাড়িতে কোনো রক্তক্ষরণ বা অ্যালার্জির সম্ভাবনা নেই, অত্যন্ত আরামদায়ক ও কোমল।",
      "১০০% বায়োডিগ্রেডেবল বাঁশের তৈরি হ্যান্ডেল পরিবেশ দূষণ প্রতিরোধে দারুণ ভূমিকা রাখে।",
      "অর্গানিক কোটেট হ্যান্ডেল যা ব্যবহারের সময় পিছলে যায় না এবং আরামদায়ক গ্রিপ দেয়।"
    ],
    description: "আমাদের এই চারকোল ব্যাম্বু টুথব্রাশ সেটটি পরিবেশবান্ধব ও স্বাস্থ্যসচেতন লাইফস্টাইলের প্রতীক। সাধারণ প্লাস্টিক ব্রাশ যেখানে শত শত বছর পরিবেশে অপচনশীল থাকে, আমাদের এই ব্রাশের হ্যান্ডেল সম্পূর্ণ প্রাকৃতিক বাঁশের তৈরি যা সহজে মাটিতে মিশে যায়। চারকোল ইনফিউজড ব্রিসলস দাঁত ঝকঝকে সাদা করতে এবং মুখের দুর্গন্ধ দূর করতে জাদুকরী কাজ করে।",
    specs: [
      { label: "প্যাকেজ উপাদান", value: "৪ পিস প্রিমিয়াম চারকোল ব্যাম্বু টুথব্রাশ" },
      { label: "ব্রিসল ম্যাটেরিয়াল", value: "সুপার সফট চারকোল-ইনফিউজড নাইলন" },
      { label: "হ্যান্ডেল ম্যাটেরিয়াল", value: "১০০% অর্গানিক ও বায়োডিগ্রেডেবল ব্যাম্বু (বাঁশ)" },
      { label: "ব্যবহারের মেয়াদ", value: "৩ মাস ব্যবহারের পর প্রাকৃতিকভাবে মাটিতে ফেলে দেওয়া যায়" }
    ],
    faqs: [
      {
        question: "বাঁশের হ্যান্ডেলে কি ফাঙ্গাস পড়বে?",
        answer: "না, আমাদের হ্যান্ডেলগুলো বিশেষ প্রক্রিয়ায় ওয়াটারপ্রুফ কোটিং দেওয়া থাকে, যা ব্যবহারের সময় শুকনো রাখলে ফাঙ্গাস পড়তে দেয় না।"
      },
      {
        question: "চারকোল ব্রিসলস কি দাঁতের জন্য নিরাপদ?",
        answer: "হ্যাঁ, এটি ডেন্টিস্টদের দ্বারা প্রত্যয়িত এবং অত্যন্ত নিরাপদ। এটি প্রাকৃতিকভাবে দাঁত সাদা করতে সাহায্য করে কোনো এনামেল ক্ষয় না করেই।"
      },
      {
        question: "ডেলিভারি চার্জ কত?",
        answer: "২ পিস বা ৪ পিস অর্ডারের জন্য ডেলিভারি চার্জ মাত্র ৭০ টাকা। তবে ৮ পিস বা তার বেশি অর্ডারে সারা বাংলাদেশে ডেলিভারি সম্পূর্ণ ফ্রি!"
      }
    ],
    reviews: [
      {
        id: 'rev-b1',
        userName: "মোঃ হাসিবুল ইসলাম",
        rating: 5,
        date: "১২ জুলাই, ২০২৬",
        comment: "প্রথমবারের মতো পরিবেশবান্ধব বাঁশের ব্রাশ ব্যবহার করলাম। এর চারকোল ব্রিসলস খুবই দারুণ কাজ করে, ব্রাশ করার পর মুখ অনেক ফ্রেশ লাগে।",
        verified: true
      },
      {
        id: 'rev-b2',
        userName: "ফারজানা আক্তার",
        rating: 5,
        date: "০৮ জুলাই, ২০২৬",
        comment: "ব্রাশগুলো অনেক কিউট আর ইকো ফ্রেন্ডলি। দাম অনুযায়ী কোয়ালিটি অনেক বেশি ভালো। সবাইকে এই ব্রাশ ব্যবহার করার পরামর্শ দিচ্ছি!",
        verified: true
      }
    ]
  }
];

// Dynamic Combo Packages Enrichment
products.forEach(p => {
  if (p.id === 'soft-toothbrush') {
    p.combos = [
      { id: 'combo-1', title: "১ সেট (৪ পিস টুথব্রাশ)", price: 590, badge: "৫০% ছাড়", qty: 1, popular: true },
      { id: 'combo-2', title: "২ সেট (৮ পিস) + ফ্রি ডেলিভারি", price: 1080, badge: "সাশ্রয়ী অফার", qty: 2, freeShipping: true }
    ];
  } else if (p.id === 'bamboo-soft-toothbrush') {
    p.combos = [
      { id: 'combo-1', title: "২টি ব্যাম্বু টুথব্রাশ", price: 399, badge: "সাশ্রয়ী", qty: 2 },
      { id: 'combo-2', title: "৪টি ব্যাম্বু টুথব্রাশ (১ সেট)", price: 690, badge: "৫০% ছাড়", qty: 4, popular: true },
      { id: 'combo-3', title: "৮টি ব্যাম্বু টুথব্রাশ (২ সেট) + ফ্রি ডেলিভারি", price: 1280, badge: "ফ্রি ডেলিভারি", qty: 8, freeShipping: true }
    ];
  } else {
    p.combos = [
      { id: 'combo-1', title: `১টি ${p.banglaTitle || p.title}`, price: p.price, badge: p.discountBadge, qty: 1 },
      { id: 'combo-2', title: `২টি ${p.banglaTitle || p.title} + ফ্রি ডেলিভারি`, price: p.price * 2 - 100, badge: "ফ্রি ডেলিভারি", qty: 2 }
    ];
  }
});

// Helper: Get product category based on ID
function getProductCategory(p) {
  if (p.id.includes('toothbrush') || p.id.includes('whitener') || p.id.includes('v34')) return 'dental';
  if (p.id.includes('shampoo')) return 'hair';
  if (p.id.includes('wash')) return 'wellness';
  if (p.id.includes('razor')) return 'grooming';
  return 'wellness';
}

// Helper: Convert English numbers to Bangla numbers
function toBanglaNum(num) {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (digit) => banglaDigits[parseInt(digit, 10)]);
}

// Local Storage Manager for dynamic user reviews
function getLocalReviews(productId) {
  const allReviews = JSON.parse(localStorage.getItem('fatafati_reviews') || '{}');
  return allReviews[productId] || [];
}

function saveLocalReview(productId, review) {
  const allReviews = JSON.parse(localStorage.getItem('fatafati_reviews') || '{}');
  if (!allReviews[productId]) allReviews[productId] = [];
  allReviews[productId].unshift(review);
  localStorage.setItem('fatafati_reviews', JSON.stringify(allReviews));
}

// DOM Setup on load
document.addEventListener('DOMContentLoaded', () => {
  // Identify active page: home vs product details
  const isHomePage = document.getElementById('catalog-grid') !== null;
  const isDetailsPage = document.getElementById('product-details-container') !== null;

  // Inject Cart Drawer HTML
  injectCartDrawerHTML();

  // Initialize common elements
  initCommonCartBadge();

  // Attach click listener to Header Cart button
  const cartBtn = document.getElementById('header-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  }

  if (isHomePage) {
    initHomePage();
  } else if (isDetailsPage) {
    initDetailsPage();
  }
});

// Common Cart Badge Update
function initCommonCartBadge() {
  const cartBadges = document.querySelectorAll('.cart-count-badge');
  const savedOrders = JSON.parse(localStorage.getItem('fatafati_orders_count') || '0');
  cartBadges.forEach(badge => {
    if (savedOrders > 0) {
      badge.textContent = savedOrders;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

function incrementCartCountBy(qty) {
  const current = parseInt(localStorage.getItem('fatafati_orders_count') || '0', 10);
  const updated = current + qty;
  localStorage.setItem('fatafati_orders_count', updated.toString());
  initCommonCartBadge();
}

/* =======================================================
   HOME PAGE CATALOG LOGIC
   ======================================================= */
function initHomePage() {
  const catalogGrid = document.getElementById('catalog-grid');
  const categoryTabs = document.querySelectorAll('.category-tab-btn');
  let activeCategory = 'all';

  // Function to render products
  function renderCatalog() {
    catalogGrid.innerHTML = '';
    const filtered = activeCategory === 'all' 
      ? products 
      : products.filter(p => getProductCategory(p) === activeCategory);

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = "bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group";
      
      const soldCountBadge = product.soldCount 
        ? `<span class="inline-block text-[10px] bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded-md mb-1.5 border border-amber-100">🔥 ${product.soldCount}</span>`
        : '';

      card.innerHTML = `
        <div class="cursor-pointer relative overflow-hidden aspect-square bg-gray-50" onclick="window.location.href='product.html?id=${product.id}'">
          <!-- Discount Badge -->
          <span class="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full shadow-md z-10 animate-pulse">
            ${product.discountBadge}
          </span>
          <img src="${product.images[0].replace('w=600', 'w=350').replace('q=80', 'q=60')}" alt="${product.title}" loading="lazy" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="bg-white/95 text-gray-900 p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
        </div>
        <div class="p-3 md:p-4 flex flex-col flex-grow justify-between">
          <div class="cursor-pointer" onclick="window.location.href='product.html?id=${product.id}'">
            ${soldCountBadge}
            <h3 class="font-bold text-gray-800 text-sm md:text-base leading-snug line-clamp-2 hover:text-amber-500 transition-colors">
              ${product.banglaTitle || product.title}
            </h3>
            <p class="text-[11px] text-gray-400 line-clamp-1 mt-0.5 font-medium">${product.title}</p>
            <div class="flex items-baseline gap-2 mt-2">
              <span class="text-emerald-600 font-black text-base md:text-lg">৳${product.displayPrice || product.price}</span>
              <span class="text-gray-400 line-through text-xs md:text-sm font-medium">৳${product.originalPrice}</span>
            </div>
          </div>
          <div class="mt-3.5 flex flex-col gap-2">
            <button onclick="window.location.href='product.html?id=${product.id}'" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95">
              <span>বিস্তারিত দেখুন</span>
            </button>
            <button onclick="addToCart('${product.id}', 1)" class="w-full bg-[#1e1e24] hover:bg-amber-500 hover:text-black text-white font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 group shadow-md hover:shadow-lg active:scale-95">
              <span>অর্ডার করুন</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      `;
      catalogGrid.appendChild(card);
    });
  }

  // Bind category filters click
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      categoryTabs.forEach(t => {
        t.classList.remove('bg-[#1e1e24]', 'text-white', 'shadow-md', 'scale-102');
        t.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
      });
      tab.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
      tab.classList.add('bg-[#1e1e24]', 'text-white', 'shadow-md', 'scale-102');

      activeCategory = tab.getAttribute('data-category');
      renderCatalog();
    });
  });

  // Initial render
  renderCatalog();
}


/* =======================================================
   PRODUCT DETAILS PAGE LOGIC
   ======================================================= */
function initDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'soft-toothbrush';
  const shouldScrollToOrder = urlParams.get('order') === 'true';

  const product = products.find(p => p.id === productId) || products[0];

  // Dynamic values insertion
  document.getElementById('breadcrumb-title').textContent = product.banglaTitle || product.title;
  document.getElementById('product-title').textContent = product.banglaTitle || product.title;
  document.getElementById('product-subtitle').textContent = product.subtitle || '';
  document.getElementById('product-title-en').textContent = product.title;
  document.getElementById('price-current').textContent = `৳${product.displayPrice || product.price}`;
  document.getElementById('price-original').textContent = `৳${product.originalPrice}`;
  document.getElementById('discount-badge-text').textContent = product.discountBadge;
  document.getElementById('sold-badge-text').textContent = product.soldCount || 'ভেরিফাইড প্রোডাক্ট';
  document.getElementById('deal-product-title').textContent = product.banglaTitle || product.title;
  document.getElementById('deal-product-price').textContent = `৳${product.displayPrice || product.price}`;
  document.getElementById('long-benefits-title').textContent = product.longBenefitsTitle || 'কেন ব্যবহার করবেন আমাদের এই প্রিমিয়াম প্রোডাক্ট?';

  // Render Features list
  const featuresList = document.getElementById('features-list');
  featuresList.innerHTML = product.features.map(feat => `
    <li class="flex items-start gap-2.5 text-xs md:text-sm text-gray-600 font-medium">
      <span class="text-emerald-500 shrink-0 mt-0.5">✔</span>
      <span>${feat}</span>
    </li>
  `).join('');

  // Render Long Benefits Grid
  const longBenefitsGrid = document.getElementById('long-benefits-grid');
  longBenefitsGrid.innerHTML = product.longBenefits.map(bullet => `
    <div class="bg-white p-3.5 rounded-2xl border border-amber-100/50 flex items-start gap-3 shadow-xs">
      <span class="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
      <p class="text-xs md:text-sm text-gray-700 leading-relaxed font-semibold">${bullet}</p>
    </div>
  `).join('');

  // Specs section rendering
  const specsSection = document.getElementById('specs-section');
  if (product.specs && product.specs.length > 0) {
    document.getElementById('specs-grid').innerHTML = product.specs.map(spec => `
      <div class="flex text-xs md:text-sm p-3 gap-4">
        <span class="w-1/3 text-gray-500 font-bold">${spec.label}</span>
        <span class="w-2/3 text-gray-800 font-medium">${spec.value}</span>
      </div>
    `).join('');
    specsSection.classList.remove('hidden');
  } else {
    specsSection.classList.add('hidden');
  }

  // Initialize Gallery Slider
  initGallerySlider(product);

  // Initialize FAQs
  initFaqAccordion(product);

  // Initialize Reviews
  initReviewsSystem(product);

  // Initialize Order Form
  initOrderForm(product);

  // Handle immediate auto-scroll to form if parameter passed
  if (shouldScrollToOrder) {
    setTimeout(() => {
      scrollToForm();
    }, 400);
  }

  // Sticky Buy Button visibility monitor
  const stickyBottomBar = document.getElementById('sticky-bottom-buy-bar');
  const stickyProductName = document.getElementById('sticky-product-name');
  stickyProductName.textContent = product.banglaTitle || product.title;

  window.addEventListener('scroll', () => {
    const checkoutSection = document.getElementById('checkout-form-section');
    if (!checkoutSection) return;

    const rect = checkoutSection.getBoundingClientRect();
    const isCheckoutVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (window.scrollY > 400 && !isCheckoutVisible) {
      stickyBottomBar.classList.remove('translate-y-24', 'opacity-0');
    } else {
      stickyBottomBar.classList.add('translate-y-24', 'opacity-0');
    }

    // Scroll to top button visibility
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.remove('scale-0', 'opacity-0');
    } else {
      scrollToTopBtn.classList.add('scale-0', 'opacity-0');
    }
  });
}

function scrollToForm() {
  const formSection = document.getElementById('checkout-form-section');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Bind manual global triggers for detail actions
window.triggerScrollToForm = () => {
  scrollToForm();
};

window.triggerBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* =======================================================
   IMAGE GALLERY SLIDER LOGIC
   ======================================================= */
function initGallerySlider(product) {
  const mainImage = document.getElementById('main-slider-image');
  const thumbsContainer = document.getElementById('slider-thumbnails');
  const dotIndicators = document.getElementById('slider-dots');
  let currentIndex = 0;

  // Set initial main image
  mainImage.src = product.images[0].replace('q=80', 'q=70');

  // Render thumbnails
  thumbsContainer.innerHTML = '';
  dotIndicators.innerHTML = '';

  if (product.images.length > 1) {
    product.images.forEach((img, idx) => {
      // Thumbnail
      const thumb = document.createElement('button');
      thumb.className = `w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
        idx === 0 ? 'border-amber-500 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
      }`;
      thumb.innerHTML = `<img src="${img.replace('w=600', 'w=120').replace('q=80', 'q=60')}" alt="thumbnail" class="w-full h-full object-cover" loading="lazy" />`;
      thumb.addEventListener('click', () => selectSlide(idx));
      thumbsContainer.appendChild(thumb);

      // Dot
      const dot = document.createElement('button');
      dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-white w-4' : 'bg-white/50'}`;
      dot.addEventListener('click', () => selectSlide(idx));
      dotIndicators.appendChild(dot);
    });
  } else {
    thumbsContainer.classList.add('hidden');
    dotIndicators.classList.add('hidden');
    document.getElementById('slider-prev-btn')?.classList.add('hidden');
    document.getElementById('slider-next-btn')?.classList.add('hidden');
  }

  function selectSlide(idx) {
    currentIndex = idx;
    // Animate transition briefly using classes
    mainImage.classList.add('opacity-40');
    setTimeout(() => {
      mainImage.src = product.images[currentIndex].replace('q=80', 'q=70');
      mainImage.classList.remove('opacity-40');
    }, 100);

    // Update thumbnails active state
    const thumbs = thumbsContainer.querySelectorAll('button');
    thumbs.forEach((t, i) => {
      if (i === idx) {
        t.classList.add('border-amber-500', 'scale-105', 'shadow-md');
        t.classList.remove('border-transparent', 'opacity-70');
      } else {
        t.classList.remove('border-amber-500', 'scale-105', 'shadow-md');
        t.classList.add('border-transparent', 'opacity-70');
      }
    });

    // Update dots
    const dots = dotIndicators.querySelectorAll('button');
    dots.forEach((d, i) => {
      if (i === idx) {
        d.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-white w-4';
      } else {
        d.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-white/50';
      }
    });
  }

  // Slide controls
  window.triggerPrevSlide = (e) => {
    e.stopPropagation();
    let prevIndex = currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
    selectSlide(prevIndex);
  };

  window.triggerNextSlide = (e) => {
    e.stopPropagation();
    let nextIndex = currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
    selectSlide(nextIndex);
  };

  // Zoom lightbox
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImage = document.getElementById('lightbox-image');

  window.triggerZoomIn = () => {
    lightboxImage.src = product.images[currentIndex];
    lightboxOverlay.classList.remove('hidden', 'opacity-0');
    lightboxOverlay.classList.add('flex');
  };

  window.triggerCloseLightbox = () => {
    lightboxOverlay.classList.add('opacity-0');
    setTimeout(() => {
      lightboxOverlay.classList.add('hidden');
      lightboxOverlay.classList.remove('flex');
    }, 200);
  };

  // Attach click listener to detail page Add to Cart button
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const qtyEl = document.getElementById('order-qty');
      const qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
      addToCart(product.id, qty);
    });
  }
}


/* =======================================================
   FAQ ACCORDION SYSTEM
   ======================================================= */
function initFaqAccordion(product) {
  const faqAccordionContainer = document.getElementById('faq-accordion-container');
  faqAccordionContainer.innerHTML = '';

  product.faqs.forEach((faq, idx) => {
    const item = document.createElement('div');
    const isFirst = idx === 0;
    
    item.className = `bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
      isFirst ? 'border-amber-400 shadow-md ring-1 ring-amber-100' : 'border-gray-100 hover:border-gray-200'
    }`;

    item.innerHTML = `
      <button class="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 font-bold text-gray-800 text-sm md:text-base focus:outline-none transition-colors" data-index="${idx}">
        <span>${faq.question}</span>
        <span class="text-amber-500 transition-transform duration-300 ${isFirst ? 'rotate-180' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>
      <div class="faq-answer-pane transition-all duration-300 ${isFirst ? 'max-h-96 opacity-100 border-t border-dashed border-gray-100 p-4' : 'max-h-0 opacity-0 p-0 overflow-hidden'}">
        <p class="text-xs md:text-sm text-gray-600 leading-relaxed font-normal">${faq.answer}</p>
      </div>
    `;

    const button = item.querySelector('button');
    button.addEventListener('click', () => {
      const answerPane = item.querySelector('.faq-answer-pane');
      const arrow = item.querySelector('span:last-child');
      const isOpen = answerPane.classList.contains('max-h-96');

      // Toggle state
      if (isOpen) {
        answerPane.className = "faq-answer-pane transition-all duration-200 max-h-0 opacity-0 p-0 overflow-hidden";
        arrow.classList.remove('rotate-180');
        item.className = "bg-white rounded-xl border border-gray-100 hover:border-gray-200 overflow-hidden";
      } else {
        answerPane.className = "faq-answer-pane transition-all duration-300 max-h-96 opacity-100 border-t border-dashed border-gray-100 p-4";
        arrow.classList.add('rotate-180');
        item.className = "bg-white rounded-xl border border-amber-400 shadow-md ring-1 ring-amber-100 overflow-hidden";
      }
    });

    faqAccordionContainer.appendChild(item);
  });
}


/* =======================================================
   REVIEWS FEEDBACK SYSTEM
   ======================================================= */
function initReviewsSystem(product) {
  const reviewsList = document.getElementById('reviews-list');
  const reviewAggregateScore = document.getElementById('review-aggregate-score');
  const reviewsCountText = document.getElementById('reviews-count-text');
  const toggleReviewFormBtn = document.getElementById('toggle-review-form-btn');
  const writeReviewForm = document.getElementById('write-review-form');
  const ratingStarsSelector = document.getElementById('rating-stars-selector');
  const actualReviewForm = document.getElementById('review-submission-form');

  let selectedStars = 5;

  // Sync stateful review list (core + localstorage submissions)
  function fetchActiveReviews() {
    const local = getLocalReviews(product.id);
    return [...local, ...product.reviews];
  }

  function renderReviews() {
    const list = fetchActiveReviews();
    reviewsList.innerHTML = '';

    // Calculate score
    const total = list.length;
    const sum = list.reduce((s, r) => s + r.rating, 0);
    const avg = Number((sum / total).toFixed(1));

    reviewAggregateScore.textContent = avg || '5.0';
    reviewsCountText.textContent = `মোট ${total}টি ভেরিফাইড রিভিউ`;

    // Render bars
    const starCounts = [0, 0, 0, 0, 0];
    list.forEach(r => {
      const idx = Math.min(5, Math.max(1, Math.round(r.rating))) - 1;
      starCounts[idx]++;
    });

    for (let stars = 5; stars >= 1; stars--) {
      const bar = document.getElementById(`star-bar-${stars}`);
      const text = document.getElementById(`star-count-${stars}`);
      if (bar && text) {
        const count = starCounts[stars - 1];
        const pct = total > 0 ? (count / total) * 100 : 0;
        bar.style.width = `${pct}%`;
        text.textContent = count;
      }
    }

    // Render list items
    list.forEach(rev => {
      const item = document.createElement('div');
      item.className = "border-b border-gray-100 last:border-b-0 pb-4 last:pb-0 pt-2";
      
      let starsHtml = '';
      for (let s = 1; s <= 5; s++) {
        starsHtml += `
          <svg class="w-2.5 h-2.5 ${s <= rev.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-200'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        `;
      }

      item.innerHTML = `
        <div class="flex justify-between items-start gap-2">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 text-xs md:text-sm flex items-center gap-1.5">
                ${rev.userName}
                ${rev.verified ? `
                  <span class="text-[9px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-1.5 py-0.5 rounded-full flex items-center gap-0.5 font-medium">
                    <svg class="w-2.5 h-2.5 text-emerald-600 fill-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    ভেরিফাইড ক্রেতা
                  </span>
                ` : ''}
              </h4>
              <div class="flex items-center gap-1.5 mt-0.5">
                <div class="flex gap-0.5">${starsHtml}</div>
                <span class="text-[10px] text-gray-400 font-medium">${rev.date}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-2.5 text-xs md:text-sm text-gray-600 leading-relaxed font-normal">${rev.comment}</p>
      `;
      reviewsList.appendChild(item);
    });
  }

  // Form toggle
  toggleReviewFormBtn.addEventListener('click', () => {
    const isHidden = writeReviewForm.classList.contains('hidden');
    if (isHidden) {
      writeReviewForm.classList.remove('hidden');
      toggleReviewFormBtn.textContent = 'রিভিউ বন্ধ করুন';
    } else {
      writeReviewForm.classList.add('hidden');
      toggleReviewFormBtn.textContent = 'রিভিউ দিন';
    }
  });

  // Star selector clicks
  function initStarsSelector() {
    ratingStarsSelector.innerHTML = '';
    for (let s = 1; s <= 5; s++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = "p-1 focus:outline-none transition-transform active:scale-125";
      btn.innerHTML = `
        <svg class="w-6 h-6 ${s <= selectedStars ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      `;
      btn.addEventListener('click', () => {
        selectedStars = s;
        initStarsSelector();
      });
      ratingStarsSelector.appendChild(btn);
    }
  }

  // Handle submit review
  actualReviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('review-author-name');
    const commentInput = document.getElementById('review-comment-text');

    if (!nameInput.value.trim() || !commentInput.value.trim()) return;

    const newRev = {
      id: `rev-user-${Date.now()}`,
      userName: nameInput.value.trim(),
      rating: selectedStars,
      comment: commentInput.value.trim(),
      date: "আজকে",
      verified: true
    };

    saveLocalReview(product.id, newRev);

    // Reset Form
    nameInput.value = '';
    commentInput.value = '';
    selectedStars = 5;
    initStarsSelector();

    // Close form & re-render
    writeReviewForm.classList.add('hidden');
    toggleReviewFormBtn.textContent = 'রিভিউ দিন';
    renderReviews();
  });

  // Init review block
  initStarsSelector();
  renderReviews();
}


/* =======================================================
   CHECKOUT ORDER FORM ENGINE
   ======================================================= */
function initOrderForm(product) {
  const formElement = document.getElementById('checkout-order-form');
  const qtyInput = document.getElementById('order-qty');
  const districtSelect = document.getElementById('order-district');
  const promoInput = document.getElementById('order-promo');
  
  // Invoice UI bindings
  const invoiceSubtotal = document.getElementById('invoice-subtotal');
  const invoiceDelivery = document.getElementById('invoice-delivery');
  const invoiceDiscountRow = document.getElementById('invoice-discount-row');
  const invoiceDiscount = document.getElementById('invoice-discount');
  const invoiceGrandTotal = document.getElementById('invoice-grand-total');

  let currentQty = 1;
  let promoDiscount = 0;

  // Render combo packages dynamically
  const combosList = document.getElementById('combo-packages-list');
  if (combosList && product.combos) {
    const getComboCardClass = (combo, isSelected) => {
      if (combo.popular) {
        if (isSelected) {
          return "combo-option-card flex items-center justify-between bg-gradient-to-r from-amber-950/40 to-zinc-900/50 border-2 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)] rounded-2xl p-4 cursor-pointer transition-all select-none";
        } else {
          return "combo-option-card flex items-center justify-between bg-gradient-to-r from-amber-950/15 to-zinc-900/40 border-2 border-amber-500/50 hover:border-amber-400 rounded-2xl p-4 cursor-pointer transition-all select-none";
        }
      } else {
        if (isSelected) {
          return "combo-option-card flex items-center justify-between bg-zinc-900/45 border-2 border-amber-500 rounded-2xl p-4 cursor-pointer transition-all select-none";
        } else {
          return "combo-option-card flex items-center justify-between bg-zinc-900/40 border border-zinc-700 hover:border-amber-400 rounded-2xl p-4 cursor-pointer transition-all select-none";
        }
      }
    };

    const defaultCombo = product.combos.find(c => c.popular) || product.combos[0];

    combosList.innerHTML = product.combos.map((combo, idx) => {
      const isSelected = combo.id === defaultCombo.id;
      const cardClass = getComboCardClass(combo, isSelected);
      const popularBadgeHTML = combo.popular ? `
        <span class="bg-amber-500 text-black text-[9px] font-black px-2.5 py-0.5 rounded-full ml-1.5 inline-block shadow-md">
          🔥 জনপ্রিয় (Popular Set)
        </span>
      ` : '';
      return `
        <label class="${cardClass}">
          <div class="flex items-center gap-3">
            <input type="radio" name="combo-package" value="${combo.id}" ${isSelected ? 'checked' : ''} class="accent-amber-500 w-4.5 h-4.5 cursor-pointer" />
            <div>
              <div class="flex items-center flex-wrap gap-1">
                <p class="text-xs md:text-sm font-black text-white">${combo.title}</p>
                ${popularBadgeHTML}
              </div>
              <span class="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block">${combo.badge}</span>
            </div>
          </div>
          <span class="text-sm md:text-base font-black text-amber-400 font-mono">৳${combo.price}</span>
        </label>
      `;
    }).join('');
    
    // Set initial qty from default combo
    currentQty = defaultCombo.qty;
    qtyInput.textContent = currentQty;

    // Specific request: Hide quantity row for both toothbrushes in Order Summary
    if (['soft-toothbrush', 'bamboo-soft-toothbrush'].includes(product.id)) {
      const qtyRow = qtyInput.closest('.flex.justify-between.items-center');
      if (qtyRow) {
        qtyRow.classList.add('hidden');
      }
    }

    // Bind change event to combo radios
    const radioInputs = combosList.querySelectorAll('input[name="combo-package"]');
    radioInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        // Reset and apply proper classes based on selection
        const cards = combosList.querySelectorAll('.combo-option-card');
        product.combos.forEach((combo, index) => {
          const card = cards[index];
          const isSelected = combo.id === e.target.value;
          if (card) {
            card.className = getComboCardClass(combo, isSelected);
          }
        });
        
        // Get selected combo
        const selectedCombo = product.combos.find(c => c.id === e.target.value);
        if (selectedCombo) {
          currentQty = selectedCombo.qty;
          qtyInput.textContent = currentQty;
          calculateTotal();
          generateSocialLinks();
        }
      });
    });
  }

  // Payment elements
  const codRadio = formElement.querySelector('input[name="payment-method"][value="cod"]');
  const bkashRadio = formElement.querySelector('input[name="payment-method"][value="bkash"]');
  const bkashFieldsContainer = document.getElementById('bkash-fields-container');
  const bkashSenderInput = document.getElementById('order-bkash-sender');
  const bkashTrxInput = document.getElementById('order-bkash-trx');
  
  const paymentCodLabel = document.getElementById('payment-cod-label');
  const paymentBkashLabel = document.getElementById('payment-bkash-label');

  function updatePaymentMethodUI() {
    const isBkash = bkashRadio && bkashRadio.checked;
    if (isBkash) {
      if (bkashFieldsContainer) bkashFieldsContainer.classList.remove('hidden');
      if (bkashSenderInput) bkashSenderInput.required = true;
      if (bkashTrxInput) bkashTrxInput.required = true;
      
      if (paymentBkashLabel) {
        paymentBkashLabel.className = 'flex items-center gap-3 bg-pink-950/15 border-2 border-pink-500 rounded-2xl p-4 cursor-pointer transition-all select-none';
      }
      if (paymentCodLabel) {
        paymentCodLabel.className = 'flex items-center gap-3 bg-zinc-900/40 border border-zinc-700 rounded-2xl p-4 cursor-pointer transition-all select-none';
      }
    } else {
      if (bkashFieldsContainer) bkashFieldsContainer.classList.add('hidden');
      if (bkashSenderInput) {
        bkashSenderInput.required = false;
        bkashSenderInput.value = '';
      }
      if (bkashTrxInput) {
        bkashTrxInput.required = false;
        bkashTrxInput.value = '';
      }
      
      if (paymentCodLabel) {
        paymentCodLabel.className = 'flex items-center gap-3 bg-zinc-900/45 border-2 border-amber-500 rounded-2xl p-4 cursor-pointer transition-all select-none';
      }
      if (paymentBkashLabel) {
        paymentBkashLabel.className = 'flex items-center gap-3 bg-zinc-900/40 border border-zinc-700 hover:border-pink-500 rounded-2xl p-4 cursor-pointer transition-all select-none';
      }
    }
    calculateTotal();
    generateSocialLinks();
  }

  if (codRadio) codRadio.addEventListener('change', updatePaymentMethodUI);
  if (bkashRadio) bkashRadio.addEventListener('change', updatePaymentMethodUI);

  // Re-calculate math
  function calculateTotal() {
    // Get checked combo price
    let subtotal = product.price * currentQty;
    const activeRadio = formElement.querySelector('input[name="combo-package"]:checked');
    let isFreeDelivery = false;

    if (activeRadio && product.combos) {
      const selectedCombo = product.combos.find(c => c.id === activeRadio.value);
      if (selectedCombo) {
        if (selectedCombo.qty === currentQty) {
          subtotal = selectedCombo.price;
        }
        if (selectedCombo.freeShipping) {
          isFreeDelivery = true;
        }
      }
    }

    // Threshold fallbacks for manual adjustments
    if (!isFreeDelivery) {
      if (product.id === 'soft-toothbrush' && currentQty >= 2) isFreeDelivery = true;
      if (product.id === 'bamboo-soft-toothbrush' && currentQty >= 8) isFreeDelivery = true;
      if (!['soft-toothbrush', 'bamboo-soft-toothbrush'].includes(product.id) && currentQty >= 2) isFreeDelivery = true;
    }

    const isBkashSelected = bkashRadio && bkashRadio.checked;
    let bkashDiscount = 0;
    if (isBkashSelected) {
      bkashDiscount = Math.round(subtotal * 0.10);
    }

    const deliveryCharge = isFreeDelivery ? 0 : 70; // Flat nationwide delivery charge, free for Set 2 & 3!
    const totalDiscount = promoDiscount + bkashDiscount;
    const grandTotal = Math.max(0, subtotal + deliveryCharge - totalDiscount);

    // Update form labels
    invoiceSubtotal.textContent = `৳${subtotal}`;
    invoiceDelivery.textContent = isFreeDelivery ? `৳০ (ফ্রি)` : `৳${deliveryCharge}`;
    
    if (totalDiscount > 0) {
      invoiceDiscountRow.classList.remove('hidden');
      invoiceDiscount.textContent = `- ৳${totalDiscount}`;
    } else {
      invoiceDiscountRow.classList.add('hidden');
    }

    invoiceGrandTotal.textContent = `৳${grandTotal}`;
  }

  // Bind qty buttons
  window.triggerQtyMinus = () => {
    if (currentQty > 1) {
      currentQty--;
      qtyInput.textContent = currentQty;
      
      // Auto-align combo selection radio if qty matches a combo
      if (product.combos) {
        const matchingCombo = product.combos.find(c => c.qty === currentQty);
        if (matchingCombo) {
          const radio = formElement.querySelector(`input[name="combo-package"][value="${matchingCombo.id}"]`);
          if (radio) {
            radio.checked = true;
            // trigger change styling
            const event = new Event('change');
            radio.dispatchEvent(event);
            return;
          }
        }
      }
      
      calculateTotal();
      generateSocialLinks();
    }
  };

  window.triggerQtyPlus = () => {
    currentQty++;
    qtyInput.textContent = currentQty;
    
    // Auto-align combo selection radio if qty matches a combo
    if (product.combos) {
      const matchingCombo = product.combos.find(c => c.qty === currentQty);
      if (matchingCombo) {
        const radio = formElement.querySelector(`input[name="combo-package"][value="${matchingCombo.id}"]`);
        if (radio) {
          radio.checked = true;
          // trigger change styling
          const event = new Event('change');
          radio.dispatchEvent(event);
          return;
        }
      }
    }
    
    calculateTotal();
    generateSocialLinks();
  };

  // Bind promo code validation (optional, safe fallback)
  window.triggerApplyPromo = () => {
    if (!promoInput) return;
    const code = promoInput.value.trim().toUpperCase();
    const promoSuccessLabel = document.getElementById('promo-success-msg');
    const promoErrorLabel = document.getElementById('promo-error-msg');

    if (promoSuccessLabel) promoSuccessLabel.classList.add('hidden');
    if (promoErrorLabel) promoErrorLabel.classList.add('hidden');
    promoDiscount = 0;

    if (!code) return;

    if (code === 'FATAFATI' || code === 'FREE50' || code === 'DISCOUNT50') {
      promoDiscount = 50;
      if (promoSuccessLabel) {
        promoSuccessLabel.textContent = '৳৫০ ডিসকাউন্ট সফলভাবে প্রয়োগ করা হয়েছে!';
        promoSuccessLabel.classList.remove('hidden');
      }
    } else if (code === 'SAVE100' && (product.price * currentQty) >= 1000) {
      promoDiscount = 100;
      if (promoSuccessLabel) {
        promoSuccessLabel.textContent = '৳১০০ ডিসকাউন্ট সফলভাবে প্রয়োগ করা হয়েছে!';
        promoSuccessLabel.classList.remove('hidden');
      }
    } else {
      if (promoErrorLabel) {
        promoErrorLabel.textContent = 'অকার্যকর বা মেয়াদোত্তীর্ণ প্রোমো কোড!';
        promoErrorLabel.classList.remove('hidden');
      }
    }

    calculateTotal();
    generateSocialLinks();
  };

  // Build links for WhatsApp & Call
  function generateSocialLinks() {
    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const address = document.getElementById('order-address').value.trim();
    const delivery = 'সারা বাংলাদেশ কুরিয়ার হোম ডেলিভারি';
    const finalPrice = invoiceGrandTotal.textContent;
    const isBkashSelected = bkashRadio && bkashRadio.checked;
    const payLabel = isBkashSelected ? 'বিকাশ অগ্রিম পেমেন্ট (১০% ডিসকাউন্ট সহ)' : 'ক্যাশ অন ডেলিভারি (COD)';

    const message = `হ্যালো! আমি "${product.title}" অর্ডার করতে চাই।\n` +
      `পরিমাণ: ${currentQty} পিস\n` +
      `ডেলিভারি এলাকা: ${delivery}\n` +
      `পেমেন্ট পদ্ধতি: ${payLabel}\n` +
      `মোট মূল্য: ${finalPrice}\n` +
      `আমার নাম: ${name || '(নাম লিখুন)'}\n` +
      `মোবাইল: ${phone || '(নম্বর লিখুন)'}\n` +
      `ঠিকানা: ${address || '(ঠিকানা লিখুন)'}`;

    const waBtn = document.getElementById('whatsapp-order-btn');
    if (waBtn) {
      waBtn.href = `https://wa.me/8801315779093?text=${encodeURIComponent(message)}`;
    }
  }

  // Event listeners on form inputs to update WhatsApp text dynamically
  ['order-name', 'order-phone', 'order-address'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', generateSocialLinks);
  });

  // Form Submission
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const address = document.getElementById('order-address').value.trim();

    if (!name || !phone || !address) return;

    // Check payment method
    const paymentMethod = formElement.querySelector('input[name="payment-method"]:checked')?.value || 'cod';
    const bkashSender = bkashSenderInput ? bkashSenderInput.value.trim() : '';
    const bkashTrx = bkashTrxInput ? bkashTrxInput.value.trim() : '';

    if (paymentMethod === 'bkash' && (!bkashSender || !bkashTrx)) {
      alert('অনুগ্রহ করে আপনার বিকাশ নম্বর এবং ট্রানজেকশন আইডি প্রবেশ করান।');
      return;
    }

    const submitBtn = document.getElementById('confirm-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'অর্ডার প্রসেস হচ্ছে...';

    const activeRadio = formElement.querySelector('input[name="combo-package"]:checked');
    const isFreeDelivery = activeRadio && (activeRadio.value === 'combo-2' || activeRadio.value === 'combo-3');
    const deliveryVal = isFreeDelivery ? 0 : 70;
    const deliveryLabel = isFreeDelivery ? 'সারা বাংলাদেশ কুরিয়ার হোম ডেলিভারি (ফ্রি)' : 'সারা বাংলাদেশ কুরিয়ার হোম ডেলিভারি';
    const trackingId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const grandTotalVal = invoiceGrandTotal.textContent;

    const promoCodeVal = promoInput ? promoInput.value.trim() : 'N/A';

    // Calculate product total subtotal
    let subtotal = product.price * currentQty;
    if (activeRadio && product.combos) {
      const selectedCombo = product.combos.find(c => c.id === activeRadio.value);
      if (selectedCombo && selectedCombo.qty === currentQty) {
        subtotal = selectedCombo.price;
      }
    }

    const unitPriceVal = `৳${Math.round(subtotal / currentQty)}`;
    const tracking = getOrderTrackingData();
    const orderDateObj = new Date();
    const formattedOrderDate = orderDateObj.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    const deliveryDateObj = new Date(orderDateObj.getTime() + 3 * 24 * 60 * 60 * 1000);
    const formattedDeliveryDate = deliveryDateObj.toLocaleDateString("en-US", { timeZone: "Asia/Dhaka", year: 'numeric', month: 'long', day: 'numeric' });
    const paymentStatusVal = paymentMethod === 'bkash' ? 'bKash (Pending Verification)' : 'COD - Pending';

    let selectedComboTitle = `${currentQty} পিস`;
    if (activeRadio && product.combos) {
      const selectedCombo = product.combos.find(c => c.id === activeRadio.value);
      if (selectedCombo) {
        selectedComboTitle = selectedCombo.title;
      }
    }

    // Optional: Send order data to Google Sheets Web App if configured
    let sheetPromise = Promise.resolve();
    if (CONFIG.GOOGLE_SHEET_WEB_APP_URL) {
      const orderData = {
        "আপনার নাম লিখুন *": name,
        "আপনার মোবাইল নাম্বার *": phone,
        "আপনার সম্পূর্ণ ঠিকানা দিন *": address,
        "পণ্য বা প্যাকেজ নির্বাচন করুন *": selectedComboTitle,
        "পেমেন্ট মেথড নির্বাচন করুন *": paymentMethod === 'bkash' ? `bKash (বিকাশ) - নম্বর: ${bkashSender}, TrxID: ${bkashTrx}` : 'ক্যাশ অন ডেলিভারি (Cash on Delivery)',
        "What product are you ordering and what is its name?": product.title || product.banglaTitle,
        "Total, how much money?": grandTotalVal
      };

      sheetPromise = fetch(CONFIG.GOOGLE_SHEET_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors', // Avoids preflight CORS issues in some browsers
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify(orderData)
      }).catch(err => console.error("Error logging order to Google Sheet:", err));
    }

    // Process checkout and complete order
    setTimeout(() => {
      sheetPromise.finally(() => {
        // Save order details to localStorage for the professional thank-you page
        const lastOrder = {
          trackingId: trackingId,
          date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
          customerName: name,
          customerPhone: phone,
          customerAddress: address,
          productTitle: product.banglaTitle || product.title,
          productPrice: subtotal,
          qty: currentQty,
          deliveryCharge: deliveryVal,
          deliveryLabel: deliveryLabel,
          grandTotal: grandTotalVal,
          paymentMethod: paymentMethod,
          bkashSender: bkashSender,
          bkashTrx: bkashTrx
        };
        localStorage.setItem('lastOrder', JSON.stringify(lastOrder));

        // Update cart count persistency
        incrementCartCountBy(currentQty);

        // Redirect to professional Thank You page
        window.location.href = 'thank-you.html';
      });
    }, 1200);
  });

  // Run initial calculations
  calculateTotal();
  generateSocialLinks();
}


/* =======================================================
   UNIVERSAL CART & DRAWER ENGINE (ZUNO MART BD)
   ======================================================= */
function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem('fatafati_cart') || '[]');
    let changed = false;
    cart.forEach(item => {
      if (item.id === 'bamboo-soft-toothbrush' && item.quantity < 2) {
        item.quantity = 2;
        changed = true;
      }
    });
    if (changed) {
      localStorage.setItem('fatafati_cart', JSON.stringify(cart));
    }
    return cart;
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('fatafati_cart', JSON.stringify(cart));
  
  // Calculate total quantity of items
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  localStorage.setItem('fatafati_orders_count', totalQty.toString());
  
  // Update badges
  const cartBadges = document.querySelectorAll('.cart-count-badge');
  cartBadges.forEach(badge => {
    if (totalQty > 0) {
      badge.textContent = totalQty;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
  
  // Render Cart inside Drawer if open
  renderCartDrawer();
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  let addQty = qty;
  if (productId === 'bamboo-soft-toothbrush' && qty === 1) {
    addQty = 4; // Pre-select the popular bundle of 4 pieces (1 set)
  }
  if (existing) {
    existing.quantity += addQty;
  } else {
    cart.push({ id: productId, quantity: addQty });
  }
  saveCart(cart);
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += delta;
    if (existing.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

// Append Cart Drawer HTML to body dynamically on load
function injectCartDrawerHTML() {
  if (document.getElementById('cart-drawer-overlay')) return; // already injected
  
  const drawerHTML = `
    <!-- Cart Drawer Overlay -->
    <div id="cart-drawer-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 opacity-0 pointer-events-none"></div>
    
    <!-- Cart Drawer Panel -->
    <div id="cart-drawer-panel" class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col justify-between transform translate-x-full transition-transform duration-300 border-l border-gray-100">
      <!-- Header -->
      <div class="p-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-[#0b6275] to-[#074857] text-white">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <h3 class="font-bold text-base md:text-lg">শপিং কার্ট</h3>
        </div>
        <button id="close-cart-btn" class="p-1 rounded-lg hover:bg-white/15 transition-all text-white cursor-pointer active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <!-- Scrollable body -->
      <div id="cart-drawer-body" class="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar">
        <!-- Empty State -->
        <div id="cart-empty-state" class="hidden flex flex-col items-center justify-center py-20 text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-[#0b6275]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>
          <div>
            <h4 class="font-bold text-gray-800 text-sm md:text-base">আপনার কার্ট খালি আছে</h4>
            <p class="text-xs text-gray-500 mt-1">প্রয়োজনীয় প্রোডাক্ট কার্টে যোগ করুন।</p>
          </div>
          <button id="cart-continue-shopping" class="bg-[#0b6275] hover:bg-[#074857] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer">শপিং করুন</button>
        </div>

        <!-- Items container -->
        <div id="cart-items-list" class="space-y-3"></div>

        <!-- Checkout Form inside drawer -->
        <div id="cart-checkout-form-container" class="border-t border-dashed border-gray-200 pt-4 mt-4">
          <h4 class="font-bold text-gray-900 text-xs md:text-sm border-b border-gray-100 pb-2 mb-3 flex items-center gap-2">
            <span>📝 ক্যাশ অন ডেলিভারি অর্ডার ফর্ম</span>
          </h4>
          <form id="cart-checkout-form" class="space-y-3">
            <div class="space-y-1">
              <label class="block text-xs font-bold text-gray-700">আপনার নাম <span class="text-red-500">*</span></label>
              <input type="text" id="cart-order-name" required placeholder="যেমন: মোঃ রফিক" class="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-900 focus:outline-none focus:border-[#0b6275] focus:bg-white transition-all font-medium" />
            </div>
            <div class="space-y-1">
              <label class="block text-xs font-bold text-gray-700">মোবাইল নম্বর <span class="text-red-500">*</span></label>
              <input type="tel" id="cart-order-phone" required placeholder="যেমন: 01xxxxxxxxx" class="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm text-gray-900 focus:outline-none focus:border-[#0b6275] focus:bg-white transition-all font-mono font-bold" />
            </div>
            <div class="space-y-1">
              <label class="block text-xs font-bold text-gray-700">সম্পূর্ণ ঠিকানা <span class="text-red-500">*</span></label>
              <textarea id="cart-order-address" required rows="2" placeholder="যেমন: গ্রাম, ডাকঘর, থানা, জেলা" class="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2 text-xs md:text-sm text-gray-900 focus:outline-none focus:border-[#0b6275] focus:bg-white transition-all font-medium resize-none"></textarea>
            </div>
            <!-- District selection -->
            <div class="space-y-1">
              <label class="block text-xs font-bold text-gray-700">ডেলিভারি এলাকা নির্বাচন করুন <span class="text-red-500">*</span></label>
              <select id="cart-order-district" class="w-full bg-slate-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs md:text-sm text-gray-900 font-bold cursor-pointer focus:outline-none focus:border-[#0b6275] transition-all">
                <option value="bangladesh-courier" selected>সারা বাংলাদেশ কুরিয়ার হোম ডেলিভারি</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <!-- Footer calculations & Button -->
      <div id="cart-drawer-footer" class="p-4 border-t border-gray-100 bg-gray-50/50 space-y-3.5">
        <div class="space-y-2 text-xs md:text-sm border-b border-gray-100 pb-3">
          <div class="flex justify-between text-gray-600 font-medium">
            <span>সাব-টোটাল (Subtotal):</span>
            <span id="cart-subtotal" class="font-bold text-gray-800">৳০</span>
          </div>
          <div class="flex justify-between text-gray-600 font-medium">
            <span>ডেলিভারি চার্জ:</span>
            <span id="cart-delivery" class="font-bold text-gray-800">৳০</span>
          </div>
          <div class="flex justify-between text-[#0b6275] font-black text-sm md:text-base pt-1">
            <span>সর্বমোট মূল্য:</span>
            <span id="cart-grand-total" class="font-black text-lg text-[#0b6275]">৳০</span>
          </div>
        </div>

        <button id="cart-submit-order-btn" class="w-full bg-[#0b6275] hover:bg-[#074857] text-white font-black text-xs md:text-sm py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer select-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
          <span>অর্ডার কনফার্ম করুন</span>
        </button>
      </div>
    </div>
  `;
  
  const div = document.createElement('div');
  div.innerHTML = drawerHTML;
  document.body.appendChild(div);
  
  // Attach Close listeners
  document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-drawer-overlay').addEventListener('click', closeCartDrawer);
  document.getElementById('cart-continue-shopping').addEventListener('click', closeCartDrawer);
  
  // Attach district update listener to update total
  document.getElementById('cart-order-district').addEventListener('change', () => {
    calculateAndRenderTotals();
  });
  
  // Attach Submit Order listener
  document.getElementById('cart-submit-order-btn').addEventListener('click', submitCartOrder);
}

function openCartDrawer() {
  injectCartDrawerHTML();
  
  const overlay = document.getElementById('cart-drawer-overlay');
  const panel = document.getElementById('cart-drawer-panel');
  
  overlay.classList.remove('pointer-events-none', 'opacity-0');
  overlay.classList.add('opacity-100');
  
  panel.classList.remove('translate-x-full');
  panel.classList.add('translate-x-0');
  
  renderCartDrawer();
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const panel = document.getElementById('cart-drawer-panel');
  
  if (overlay && panel) {
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
    
    panel.classList.add('translate-x-full');
    panel.classList.remove('translate-x-0');
  }
}

function renderCartDrawer() {
  injectCartDrawerHTML();
  
  const cart = getCart();
  const emptyState = document.getElementById('cart-empty-state');
  const itemsList = document.getElementById('cart-items-list');
  const checkoutContainer = document.getElementById('cart-checkout-form-container');
  const footer = document.getElementById('cart-drawer-footer');
  
  if (cart.length === 0) {
    emptyState.classList.remove('hidden');
    itemsList.innerHTML = '';
    checkoutContainer.classList.add('hidden');
    footer.classList.add('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');
  checkoutContainer.classList.remove('hidden');
  footer.classList.remove('hidden');
  
  // Render list of items
  itemsList.innerHTML = '';
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    
    // Check if the current selected package is popular
    let isCurrentPopular = false;
    if (product.combos) {
      const currentCombo = product.combos.find(c => c.qty === item.quantity);
      if (currentCombo && currentCombo.popular) {
        isCurrentPopular = true;
      }
    }
    
    const div = document.createElement('div');
    if (isCurrentPopular) {
      div.className = "bg-amber-50/50 p-3.5 rounded-2xl border-2 border-amber-400 flex flex-col gap-2.5 shadow-2xs relative overflow-hidden transition-all";
    } else {
      div.className = "bg-slate-50 p-3.5 rounded-2xl border border-gray-100 flex flex-col gap-2.5 relative overflow-hidden transition-all";
    }
    
    // Find current price for this item based on combo matching
    let currentItemPrice = product.price * item.quantity;
    let priceBreakdownText = `৳${product.price} × ${item.quantity}`;
    if (product.combos) {
      const matchedCombo = product.combos.find(c => c.qty === item.quantity);
      if (matchedCombo) {
        currentItemPrice = matchedCombo.price;
        priceBreakdownText = `${matchedCombo.title}`;
      }
    }

    let comboSelectHTML = '';
    if (product.combos) {
      comboSelectHTML = `
        <div class="mt-1 border-t border-gray-100 pt-2.5">
          <label class="block text-[10px] font-bold text-gray-400 mb-1">📦 প্যাকেজ বা পরিমাণ নির্বাচন করুন:</label>
          <select onchange="changeCartItemPackage('${product.id}', this.value)" class="w-full bg-white border border-gray-200 rounded-xl px-2 py-1.5 text-[11px] font-bold text-gray-800 cursor-pointer focus:outline-none focus:border-[#0b6275] transition-all">
            ${product.combos.map(combo => {
              const isSelected = item.quantity === combo.qty;
              const popularText = combo.popular ? ' ⭐ জনপ্রিয় সেট' : '';
              return `<option value="${combo.qty}" ${isSelected ? 'selected' : ''}>${combo.title} - ৳${combo.price}${popularText}</option>`;
            }).join('')}
          </select>
        </div>
      `;
    }

    const hideQtyControls = ['soft-toothbrush', 'bamboo-soft-toothbrush'].includes(product.id);
    const popularCartBadgeHTML = isCurrentPopular ? `
      <div class="absolute top-0 right-0 bg-amber-500 text-black text-[8px] font-black px-2 py-0.5 rounded-bl-xl shadow-xs uppercase tracking-wider animate-pulse z-10">
        🔥 জনপ্রিয় অফার
      </div>
    ` : '';

    div.innerHTML = `
      ${popularCartBadgeHTML}
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <img src="${product.images[0].replace('w=600', 'w=120').replace('q=80', 'q=60')}" alt="${product.banglaTitle || product.title}" class="w-12 h-12 rounded-xl object-cover border border-gray-100 shadow-2xs" />
          <div>
            <h5 class="font-bold text-gray-800 text-xs md:text-sm line-clamp-1">${product.banglaTitle || product.title}</h5>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="text-[#0b6275] font-black text-xs md:text-sm">৳${currentItemPrice}</span>
              <span class="text-[10px] text-gray-400 font-medium">(${priceBreakdownText})</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <!-- Quantity controls -->
          <div class="flex items-center bg-white border border-gray-200 rounded-xl px-2 py-1 gap-2.5 shadow-2xs ${hideQtyControls ? 'hidden' : ''}">
            <button onclick="updateCartQty('${product.id}', -1)" class="w-5 h-5 rounded-md flex items-center justify-center text-gray-500 hover:bg-slate-100 transition-all cursor-pointer font-bold text-xs">-</button>
            <span class="font-bold text-xs text-gray-800 min-w-[12px] text-center font-mono">${item.quantity}</span>
            <button onclick="updateCartQty('${product.id}', 1)" class="w-5 h-5 rounded-md flex items-center justify-center text-gray-500 hover:bg-slate-100 transition-all cursor-pointer font-bold text-xs">+</button>
          </div>
          <!-- Delete button -->
          <button onclick="removeFromCart('${product.id}')" class="p-1.5 text-red-500 hover:bg-red-50 rounded-xl transition-all cursor-pointer active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      </div>
      ${comboSelectHTML}
    `;
    itemsList.appendChild(div);
  });
  
  calculateAndRenderTotals();
}

function calculateAndRenderTotals() {
  const cart = getCart();
  let subtotal = 0;
  let freeDelivery = false;

  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return;

    let itemPrice = p.price * item.quantity;
    let itemIsFree = false;

    if (p.combos) {
      const matchedCombo = p.combos.find(c => c.qty === item.quantity);
      if (matchedCombo) {
        itemPrice = matchedCombo.price;
        if (matchedCombo.freeShipping) itemIsFree = true;
      }
    }

    // Specific product thresholds for free delivery
    if (p.id === 'soft-toothbrush' && item.quantity >= 2) itemIsFree = true;
    if (p.id === 'bamboo-soft-toothbrush' && item.quantity >= 8) itemIsFree = true;
    
    // Generic fallback for other items if quantity >= 2
    if (!['soft-toothbrush', 'bamboo-soft-toothbrush'].includes(p.id) && item.quantity >= 2) {
      itemIsFree = true;
    }

    subtotal += itemPrice;
    if (itemIsFree) freeDelivery = true;
  });
  
  const deliveryCharge = freeDelivery ? 0 : 70;
  const grandTotal = subtotal + deliveryCharge;
  
  document.getElementById('cart-subtotal').textContent = `৳${subtotal}`;
  document.getElementById('cart-delivery').textContent = freeDelivery ? `৳০ (ফ্রি)` : `৳${deliveryCharge}`;
  document.getElementById('cart-grand-total').textContent = `৳${grandTotal}`;
}

function changeCartItemPackage(productId, qty) {
  if (qty === 'custom') return;
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity = parseInt(qty, 10);
    saveCart(cart);
  }
}

function submitCartOrder(e) {
  if (e) e.preventDefault();
  
  const nameInput = document.getElementById('cart-order-name');
  const phoneInput = document.getElementById('cart-order-phone');
  const addressInput = document.getElementById('cart-order-address');
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();
  
  if (!name || !phone || !address) {
    document.getElementById('cart-checkout-form').reportValidity();
    return;
  }
  
  const submitBtn = document.getElementById('cart-submit-order-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'অর্ডার প্রসেস হচ্ছে...';
  
  const cart = getCart();
  let subtotal = 0;
  let freeDelivery = false;

  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return;

    if (p.combos) {
      const matchedCombo = p.combos.find(c => c.qty === item.quantity);
      if (matchedCombo) {
        subtotal += matchedCombo.price;
        if (matchedCombo.id === 'combo-2' || matchedCombo.id === 'combo-3' || matchedCombo.qty >= 2) {
          freeDelivery = true;
        }
      } else {
        subtotal += p.price * item.quantity;
        if (item.quantity >= 2) {
          freeDelivery = true;
        }
      }
    } else {
      subtotal += p.price * item.quantity;
      if (item.quantity >= 2) {
        freeDelivery = true;
      }
    }
  });
  
  const deliveryVal = freeDelivery ? 0 : 70;
  const deliveryLabel = freeDelivery ? 'সারা বাংলাদেশ কুরিয়ার হোম ডেলিভারি (ফ্রি)' : 'সারা বাংলাদেশ কুরিয়ার হোম ডেলিভারি';
  const trackingId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  const grandTotalVal = `৳${subtotal + deliveryVal}`;
  
  // Format ordered products list for WhatsApp and local receipt
  const productNames = cart.map(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return '';
    let itemPrice = p.price * item.quantity;
    if (p.combos) {
      const matchedCombo = p.combos.find(c => c.qty === item.quantity);
      if (matchedCombo) itemPrice = matchedCombo.price;
    }
    return `${p.banglaTitle || p.title} (${item.quantity} পিস - ৳${itemPrice})`;
  }).filter(Boolean).join(', ');
  
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const unitPriceVal = `৳${Math.round(subtotal / totalQty)}`;
  const tracking = getOrderTrackingData();
  const orderDateObj = new Date();
  const formattedOrderDate = orderDateObj.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
  const deliveryDateObj = new Date(orderDateObj.getTime() + 3 * 24 * 60 * 60 * 1000);
  const formattedDeliveryDate = deliveryDateObj.toLocaleDateString("en-US", { timeZone: "Asia/Dhaka", year: 'numeric', month: 'long', day: 'numeric' });

  const selectedPackages = cart.map(item => {
    const p = products.find(prod => prod.id === item.id);
    if (!p) return '';
    let comboTitle = `${item.quantity} পিস`;
    if (p.combos) {
      const matchedCombo = p.combos.find(c => c.qty === item.quantity);
      if (matchedCombo) comboTitle = matchedCombo.title;
    }
    return comboTitle;
  }).filter(Boolean).join(', ');

  const mainProductNames = cart.map(item => {
    const p = products.find(prod => prod.id === item.id);
    return p ? (p.title || p.banglaTitle) : '';
  }).filter(Boolean).join(', ');

  // Optional: Send order data to Google Sheets Web App if configured
  let sheetPromise = Promise.resolve();
  if (CONFIG.GOOGLE_SHEET_WEB_APP_URL) {
    const orderData = {
      "আপনার নাম লিখুন *": name,
      "আপনার মোবাইল নাম্বার *": phone,
      "আপনার সম্পূর্ণ ঠিকানা দিন *": address,
      "পণ্য বা প্যাকেজ নির্বাচন করুন *": selectedPackages,
      "পেমেন্ট মেথড নির্বাচন করুন *": "ক্যাশ অন ডেলিভারি (Cash on Delivery)",
      "What product are you ordering and what is its name?": mainProductNames,
      "Total, how much money?": grandTotalVal
    };

    sheetPromise = fetch(CONFIG.GOOGLE_SHEET_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(orderData)
    }).catch(err => console.error("Error logging order to Google Sheet:", err));
  }
  
  setTimeout(() => {
    sheetPromise.finally(() => {
      // Save last order to localStorage for receipt rendering
      const lastOrder = {
        trackingId: trackingId,
        date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
        customerName: name,
        customerPhone: phone,
        customerAddress: address,
        productTitle: productNames,
        productPrice: subtotal,
        qty: totalQty,
        deliveryCharge: deliveryVal,
        deliveryLabel: deliveryLabel,
        grandTotal: grandTotalVal
      };
      localStorage.setItem('lastOrder', JSON.stringify(lastOrder));
      
      // Clear cart
      localStorage.setItem('fatafati_cart', '[]');
      localStorage.setItem('fatafati_orders_count', '0');
      
      // Redirect to thank-you.html
      window.location.href = 'thank-you.html';
    });
  }, 1200);
}

// Export functions to global window context so inline onclick functions work seamlessly
window.addToCart = addToCart;
window.getCart = getCart;
window.saveCart = saveCart;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.renderCartDrawer = renderCartDrawer;
window.changeCartItemPackage = changeCartItemPackage;
window.calculateAndRenderTotals = calculateAndRenderTotals;
window.submitCartOrder = submitCartOrder;
