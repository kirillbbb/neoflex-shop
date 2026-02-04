import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { CartItem } from "@/components/CartItem/CartItem";
import styles from "./CartPage.module.scss";
import { useNavigate } from "react-router-dom";



export const CartPage = () => {
  const cart = useContext(CartContext);
  if (!cart) return null;

  const { items, totalPrice, increase, decrease, remove } = cart;
  const formattedTotal = totalPrice.toLocaleString("ru-RU");
  const navigate = useNavigate();


  return (
    <div className="container container--wide">
      <h1 className={styles.title}>Корзина</h1>

      {items.length === 0 && <p className={styles.empty}>Корзина пуста</p>}

      {items.length > 0 && (
        <div className={styles.layout}>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={increase}
                onDecrease={decrease}
                onRemove={remove}
              />
            ))}
          </div>

          <aside className={styles.summary}>
            <div className={styles.summaryBox}>
              <div className={styles.summaryRow}>
                <span>Итого</span>
                <span>₽ {formattedTotal}</span>
              </div>

              <button
                  className={styles.checkout}
                  onClick={() => navigate("/checkout")}
              >Перейти к оформлению</button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
