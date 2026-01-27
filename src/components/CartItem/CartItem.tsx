import type { CartItem as CartItemType } from "@/types/cart";
import styles from "./CartItem.module.scss";

interface CartItemProps {
  item: CartItemType;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  const formattedPrice = item.price.toLocaleString("ru-RU");
  const formattedTotal = (item.price * item.quantity).toLocaleString("ru-RU");

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src={item.img} alt={item.title} className={styles.image} />

        <div className={styles.counter}>
          <button onClick={() => onDecrease(item.id)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.price}>{formattedPrice} ₽</div>
      </div>

      <button className={styles.remove} onClick={() => onRemove(item.id)}>
        <img src="/icons/remove-icon.svg" alt="remove" />
      </button>

      <div className={styles.total}>{formattedTotal} ₽</div>
    </div>
  );
};
