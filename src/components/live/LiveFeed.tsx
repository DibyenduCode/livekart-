import { useState, useRef, useEffect, useCallback } from 'react';
import { YouTubeLivePlayer } from './YouTubeLivePlayer';
import { TopBarOverlay } from './TopBarOverlay';
import { LiveActionBar } from './LiveActionBar';
import { SellerOverlay } from './SellerOverlay';
import { ProductTray } from './ProductTray';
import { CartDrawer } from '../cart/CartDrawer';
import { CommentDrawer } from '../comments/CommentDrawer';
import { ProductCatalogDrawer } from '../products/ProductCatalogDrawer';
import { ProductDetailsSheet } from '../products/ProductDetailsSheet';
import type { Seller, Product, CartItem } from '../../types';
import { getProductsBySellerId, mockProducts } from '../../data/products';
import { Eye, Sparkles } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface LiveFeedProps {
  sellers: Seller[];
  currentSeller: Seller;
  currentIndex: number;
  totalSellers: number;
  onNextSeller: () => void;
  onPrevSeller: () => void;
  isLiked: boolean;
  onToggleLike: () => void;
  onToggleFollow: (sellerId: string) => void;
  comments: any[];
  onAddComment: (text: string) => void;
  floatingHearts: any[];
  isMuted: boolean;
  onToggleMute: () => void;
  streamError: boolean;
  onStreamErrorChange: (err: boolean) => void;

  // Cart props
  cartItems: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  cartOriginalSubtotal: number;
  cartDiscount: number;
  cartDeliveryFee: number;
  cartTotal: number;
  onAddToCart: (product: Product, size?: string, color?: string, quantity?: number) => void;
  onUpdateCartQuantity: (productId: string, quantity: number, size?: string, color?: string) => void;
  onRemoveCartItem: (productId: string, size?: string, color?: string) => void;
  onProceedToCheckout: () => void;
}

