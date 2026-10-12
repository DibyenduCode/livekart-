import { useState, useMemo } from 'react';
import { Search, Flame, Eye, Radio, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Seller } from '../types';
import { mockProducts } from '../data/products';

interface DiscoverPageProps {
  sellers: Seller[];
  onSelectSeller: (sellerId: string) => void;
}

export function DiscoverPage({ sellers, onSelectSeller }: DiscoverPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    "Women's Fashion",
    "Men's Fashion",
    'Beauty',
    'Sneakers',
    'Accessories',
    'Tech & Lifestyle'
  ];

  const filteredSellers = useMemo(() => {
    return sellers.filter((seller) => {
      const matchesSearch =
        seller.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seller.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' || seller.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [sellers, searchQuery, selectedCategory]);

  return (
    <div className="w-full h-full bg-neutral-950 text-white overflow-y-auto p-4 space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Flame className="w-5 h-5 text-red-500" />
          <h1 className="text-xl font-black tracking-tight text-white">
            Discover Live Shopping
          </h1>
        </div>
        <p className="text-xs text-neutral-400">
          Explore real-time broadcasts, limited flash drops, and host try-ons
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search live sellers, kurtas, linen shirts, lip oils..."
          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
        />
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Active Live Broadcasts Grid */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
            <h2 className="text-sm font-bold text-white">
              Currently Streaming ({filteredSellers.length})
            </h2>
          </div>
          <span className="text-[11px] text-neutral-400">Tap to join stream</span>
        </div>

        {filteredSellers.length === 0 ? (
          <div className="bg-neutral-900 rounded-xl p-8 text-center border border-neutral-800">
            <Search className="w-8 h-8 text-neutral-600 mx-auto mb-2" />
            <h3 className="text-sm font-bold text-white mb-1">No live sellers found</h3>
            <p className="text-xs text-neutral-400">
              Try adjusting your search query or selecting "All" categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredSellers.map((seller) => {
              const featuredProd = mockProducts.find(
                (p) => p.id === seller.featuredProductId
              );

              return (
                <div
                  key={seller.id}
                  onClick={() => onSelectSeller(seller.id)}
                  className="bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 active:scale-98 group shadow-lg flex flex-col justify-between"
                >
                  {/* Card Visual Header */}
                  <div className="relative h-44 bg-neutral-800 overflow-hidden">
                    <img
                      src={
                        featuredProd?.image ||
                        seller.sellerAvatar
                      }
                      alt={seller.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/60" />

                    {/* LIVE DEMO Pill */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-red-500/40">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="text-[10px] font-black text-red-500 uppercase">
                        LIVE
                      </span>
                    </div>

                    {/* Viewers Pill */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-semibold text-white/90">
                      <Eye className="w-3 h-3 text-neutral-300" />
                      <span>{seller.viewerCount.toLocaleString('en-IN')}</span>
                    </div>

                    {/* Featured Product Overlay Tag */}
                    {featuredProd && (
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/70 backdrop-blur-md p-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                        <img
                          src={featuredProd.image}
                          alt={featuredProd.name}
                          className="w-8 h-8 rounded object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-semibold text-white truncate">
                            {featuredProd.name}
                          </p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-[11px] font-bold text-amber-300">
                              ₹{featuredProd.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[9px] text-neutral-400 line-through">
                              ₹{featuredProd.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                        <span className="text-[9px] font-bold text-red-400 shrink-0">
                          -{featuredProd.discountPercentage}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <img
                        src={seller.sellerAvatar}
                        alt={seller.sellerName}
                        className="w-7 h-7 rounded-full object-cover border border-red-500/60"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-white truncate">
                            {seller.sellerName}
                          </span>
                          {seller.verified && (
                            <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                          )}
                        </div>
                        <span className="text-[10px] text-neutral-400 truncate block">
                          @{seller.storeName} • {seller.followerCount} followers
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xs font-medium text-neutral-200 line-clamp-2 leading-relaxed">
                      {seller.title}
                    </h3>

                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-neutral-800 text-[11px]">
                      <span className="text-neutral-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {seller.category}
                      </span>
                      <span className="font-bold text-red-500 group-hover:translate-x-1 transition-transform">
                        Watch Stream →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
