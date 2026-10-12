import { Flame, Compass, Package, User } from 'lucide-react';
import type { ActiveTab } from '../../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
  orderCount?: number;
}

export function BottomNav({ activeTab, onChangeTab }: BottomNavProps) {
  const navItems: { tab: ActiveTab; label: string; icon: typeof Flame }[] = [
    { tab: 'live', label: 'Live Feed', icon: Flame },
    { tab: 'discover', label: 'Discover', icon: Compass },
    { tab: 'orders', label: 'Orders', icon: Package },
    { tab: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="w-full bg-black/95 backdrop-blur-xl border-t border-neutral-800/80 px-4 py-2 flex items-center justify-around z-40 select-none"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.tab;

        return (
          <button
            key={item.tab}
            onClick={() => onChangeTab(item.tab)}
            id={`nav-${item.tab}-button`}
            aria-label={item.label}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 active:scale-95 relative ${
              isActive
                ? 'text-white'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {/* Live Indicator on Live Feed icon */}
            <div className="relative">
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? 'scale-110 text-red-500' : ''
                }`}
              />
              {item.tab === 'live' && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              )}
            </div>

            <span
              className={`text-[10px] tracking-tight ${
                isActive ? 'font-bold text-white' : 'font-medium'
              }`}
            >
              {item.label}
            </span>

            {/* Active Pill Indicator */}
            {isActive && (
              <span className="absolute -bottom-1 w-4 h-0.5 rounded-full bg-red-500" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
