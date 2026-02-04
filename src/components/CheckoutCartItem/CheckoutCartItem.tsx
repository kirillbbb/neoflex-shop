import type { CartItem } from "@/types/cart";
import styles from "./CheckoutCartItem.module.scss";

interface CheckoutCartItemProps {
    item: CartItem;
}

export const CheckoutCartItem = ({ item }: CheckoutCartItemProps) => {
    const totalPrice = item.price * item.quantity;

    return (
        <div className={styles.item}>
            <img
                src={item.img}
                alt={item.title}
                className={styles.image}
            />

            <div className={styles.info}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.meta}>
                    {item.quantity} × {item.price} ₽
                </div>
            </div>

            <div className={styles.total}>
                {totalPrice} ₽
            </div>
        </div>
    );
};
