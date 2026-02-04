import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "@/context/CartContext";
import { CheckoutForm } from "@/components/CheckoutForm/CheckoutForm";
import { CheckoutCartItem } from "@/components/CheckoutCartItem/CheckoutCartItem";
import styles from "./CheckoutPage.module.scss";

export const CheckoutPage = () => {
    const cart = useContext(CartContext);
    const navigate = useNavigate();

    if (!cart) return null;

    const { items, totalPrice, remove } = cart;

    // защита от пустой корзины
    useEffect(() => {
        if (items.length === 0) {
            navigate("/");
        }
    }, [items, navigate]);

    const handleOrderSubmit = () => {
        items.forEach((item) => remove(item.id));
        navigate("/");
    };

    return (
        <div className={styles.checkout}>
            <h1 className={styles.title}>Оформление заказа</h1>

            <section className={styles.card}>
                <h2 className={styles.sectionTitle}>Ваш заказ</h2>

                <div className={styles.items}>
                    {items.map((item) => (
                        <CheckoutCartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className={styles.total}>
                    Итого: {totalPrice} ₽
                </div>
            </section>

            <section className={styles.card}>
                <CheckoutForm
                    totalPrice={totalPrice}
                    onSubmit={handleOrderSubmit}
                />
            </section>
        </div>
    );
};
