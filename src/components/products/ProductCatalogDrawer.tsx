import { X, ShoppingBag, Pin, Star, Plus, Zap } from 'lucide-react';
import type { Product } from '../../types';

interface ProductCatalogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  featuredProductId: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  sellerName: string;
}

export function ProductCatalogDrawer({
  isOpen,
  onClose,
  products,
  featuredProductId,
  onSelectProduct,
  onAddToCart,
  onBuyNow,
  sellerName
}: ProductCatalogDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm pointer-events-auto">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-neutral-900 border-l border-neutral-800 flex flex-col z-10 shadow-2xl overflow-hidden animate-slide-left">
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base font-bold text-white">Live Showcase Products</h2>
              <p className="text-[11px] text-neutral-400">Curated by {sellerName}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close catalog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Product List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {products.map((product) => {
            const isFeatured = product.id === featuredProductId;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isFeatured
                    ? 'bg-neutral-800/90 border-amber-400/80 ring-1 ring-amber-400/30'
                    : 'bg-neutral-800/40 border-neutral-700/60 hover:border-neutral-600'
                }`}
              >
                <div className="flex gap-3">
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-neutral-800 shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                    {isFeatured && (
                      <span className="absolute top-0 left-0 bg-amber-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded-br flex items-center gap-0.5">
                        <Pin className="w-2.5 h-2.5 fill-black" /> PINNED
                      </span>
                    )}
                    <span className="absolute bottom-0 right-0 bg-red-600 text-white text-[9px] font-black px-1 rounded-tl">
                      -{product.discountPercentage}%
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold mb-0.5">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-neutral-500">•</span>
                        <span className="text-neutral-400">Only {product.stock} left</span>
                      </div>
                      <h3 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-sm font-extrabold text-amber-300">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-neutral-700/50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="flex-1 py-1.5 bg-neutral-700 hover:bg-neutral-600 active:scale-95 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add to Cart
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBuyNow(product);
                    }}
                    className="flex-1 py-1.5 bg-red-600 hover:bg-red-500 active:scale-95 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-all shadow-md"
                  >
                    <Zap className="w-3.5 h-3.5 fill-white" /> Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
