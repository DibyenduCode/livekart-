import { Plus, Pin, Sparkles, Check } from 'lucide-react';
import { useState, useRef } from 'react';
import type { Product } from '../../types';

interface ProductTrayProps {
  products: Product[];
  featuredProductId: string;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductTray({
  products,
  featuredProductId,
  onSelectProduct,
  onAddToCart
}: ProductTrayProps) {
  const [addedId, setAddedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mouse Drag-to-Scroll State (Desktop Fingertip Emulation)
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handleCardClick = (product: Product) => {
    if (hasMoved) return; // Ignore click if user was dragging with fingertip/mouse
    onSelectProduct(product);
  };

  // Sort so featured product is first
  const sortedProducts = [...products].sort((a, b) => {
    if (a.id === featuredProductId) return -1;
    if (b.id === featuredProductId) return 1;
    return 0;
  });

  return (
    <div
      className="product-tray-container absolute left-0 right-0 bottom-2 z-20 px-3 pointer-events-auto select-none"
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Product Tray Header Pill (Clean and minimal, NO ARROWS) */}
      <div className="flex items-center justify-between mb-1 px-1">
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-white/90 border border-white/10">
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          <span className="font-bold">Live Catalog ({sortedProducts.length})</span>
          <span className="text-[9px] text-neutral-400">• Swipe with fingertip</span>
        </div>
      </div>

      {/* Horizontal Side Scrollable Product List (NO ARROWS - Fingertip & Drag Scroll) */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex items-center gap-2 overflow-x-auto scroll-smooth no-scrollbar py-1 overscroll-x-contain touch-pan-x cursor-grab active:cursor-grabbing ${
          isMouseDown ? 'cursor-grabbing' : ''
        }`}
        style={{
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x'
        }}
      >
        {sortedProducts.map((product) => {
          const isFeatured = product.id === featuredProductId;
          const isJustAdded = addedId === product.id;

          return (
            <div
              key={product.id}
              onClick={() => handleCardClick(product)}
              className={`flex-shrink-0 flex items-center gap-2.5 p-1.5 rounded-xl backdrop-blur-md cursor-pointer transition-all duration-200 active:scale-98 border shadow-xl ${
                isFeatured
                  ? 'bg-neutral-900/90 border-amber-400/80 hover:border-amber-400 w-56 sm:w-64 ring-1 ring-amber-400/40'
                  : 'bg-black/80 border-white/20 hover:border-white/40 w-52 sm:w-60'
              }`}
            >
              {/* Product Thumbnail with Featured Badge */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 bg-neutral-800 pointer-events-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80';
                  }}
                />

                {isFeatured && (
                  <span className="absolute top-0 left-0 bg-amber-500 text-black text-[8px] font-black px-1 py-0.5 rounded-br flex items-center gap-0.5">
                    <Pin className="w-2 h-2 fill-black" /> PIN
                  </span>
                )}

                <span className="absolute bottom-0 right-0 bg-red-600 text-white text-[8px] font-black px-1 rounded-tl">
                  -{product.discountPercentage}%
                </span>
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-xs font-semibold text-white truncate leading-snug">
                  {product.name}
                </h4>

                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-xs font-bold text-amber-300">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-neutral-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <span className="text-[9px] text-emerald-400 font-medium flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" /> In Stock
                  </span>

                  {/* Add to Cart Action */}
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    aria-label={`Add ${product.name} to cart`}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all active:scale-95 ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : isFeatured
                        ? 'bg-amber-400 hover:bg-amber-300 text-black font-extrabold shadow-sm'
                        : 'bg-white/20 hover:bg-white/30 text-white border border-white/20'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-2.5 h-2.5" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-2.5 h-2.5" /> Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
