import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import type { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, size?: string, color?: string) => void;
  onRemoveItem: (productId: string, size?: string, color?: string) => void;
  subtotal: number;
  originalSubtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  onProceedToCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  subtotal,
  discount,
  deliveryFee,
  total,
  onProceedToCheckout
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'LIVE50') {
      setAppliedCoupon('LIVE50 (Extra ₹100 Off)');
      setCouponError('');
    } else {
      setCouponError('Invalid coupon. Try "LIVE50"');
    }
  };

  const finalTotal = appliedCoupon ? Math.max(0, total - 100) : total;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in pointer-events-auto">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-in Drawer Container */}
      <div className="relative w-full max-w-md h-full bg-neutral-900 border-l border-neutral-800 flex flex-col z-10 shadow-2xl overflow-hidden animate-slide-left">
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-500" />
            <h2 className="text-base font-bold text-white">Your Shopping Cart</h2>
            <span className="text-xs bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded-full font-medium">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center mb-4 text-neutral-500">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Your cart is empty</h3>
            <p className="text-xs text-neutral-400 max-w-xs mb-6">
              Catch exclusive live deals from the stream before limited stock runs out!
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-lg shadow-red-950/50"
            >
              Continue Watching Live
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Live Guarantee Banner */}
            <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-2.5 flex items-center gap-2 text-xs text-red-200">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
              <span>Live discounts reserved for 15 minutes. Checkout now to claim.</span>
            </div>

            {/* Item List */}
            {items.map((item, idx) => {
              const { product, selectedSize, selectedColor, quantity } = item;
              return (
                <div
                  key={`${product.id}-${selectedSize}-${selectedColor}-${idx}`}
                  className="bg-neutral-800/60 border border-neutral-700/60 rounded-xl p-3 flex gap-3 transition-colors hover:border-neutral-600"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-neutral-800 shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80';
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-semibold text-white truncate leading-snug">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(product.id, selectedSize, selectedColor)}
                          className="text-neutral-400 hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Variant tags */}
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {selectedSize && (
                          <span className="text-[10px] bg-neutral-700 text-neutral-300 px-1.5 py-0.5 rounded">
                            Size: {selectedSize}
                          </span>
                        )}
                        {selectedColor && (
                          <span className="text-[10px] bg-neutral-700 text-neutral-300 px-1.5 py-0.5 rounded">
                            {selectedColor}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-700/50">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-bold text-white">
                          ₹{(product.price * quantity).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-neutral-400 line-through">
                          ₹{(product.originalPrice * quantity).toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-neutral-900 rounded-lg p-0.5 border border-neutral-700">
                        <button
                          onClick={() =>
                            onUpdateQuantity(product.id, quantity - 1, selectedSize, selectedColor)
                          }
                          className="w-6 h-6 rounded flex items-center justify-center text-neutral-300 hover:bg-neutral-800 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1">{quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(product.id, quantity + 1, selectedSize, selectedColor)
                          }
                          className="w-6 h-6 rounded flex items-center justify-center text-neutral-300 hover:bg-neutral-800 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="pt-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Coupon (e.g. LIVE50)"
                    className="w-full pl-9 pr-3 py-2 bg-neutral-800/80 border border-neutral-700 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                  ✓ {appliedCoupon} applied!
                </p>
              )}
              {couponError && (
                <p className="text-[11px] text-red-400 font-medium mt-1">{couponError}</p>
              )}
            </form>
          </div>
        )}

        {/* Footer with Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-4 border-t border-neutral-800 bg-neutral-900/95 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Live Event Discount</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              {appliedCoupon && (
                <div className="flex justify-between text-emerald-400">
                  <span>Coupon LIVE50</span>
                  <span>-₹100</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-400">
                <span>Delivery Fee</span>
                <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
                <span>Total Amount</span>
                <span className="text-amber-400">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 justify-center text-[10px] text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Simulated Prototype • No Real Charges</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              id="proceed-checkout-button"
              className="w-full py-3 bg-red-600 hover:bg-red-500 active:scale-98 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-950/60 transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
