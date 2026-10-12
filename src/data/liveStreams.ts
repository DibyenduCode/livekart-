import type { Seller, Comment } from '../types';

export const mockSellers: Seller[] = [
  {
    id: 'seller-1',
    sellerName: 'Priya Sharma',
    sellerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    storeName: 'Zara Luxe Studio',
    verified: true,
    followerCount: '245K',
    isFollowed: false,
    videoId: 'nWEckOp-v6A', // Authentic Festive Outfits & Garments Fashion Haul
    backupVideoId: 'xZazxOeaUak', // Zara Party Outfits & New Arrivals
    viewerCount: 2840,
    likeCount: 48900,
    title: '✨ Diwali & Festive Try-On: Chikankari & Sharara Sets Under ₹2500!',
    description: 'Exclusive hand-embroidered collection live showcase. Free matching silk mask on every order placed during live stream!',
    category: 'Women\'s Fashion',
    featuredProductId: 'prod-101',
    productIds: ['prod-101', 'prod-102', 'prod-103', 'prod-104', 'prod-105'],
    tags: ['#FestiveFashion', '#Chikankari', '#LiveSale', '#IndianEthnic']
  },
  {
    id: 'seller-2',
    sellerName: 'Vikram Malhotra',
    sellerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    storeName: 'UrbanGentle Menswear',
    verified: true,
    followerCount: '189K',
    isFollowed: true,
    videoId: 'SIDp8-2be1Y', // Menswear Linen & Old Money Style Shirts
    backupVideoId: 'VwhKuoXKsHQ',
    viewerCount: 1950,
    likeCount: 31200,
    title: '🔥 French Linen Shirts & Pleated Trousers Sizing & Styling Masterclass',
    description: 'Try-on of our best-selling resort linen shirts. Drop your height & chest size in comments for live fit recommendations!',
    category: 'Men\'s Fashion',
    featuredProductId: 'prod-201',
    productIds: ['prod-201', 'prod-202', 'prod-203'],
    tags: ['#MensStyle', '#LinenShirt', '#OOTDMen', '#UrbanGentle']
  },
  {
    id: 'seller-3',
    sellerName: 'Ananya Verma',
    sellerAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    storeName: 'GlowEssence Beauty',
    verified: true,
    followerCount: '412K',
    isFollowed: false,
    videoId: 'OPf0YbXqDm0',
    backupVideoId: 'EngW7tLk6R8',
    viewerCount: 3410,
    likeCount: 78400,
    title: '💄 Live Swatching: Viral Peptide Glaze Lip Duo & Dewy Sunscreen',
    description: 'Watch 6 skin tones live swatch test. Flat 50% limited live coupon applied automatically at checkout!',
    category: 'Beauty',
    featuredProductId: 'prod-301',
    productIds: ['prod-301', 'prod-302', 'prod-303'],
    tags: ['#GlassSkin', '#LipOil', '#CleanBeauty', '#ViralMakeup']
  },
  {
    id: 'seller-4',
    sellerName: 'Rohan Patel',
    sellerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    storeName: 'Kicks & Drips Sneaker Lab',
    verified: true,
    followerCount: '98K',
    isFollowed: false,
    videoId: 'EngW7tLk6R8',
    backupVideoId: 'LXb3EKWsInQ',
    viewerCount: 1620,
    likeCount: 22800,
    title: '👟 Unboxing Vintage Italian Leather High-Tops & Sneaker Care Tips',
    description: 'Limited 50 pairs drop only for live viewers! First 10 orders get free premium sneaker crease protectors.',
    category: 'Sneakers',
    featuredProductId: 'prod-401',
    productIds: ['prod-401', 'prod-402'],
    tags: ['#SneakerHeads', '#StreetwearKicks', '#HighTops', '#DropAlert']
  },
  {
    id: 'seller-5',
    sellerName: 'Meera Singhania',
    sellerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    storeName: 'Royal Heirlooms Jewels',
    verified: true,
    followerCount: '315K',
    isFollowed: false,
    videoId: 'kJQP7kiw5Fk',
    backupVideoId: 'EngW7tLk6R8',
    viewerCount: 2230,
    likeCount: 54100,
    title: '💎 Handcrafted 18K Gold Polki & Tennis Bracelets Flash Sale',
    description: 'Hallmarked finish, anti-tarnish lifetime guarantee. Live try-on under natural studio light.',
    category: 'Accessories',
    featuredProductId: 'prod-501',
    productIds: ['prod-501', 'prod-502'],
    tags: ['#PolkiJewellery', '#GoldPlated', '#BridalJewels', '#FlashSale']
  },
  {
    id: 'seller-6',
    sellerName: 'Kabir Sen',
    sellerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    storeName: 'HyperTech Lifestyle',
    verified: true,
    followerCount: '520K',
    isFollowed: true,
    videoId: 'dQw4w9WgXcQ',
    backupVideoId: 'EngW7tLk6R8',
    viewerCount: 4180,
    likeCount: 92400,
    title: '⚡ 45dB ANC Earbuds & AMOLED Smartwatch Stress Test & Live Audio Demo',
    description: 'Mic test, bass test, and water resistance demo live. Additional ₹300 instant coupon on prepaid orders.',
    category: 'Tech & Lifestyle',
    featuredProductId: 'prod-601',
    productIds: ['prod-601', 'prod-602'],
    tags: ['#TechGadgets', '#WirelessEarbuds', '#Smartwatch', '#Unboxing']
  }
];

