// Product data for ShopSpark (12 products in INR)
const products = [
  { id: 1, name: "Noise-Cancelling Headphones", price: 10999, category: "Electronics", emoji: "🎧", badge: "Best Seller", rating: 4.8, desc: "Immersive sound with active noise cancellation and 30hr battery life." },
  { id: 2, name: "Leather Minimalist Wallet", price: 3999, category: "Accessories", emoji: "👜", badge: "New", rating: 4.6, desc: "Slim full-grain leather wallet with RFID protection." },
  { id: 3, name: "Bamboo Desk Organizer", price: 2799, category: "Home", emoji: "🗂️", badge: "", rating: 4.4, desc: "Sustainable bamboo organizer to keep your workspace tidy." },
  { id: 4, name: "Ceramic Pour-Over Set", price: 5499, category: "Home", emoji: "☕", badge: "Top Rated", rating: 4.9, desc: "Hand-crafted ceramic dripper with matching server for the perfect brew." },
  { id: 5, name: "Merino Wool Crewneck", price: 7499, category: "Clothing", emoji: "🧥", badge: "", rating: 4.5, desc: "Soft, breathable merino wool sweater for everyday wear." },
  { id: 6, name: "Mechanical Keyboard TKL", price: 8999, category: "Electronics", emoji: "⌨️", badge: "Popular", rating: 4.7, desc: "Tenkeyless hot-swappable mechanical keyboard with RGB." },
  { id: 7, name: "Yoga Mat Pro", price: 6299, category: "Fitness", emoji: "🧘", badge: "", rating: 4.6, desc: "Extra-thick non-slip yoga mat for joint support and grip." },
  { id: 8, name: "Stainless Water Bottle", price: 2499, category: "Fitness", emoji: "🫙", badge: "Best Seller", rating: 4.8, desc: "Vacuum-insulated 750ml bottle. Keeps cold 24hr, hot 12hr." },
  { id: 9, name: "Scented Soy Candle Set", price: 3299, category: "Home", emoji: "🕯️", badge: "New", rating: 4.5, desc: "Set of 3 soy candles in calming aromatherapy scents." },
  { id: 10, name: "Running Sneakers", price: 9999, category: "Fitness", emoji: "👟", badge: "", rating: 4.6, desc: "Lightweight cushioned sneakers for daily runs and gym." },
  { id: 11, name: "Wireless Charging Pad", price: 3749, category: "Electronics", emoji: "🔋", badge: "", rating: 4.3, desc: "15W fast wireless charging with anti-slip surface." },
  { id: 12, name: "Linen Throw Blanket", price: 4599, category: "Home", emoji: "🛋️", badge: "Top Rated", rating: 4.9, desc: "Soft stonewashed linen throw — perfect for cozy evenings." },
];

export const formatINR = (n) => "₹" + n.toLocaleString("en-IN");
export default products;
