import { Heart, MapPin, Bell, Shield, RotateCcw, Radio, CheckCircle2 } from 'lucide-react';
import type { Seller } from '../types';

interface ProfilePageProps {
  sellers: Seller[];
  onSelectSeller: (sellerId: string) => void;
  onResetDemo: () => void;
}

export function ProfilePage({
  sellers,
  onSelectSeller,
  onResetDemo
}: ProfilePageProps) {
  const followedSellers = sellers.filter((s) => s.isFollowed);

  return (
    <div className="w-full h-full bg-neutral-950 text-white overflow-y-auto p-4 space-y-4">
      {/* Profile Header */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex items-center gap-3.5 shadow-lg">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
            alt="Aarav Sharma"
            className="w-14 h-14 rounded-full object-cover border-2 border-red-500"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h1 className="text-base font-bold text-white truncate">Aarav Sharma</h1>
            <span className="text-[10px] bg-red-600/30 text-red-300 font-bold px-1.5 py-0.5 rounded uppercase">
              VIP BUYER
            </span>
          </div>
          <p className="text-xs text-neutral-400">aarav.sharma@example.com</p>
          <p className="text-[11px] text-neutral-500 mt-0.5">+91 98765 43210</p>
        </div>
      </div>

      {/* Followed Live Sellers */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <h2 className="text-sm font-bold text-white">
              Followed Live Sellers ({followedSellers.length})
            </h2>
          </div>
          <span className="text-[11px] text-neutral-400">Tap to watch live</span>
        </div>

        {followedSellers.length === 0 ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center text-xs text-neutral-400">
            You haven't followed any sellers yet. Tap "Follow" in the live stream!
          </div>
        ) : (
          <div className="space-y-2">
            {followedSellers.map((seller) => (
              <div
                key={seller.id}
                onClick={() => onSelectSeller(seller.id)}
                className="bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-xl p-3 flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={seller.sellerAvatar}
                      alt={seller.sellerName}
                      className="w-10 h-10 rounded-full object-cover border border-red-500"
                    />
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-600 text-[8px] font-black px-1 rounded text-white uppercase">
                      LIVE
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-white">
                        {seller.sellerName}
                      </span>
                      <CheckCircle2 className="w-3 h-3 text-sky-400" />
                    </div>
                    <span className="text-[11px] text-neutral-400">
                      @{seller.storeName} • {seller.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-red-500">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>Join</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Saved Delivery Address */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-neutral-400" />
          <h2 className="text-sm font-bold text-white">Default Delivery Address</h2>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-xs text-neutral-300 space-y-1">
          <div className="flex justify-between items-center">
            <span className="font-bold text-white">Home • Aarav Sharma</span>
            <span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">
              DEFAULT
            </span>
          </div>
          <p className="text-neutral-400">
            Flat 402, Lotus Grandeur, 12th Main Road, Indiranagar
          </p>
          <p className="text-neutral-400">Bengaluru, Karnataka - 560038</p>
        </div>
      </div>

      {/* Preferences & Settings */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl divide-y divide-neutral-800 text-xs">
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-300">
            <Bell className="w-4 h-4 text-neutral-400" />
            <span>Live Stream Notifications</span>
          </div>
          <span className="text-[11px] text-emerald-400 font-semibold">Enabled</span>
        </div>

        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-300">
            <Shield className="w-4 h-4 text-neutral-400" />
            <span>Buyer Protection Guarantee</span>
          </div>
          <span className="text-[11px] text-emerald-400 font-semibold">Active</span>
        </div>

        <button
          onClick={onResetDemo}
          className="w-full p-3 flex items-center justify-between text-left text-neutral-300 hover:text-white transition-colors"
        >
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Reset Demo Prototype Data</span>
          </div>
          <span className="text-[11px] text-neutral-500">Clear Cache</span>
        </button>
      </div>

      {/* Prototype Footer */}
      <div className="text-center py-2 text-[11px] text-neutral-500">
        <p>LiveKart • TikTok-Style Live Shopping Prototype</p>
        <p>Frontend Demonstration Only • No Real Charges</p>
      </div>
    </div>
  );
}
