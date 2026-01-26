import { createContext } from 'react';
import type { CartItem } from '@/types/cart';

export interface CartContextValue {
    items: CartItem[];
    totalCount: number;
    totalPrice: number;

    addToCart: (item: CartItem) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    remove: (id: number) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);