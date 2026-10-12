import { CheckCircle2, UserPlus, UserCheck, Sparkles, Plus } from 'lucide-react';
import type { Seller } from '../../types';
import { soundFx } from '../../utils/soundEffects';

interface SellerOverlayProps {
  seller: Seller;
  onToggleFollow: (sellerId: string) => void;
  onOpenStoreInfo?: () => void;
}

export function SellerOverlay({ seller, onToggleFollow }: SellerOverlayProps) {
  return (
    <div className="absolute left-3 bottom-24 right-20 z-20 flex flex-col gap-2 pointer-events-auto max-w-[calc(100%-80px)] select-none">
      {/* Seller Header: Avatar, Name, Store, Small Follow Button */}
      <div className="flex items-center gap-2">
        {/* Host Avatar with Small Circular TikTok Follow Button */}
        <div className="relative shrink-0">
          <img
            src={seller.sellerAvatar}
            alt={seller.sellerName}
            className="w-10 h-10 rounded-full object-cover border-2 border-red-500 shadow-md"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';
            }}
          />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[7px] font-black px-1 rounded-sm uppercase tracking-tighter shadow-sm">
            LIVE
          </span>

          {/* Small Avatar Follow '+' Button (TikTok Signature Follow Button) */}
          {!seller.isFollowed ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                soundFx.playTap();
                onToggleFollow(seller.id);
              }}
              id="avatar-follow-button"
              aria-label={`Follow ${seller.sellerName}`}
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center border border-black shadow-md hover:scale-110 active:scale-90 transition-all font-black text-[11px]"
              title="Follow Host"
            >
              <Plus className="w-2.5 h-2.5 stroke-[3]" />
            </button>
          ) : (
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-black flex items-center justify-center border border-black shadow-md font-black text-[9px]">
              ✓
            </span>
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-white truncate drop-shadow-md">
              {seller.sellerName}
            </span>
            {seller.verified && (
              <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0 fill-sky-400/20" />
            )}
          </div>
          <span className="text-[10px] text-neutral-300 truncate drop-shadow">
            @{seller.storeName}
          </span>
        </div>

        {/* Small Follow / Flow Button */}
        <button
          onClick={() => {
            soundFx.playTap();
            onToggleFollow(seller.id);
          }}
          id="seller-follow-button"
          aria-label={seller.isFollowed ? 'Unfollow seller' : 'Follow seller'}
          className={`ml-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 transition-all active:scale-95 shadow-md ${
            seller.isFollowed
              ? 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20'
              : 'bg-red-600 hover:bg-red-500 text-white border border-red-400'
          }`}
        >
          {seller.isFollowed ? (
            <>
              <UserCheck className="w-2.5 h-2.5 text-emerald-300" />
              <span>Following</span>
            </>
          ) : (
            <>
              <UserPlus className="w-2.5 h-2.5" />
              <span>Follow</span>
            </>
          )}
        </button>
      </div>

      {/* Live Stream Title & Highlights */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xs font-medium text-white/95 line-clamp-2 leading-relaxed drop-shadow-md">
          {seller.title}
        </h2>

        {/* Tags / Promo Pill */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            <Sparkles className="w-2.5 h-2.5" />
            Live Deals Active
          </span>
          {seller.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-neutral-300/90 font-medium drop-shadow"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
