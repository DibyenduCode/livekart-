import { useState, useEffect } from 'react';
import { useLiveFeed } from './hooks/useLiveFeed';
import { useCart } from './hooks/useCart';
import { initialOrders } from './data/mockOrders';
import type { Order, ActiveTab } from './types';
import { LiveFeed } from './components/live/LiveFeed';
import { BottomNav } from './components/navigation/BottomNav';
import { DiscoverPage } from './pages/DiscoverPage';
import { OrdersPage } from './pages/OrdersPage';
import { ProfilePage } from './pages/ProfilePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { soundFx } from './utils/soundEffects';

const ORDERS_STORAGE_KEY = 'shopli_orders_v1';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab | 'checkout'>('live');
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialOrders;
    } catch {
      return initialOrders;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders to localStorage', e);
    }
  }, [orders]);

  // Live feed state & controls
  const {
    sellers,
    currentSeller,
    currentSellerIndex,
    totalSellers,
    goToNextSeller,
    goToPrevSeller,
    goToSellerById,
    isLiked,
    toggleLike,
    toggleFollow,
    comments,
    addComment,
    floatingHearts,
    isMuted,
    toggleMute,
    streamError,
    setStreamError
  } = useLiveFeed(0);

  // Cart state & actions
  const {
    items: cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount: cartCount,
    subtotal: cartSubtotal,
    originalSubtotal: cartOriginalSubtotal,
    discount: cartDiscount,
    deliveryFee: cartDeliveryFee,
    total: cartTotal
  } = useCart();

  // Handle seller selection from Discover or Profile tabs
  const handleSelectSeller = (sellerId: string) => {
    goToSellerById(sellerId);
    setActiveTab('live');
  };

  // Handle checkout completion
  const handleOrderPlaced = (newOrder: Order) => {
    soundFx.playOrderSuccess();
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
  };

  const handleAddToCartWithSound = (
    product: any,
    size?: string,
    color?: string,
    quantity?: number
  ) => {
    soundFx.playAddToCart();
    addToCart(product, size, color, quantity);
  };

  const handleToggleLikeWithSound = () => {
    soundFx.playLike();
    toggleLike();
  };

  // Reset demo data
  const handleResetDemo = () => {
    localStorage.removeItem('shopli_cart_items_v1');
    localStorage.removeItem(ORDERS_STORAGE_KEY);
    clearCart();
    setOrders(initialOrders);
    alert('Demo prototype state has been reset to defaults.');
  };

  return (
    <div className="w-screen h-screen bg-neutral-950 text-white flex flex-col items-center justify-between overflow-hidden">
      {/* Ambient Desktop Backdrop Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-radial from-red-950/40 via-transparent to-black" />

      {/* Main Viewport Container */}
      <main className="relative w-full flex-1 max-w-lg mx-auto flex flex-col overflow-hidden bg-black shadow-2xl">
        {/* Render Tab Screens */}
        <div className="relative w-full flex-1 overflow-hidden">
          {activeTab === 'live' && (
            <LiveFeed
              sellers={sellers}
              currentSeller={currentSeller}
              currentIndex={currentSellerIndex}
              totalSellers={totalSellers}
              onNextSeller={goToNextSeller}
              onPrevSeller={goToPrevSeller}
              isLiked={isLiked}
              onToggleLike={handleToggleLikeWithSound}
              onToggleFollow={toggleFollow}
              comments={comments}
              onAddComment={addComment}
              floatingHearts={floatingHearts}
              isMuted={isMuted}
              onToggleMute={toggleMute}
              streamError={streamError}
              onStreamErrorChange={setStreamError}
              cartItems={cartItems}
              cartCount={cartCount}
              cartSubtotal={cartSubtotal}
              cartOriginalSubtotal={cartOriginalSubtotal}
              cartDiscount={cartDiscount}
              cartDeliveryFee={cartDeliveryFee}
              cartTotal={cartTotal}
              onAddToCart={handleAddToCartWithSound}
              onUpdateCartQuantity={updateQuantity}
              onRemoveCartItem={removeFromCart}
              onProceedToCheckout={() => setActiveTab('checkout')}
            />
          )}

          {activeTab === 'discover' && (
            <DiscoverPage
              sellers={sellers}
              onSelectSeller={handleSelectSeller}
            />
          )}

          {activeTab === 'orders' && (
            <OrdersPage
              orders={orders}
              onContinueShopping={() => setActiveTab('live')}
            />
          )}

          {activeTab === 'profile' && (
            <ProfilePage
              sellers={sellers}
              onSelectSeller={handleSelectSeller}
              onResetDemo={handleResetDemo}
            />
          )}

          {activeTab === 'checkout' && (
            <CheckoutPage
              items={cartItems}
              subtotal={cartSubtotal}
              discount={cartDiscount}
              deliveryFee={cartDeliveryFee}
              total={cartTotal}
              onBack={() => setActiveTab('live')}
              onOrderPlaced={handleOrderPlaced}
            />
          )}
        </div>

        {/* Bottom Navigation (Visible on all tabs except checkout) */}
        {activeTab !== 'checkout' && (
          <BottomNav
            activeTab={activeTab}
            onChangeTab={(tab) => setActiveTab(tab)}
            orderCount={orders.length}
          />
        )}
      </main>
    </div>
  );
}

export default App;
