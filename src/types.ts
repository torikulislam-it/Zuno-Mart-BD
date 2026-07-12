export interface Product {
  id: string;
  title: string;
  banglaTitle?: string;
  subtitle?: string;
  price: number;
  originalPrice: number;
  discountBadge: string; // e.g. "৫০% ছাড়"
  soldCount?: string; // e.g. "৮২৯ জন কিনেছেন"
  images: string[];
  features: string[]; // key benefits in Bengali
  longBenefitsTitle?: string; // কেন ব্যবহার করবেন আমাদের আল্ট্রা ফাইন টুথব্রাশ?
  longBenefits: string[]; // detailed bullets
  description: string;
  specs?: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  reviews: Review[];
  category?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
  images?: string[];
  verified: boolean;
}

export interface Order {
  id: string;
  product: Product;
  quantity: number;
  fullName: string;
  mobileNumber: string;
  fullAddress: string;
  district: string;
  deliveryCharge: number;
  totalPrice: number;
  createdAt: string;
  status: 'pending' | 'confirmed';
}
