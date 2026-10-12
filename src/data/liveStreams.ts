import type { Seller, Comment } from '../types';

export const mockSellers: Seller[] = [
  // 1. Priya Sharma (Zara Luxe Studio - Festive Garments)
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
    category: "Women's Fashion",
    featuredProductId: 'prod-101',
    productIds: ['prod-101', 'prod-102', 'prod-103', 'prod-104', 'prod-105'],
    tags: ['#FestiveFashion', '#Chikankari', '#LiveSale', '#IndianEthnic']
  },

  // 2. Vikram Malhotra (UrbanGentle Menswear - Linen Shirts)
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
    category: "Men's Fashion",
    featuredProductId: 'prod-201',
    productIds: ['prod-201', 'prod-202', 'prod-203'],
    tags: ['#MensStyle', '#LinenShirt', '#OOTDMen', '#UrbanGentle']
  },

  // 3. Ananya Verma (GlowEssence Beauty - Lip Oils & Skincare)
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

  // 4. Rohan Patel (Kicks & Drips Sneaker Lab - High Tops)
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

  // 5. Meera Singhania (Royal Heirlooms Jewels - Gold & Polki)
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

  // 6. Kabir Sen (HyperTech Lifestyle - ANC Earbuds & Smartwatch)
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
  },

  // 7. Tara Kapoor (BohoChic Drapes - Chanderi Sarees & Kaftans)
  {
    id: 'seller-7',
    sellerName: 'Tara Kapoor',
    sellerAvatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=300&q=80',
    storeName: 'BohoChic Drapes',
    verified: true,
    followerCount: '178K',
    isFollowed: false,
    videoId: 'xZazxOeaUak',
    backupVideoId: 'nWEckOp-v6A',
    viewerCount: 2150,
    likeCount: 39800,
    title: '🌸 Handblock Chanderi Silk Sarees & Flowing Tiered Maxi Dresses',
    description: 'Pure organic cotton handblock print collection. Draping tutorial with matching zari pallus live now!',
    category: "Women's Fashion",
    featuredProductId: 'prod-701',
    productIds: ['prod-701', 'prod-702', 'prod-703'],
    tags: ['#HandblockSarees', '#BohoStyle', '#SummerDresses', '#ArtisanalWeave']
  },

  // 8. Aryan Oberoi (Stealth Athletics - Gymwear & Compression)
  {
    id: 'seller-8',
    sellerName: 'Aryan Oberoi',
    sellerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    storeName: 'Stealth Athletics',
    verified: true,
    followerCount: '340K',
    isFollowed: false,
    videoId: 'VwhKuoXKsHQ',
    backupVideoId: 'SIDp8-2be1Y',
    viewerCount: 3100,
    likeCount: 61500,
    title: '💪 Seamless Compression Ribbed Tanks & 320 GSM Acid-Wash Pump Covers',
    description: 'Sweat-wicking gymwear tested under intense workout sets. Free wrist straps on orders above ₹1999.',
    category: "Men's Fashion",
    featuredProductId: 'prod-801',
    productIds: ['prod-801', 'prod-802', 'prod-803'],
    tags: ['#GymWear', '#PumpCover', '#Athleisure', '#ActiveFit']
  },

  // 9. Simran Kaur (Pastel Studio Footwear - Handmade Juttis)
  {
    id: 'seller-9',
    sellerName: 'Simran Kaur',
    sellerAvatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80',
    storeName: 'Pastel Studio Footwear',
    verified: true,
    followerCount: '210K',
    isFollowed: false,
    videoId: 'LXb3EKWsInQ',
    backupVideoId: 'EngW7tLk6R8',
    viewerCount: 1840,
    likeCount: 42300,
    title: '🥿 Pure Velvet Punjabi Juttis & Handcrafted Braided Kolhapuri Heels',
    description: 'Padded double-cushioned comfort soles with genuine leather lining. No shoe bites guaranteed!',
    category: "Women's Fashion",
    featuredProductId: 'prod-901',
    productIds: ['prod-901', 'prod-902', 'prod-903'],
    tags: ['#PunjabiJutti', '#BridalFootwear', '#KolhapuriHeels', '#HandmadeShoes']
  },

  // 10. Devika Roy (Minimalist Accents - Waterproof Jewelry)
  {
    id: 'seller-10',
    sellerName: 'Devika Roy',
    sellerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    storeName: 'Minimalist Accents',
    verified: true,
    followerCount: '280K',
    isFollowed: true,
    videoId: 'ZbZSe6N_BXs',
    backupVideoId: 'kJQP7kiw5Fk',
    viewerCount: 2650,
    likeCount: 57900,
    title: '✨ 18K PVD Waterproof Snake Chains & Chunky Croissant Dome Rings',
    description: 'Wear in shower, gym, and pool with zero fading. Hypoallergenic medical grade stainless steel.',
    category: 'Accessories',
    featuredProductId: 'prod-1001',
    productIds: ['prod-1001', 'prod-1002', 'prod-1003'],
    tags: ['#WaterproofJewelry', '#SnakeChain', '#GoldRings', '#MinimalistVibe']
  },

  // 11. Armaan Khan (Denim Craft Co. - Vintage Washed Denim)
  {
    id: 'seller-11',
    sellerName: 'Armaan Khan',
    sellerAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    storeName: 'Denim Craft Co.',
    verified: true,
    followerCount: '195K',
    isFollowed: false,
    videoId: 'fJ9rUzIMcZQ',
    backupVideoId: 'SIDp8-2be1Y',
    viewerCount: 2200,
    likeCount: 38400,
    title: '👖 Selvedge Vintage Denim Jackets & 8-Pocket Heavyweight Cargo Pants',
    description: '14.5oz raw and stone-washed Japanese shuttle loom denim. Sizing breakdown for every build live.',
    category: "Men's Fashion",
    featuredProductId: 'prod-1101',
    productIds: ['prod-1101', 'prod-1102', 'prod-1103'],
    tags: ['#DenimLovers', '#VintageDenim', '#CargoJeans', '#MensStreetwear']
  },

  // 12. Natasha Seth (Glamour Hair & Skin - Korean Skincare & Hair)
  {
    id: 'seller-12',
    sellerName: 'Natasha Seth',
    sellerAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
    storeName: 'Glamour Hair & Skin',
    verified: true,
    followerCount: '365K',
    isFollowed: false,
    videoId: 'kXYiU_JCYtU',
    backupVideoId: 'OPf0YbXqDm0',
    viewerCount: 3890,
    likeCount: 71200,
    title: '💆‍♀️ Live Scalp Demo: Rosemary Biotin Serum & Ceramic Styling Brush',
    description: 'Visible results in 21 days! Live try-on of heated ionic smoothing brush with zero heat damage.',
    category: 'Beauty',
    featuredProductId: 'prod-1201',
    productIds: ['prod-1201', 'prod-1202', 'prod-1203'],
    tags: ['#HairCareRoutine', '#BiotinSerum', '#GlassHair', '#BeautyTools']
  },

  // 13. Shreya Ghoshal (Indie Weaves Handloom - Banarasi & Kanjeevaram)
  {
    id: 'seller-13',
    sellerName: 'Shreya Ghoshal',
    sellerAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80',
    storeName: 'Indie Weaves Handloom',
    verified: true,
    followerCount: '490K',
    isFollowed: true,
    videoId: 'RgKAFK5djSk',
    backupVideoId: 'nWEckOp-v6A',
    viewerCount: 4520,
    likeCount: 94800,
    title: '👑 Pure Kanjeevaram Soft Silk & Banarasi Brocade Bridal Sarees',
    description: 'Direct from master weavers in Varanasi and Kanchipuram. Silk Mark certified genuine pure zari.',
    category: "Women's Fashion",
    featuredProductId: 'prod-1301',
    productIds: ['prod-1301', 'prod-1302', 'prod-1303'],
    tags: ['#Kanjeevaram', '#BanarasiSilk', '#HandloomLove', '#BridalSaree']
  },

  // 14. Siddharth Rao (AeroLuxe Eyewear - Polarized Sunglasses)
  {
    id: 'seller-14',
    sellerName: 'Siddharth Rao',
    sellerAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
    storeName: 'AeroLuxe Eyewear',
    verified: true,
    followerCount: '142K',
    isFollowed: false,
    videoId: 'JGwWNGJdvx8',
    backupVideoId: 'SIDp8-2be1Y',
    viewerCount: 1730,
    likeCount: 29800,
    title: '🕶️ Polarized Italian Acetate Shades & Blue-Cut Driving Frames',
    description: 'UV400 scratch-resistant TAC lenses. Water repellent anti-glare test performed live on camera!',
    category: 'Accessories',
    featuredProductId: 'prod-1401',
    productIds: ['prod-1401', 'prod-1402', 'prod-1403'],
    tags: ['#Sunglasses', '#PolarizedShades', '#RetroFrames', '#MensAccessories']
  },

  // 15. Pooja Batra (Silk Route Couture - Evening Gowns & Velvet Lehengas)
  {
    id: 'seller-15',
    sellerName: 'Pooja Batra',
    sellerAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    storeName: 'Silk Route Couture',
    verified: true,
    followerCount: '388K',
    isFollowed: false,
    videoId: 'e-ORhEE9VVg',
    backupVideoId: 'xZazxOeaUak',
    viewerCount: 3290,
    likeCount: 66400,
    title: '✨ Sequin Cocktail Evening Gowns & Regal Zardozi Velvet Anarkalis',
    description: 'Couture cuts with built-in corsets and flowy draping. Custom sizing available at zero extra charge.',
    category: "Women's Fashion",
    featuredProductId: 'prod-1501',
    productIds: ['prod-1501', 'prod-1502', 'prod-1503'],
    tags: ['#CocktailGown', '#VelvetAnarkali', '#RedCarpetLook', '#EveningWear']
  },

  // 16. Varun Dhawan (The Sneaker Vault - Retro Dunks & Suede Skaters)
  {
    id: 'seller-16',
    sellerName: 'Varun Dhawan',
    sellerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    storeName: 'The Sneaker Vault',
    verified: true,
    followerCount: '275K',
    isFollowed: false,
    videoId: 'uelHwf8o7_U',
    backupVideoId: 'EngW7tLk6R8',
    viewerCount: 2950,
    likeCount: 48700,
    title: '🔥 Suede Skater Dunks & Chunky Dad Trainers Drop & Sole Flexibility Test',
    description: 'Shock-absorbing EVA midsoles and grip tread testing. Exclusive box set packaging for live orders.',
    category: 'Sneakers',
    featuredProductId: 'prod-1601',
    productIds: ['prod-1601', 'prod-1602', 'prod-1603'],
    tags: ['#DunkSneakers', '#DadShoes', '#SneakerCulture', '#StreetStyle']
  },

  // 17. Ishita Sen (Artisan Leather Craft - Full Grain Handbags)
  {
    id: 'seller-17',
    sellerName: 'Ishita Sen',
    sellerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    storeName: 'Artisan Leather Craft',
    verified: true,
    followerCount: '225K',
    isFollowed: false,
    videoId: '09R8_2nJtjg',
    backupVideoId: 'kJQP7kiw5Fk',
    viewerCount: 2180,
    likeCount: 43100,
    title: '👜 Full-Grain Leather Work Totes & Vintage Saddle Crossbody Bags',
    description: 'Solid brass hardware with water-resistant wax treatment. Fits 16" laptops with padded compartment.',
    category: 'Accessories',
    featuredProductId: 'prod-1701',
    productIds: ['prod-1701', 'prod-1702', 'prod-1703'],
    tags: ['#LeatherBags', '#WorkTote', '#HandmadeLeather', '#ClassicStyle']
  },

  // 18. Kunal Bhasin (StreetCulture Outfits - Anime Tees & Parachute Pants)
  {
    id: 'seller-18',
    sellerName: 'Kunal Bhasin',
    sellerAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    storeName: 'StreetCulture Outfits',
    verified: true,
    followerCount: '310K',
    isFollowed: true,
    videoId: 'CevxZvSJLk8',
    backupVideoId: 'SIDp8-2be1Y',
    viewerCount: 3600,
    likeCount: 59300,
    title: '🛹 Acid-Wash Cyberpunk Anime Tees & Wide-Leg Bungee Parachute Pants',
    description: 'High-density screen prints that never crack after washes. Live styling with chunky sneakers.',
    category: "Men's Fashion",
    featuredProductId: 'prod-1801',
    productIds: ['prod-1801', 'prod-1802', 'prod-1803'],
    tags: ['#Streetwear', '#AnimeMerch', '#ParachutePants', '#UrbanFashion']
  },

  // 19. Ritu Phogat (Aura Scent Lab - French Artisanal Perfumes)
  {
    id: 'seller-19',
    sellerName: 'Ritu Phogat',
    sellerAvatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80',
    storeName: 'Aura Scent Lab',
    verified: true,
    followerCount: '198K',
    isFollowed: false,
    videoId: '3JZ_D3ELwOQ',
    backupVideoId: 'OPf0YbXqDm0',
    viewerCount: 2470,
    likeCount: 51200,
    title: '🌸 Velvet Oud, Warm Vanilla Amber & Pure Extrait de Parfum Showcase',
    description: '14+ hour longevity on clothes with French oil extracts. Free 5ml discovery atomizer with all orders.',
    category: 'Beauty',
    featuredProductId: 'prod-1901',
    productIds: ['prod-1901', 'prod-1902', 'prod-1903'],
    tags: ['#NichePerfume', '#VelvetOud', '#LongLastingFragrance', '#ScentLover']
  },

  // 20. Alisha Chinai (Vintage Thrift Haven - 90s Jackets & Sweaters)
  {
    id: 'seller-20',
    sellerName: 'Alisha Chinai',
    sellerAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    storeName: 'Vintage Thrift Haven',
    verified: true,
    followerCount: '260K',
    isFollowed: false,
    videoId: 'M7lc1UVf-VE',
    backupVideoId: 'xZazxOeaUak',
    viewerCount: 2890,
    likeCount: 63800,
    title: '🧥 90s Faux Fur Biker Jackets & Chunky Cable Knit Mohair Sweaters',
    description: 'Curated one-of-a-kind vintage aesthetics restored to showroom quality. Instant claim during live!',
    category: "Women's Fashion",
    featuredProductId: 'prod-2001',
    productIds: ['prod-2001', 'prod-2002', 'prod-2003'],
    tags: ['#VintageThrift', '#BikerJacket', '#KnitSweater', '#90sAesthetic']
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
      text: 'The Polki reflection is breathtaking! Ordered for wedding ceremony',
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
  ],
  'seller-7': [
    {
      id: 'c-701',
      userName: 'Tara Kapoor',
      userAvatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Every saree comes with matching unstitched blouse piece in pure raw silk!',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-702',
      userName: 'Bhavna K.',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      text: 'The Chanderi drape looks so graceful! Ordered in Sage Green ✨',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-8': [
    {
      id: 'c-801',
      userName: 'Aryan Oberoi',
      userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Drop-shoulder pump cover is 100% pre-shrunk cotton. Size up for oversized drape.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-802',
      userName: 'Karan J.',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      text: 'Need that acid wash pump cover ASAP! Just paid via UPI 🔥',
      timestamp: '2m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-9': [
    {
      id: 'c-901',
      userName: 'Simran Kaur',
      userAvatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Double memory foam padding in every jutti sole for all-day comfort!',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-902',
      userName: 'Harleen D.',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      text: 'Wore these to a sangeet and danced all night with zero pain! Buying my second pair.',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-10': [
    {
      id: 'c-1001',
      userName: 'Devika Roy',
      userAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: PVD gold coating lasts 2+ years without any tarnish or skin discoloration.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1002',
      userName: 'Sanya Malhotra',
      userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      text: 'The croissant dome ring is so chic! Stacked it with my watch ❤️',
      timestamp: '2m ago'
    }
  ],
  'seller-11': [
    {
      id: 'c-1101',
      userName: 'Armaan Khan',
      userAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Cargo pants have reinforced knee panels and deep utility pockets.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1102',
      userName: 'Rishabh P.',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      text: 'The denim wash looks super vintage in studio light. Ordered size 32!',
      timestamp: '3m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-12': [
    {
      id: 'c-1201',
      userName: 'Natasha Seth',
      userAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Heated brush has ionic tourmaline bristles that seal hair cuticles in one glide.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1202',
      userName: 'Meghna V.',
      userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      text: 'My frizz literally disappeared live on screen! Need that brush now 😍',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-13': [
    {
      id: 'c-1301',
      userName: 'Shreya Ghoshal',
      userAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Genuine zari testing certificate included with every Kanjeevaram parcel.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1302',
      userName: 'Ananya Nair',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      text: 'That royal crimson shade is so magnificent! Buying for my wedding trousseau.',
      timestamp: '2m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-14': [
    {
      id: 'c-1401',
      userName: 'Siddharth Rao',
      userAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: All frames come with premium magnetic hard case and micro-fiber lens cloth.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1402',
      userName: 'Gaurav K.',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: 'Acetate frame finish looks 10x better than cheap plastic glasses! Added to bag.',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-15': [
    {
      id: 'c-1501',
      userName: 'Pooja Batra',
      userAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Built-in boned corset provides effortless silhouette shaping.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1502',
      userName: 'Dia Mirza',
      userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      text: 'The sequin sparkle under chandelier light is breathtaking! ✨',
      timestamp: '2m ago'
    }
  ],
  'seller-16': [
    {
      id: 'c-1601',
      userName: 'Varun Dhawan',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Size guide: True to size. Wide feet friends can go half size up.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1602',
      userName: 'Yashwardhan S.',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      text: 'That suede texture is so buttery! Snagged UK 9 before it went out of stock.',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-17': [
    {
      id: 'c-1701',
      userName: 'Ishita Sen',
      userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Genuine vegetable-tanned leather develops rich vintage patina over years.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1702',
      userName: 'Radhika M.',
      userAvatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80',
      text: 'Perfect everyday office tote bag! Fits my MacBook and planner easily.',
      timestamp: '2m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-18': [
    {
      id: 'c-1801',
      userName: 'Kunal Bhasin',
      userAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: Parachute pants feature adjustable ankle toggles for tapered or wide hem.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1802',
      userName: 'Aditya Roy',
      userAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      text: 'The graphic tee fit is insanely good! Best streetwear brand on this app 🛹',
      timestamp: '1m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-19': [
    {
      id: 'c-1901',
      userName: 'Ritu Phogat',
      userAvatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: 30% oil concentration for long projection and rich sillage.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-1902',
      userName: 'Simran Jolly',
      userAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
      text: 'Warm vanilla with oud is the most intoxicating scent combo! Ordered 2 bottles.',
      timestamp: '2m ago',
      isVerifiedBuyer: true
    }
  ],
  'seller-20': [
    {
      id: 'c-2001',
      userName: 'Alisha Chinai',
      userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      text: 'Pinned: All thrift pieces dry cleaned and sanitized before shipping.',
      timestamp: 'Just now',
      isSeller: true,
      isPinned: true
    },
    {
      id: 'c-2002',
      userName: 'Tara Singhania',
      userAvatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80',
      text: 'That 90s biker jacket is iconic! Claimed mine instantly 🔥',
      timestamp: '1m ago',
      isVerifiedBuyer: true
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
