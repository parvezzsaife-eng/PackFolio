export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  sizes: string[];
  type: string;
  thickness?: string;
  moq: number;
  priceRange: string;
  description: string;
  image: string;
  tags: string[];
  features?: string[];
};

export const categories: Category[] = [
  { id: "courier-bags", name: "Courier Bags", description: "Tamper-proof mailing bags", icon: "Mail" },
  { id: "bubble-mailers", name: "Bubble Mailers", description: "Protective padded envelopes", icon: "PackageOpen" },
  { id: "corrugated-boxes", name: "Corrugated Boxes", description: "Sturdy shipping boxes", icon: "Box" },
  { id: "thermal-rolls", name: "Thermal Rolls", description: "Barcode and shipping labels", icon: "ScrollText" },
  { id: "tapes-accessories", name: "Tapes & Accessories", description: "BOPP tapes and dispensers", icon: "Tape" },
];

const BASE = import.meta.env.BASE_URL;

export const products: Product[] = [
  // Courier Bags
  {
    id: "cb-pod-01",
    name: "Standard POD Courier Bag",
    categoryId: "courier-bags",
    sizes: ["8x10", "10x12", "12x15", "14x18"],
    type: "With POD Jacket",
    thickness: "50 Microns",
    moq: 1000,
    priceRange: "₹2.50 – ₹6.00 per pc",
    description: "High-quality, tamper-proof plastic courier bags with a transparent POD jacket for inserting invoices or waybills. Perfect for eCommerce shipping.",
    image: `${BASE}images/products/courier-bag-pod.png`,
    tags: ["amazon-sellers", "flipkart-sellers", "meesho-sellers", "bestseller"],
    features: ["Tamper-evident adhesive", "Water-resistant", "High seam strength"]
  },
  {
    id: "cb-plain-02",
    name: "Plain Courier Bag (Without POD)",
    categoryId: "courier-bags",
    sizes: ["6x8", "8x10", "10x12", "12x15", "16x20"],
    type: "Plain",
    thickness: "50 Microns",
    moq: 1000,
    priceRange: "₹1.80 – ₹5.50 per pc",
    description: "Economical and durable plain courier bags. Ideal for sellers who print labels directly onto the bag or use self-adhesive labels.",
    image: `${BASE}images/products/courier-bag-plain.png`,
    tags: ["meesho-sellers", "economical"],
  },
  {
    id: "cb-eco-03",
    name: "Compostable Courier Bag",
    categoryId: "courier-bags",
    sizes: ["10x12", "12x15", "14x18"],
    type: "Eco-friendly",
    thickness: "60 Microns",
    moq: 5000,
    priceRange: "₹4.50 – ₹9.00 per pc",
    description: "100% biodegradable and compostable courier bags. Meet environmental compliance while providing secure shipping.",
    image: `${BASE}images/products/courier-bag-eco.png`,
    tags: ["premium", "eco-friendly"],
  },

  // Bubble Mailers
  {
    id: "bm-kraft-01",
    name: "Kraft Bubble Mailer",
    categoryId: "bubble-mailers",
    sizes: ["4x8", "6x10", "8.5x12"],
    type: "Paper Exterior",
    moq: 500,
    priceRange: "₹5.00 – ₹12.00 per pc",
    description: "Golden kraft paper exterior with protective bubble lining inside. Excellent for shipping fragile items like electronics, jewelry, and cosmetics.",
    image: `${BASE}images/products/bubble-mailer-kraft.png`,
    tags: ["amazon-sellers", "fragile"],
    features: ["Lightweight", "High tear resistance", "Professional look"]
  },
  {
    id: "bm-poly-02",
    name: "Poly Bubble Mailer",
    categoryId: "bubble-mailers",
    sizes: ["6x9", "8x12", "10x13"],
    type: "Plastic Exterior",
    thickness: "Premium Bubble",
    moq: 500,
    priceRange: "₹4.50 – ₹11.00 per pc",
    description: "Water-resistant poly exterior combined with bubble wrap lining. Offers superior protection against moisture and impact.",
    image: `${BASE}images/products/bubble-mailer-poly.png`,
    tags: ["flipkart-sellers", "waterproof"],
  },

  // Corrugated Boxes
  {
    id: "box-3ply-01",
    name: "3-Ply Brown Shipping Box",
    categoryId: "corrugated-boxes",
    sizes: ["6x6x6", "8x8x4", "10x8x6", "12x9x4", "14x10x8"],
    type: "3-Ply Corrugated",
    moq: 200,
    priceRange: "₹8.00 – ₹35.00 per pc",
    description: "Standard 3-ply brown corrugated boxes for general eCommerce shipping. Good bursting strength and stackability.",
    image: `${BASE}images/products/box-3ply.png`,
    tags: ["amazon-sellers", "flipkart-sellers", "meesho-sellers", "essential"],
  },
  {
    id: "box-5ply-02",
    name: "5-Ply Heavy Duty Box",
    categoryId: "corrugated-boxes",
    sizes: ["12x12x12", "18x12x10", "20x15x12", "24x18x18"],
    type: "5-Ply Corrugated",
    moq: 100,
    priceRange: "₹25.00 – ₹95.00 per pc",
    description: "Extra strong 5-ply boxes designed for heavy or fragile items. Excellent crush resistance for safe transit.",
    image: `${BASE}images/products/box-5ply.png`,
    tags: ["heavy-duty", "electronics"],
  },
  {
    id: "box-white-03",
    name: "White Die-Cut Mailer Box",
    categoryId: "corrugated-boxes",
    sizes: ["6x4x2", "8x6x3", "10x8x4"],
    type: "Die-Cut 3-Ply",
    moq: 300,
    priceRange: "₹12.00 – ₹28.00 per pc",
    description: "Premium white exterior mailer boxes. Self-locking design, perfect for subscription boxes or premium product packaging.",
    image: `${BASE}images/products/box-white-diecut.png`,
    tags: ["premium", "apparel"],
  },

  // Thermal Rolls
  {
    id: "tr-label-01",
    name: "4x6 Shipping Labels (Direct Thermal)",
    categoryId: "thermal-rolls",
    sizes: ["4\" x 6\" (250 labels/roll)", "4\" x 6\" (400 labels/roll)", "4\" x 6\" (500 labels/roll)"],
    type: "Direct Thermal",
    moq: 50,
    priceRange: "₹120 – ₹250 per roll",
    description: "Standard 4x6 inch direct thermal shipping labels. Compatible with all major thermal printers. Strong adhesive.",
    image: `${BASE}images/products/thermal-labels.png`,
    tags: ["amazon-sellers", "flipkart-sellers", "essential"],
    features: ["Smudge-proof", "Strong adhesion", "Perforated"]
  },
  {
    id: "tr-pos-02",
    name: "POS Receipt Thermal Roll",
    categoryId: "thermal-rolls",
    sizes: ["2 inch", "3 inch (79mm)"],
    type: "Thermal Paper",
    moq: 100,
    priceRange: "₹35 – ₹65 per roll",
    description: "High-quality thermal paper rolls for POS machines and receipt printers. Clear, dark print retention.",
    image: `${BASE}images/products/thermal-pos-rolls.png`,
    tags: ["retail"],
  },

  // Tapes & Accessories
  {
    id: "tape-bopp-01",
    name: "BOPP Packing Tape (Transparent)",
    categoryId: "tapes-accessories",
    sizes: ["2 inch x 65m", "2 inch x 100m", "3 inch x 65m"],
    type: "BOPP Tape",
    thickness: "40 Microns",
    moq: 144,
    priceRange: "₹30 – ₹55 per roll",
    description: "High-tack transparent BOPP packing tape. Essential for securing corrugated boxes.",
    image: `${BASE}images/products/tape-bopp.jpg`,
    tags: ["essential", "amazon-sellers", "flipkart-sellers", "meesho-sellers"],
  },
  {
    id: "tape-brown-02",
    name: "BOPP Packing Tape (Brown)",
    categoryId: "tapes-accessories",
    sizes: ["2 inch x 65m", "2 inch x 100m"],
    type: "BOPP Tape",
    thickness: "40 Microns",
    moq: 144,
    priceRange: "₹30 – ₹55 per roll",
    description: "Brown BOPP packing tape for seamless blending with corrugated boxes.",
    image: `${BASE}images/products/tape-bopp.jpg`,
    tags: ["essential"],
  },
  {
    id: "tape-fragile-03",
    name: "Printed 'FRAGILE' Tape",
    categoryId: "tapes-accessories",
    sizes: ["2 inch x 50m"],
    type: "Printed Tape",
    thickness: "45 Microns",
    moq: 72,
    priceRange: "₹45 – ₹60 per roll",
    description: "Red and white highly visible 'FRAGILE' printed tape to ensure safe handling of delicate shipments.",
    image: `${BASE}images/products/tape-bopp.jpg`,
    tags: ["fragile", "specialty"],
  },
  {
    id: "acc-dispenser-01",
    name: "Heavy Duty Tape Dispenser",
    categoryId: "tapes-accessories",
    sizes: ["Fits 2 inch tape", "Fits 3 inch tape"],
    type: "Accessory",
    moq: 5,
    priceRange: "₹150 – ₹250 per pc",
    description: "Ergonomic, heavy-duty metal and plastic tape dispenser for fast and efficient box sealing.",
    image: `${BASE}images/products/tape-dispenser.jpg`,
    tags: ["essential", "tool"],
  }
];

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter(p => p.categoryId === categoryId);
}

export function getProductsByTag(tag: string) {
  return products.filter(p => p.tags.includes(tag));
}
