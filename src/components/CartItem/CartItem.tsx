import type { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
    item: CartItemType;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}

export const CartItem =
    ({item, onIncrease, onDecrease, onRemove,}: CartItemProps) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <div>Price: {item.price}</div>
            <div>Quantity: {item.quantity}</div>

            <button onClick={() => onDecrease(item.id)}>-</button>
            <button onClick={() => onIncrease(item.id)}>+</button>
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    );
};