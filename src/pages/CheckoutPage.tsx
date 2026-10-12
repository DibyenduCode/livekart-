import { useState } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle, CreditCard, Banknote, Smartphone, Check, Sparkles } from 'lucide-react';
import type { CartItem, Order } from '../types';

interface CheckoutPageProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  onBack: () => void;
  onOrderPlaced: (order: Order) => void;
}

export function CheckoutPage({
  items,
  subtotal,
  discount,
  deliveryFee,
  total,
  onBack,
  onOrderPlaced
}: CheckoutPageProps) {
  const [fullName, setFullName] = useState('Aarav Sharma');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [addressLine, setAddressLine] = useState('Flat 402, Lotus Grandeur, 12th Main Road, Indiranagar');
  const [city, setCity] = useState('Bengaluru');
  const [state, setState] = useState('Karnataka');
  const [pincode, setPincode] = useState('560038');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD'>('UPI');
  const [isPlacing, setIsPlacing] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  const handlePlaceOrder = (e?: React.SyntheticEvent) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setIsPlacing(true);

    setTimeout(() => {
      const newOrder: Order = {
        id: 'ORD-' + Math.floor(10000 + Math.random() * 90000),
        date: new Date().toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Processing',
        items: [...items],
        subtotal,
        discount,
        deliveryFee,
        total,
        shippingAddress: {
          fullName,
          phone,
          addressLine,
          city,
          state,
          pincode
        },
        paymentMethod,
        estimatedDelivery: 'Estimated 2-3 Days via Express Courier'
      };

      setIsPlacing(false);
      setPlacedOrder(newOrder);
      onOrderPlaced(newOrder);
    }, 600);
  };

  if (placedOrder) {
    return (
      <div className="w-full h-full bg-neutral-950 text-white flex flex-col items-center justify-center p-6 text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-emerald-950/60 border-2 border-emerald-500/80 flex items-center justify-center mb-4 text-emerald-400 shadow-xl animate-scale-in">
          <Check className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Order Placed Successfully
        </span>
        <h1 className="text-2xl font-black text-white mb-2">Thank you, {fullName}!</h1>
        <p className="text-xs text-neutral-400 max-w-sm mb-6 leading-relaxed">
          Your live shopping order <span className="text-white font-mono font-bold">{placedOrder.id}</span> has been confirmed. You will receive SMS updates shortly.
        </p>

        {/* Order Details Card */}
        <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl p-4 text-left text-xs space-y-2.5 mb-6 shadow-xl">
          <div className="flex justify-between border-b border-neutral-800 pb-2">
            <span className="text-neutral-400">Total Amount</span>
            <span className="font-extrabold text-amber-300 text-sm">
              ₹{placedOrder.total.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Payment Mode</span>
            <span className="font-semibold text-white">{placedOrder.paymentMethod} (Simulated)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Delivery To</span>
            <span className="font-semibold text-white truncate max-w-[180px]">{city}, {pincode}</span>
          </div>
          <div className="flex justify-between text-emerald-400 font-medium">
            <span>Estimated Delivery</span>
            <span>2-3 Days</span>
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full max-w-sm py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-lg shadow-red-950/50"
        >
          Return to Live Video Stream
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-neutral-950 text-white overflow-y-auto p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white flex items-center justify-center transition-colors"
          aria-label="Back to live stream"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-white">Live Instant Checkout</h1>
          <p className="text-[11px] text-neutral-400">Fast simulated checkout prototype</p>
        </div>
      </div>

      {/* Demo notice banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center gap-2 text-xs text-neutral-300">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Demo checkout simulation. No real money or card details processed.</span>
      </div>

      <form onSubmit={handlePlaceOrder} className="space-y-4">
        {/* Shipping Address Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3 shadow-lg">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">
            1. Delivery Address
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="text-[11px] text-neutral-400 block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-neutral-400 block mb-1">Mobile Number</label>
              <input
                type="text"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] text-neutral-400 block mb-1">Street Address</label>
            <input
              type="text"
              required
              value={addressLine}
              onChange={(e) => setAddressLine(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="text-[11px] text-neutral-400 block mb-1">City</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-neutral-400 block mb-1">State</label>
              <input
                type="text"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-neutral-400 block mb-1">Pincode</label>
              <input
                type="text"
                required
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">
              2. Payment Method
            </h2>
            <span className="text-[10px] text-amber-400 font-semibold">Demo Modes</span>
          </div>

          <div className="space-y-2">
            {/* UPI */}
            <label
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                paymentMethod === 'UPI'
                  ? 'bg-neutral-800 border-red-500 ring-1 ring-red-500/50'
                  : 'bg-neutral-800/40 border-neutral-700 hover:border-neutral-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'UPI'}
                  onChange={() => setPaymentMethod('UPI')}
                  className="accent-red-600"
                />
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      UPI (GPay / PhonePe / Paytm / BHIM)
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      Instant simulated verification
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-950/60 text-emerald-400 px-2 py-0.5 rounded font-bold">
                FAST
              </span>
            </label>

            {/* Credit / Debit Card */}
            <label
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                paymentMethod === 'Card'
                  ? 'bg-neutral-800 border-red-500 ring-1 ring-red-500/50'
                  : 'bg-neutral-800/40 border-neutral-700 hover:border-neutral-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'Card'}
                  onChange={() => setPaymentMethod('Card')}
                  className="accent-red-600"
                />
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-sky-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Credit / Debit Card
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      Visa, Mastercard, RuPay
                    </span>
                  </div>
                </div>
              </div>
            </label>

            {/* COD */}
            <label
              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                paymentMethod === 'COD'
                  ? 'bg-neutral-800 border-red-500 ring-1 ring-red-500/50'
                  : 'bg-neutral-800/40 border-neutral-700 hover:border-neutral-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'COD'}
                  onChange={() => setPaymentMethod('COD')}
                  className="accent-red-600"
                />
                <div className="flex items-center gap-2">
                  <Banknote className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Cash on Delivery
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      Pay upon package arrival
                    </span>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3 shadow-lg">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">
            3. Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
          </h2>

          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-10 h-10 rounded-lg object-cover bg-neutral-800 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">{item.product.name}</h4>
                  <p className="text-[10px] text-neutral-400">
                    Qty: {item.quantity} {item.selectedSize ? `• Size: ${item.selectedSize}` : ''}
                  </p>
                </div>
                <span className="font-bold text-white shrink-0">
                  ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800 space-y-1.5 text-xs">
            <div className="flex justify-between text-neutral-400">
              <span>Items Total</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Live Discount Savings</span>
                <span>-₹{discount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between text-neutral-400">
              <span>Express Delivery</span>
              <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
            </div>
            <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-neutral-800">
              <span>Total Payable</span>
              <span className="text-amber-400">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={() => handlePlaceOrder()}
          id="place-demo-order-button"
          disabled={isPlacing || items.length === 0}
          className="w-full py-3.5 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white text-sm font-black rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-red-950/60 transition-all active:scale-98 cursor-pointer"
        >
          {isPlacing ? (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              <span>Confirming Demo Order...</span>
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Place Demo Order (₹{total.toLocaleString('en-IN')})</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
