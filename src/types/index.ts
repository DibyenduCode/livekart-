export interface Product {
  id: string;
  name: string;
  category: 'Men\'s Fashion' | 'Women\'s Fashion' | 'Accessories' | 'Beauty' | 'Sneakers' | 'Tech & Lifestyle';
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  availableSizes?: string[];
  availableColors?: string[];
  stock: number;
  sellerId: string;
  rating: number;
  isFeatured?: boolean;
}

export interface Seller {
  id: string;
  sellerName: string;
  sellerAvatar: string;
  storeName: string;
  verified: boolean;
  followerCount: string;
  isFollowed?: boolean;
  videoId: string;
  backupVideoId?: string;
  viewerCount: number;
  likeCount: number;
  title: string;
  description: string;
  category: string;
  featuredProductId: string;
  productIds: string[];
  tags: string[];
}

export interface Comment {
  id: string;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
  isSeller?: boolean;
  isPinned?: boolean;
  isVerifiedBuyer?: boolean;
  productMention?: string;
}

export interface CartItem {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  shippingAddress: {
    fullName: string;
    phone: string;
    addressLine: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: 'UPI' | 'Card' | 'COD';
  estimatedDelivery: string;
}

export type ActiveTab = 'live' | 'discover' | 'orders' | 'profile';
