import { useState, useEffect, useMemo } from 'react';
import type { Product, CartItem } from '../types';

const STORAGE_KEY = 'shopli_cart_items_v1';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to persist cart items to localStorage', e);
    }
  }, [items]);

  const addToCart = (
    product: Product,
    selectedSize?: string,
    selectedColor?: string,
    quantity = 1
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [
          ...prev,
          {
            product,
            selectedSize: selectedSize || (product.availableSizes ? product.availableSizes[0] : undefined),
            selectedColor: selectedColor || (product.availableColors ? product.availableColors[0] : undefined),
            quantity
          }
        ];
      }
    });
  };

  const updateQuantity = (
    productId: string,
    quantity: number,
    selectedSize?: string,
    selectedColor?: string
  ) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter(
          (item) =>
            !(
              item.product.id === productId &&
              item.selectedSize === selectedSize &&
              item.selectedColor === selectedColor
            )
        );
      }
      return prev.map((item) => {
        if (
          item.product.id === productId &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
        ) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const removeFromCart = (
    productId: string,
    selectedSize?: string,
    selectedColor?: string
  ) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          )
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const summary = useMemo(() => {
    const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);
    const subtotal = items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
    const originalSubtotal = items.reduce(
      (acc, curr) => acc + curr.product.originalPrice * curr.quantity,
      0
    );
    const discount = Math.max(0, originalSubtotal - subtotal);
    const deliveryFee = subtotal > 999 || subtotal === 0 ? 0 : 49;
    const total = subtotal + deliveryFee;

    return {
      totalCount,
      subtotal,
      originalSubtotal,
      discount,
      deliveryFee,
      total
    };
  }, [items]);

  return {
    items,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    ...summary
  };
}
