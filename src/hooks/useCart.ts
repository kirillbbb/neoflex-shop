import { useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/types/cart";

const STORAGE_KEY = "cart";

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: CartItem) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increase = (id: number) => {
    setItems(prev =>
        prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
  };

  const decrease = (id: number) => {
    setItems(prev =>
        prev
            .map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter(item => item.quantity > 0)
    );
  };

  const remove = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const totalCount = useMemo(
      () => items.reduce((sum, item) => sum + item.quantity, 0),
      [items]
  );

  const totalPrice = useMemo(
      () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      [items]
  );

  return {
    items,
    totalCount,
    totalPrice,
    addToCart,
    increase,
    decrease,
    remove,
  };
};