export function LiveFeed({
  sellers,
  currentSeller,
  currentIndex,
  totalSellers,
  onNextSeller,
  onPrevSeller,
  isLiked,
  onToggleLike,
  onToggleFollow,
  comments,
  onAddComment,
  floatingHearts,
  isMuted,
  onToggleMute,
  streamError,
  onStreamErrorChange,
  cartItems,
  cartCount,
  cartSubtotal,
  cartOriginalSubtotal,
  cartDiscount,
  cartDeliveryFee,
  cartTotal,
  onAddToCart,
  onUpdateCartQuantity,
  onRemoveCartItem,
  onProceedToCheckout
}: LiveFeedProps) {
  // Overlays state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Continuous Instagram Reels Vertical Scroll State
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startYRef = useRef<number | null>(null);
  const lastWheelTime = useRef<number>(0);

  // Products for current seller
  const sellerProducts = getProductsBySellerId(currentSeller.id);

  // Transition to next reel with Instagram Reels physics
  const triggerSlideNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDragOffsetY(-window.innerHeight * 0.4);

    setTimeout(() => {
      onNextSeller();
      setDragOffsetY(0);
      setIsTransitioning(false);
    }, 280);
  }, [isTransitioning, onNextSeller]);

  // Transition to previous reel with Instagram Reels physics
  const triggerSlidePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDragOffsetY(window.innerHeight * 0.4);

    setTimeout(() => {
      onPrevSeller();
      setDragOffsetY(0);
      setIsTransitioning(false);
    }, 280);
  }, [isTransitioning, onPrevSeller]);

  // Touch Handlers for 1:1 Finger Tracking
  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.product-tray-container')) return;
    if (isCartOpen || isCommentsOpen || isCatalogOpen || selectedProduct || isTransitioning) return;
    startYRef.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current === null || !isDragging || isTransitioning) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - startYRef.current;
    // Damped elastic tracking
    setDragOffsetY(diff * 0.85);
  };

  const handleTouchEnd = () => {
    if (startYRef.current === null || isTransitioning) return;
    setIsDragging(false);

    const threshold = 60;
    if (dragOffsetY < -threshold) {
      triggerSlideNext();
    } else if (dragOffsetY > threshold) {
      triggerSlidePrev();
    } else {
      // Snap back to current reel
      setDragOffsetY(0);
    }
    startYRef.current = null;
  };

  // Mouse Drag Handlers for Desktop Touch-Emulation
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.product-tray-container')) return;
    if ((e.target as HTMLElement).closest('button')) return;
    if (isCartOpen || isCommentsOpen || isCatalogOpen || selectedProduct || isTransitioning) return;
    startYRef.current = e.clientY;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startYRef.current === null || !isDragging || isTransitioning) return;
    const diff = e.clientY - startYRef.current;
    setDragOffsetY(diff * 0.85);
  };

  const handleMouseUpOrLeave = () => {
    if (startYRef.current === null || isTransitioning) return;
    setIsDragging(false);

    const threshold = 60;
    if (dragOffsetY < -threshold) {
      triggerSlideNext();
    } else if (dragOffsetY > threshold) {
      triggerSlidePrev();
    } else {
      setDragOffsetY(0);
    }
    startYRef.current = null;
  };

  // Mouse Wheel Navigation with Debounce
  const handleWheel = (e: React.WheelEvent) => {
    if (isCartOpen || isCommentsOpen || isCatalogOpen || selectedProduct || isTransitioning) return;
    const now = Date.now();
    if (now - lastWheelTime.current < 450) return;
    if (e.deltaY > 30) {
      lastWheelTime.current = now;
      triggerSlideNext();
    } else if (e.deltaY < -30) {
      lastWheelTime.current = now;
      triggerSlidePrev();
    }
  };

  // Keyboard navigation (Arrow Up / Down)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCartOpen || isCommentsOpen || isCatalogOpen || selectedProduct || isTransitioning) return;
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        triggerSlidePrev();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        triggerSlideNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerSlideNext, triggerSlidePrev, isCartOpen, isCommentsOpen, isCatalogOpen, selectedProduct, isTransitioning]);

  // Handle Buy Now (adds to cart & opens checkout immediately)
  const handleBuyNow = (
    product: Product,
    size?: string,
    color?: string,
    quantity = 1
  ) => {
    onAddToCart(product, size, color, quantity);
    setSelectedProduct(null);
    setIsCatalogOpen(false);
    onProceedToCheckout();
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onWheel={handleWheel}
      className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
    >
      {/* 9:16 Centered Viewport Frame */}
      <div className="relative w-full h-full max-w-[480px] bg-black overflow-hidden shadow-2xl flex flex-col justify-between">
        
        {/* Continuous Instagram Reels Stack Container */}
        <div
          className="w-full h-full flex flex-col"
          style={{
            transform: `translateY(calc(-${currentIndex * 100}% + ${dragOffsetY}px))`,
            transition: isDragging ? 'none' : 'transform 360ms cubic-bezier(0.2, 0.9, 0.3, 1)',
            willChange: 'transform'
          }}
        >
          {sellers.map((seller, idx) => {
            const isActive = idx === currentIndex;
            const isAdjacent = Math.abs(idx - currentIndex) === 1;
            const featuredProd = mockProducts.find((p) => p.id === seller.featuredProductId);

            return (
              <div
                key={seller.id}
                className="w-full h-full shrink-0 relative overflow-hidden bg-black flex flex-col justify-between"
              >
                {/* Active Reel Slide */}
                {isActive ? (
                  <>
                    {/* Continuous YouTube Live Video Player */}
                    <YouTubeLivePlayer
                      videoId={seller.videoId}
                      sellerName={seller.sellerName}
                      title={seller.title}
                      isMuted={isMuted}
                      onToggleMute={onToggleMute}
                      streamError={streamError}
                      onStreamErrorChange={onStreamErrorChange}
                    />

                    {/* Top Bar: LIVE badge, Viewers, Small Flow Button & Top-Right Cart */}
                    <TopBarOverlay
                      seller={seller}
                      cartCount={cartCount}
                      onOpenCart={() => setIsCartOpen(true)}
                      currentIndex={currentIndex}
                      totalSellers={totalSellers}
                      onFlowNext={() => {
                        soundFx.playTap();
                        triggerSlideNext();
                      }}
                    />

                    {/* Right-Side Action Bar: Like, Comment, Product Bag */}
                    <LiveActionBar
                      likeCount={seller.likeCount}
                      isLiked={isLiked}
                      onToggleLike={onToggleLike}
                      commentCount={comments.length}
                      onOpenComments={() => setIsCommentsOpen(true)}
                      productCount={sellerProducts.length}
                      onOpenProductCatalog={() => setIsCatalogOpen(true)}
                      floatingHearts={floatingHearts}
                      onNextSeller={triggerSlideNext}
                      onPrevSeller={triggerSlidePrev}
                    />

                    {/* Lower-Left Seller Information Overlay */}
                    <SellerOverlay
                      seller={seller}
                      onToggleFollow={onToggleFollow}
                    />

                    {/* Bottom Horizontal Side-Scrollable Product Tray */}
                    <ProductTray
                      products={sellerProducts}
                      featuredProductId={seller.featuredProductId}
                      onSelectProduct={(p) => setSelectedProduct(p)}
                      onAddToCart={(p) => onAddToCart(p)}
                    />
                  </>
                ) : isAdjacent ? (
                  /* Adjacent Reel Preview (Seen sliding up/down during drag) */
                  <div className="relative w-full h-full bg-neutral-950 overflow-hidden flex flex-col justify-between p-4">
                    {/* High-res fashion poster thumbnail */}
                    <img
                      src={featuredProd?.image || seller.sellerAvatar}
                      alt={seller.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-75 scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />

                    {/* Preview Top Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-red-500/40">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        <span className="text-[11px] font-black text-red-500 uppercase">LIVE</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-white">
                        <Eye className="w-3.5 h-3.5 text-neutral-300" />
                        <span>{seller.viewerCount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Preview Lower Info */}
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={seller.sellerAvatar}
                          alt={seller.sellerName}
                          className="w-10 h-10 rounded-full border-2 border-red-500 object-cover"
                        />
                        <div>
                          <p className="text-sm font-bold text-white">{seller.sellerName}</p>
                          <p className="text-[11px] text-neutral-300">@{seller.storeName}</p>
                        </div>
                      </div>
                      <p className="text-xs font-medium text-white/95 line-clamp-2">{seller.title}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-300">
                        <Sparkles className="w-3 h-3" />
                        <span>Slide to watch live broadcast</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Far offscreen slide */
                  <div className="w-full h-full bg-black" />
                )}
              </div>
            );
          })}
        </div>

        {/* Instagram Reels Progress Vertical Micro-Indicator */}
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-30 pointer-events-none">
          {Array.from({ length: totalSellers }).map((_, idx) => (
            <span
              key={idx}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-1.5 h-4 bg-red-500 shadow-md'
                  : 'w-1 h-1 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* OVERLAY DRAWERS (Preserves live stream playing in background) */}

      {/* 1. Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={onUpdateCartQuantity}
        onRemoveItem={onRemoveCartItem}
        subtotal={cartSubtotal}
        originalSubtotal={cartOriginalSubtotal}
        discount={cartDiscount}
        deliveryFee={cartDeliveryFee}
        total={cartTotal}
        onProceedToCheckout={onProceedToCheckout}
      />

      {/* 2. Comments Drawer */}
      <CommentDrawer
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={comments}
        onAddComment={onAddComment}
        sellerName={currentSeller.sellerName}
      />

      {/* 3. Product Catalog Drawer (Action Bar Bag Icon) */}
      <ProductCatalogDrawer
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        products={sellerProducts}
        featuredProductId={currentSeller.featuredProductId}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p) => onAddToCart(p)}
        onBuyNow={(p) => handleBuyNow(p)}
        sellerName={currentSeller.sellerName}
      />

      {/* 4. Product Details Sheet */}
      <ProductDetailsSheet
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, size, color, qty) => onAddToCart(p, size, color, qty)}
        onBuyNow={(p, size, color, qty) => handleBuyNow(p, size, color, qty)}
      />
    </div>
  );
}
