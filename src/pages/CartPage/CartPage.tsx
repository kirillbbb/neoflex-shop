import { useContext } from 'react';
import { Header } from '@/components/Header/Header';
import { CartContext } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem/CartItem';

export const CartPage = () => {
    const cart = useContext(CartContext);

    if (!cart) {
        return null;
    }

    const {
        items,
        totalCount,
        totalPrice,
        increase,
        decrease,
        remove,
    } = cart;

    return (
        <>
            <Header />
            <h1>Cart</h1>

            {items.length === 0 && <p>Cart is empty</p>}

            {items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={increase}
                    onDecrease={decrease}
                    onRemove={remove}
                />
            ))}

            {items.length > 0 && (
                <div>
                    <hr />
                    <div>Total items: {totalCount}</div>
                    <div>Total price: {totalPrice}</div>
                </div>
            )}
        </>
    );
};