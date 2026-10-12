import { useState, useEffect } from 'react';
import { X, Star, ShieldCheck, Truck, Plus, Minus, ShoppingBag, Zap, Check } from 'lucide-react';
import type { Product } from '../../types';

interface ProductDetailsSheetProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size?: string, color?: string, quantity?: number) => void;
  onBuyNow: (product: Product, size?: string, color?: string, quantity?: number) => void;
}

export function ProductDetailsSheet({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}: ProductDetailsSheetProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [isAddedToast, setIsAddedToast] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.availableSizes?.[0]);
      setSelectedColor(product.availableColors?.[0]);
      setQuantity(1);
      setIsAddedToast(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setIsAddedToast(true);
    setTimeout(() => {
      setIsAddedToast(false);
    }, 1500);
  };

  const handleBuy = () => {
    onBuyNow(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/75 backdrop-blur-sm pointer-events-auto">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Sheet Container */}
      <div className="w-full max-w-lg mx-auto bg-neutral-900 border-t border-neutral-800 rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl animate-slide-up overflow-hidden">
        {/* Header */}
        <div className="p-3.5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/90">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Live Stream Special Offer
          </span>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close product details"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable details */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Main Product Image */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden bg-neutral-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80';
              }}
            />
            <span className="absolute top-2.5 right-2.5 bg-red-600 text-white text-xs font-black px-2 py-0.5 rounded-full shadow-lg">
              Save {product.discountPercentage}%
            </span>
          </div>

          {/* Title & Rating */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>{product.rating}</span>
              </div>
              <span className="text-xs text-neutral-400 font-medium">
                {product.category}
              </span>
              <span className="text-xs font-semibold text-red-400 ml-auto">
                🔥 Only {product.stock} items left
              </span>
            </div>

            <h1 className="text-base font-bold text-white leading-snug">
              {product.name}
            </h1>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-2.5 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/60">
            <span className="text-2xl font-black text-amber-300">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-neutral-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-full ml-auto">
              Flat {product.discountPercentage}% Off
            </span>
          </div>

          {/* Sizes */}
          {product.availableSizes && product.availableSizes.length > 0 && (
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                Select Size: <span className="text-white font-bold">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedSize === size
                        ? 'bg-red-600 text-white ring-2 ring-red-400'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {product.availableColors && product.availableColors.length > 0 && (
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                Select Color: <span className="text-white font-bold">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedColor === color
                        ? 'bg-white text-black font-bold ring-2 ring-red-500'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center justify-between py-2 border-t border-b border-neutral-800">
            <span className="text-xs font-semibold text-neutral-300">Quantity</span>
            <div className="flex items-center gap-3 bg-neutral-800 rounded-lg p-1 border border-neutral-700">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-7 h-7 rounded flex items-center justify-center text-neutral-300 hover:bg-neutral-700 hover:text-white"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm font-bold text-white px-1">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                className="w-7 h-7 rounded flex items-center justify-center text-neutral-300 hover:bg-neutral-700 hover:text-white"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-300 mb-1">Product Details</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Shipping & Trust */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-400 pt-1">
            <div className="flex items-center gap-1.5 bg-neutral-800/40 p-2 rounded-lg">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Fast 2-3 Day Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-800/40 p-2 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>7 Days Easy Return</span>
            </div>
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="p-3.5 border-t border-neutral-800 bg-neutral-900/95 flex gap-2.5">
          <button
            onClick={handleAdd}
            className={`flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 border ${
              isAddedToast
                ? 'bg-emerald-600 border-emerald-500 text-white'
                : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 text-white'
            }`}
          >
            {isAddedToast ? (
              <>
                <Check className="w-4 h-4" /> Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </>
            )}
          </button>

          <button
            onClick={handleBuy}
            className="flex-1 py-3 bg-red-600 hover:bg-red-500 active:scale-95 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-red-950/50 transition-all"
          >
            <Zap className="w-4 h-4 fill-white" /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
