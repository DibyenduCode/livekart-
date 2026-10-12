import { ShoppingCart, Radio, Eye, Zap } from 'lucide-react';
import type { Seller } from '../../types';

interface TopBarOverlayProps {
  seller: Seller;
  cartCount: number;
  onOpenCart: () => void;
  currentIndex: number;
  totalSellers: number;
  onFlowNext?: () => void;
}

export function TopBarOverlay({
  seller,
  cartCount,
  onOpenCart,
  currentIndex,
  totalSellers,
  onFlowNext
}: TopBarOverlayProps) {
  const formattedViewers =
    seller.viewerCount >= 1000
      ? (seller.viewerCount / 1000).toFixed(1) + 'k'
      : seller.viewerCount.toString();

  return (
    <header className="absolute top-0 left-0 right-0 z-30 pt-3 px-3 flex items-center justify-between pointer-events-auto select-none">
      {/* Top Left: LIVE Badge + Viewer Count + Small Flow Button */}
      <div className="flex items-center gap-2">
        {/* LIVE DEMO Pill */}
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-red-500/30 px-2.5 py-1 rounded-full shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-[11px] font-black tracking-wider text-red-500 uppercase">
            LIVE
          </span>
          <span className="text-[9px] bg-red-600/30 text-red-300 font-bold px-1.5 py-0.5 rounded ml-0.5 uppercase tracking-tighter">
            DEMO
          </span>
        </div>

        {/* Real-time Viewers Count */}
        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-white/90 text-xs font-semibold shadow-lg">
          <Eye className="w-3.5 h-3.5 text-neutral-300" />
          <span>{formattedViewers}</span>
        </div>

        {/* Small Live Flow Button */}
        <button
          onClick={onFlowNext}
          id="live-flow-button"
          aria-label="Flow to next live stream"
          title="Flow to next live stream (⚡)"
          className="flex items-center gap-1 bg-gradient-to-r from-amber-500/25 to-yellow-500/25 hover:from-amber-500/40 hover:to-yellow-500/40 active:scale-95 border border-amber-400/50 hover:border-amber-400/80 px-2.5 py-0.5 rounded-full text-[10px] text-amber-300 font-bold shadow-md transition-all cursor-pointer group"
        >
          <Zap className="w-2.5 h-2.5 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform animate-pulse" />
          <span>Flow</span>
        </button>

        {/* Seller Stream Position Indicator */}
        <div className="hidden sm:flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full text-[11px] text-white/70 font-medium">
          <Radio className="w-3 h-3 text-red-400" />
          <span>{currentIndex + 1}/{totalSellers}</span>
        </div>
      </div>

      {/* Top Right: Cart Floating Action Button (Matches Hand-Drawn Sketch) */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenCart}
          id="top-cart-button"
          aria-label={`Open shopping cart (${cartCount} items)`}
          className="relative w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/40 active:scale-95 transition-all shadow-xl group"
        >
          <ShoppingCart className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />

          {/* Cart Item Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-600 text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-lg border-2 border-black animate-scale-in">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
