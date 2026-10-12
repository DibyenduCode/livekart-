import { Package, Truck, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import type { Order } from '../types';

interface OrdersPageProps {
  orders: Order[];
  onContinueShopping: () => void;
}

export function OrdersPage({ orders, onContinueShopping }: OrdersPageProps) {
  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'Delivered':
        return {
          bg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400',
          icon: CheckCircle
        };
      case 'Out for Delivery':
      case 'Shipped':
        return {
          bg: 'bg-sky-950/40 border-sky-500/30 text-sky-400',
          icon: Truck
        };
      default:
        return {
          bg: 'bg-amber-950/40 border-amber-500/30 text-amber-400',
          icon: Clock
        };
    }
  };

  return (
    <div className="w-full h-full bg-neutral-950 text-white overflow-y-auto p-4 space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Package className="w-5 h-5 text-red-500" />
          <h1 className="text-xl font-black tracking-tight text-white">My Live Orders</h1>
        </div>
        <p className="text-xs text-neutral-400">
          Track packages purchased through instant live checkout
        </p>
      </div>

      {/* Demo Notice */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center justify-between text-xs text-neutral-400">
        <span>Showing simulated live order history</span>
        <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded font-mono">
          DEMO ENVIRONMENT
        </span>
      </div>

      {/* Order List */}
      {orders.length === 0 ? (
        <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-neutral-800">
          <Package className="w-10 h-10 text-neutral-600 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-white mb-1">No orders placed yet</h3>
          <p className="text-xs text-neutral-400 mb-4">
            Join any active live stream and add products directly to cart!
          </p>
          <button
            onClick={onContinueShopping}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-full transition-colors"
          >
            Watch Live Stream
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => {
            const badge = getStatusBadge(order.status);
            const StatusIcon = badge.icon;

            return (
              <div
                key={order.id}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-3 shadow-lg"
              >
                {/* Order Top Bar */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                  <div>
                    <span className="text-xs font-bold text-white">{order.id}</span>
                    <p className="text-[10px] text-neutral-400">{order.date}</p>
                  </div>

                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${badge.bg}`}
                  >
                    <StatusIcon className="w-3.5 h-3.5" />
                    <span>{order.status}</span>
                  </div>
                </div>

                {/* Items in order */}
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-lg object-cover bg-neutral-800 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-medium text-white truncate">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-neutral-400 mt-0.5">
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          {item.selectedColor && <span>• {item.selectedColor}</span>}
                          <span>• Qty: {item.quantity}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-neutral-200">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tracking & Summary */}
                <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-neutral-400 block text-[11px]">
                      {order.estimatedDelivery}
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      Paid via {order.paymentMethod} • Shipped to {order.shippingAddress.city}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-neutral-400">Total Paid: </span>
                    <span className="text-sm font-black text-amber-300">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-1 flex gap-2">
                  <button
                    onClick={onContinueShopping}
                    className="flex-1 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" /> View In Stream
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
