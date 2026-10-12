import { Heart, MessageCircle, ShoppingBag, Share2, ChevronUp, ChevronDown } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  color: string;
}

interface LiveActionBarProps {
  likeCount: number;
  isLiked: boolean;
  onToggleLike: () => void;
  commentCount: number;
  onOpenComments: () => void;
  productCount: number;
  onOpenProductCatalog: () => void;
  floatingHearts: FloatingHeart[];
  onNextSeller: () => void;
  onPrevSeller: () => void;
}

export function LiveActionBar({
  likeCount,
  isLiked,
  onToggleLike,
  commentCount,
  onOpenComments,
  productCount,
  onOpenProductCatalog,
  floatingHearts,
  onNextSeller,
  onPrevSeller
}: LiveActionBarProps) {
  const formattedLikes =
    likeCount >= 1000 ? (likeCount / 1000).toFixed(1) + 'k' : likeCount.toString();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Watch Live Shopping Stream',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <aside className="absolute right-3 bottom-28 z-30 flex flex-col items-center gap-4 pointer-events-auto">
      {/* Floating Hearts Animation Container */}
      <div className="absolute -top-32 right-2 pointer-events-none w-20 h-32 overflow-visible">
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute bottom-0 animate-heart-float"
            style={{ left: `${heart.left}px` }}
          >
            <Heart
              className="w-7 h-7 drop-shadow-md"
              fill={heart.color}
              color={heart.color}
            />
          </div>
        ))}
      </div>

      {/* 1. LIKE BUTTON (Circular Action Button 1) */}
      <div className="flex flex-col items-center">
        <button
          onClick={onToggleLike}
          id="action-like-button"
          aria-label={isLiked ? 'Unlike live stream' : 'Like live stream'}
          className={`w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-200 active:scale-125 shadow-xl ${
            isLiked
              ? 'bg-red-600/90 border-red-400 text-white shadow-red-900/50'
              : 'bg-black/60 border-white/20 text-white hover:bg-black/80 hover:border-white/40'
          }`}
        >
          <Heart
            className={`w-6 h-6 transition-transform ${isLiked ? 'scale-110 fill-white' : ''}`}
          />
        </button>
        <span className="text-[11px] font-bold text-white drop-shadow-md mt-1">
          {formattedLikes}
        </span>
      </div>

      {/* 2. COMMENT BUTTON (Circular Action Button 2) */}
      <div className="flex flex-col items-center">
        <button
          onClick={onOpenComments}
          id="action-comment-button"
          aria-label="Open comments panel"
          className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 flex items-center justify-center text-white hover:bg-black/80 active:scale-95 transition-all shadow-xl"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
        <span className="text-[11px] font-bold text-white drop-shadow-md mt-1">
          {commentCount}
        </span>
      </div>

      {/* 3. PRODUCT / CART BUTTON (Circular Action Button 3) */}
      <div className="flex flex-col items-center">
        <button
          onClick={onOpenProductCatalog}
          id="action-product-bag-button"
          aria-label="View live showcased products"
          className="relative w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/50 hover:border-amber-400 flex items-center justify-center text-amber-300 hover:bg-black/80 active:scale-95 transition-all shadow-xl group"
        >
          <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />

          {/* Product count pill */}
          <span className="absolute -top-1 -right-1 min-w-[18px] h-4 px-1 bg-amber-500 text-black text-[10px] font-black rounded-full flex items-center justify-center border border-black shadow">
            {productCount}
          </span>
        </button>
        <span className="text-[11px] font-bold text-amber-300 drop-shadow-md mt-1">
          Shop
        </span>
      </div>

      {/* Quick Share Button */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleShare}
          aria-label="Share live stream"
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/30 flex items-center justify-center text-neutral-300 hover:text-white active:scale-95 transition-all shadow-lg"
        >
          <Share2 className="w-4 h-4" />
        </button>
        <span className="text-[10px] font-medium text-neutral-400 drop-shadow mt-0.5">
          Share
        </span>
      </div>

      {/* Stream Navigators (Up/Down) for Desktop & Accessible Touch */}
      <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
        <button
          onClick={onPrevSeller}
          aria-label="Previous live stream"
          title="Previous stream (or swipe down)"
          className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 text-white/70 hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        <button
          onClick={onNextSeller}
          aria-label="Next live stream"
          title="Next stream (or swipe up)"
          className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 text-white/70 hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
