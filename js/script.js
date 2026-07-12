/**
 * Fatafati Deal — Premium static ecommerce checkout system
 * Built for cPanel/shared hosting (no Node.js/React required)
 */

// Global Products Data
const products = [
  {
    id: 'soft-toothbrush',
    title: "World's Softest Toothbrush (4pc Set)",
    banglaTitle: "ওয়ার্ল্ডস সফটেস্ট টুথব্রাশ (৪ পিস সেট)",
    subtitle: "দাঁত ও মাড়ির সুরক্ষায় ১০০% কার্যকরী আল্ট্রা ফাইন মাইক্রো ন্যানো টুথব্রাশ",
    price: 600,
    originalPrice: 1200,
    discountBadge: "৫০% ছাড়",
    soldCount: "১২৪০ জন কিনেছেন",
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80"
    ],
    features: [
      "১২,০০০ এর বেশি আল্ট্রা ফাইন মাইক্রো-ন্যানো ব্রিসলস যা দাঁতের প্রতিটি কোণ পরিষ্কার করে।",
      "একদম নরম এবং আরামদায়ক, কোনো প্রকার রক্তক্ষরণ বা ব্যথার সম্ভাবনা নেই।",
      "যেকোনো বয়সের মানুষের জন্য এবং সেনসিটিভ দাঁত ও মাড়ির জন্য অত্যন্ত কার্যকরী।",
      "৪টি ভিন্ন রঙের আকর্ষণীয় জিপার প্যাকেজ যা সহজে বহনযোগ্য।"
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
    id: 'herbal-shampoo',
    title: "Chinese Herbal Hair Regrowth Shampoo (200ml)",
    banglaTitle: "চাইনিজ হারবাল হেয়ার রিগ্রোথ শ্যাম্পু",
    subtitle: "চুল পড়া বন্ধ করতে এবং নতুন চুল গজাতে জাদুকরী হারবাল শ্যাম্পু",
    price: 790,
    originalPrice: 1500,
    discountBadge: "৪৭% ছাড়",
    soldCount: "৯৫০ জন কিনেছেন",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&auto=format&fit=crop&q=80"
    ],
    features: [
      "মাত্র ৭ থেকে ১৪ দিনে চুল পড়া ৮০% পর্যন্ত কমিয়ে আনে।",
      "মাথার ত্বকের রক্ত সঞ্চালন বৃদ্ধি করে নতুন চুল গজাতে সাহায্য করে।",
      "চুলকে গোড়া থেকে মজবুত, সিল্কি ও উজ্জ্বল করে তোলে।",
      "সম্পূর্ণ প্রাকৃতিক ভেষজ উপাদান দিয়ে তৈরি, কোনো ক্ষতিকর কেমিক্যাল নেই।"
    ],
    longBenefitsTitle: "কেন আমাদের চাইনিজ হারবাল শ্যাম্পু সেরা?",
    longBenefits: [
      "আদা, জিনসেং এবং প্রাকৃতিক ভেষজ নির্যাস সমৃদ্ধ ফর্মুলা।",
      "খুশকি সম্পূর্ণ দূর করে এবং মাথার স্ক্যাল্প চুলকানি মুক্ত রাখে।",
      "চুলের অকালপক্বতা (পেকে যাওয়া) রোধ করে এবং চুল কালো রাখে।",
      "নারী ও পুরুষ উভয়ের ব্যবহারের জন্য উপযোগী।"
    ],
    description: "চুল পড়া নিয়ে দুশ্চিন্তার দিন শেষ! আমাদের চাইনিজ হারবাল শ্যাম্পুটি জিনসেং, আদা এবং বিভিন্ন প্রাচীন চীনা ভেষজ উপাদানের সংমিশ্রণে তৈরি। এটি স্ক্যাল্পের গভীরে পুষ্টি জোগায়, হেয়ার ফলিকল সক্রিয় করে এবং প্রাকৃতিকভাবে নতুন চুল গজাতে সাহায্য করে। রাসায়নিক উপাদানের পরিবর্তে সম্পূর্ণ ভেষজ হওয়ায় এটি চুলের জন্য সম্পূর্ণ নিরাপদ।",
    specs: [
      { label: "পরিমাণ", value: "২০০ মিলি" },
      { label: "মূল উপাদান", value: "জিনসেং নির্যাস, আদা, ভেষজ তেল" },
      { label: "ব্যবহারের নিয়ম", value: "সপ্তাহে ৩ দিন ভেজা চুলে ম্যাসাজ করে ধুয়ে ফেলুন" },
      { label: "উৎপাদনকারী দেশ", value: "চীন" }
    ],
    faqs: [
      {
        question: "এটি কি নতুন চুল গজাতে সাহায্য করে?",
        answer: "হ্যাঁ, এর সক্রিয় জিনসেং নির্যাস মৃতপ্রায় হেয়ার ফলিকলকে পুনরুজ্জীবিত করে নতুন চুল গজাতে দারুণ সাহায্য করে।"
      },
      {
        question: "সাইড ইফেক্ট আছে কি?",
        answer: "না, এটি সম্পূর্ণ প্রাকৃতিক উপাদান দিয়ে তৈরি এবং ক্ষতিকর কেমিক্যালমুক্ত হওয়ায় কোনো প্রকার পার্শ্বপ্রতিক্রিয়া নেই।"
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        userName: "সাকিব হাসান",
        rating: 5,
        date: "০৮ জুলাই, ২০২৬",
        comment: "১ সপ্তাহ ব্যবহার করে রিভিউ দিচ্ছি। চুল পড়া অনেক কমে গেছে আর মাথা ঠাণ্ডা থাকে। শ্যাম্পুটার স্মেল খুব সুন্দর ভেষজ টাইপের।",
        verified: true
      },
      {
        id: 'rev-4',
        userName: "তাসমিয়া হক",
        rating: 4,
        date: "০২ জুলাই, ২০২৬",
        comment: "ভালো প্রোডাক্ট। চুল সফ্ট আর শাইনি হয়েছে। ডেলিভারিও খুব ফাস্ট ছিল।",
        verified: true
      }
    ]
  },
  {
    id: 'teeth-whitener',
    title: "Teeth Stain Eraser Whitening Gel",
    banglaTitle: "টিথ স্টেইন ইরেজার হোয়াইটেনিং জেল",
    subtitle: "দাঁতের হলদে ভাব, নিকোটিন ও পানের জেদি দাগ দূর করার সহজ উপায়",
    price: 490,
    originalPrice: 990,
    discountBadge: "৫১% ছাড়",
    soldCount: "৮১০ জন কিনেছেন",
    images: [
      "https://images.unsplash.com/photo-1473232117216-c950d4ef2e14?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=80"
    ],
    features: [
      "দাঁতের চা, কফি, সিগারেট বা পানের জেদি দাগ সহজে দূর করে।",
      "মুখের দুর্গন্ধ দূর করে দীর্ঘ সময় সতেজ নিঃশ্বাস নিশ্চিত করে।",
      "দাঁতের এনামেলের ক্ষতি না করে প্রাকৃতিকভাবে উজ্জ্বলতা ফিরিয়ে আনে।",
      "ব্যবহার করা অত্যন্ত সহজ এবং প্রথম ব্যবহারেই পরিবর্তন চোখে পড়ে।"
    ],
    longBenefitsTitle: "কেন এটি আপনার দাঁতের যত্নে অপরিহার্য?",
    longBenefits: [
      "অ্যাক্টিভেটেড চারকোল এবং প্রাকৃতিক এনজাইম সমৃদ্ধ ফর্মুলা।",
      "দাঁতের ক্যাভিটি এবং প্লাক জমতে বাধা প্রদান করে।",
      "ডেন্টিস্টদের দ্বারা পরীক্ষিত এবং সম্পূর্ণ নিরাপদ ঘরোয়া ট্রিটমেন্ট।",
      "দাঁত শিরশিরানি বা সেনসিটিভ দাঁতের জন্যও কোনো ক্ষতি করে না।"
    ],
    description: "দাঁতের জেদি হলদে দাগের কারণে প্রাণখুলে হাসতে পারছেন না? আমাদের টিথ স্টেইন ইরেজার জেলটি মাত্র কয়েক সেকেন্ডে দাঁতের ময়লা ও দাগ গলিয়ে দেয়। এটি দাঁতের এনামেল রক্ষা করে এবং মাত্র কয়েকদিন ব্যবহারে মুক্তার মতো ঝকঝকে সাদা হাসি ফিরিয়ে আনে। আত্মবিশ্বাসী হাসির জন্য আজই অর্ডার করুন!",
    specs: [
      { label: "নেট ওজন", value: "৫০ গ্রাম" },
      { label: "মূল বৈশিষ্ট্য", value: "ইনস্ট্যান্ট স্টেইন রিমুভাল ও হোয়াইটেনিং" },
      { label: "ব্যবহারের নিয়ম", value: "ব্রাশে সামান্য জেল নিয়ে ২ মিনিট হালকা ব্রাশ করুন" }
    ],
    faqs: [
      {
        question: "এটি কি দাঁতের ক্ষতি করে?",
        answer: "একেবারেই না। এটি নন-অ্যাব্রেসিভ ফর্মুলায় তৈরি যা এনামেল সুরক্ষিত রেখে শুধুমাত্র বাহ্যিক দাগ দূর করে।"
      },
      {
        question: "কত দিন ব্যবহার করতে হবে?",
        answer: "প্রথম দিনেই চমৎকার ফল পাবেন। কাঙ্ক্ষিত শুভ্রতা পেতে সপ্তাহে ৩-৪ দিন নিয়মিত ব্যবহার করুন।"
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        userName: "মোঃ রফিকুল ইসলাম",
        rating: 5,
        date: "০৯ জুলাই, ২০২৬",
        comment: "আমি প্রচুর চা খাই বলে দাঁতে কালচে দাগ পড়েছিল। এই জেলটা চমৎকার কাজ করেছে! দাগ একদম পরিষ্কার হয়ে গেছে। থ্যাংক ইউ!",
        verified: true
      }
    ]
  },
  {
    id: 'hismile-v34',
    title: "Hismile V34 Colour Corrector Serum",
    banglaTitle: "হাইস্মাইল V34 কালার কারেক্টর সিরাম",
    subtitle: "দাঁতের হলুদ আভা দূর করার জনপ্রিয় পার্পল টেকনোলজি সিরাম",
    price: 790,
    originalPrice: 1500,
    discountBadge: "৪৭% ছাড়",
    soldCount: "১৬২০ জন কিনেছেন",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80"
    ],
    features: [
      "পার্পল কালার কারেক্টিং টেকনোলজি যা দাঁতের হলুদ টোনকে ইনস্ট্যান্ট প্রশমিত করে।",
      "একটি নন-ইনভেসিভ ব্রাইটেনিং ট্রিটমেন্ট যা প্রতিদিন ব্যবহার করা যায়।",
      "ব্যবহারের পর তাৎক্ষণিকভাবে দাঁত অনেক বেশি সাদা এবং উজ্জ্বল দেখায়।",
      "বিশ্বজুড়ে অত্যন্ত জনপ্রিয় ও সামাজিক যোগাযোগ মাধ্যমে ভাইরাল প্রোডাক্ট।"
    ],
    longBenefitsTitle: "V34 কীভাবে কাজ করে?",
    longBenefits: [
      "কালার হুইল তত্ত্ব অনুযায়ী বেগুনি এবং হলুদ একে অপরের বিপরীত রং। বেগুনি রং দাঁতের হলুদ ভাবকে ঢেকে দেয়।",
      "কোনো হাইড্রোজেন পারক্সাইড বা ক্ষতিকর কেমিক্যাল নেই, তাই দাঁত শিরশির করে না।",
      "স্পেশাল ইভেন্ট, ফটোশুট বা আউটিংয়ের আগে ঝটপট ব্যবহারের জন্য সেরা সমাধান।",
      "মুখের স্বাস্থ্যের জন্য সম্পূর্ণ নিরাপদ উপাদান দ্বারা প্রস্তুত।"
    ],
    description: "V34 একটি অনন্য কালার কারেক্টিং সিরাম যা আপনার দাঁতের হলুদ আভাগুলোকে প্রাকৃতিকভাবে ঢেকে দেয়। এটি কোনো কেমিক্যাল ব্লিচিং নয়, বরং কালার কারেক্টিং প্রযুক্তির মাধ্যমে দাঁতকে তাৎক্ষণিকভাবে উজ্জ্বল দেখায়। যেকোনো পার্টি বা মিটিংয়ে যাওয়ার আগে মাত্র ৩০ সেকেন্ড ব্রাশ করলেই পাবেন নজরকাড়া শুভ্র হাসি!",
    specs: [
      { label: "ভলিউম", value: "৩০ মিলি" },
      { label: "প্রযুক্তি", value: "V34 কালার কারেক্টিং ওয়াটার সলিউবল টেকনোলজি" },
      { label: "ব্যবহারের নিয়ম", value: "২ পাম্প সিরাম ব্রাশে নিয়ে ৩০ সেকেন্ড ঘষুন এবং কুলি করুন" }
    ],
    faqs: [
      {
        question: "হলুদ ভাব কি স্থায়ীভাবে দূর হবে?",
        answer: "V34 একটি কালার কারেক্টর যা তাৎক্ষণিকভাবে চমৎকার শুভ্রতা দেয়। এটি কফি ও খাবারের দাগের হলদে ভাব দূর করে এবং নিয়মিত ব্যবহারে উজ্জ্বলতা বজায় রাখে।"
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        userName: "আফরিন সুলতানা",
        rating: 5,
        date: "১১ জুলাই, ২০২৬",
        comment: "টিকটকে এই প্রোডাক্টটা অনেক দেখেছিলাম। অর্ডার দিয়ে আসলেই অবাক হলাম! দাঁতের হলুদ ভাব ইনস্ট্যান্ট কমে যায়। অবিশ্বাস্য জিনিস!",
        verified: true
      }
    ]
  },
  {
    id: 'eyebrow-razor',
    title: "Safety Eyebrow Razor & Face Trimmer (3pc)",
    banglaTitle: "সেফটি আইব্রো রেজার ও ফেস ট্রিমার",
    subtitle: "ব্যথামুক্ত ভাবে আইব্রো প্লাক ও মুখের লোম পরিষ্কারের প্রিমিয়াম রেজার",
    price: 490,
    originalPrice: 990,
    discountBadge: "৫১% ছাড়",
    soldCount: "৭৩০ জন কিনেছেন",
    images: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80"
    ],
    features: [
      "কোনো প্রকার ব্যথা বা কাটা-ছেঁড়া ছাড়াই নিখুঁত আইব্রো শেপ করার সুবিধা।",
      "ফেসের ডেড স্কিন এবং সূক্ষ্ম লোম দূর করে মেকআপকে করে আরও মসৃণ।",
      "মাইক্রো-গার্ড প্রটেকশন ব્લેড যা আপনার সংবেদনশীল ত্বককে রক্ষা করে।",
      "সহজে বহনযোগ্য এবং সুরক্ষার জন্য রয়েছে ব્લેড ক্যাপ।"
    ],
    longBenefitsTitle: "আমাদের ফেস রেজার কেন অনন্য?",
    longBenefits: [
      "উচ্চমানের সুইডিশ স্টেইনলেস স্টিল ব્લેড যা দীর্ঘস্থায়ী ধার নিশ্চিত করে।",
      "নন-স্লিপ গ্রিপ ডিজাইন যা ব্যবহারের সময় সর্বোচ্চ নিয়ন্ত্রণ দেয়।",
      "পার্লার যাওয়ার সময় ও খরচ বাঁচিয়ে ঘরে বসেই নিখুঁত গ্রুমিং।",
      "ত্বকের কোনো ক্ষতি বা অ্যালার্জি সৃষ্টি করে না।"
    ],
    description: "পার্লারে গিয়ে সুতো দিয়ে থ্রেডিং করার অসহ্য ব্যথাকে বলুন বিদায়! আমাদের ৩ পিসের প্রিমিয়াম ফেস রেজার সেটটি দিয়ে আপনি ঘরে বসেই খুব সহজে এবং ব্যথামুক্তভাবে আপনার আইব্রো প্লাক, আপার লিপ, এবং কপালে গজানো অতিরিক্ত লোম পরিষ্কার করতে পারবেন। এর মাইক্রো-গার্ড ব્લેড ব্যবহারে কেটে যাওয়ার কোনো ভয় নেই।",
    specs: [
      { label: "প্যাকেজ সামগ্রী", value: "৩ পিস প্রিমিয়াম রেজার (ক্যাপ সহ)" },
      { label: "ব্লেড উপাদান", value: "সুইডিশ মাইক্রো-গার্ড স্টেইনলেস স্টিল" },
      { label: "হ্যান্ডেল", value: "আর্গোনমিক ইকো-ফ্রেন্ডলি প্লাস্টিক" }
    ],
    faqs: [
      {
        question: "রেজার ব্যবহার করলে কি নতুন লোম ঘন হয়ে গজাবে?",
        answer: "না, এটি একটি ভুল ধারণা। ফেস শেভিং ত্বকের উপরিভাগের লোম কাটে, যার ফলে চুলের গোড়া বা ঘনত্বের কোনো পরিবর্তন হয় না।"
      },
      {
        question: "একটি রেজার কতবার ব্যবহার করা যাবে?",
        answer: "ভালভাবে পরিষ্কার ও শুষ্ক রাখলে একটি রেজার ৫ থেকে ৮ বার অনায়াসে ব্যবহার করা যায়।"
      }
    ],
    reviews: [
      {
        id: 'rev-7',
        userName: "জেরিন আক্তার",
        rating: 5,
        date: "০৭ জুলাই, ২০২৬",
        comment: "পার্লারের ব্যথা সহ্য করতে হতো আগে, এখন এই রেজার দিয়ে খুব সহজে আইব্রো ঠিক করে ফেলি। ব્લેড অনেক সেফ, কাটার ভয় নেই একদম। রিকমেন্ডেড!",
        verified: true
      }
    ]
  },
  {
    id: 'feminine-wash',
    title: "Feminine Active Balancing Wash (150ml)",
    banglaTitle: "ফেমিনিন একটিভ ব্যালেন্সিং ওয়াশ",
    subtitle: "নারীদের ব্যক্তিগত পরিচ্ছন্নতা এবং পিএইচ ব্যালেন্স বজায় রাখার ওয়াশ",
    price: 1490,
    originalPrice: 2400,
    discountBadge: "৩৮% ছাড়",
    soldCount: "৪২০ জন কিনেছেন",
    images: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600&auto=format&fit=crop&q=80"
    ],
    features: [
      "প্রাকৃতিক পিএইচ (pH) ৩.৫ ব্যালেন্স বজায় রাখতে সাহায্য করে।",
      "ব্যাকটেরিয়া ও ফাঙ্গাল ইনফেকশন প্রতিরোধ করে চুলকানি ও অস্বস্তি দূর করে।",
      "ল্যাকটিক অ্যাসিড এবং ক্যামোমাইল সমৃদ্ধ, যা ত্বককে রাখে আর্দ্র ও নরম।",
      "চর্মরোগ বিশেষজ্ঞ দ্বারা পরীক্ষিত এবং দৈনিক ব্যবহারের জন্য সম্পূর্ণ নিরাপদ।"
    ],
    longBenefitsTitle: "কেন ফেমিনিন ওয়াশ অত্যন্ত গুরুত্বপূর্ণ?",
    longBenefits: [
      "সাধারণ সাবান অতিরিক্ত ক্ষারীয় হওয়ায় পিএইচ নষ্ট করে, কিন্তু এটি পিএইচ সুরক্ষিত রাখে।",
      "দুর্গন্ধ সৃষ্টিকারী ব্যাকটেরিয়া দূর করে সারাদিন ফ্রেশ ও আত্মবিশ্বাসী রাখে।",
      "কোনো ক্ষতিকর প্যারাবেন, কালার বা কৃত্রিম সুগন্ধি ব্যবহার করা হয়নি।",
      "পিরিয়ডের দিনগুলোতে বিশেষ সুরক্ষার জন্য অত্যন্ত প্রয়োজনীয়।"
    ],
    description: "নারীদের সুস্বাস্থ্য ও ব্যক্তিগত পরিচ্ছন্নতার অন্যতম অঙ্গ হলো সঠিক পিএইচ লেভেল বজায় রাখা। সাধারণ সাবান ব্যবহারের ফলে সংবেদনশীল জায়গার ত্বক শুষ্ক ও ইনফেক্টেড হতে পারে। আমাদের ফেমিনিন একটিভ ব্যালেন্সিং ওয়াশটি ল্যাকটিক অ্যাসিড দ্বারা সমৃদ্ধ যা প্রাকৃতিক সুরক্ষা স্তর বজায় রাখে এবং চুলকানি ও যেকোনো অস্বস্তি দূর করে অত্যন্ত সতেজ রাখে।",
    specs: [
      { label: "ভলিউম", value: "১৫০ মিলি" },
      { label: "পিএইচ মান", value: "৩.৫ (অপটিমাল প্রোটেকশন)" },
      { label: "প্রধান উপাদান", value: "ল্যাকটিক অ্যাসিড, ক্যামোমাইল এক্সট্র্যাক্ট, অ্যালোভেরা" }
    ],
    faqs: [
      {
        question: "এটি কি প্রতিদিন ব্যবহার করা যাবে?",
        answer: "হ্যাঁ, এটি অত্যন্ত মৃদু ফমুর্লায় তৈরি এবং দৈনিক গোসলের সময় একবার ব্যবহার করা সম্পূর্ণ নিরাপদ।"
      }
    ],
    reviews: [
      {
        id: 'rev-8',
        userName: "ফারহানা রহমান",
        rating: 5,
        date: "০৪ জুলাই, ২০২৬",
        comment: "ডাক্তারের পরামর্শে এটা ব্যবহার শুরু করেছি। খুবই জেন্টল আর স্কিন ড্রাই করে না। ফ্রেগ্রেন্সটা খুব লাইট আর ফ্রেশ।",
        verified: true
      }
    ]
  }
];

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

  // Initialize common elements
  initCommonCartBadge();

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
          <img src="${product.images[0]}" alt="${product.title}" loading="lazy" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
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
              <span class="text-emerald-600 font-black text-base md:text-lg">৳${product.price}</span>
              <span class="text-gray-400 line-through text-xs md:text-sm font-medium">৳${product.originalPrice}</span>
            </div>
          </div>
          <div class="mt-3.5 flex flex-col gap-2">
            <button onclick="window.location.href='product.html?id=${product.id}'" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95">
              <span>বিস্তারিত দেখুন</span>
            </button>
            <button onclick="window.location.href='product.html?id=${product.id}&order=true'" class="w-full bg-[#1e1e24] hover:bg-amber-500 hover:text-black text-white font-extrabold text-xs py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 group shadow-md hover:shadow-lg active:scale-95">
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
  document.getElementById('price-current').textContent = `৳${product.price}`;
  document.getElementById('price-original').textContent = `৳${product.originalPrice}`;
  document.getElementById('discount-badge-text').textContent = product.discountBadge;
  document.getElementById('sold-badge-text').textContent = product.soldCount || 'ভেরিফাইড প্রোডাক্ট';
  document.getElementById('deal-product-title').textContent = product.banglaTitle || product.title;
  document.getElementById('deal-product-price').textContent = `৳${product.price}`;
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
  mainImage.src = product.images[0];

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
      thumb.innerHTML = `<img src="${img}" alt="thumbnail" class="w-full h-full object-cover" />`;
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
      mainImage.src = product.images[currentIndex];
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

  // Re-calculate math
  function calculateTotal() {
    const productPrice = product.price;
    const subtotal = productPrice * currentQty;
    const deliveryCharge = districtSelect.value === 'dhaka-inside' ? 80 : 130;
    const grandTotal = Math.max(0, subtotal + deliveryCharge - promoDiscount);

    // Update form labels
    invoiceSubtotal.textContent = `৳${subtotal}`;
    invoiceDelivery.textContent = `৳${deliveryCharge}`;
    
    if (promoDiscount > 0) {
      invoiceDiscountRow.classList.remove('hidden');
      invoiceDiscount.textContent = `- ৳${promoDiscount}`;
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
      calculateTotal();
    }
  };

  window.triggerQtyPlus = () => {
    currentQty++;
    qtyInput.textContent = currentQty;
    calculateTotal();
  };

  // Bind district dropdown updates
  districtSelect.addEventListener('change', () => {
    calculateTotal();
  });

  // Bind promo code validation
  window.triggerApplyPromo = () => {
    const code = promoInput.value.trim().toUpperCase();
    const promoSuccessLabel = document.getElementById('promo-success-msg');
    const promoErrorLabel = document.getElementById('promo-error-msg');

    promoSuccessLabel.classList.add('hidden');
    promoErrorLabel.classList.add('hidden');
    promoDiscount = 0;

    if (!code) return;

    if (code === 'FATAFATI' || code === 'FREE50' || code === 'DISCOUNT50') {
      promoDiscount = 50;
      promoSuccessLabel.textContent = '৳৫০ ডিসকাউন্ট সফলভাবে প্রয়োগ করা হয়েছে!';
      promoSuccessLabel.classList.remove('hidden');
    } else if (code === 'SAVE100' && (product.price * currentQty) >= 1000) {
      promoDiscount = 100;
      promoSuccessLabel.textContent = '৳১০০ ডিসকাউন্ট সফলভাবে প্রয়োগ করা হয়েছে!';
      promoSuccessLabel.classList.remove('hidden');
    } else {
      promoErrorLabel.textContent = 'অকার্যকর বা মেয়াদোত্তীর্ণ প্রোমো কোড!';
      promoErrorLabel.classList.remove('hidden');
    }

    calculateTotal();
  };

  // Build links for WhatsApp & Call
  function generateSocialLinks() {
    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const address = document.getElementById('order-address').value.trim();
    const delivery = districtSelect.value === 'dhaka-inside' ? 'ঢাকার ভেতরে' : 'ঢাকার বাইরে';
    const finalPrice = invoiceGrandTotal.textContent;

    const message = `হ্যালো! আমি "${product.title}" অর্ডার করতে চাই।\n` +
      `পরিমাণ: ${currentQty} পিস\n` +
      `ডেলিভারি এলাকা: ${delivery}\n` +
      `মোট মূল্য: ${finalPrice}\n` +
      `আমার নাম: ${name || '(নাম লিখুন)'}\n` +
      `মোবাইল: ${phone || '(নম্বর লিখুন)'}\n` +
      `ঠিকানা: ${address || '(ঠিকানা লিখুন)'}`;

    const waBtn = document.getElementById('whatsapp-order-btn');
    if (waBtn) {
      waBtn.href = `https://wa.me/8801334747918?text=${encodeURIComponent(message)}`;
    }
  }

  // Event listeners on form inputs to update WhatsApp text dynamically
  ['order-name', 'order-phone', 'order-address'].forEach(id => {
    document.getElementById(id).addEventListener('input', generateSocialLinks);
  });
  districtSelect.addEventListener('change', generateSocialLinks);

  // Form Submission
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const address = document.getElementById('order-address').value.trim();

    if (!name || !phone || !address) return;

    const submitBtn = document.getElementById('confirm-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'অর্ডার প্রসেস হচ্ছে...';

    // Simulate database receipt generation
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart fill-black"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <span>অর্ডার কনফার্ম করুন</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      `;

      const deliveryVal = districtSelect.value === 'dhaka-inside' ? 80 : 130;
      const deliveryLabel = districtSelect.value === 'dhaka-inside' ? 'ঢাকার ভেতরে' : 'ঢাকার বাইরে';
      const trackingId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

      // Populate success invoice modal
      document.getElementById('modal-tracking-id').textContent = trackingId;
      document.getElementById('modal-customer-name').textContent = name;
      document.getElementById('modal-customer-phone').textContent = phone;
      document.getElementById('modal-customer-address').textContent = `${address} (${deliveryLabel})`;
      document.getElementById('modal-product-summary').textContent = `${product.banglaTitle || product.title} (x${currentQty})`;
      document.getElementById('modal-product-price').textContent = `৳${product.price * currentQty}`;
      document.getElementById('modal-delivery-charge').textContent = `৳${deliveryVal}`;
      document.getElementById('modal-grand-total').textContent = invoiceGrandTotal.textContent;

      // Update cart count persistency
      incrementCartCountBy(currentQty);

      // Open Modal
      const orderSuccessModal = document.getElementById('order-success-modal');
      orderSuccessModal.classList.remove('hidden');
      orderSuccessModal.classList.add('flex');

      // Reset form
      formElement.reset();
      currentQty = 1;
      qtyInput.textContent = '1';
      promoDiscount = 0;
      calculateTotal();
      generateSocialLinks();
    }, 1200);
  });

  // Close invoice modal trigger
  window.triggerCloseSuccessModal = () => {
    const orderSuccessModal = document.getElementById('order-success-modal');
    orderSuccessModal.classList.add('hidden');
    orderSuccessModal.classList.remove('flex');
    window.location.href = 'index.html';
  };

  // Print invoice trigger
  window.triggerPrintInvoice = () => {
    window.print();
  };

  // Run initial calculations
  calculateTotal();
  generateSocialLinks();
}