export const initialComments: Record<string, Comment[]> = {
  'seller-1': [
    {
      id: 'c-101',
      userName: 'Priya Sharma',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Use coupon "LIVE50" for free shipping + extra ₹200 off! Pinned item is pure mulmul cotton.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-102',
      userName: 'Sneha Roy',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      text: 'Just ordered Emerald Green in Size M! Does it come with pockets? 😍',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    },
    {
      id: 'c-103',
      userName: 'Priya Sharma',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      text: '@Sneha Roy Yes, deep side pockets on both sides of the kurta! ❤️',
      timestamp: '1m ago',
      isSeller: true
    },
    {
      id: 'c-104',
      userName: 'Tanvi M.',
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      text: 'The fabric quality looks so royal! Ordering the Sharara set right away',
      timestamp: '2m ago'
    },
    {
      id: 'c-105',
      userName: 'Rhea Dsouza',
      userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      text: 'Show the dupatta border close up please!!',
      timestamp: '3m ago'
    }
  ],
  'seller-2': [
    {
      id: 'c-201',
      userName: 'Vikram Malhotra',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: I am 6\'0" wearing size L in Ecru Sand Linen shirt for reference.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-202',
      userName: 'Arjun Kapoor',
      userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      text: 'Ordered the combo with trousers! Best fabric in this budget bro 🔥',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    },
    {
      id: 'c-203',
      userName: 'Devansh S.',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      text: 'Is the linen see-through in white/ecru?',
      timestamp: '2m ago'
    }
  ],
  'seller-3': [
    {
      id: 'c-301',
      userName: 'Ananya Verma',
      userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Both shades Glazed Cherry and Honey Drizzle are now restocked!',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-302',
      userName: 'Kritika B.',
      userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      text: 'The glaze finish is insane! Grabbed 2 sets for my sister and me ✨',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-4': [
    {
      id: 'c-401',
      userName: 'Rohan Patel',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: UK 9 and UK 10 only 2 pairs left in the Panda colorway!',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-402',
      userName: 'Aman Deep',
      userAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      text: 'Leather quality looks premium af! Adding to cart right now',
      timestamp: '2m ago'
    }
  ],
  'seller-5': [
    {
      id: 'c-501',
      userName: 'Meera Singhania',
      userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Comes with luxurious velvet jewelry box and certificate.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-502',
      userName: 'Pooja Hegde',
      userAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
      text: 'The Polki reflection is breathtaking! Ordered for my cousin\'s sangeet',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-6': [
    {
      id: 'c-601',
      userName: 'Kabir Sen',
      userAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Battery backup is tested up to 38 hours with charging case.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-602',
      userName: 'Sameer Khan',
      userAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
      text: 'Does the watch support Bluetooth calling with iPhone?',
      timestamp: '2m ago'
    }
  ]
};

export const simulatedStreamMessages = [
  'Just added to cart! Can\'t wait 🔥',
  'Ordered one for my mom too ❤️',
  'Is the delivery free on prepaid orders?',
  'Such an aesthetic piece ✨',
  'Show the reverse side once please',
  'Size M just secured! 🙌',
  'Best price on live right now',
  'Can you please wear it and turn around?',
  'Just tapped 50 likes for you! 💕',
  'Ordered! Please pack safely 📦'
];
