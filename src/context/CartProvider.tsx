import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import { useCart } from "@/hooks/useCart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();

  return (
      <CartContext.Provider value={cart}>
        {children}
      </CartContext.Provider>
  );
};
