import { useContext } from "react";
import type { Product } from "@/types/product";
import { CartContext } from "@/context/CartContext";
import { FavoritesContext } from "@/context/FavoritesContext";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const cart = useContext(CartContext);
  const favoritesCtx = useContext(FavoritesContext);

  if (!cart || !favoritesCtx) return null;

  const { addToCart } = cart;
  const { favorites, toggleFavorite } = favoritesCtx;

  const isFavorite = favorites.includes(product.id);

  return (
    <div className={styles.card}>
      {/* ❤️ ИЗБРАННОЕ */}
      <button
        className={styles.card__favorite}
        onClick={() => toggleFavorite(product.id)}
      >
        <img
          src={
            isFavorite
              ? "/icons/favorite-active-icon.svg"
              : "/icons/favorite-icon.svg"
          }
          alt="favorite"
        />
      </button>

      <div className={styles.card__image}>
        <img src={product.img} alt={product.title} />
      </div>

      <div className={styles.card__info}>
        <div className={styles.card__top}>
          <div className={styles.card__title}>{product.title}</div>

          <div className={styles.card__prices}>
            <span className={styles.card__priceCurrent}>{product.price} ₽</span>

            {product.oldPrice && (
              <span className={styles.card__priceOld}>
                {product.oldPrice} ₽
              </span>
            )}
          </div>
        </div>

        <div className={styles.card__bottom}>
          <div className={styles.card__rating}>
            <img src="/icons/star-icon.svg" alt="rating" />
            <span>{product.rate}</span>
          </div>

          <button
            className={styles.card__buy}
            onClick={() => addToCart({ ...product, quantity: 1 })}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};
