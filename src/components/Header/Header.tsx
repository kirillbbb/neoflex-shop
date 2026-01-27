import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { FavoritesContext } from "@/context/FavoritesContext";
import styles from "./Header.module.scss";
import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const favoritesCtx = useContext(FavoritesContext);
  const favoritesCount = favoritesCtx?.favorites.length ?? 0;

  const cart = useContext(CartContext);
  const cartCount = cart?.totalCount ?? 0;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Link to="/" className={styles.header__logo}>
            QPICK
          </Link>

          <div className={styles.header__actions}>
            <button
              className={styles.header__icon}
              onClick={() => navigate("/favorites")}
            >
              <div className={styles.header__iconWrapper}>
                <img src="/icons/favorite-icon.svg" alt="favorites" />

                {favoritesCount > 0 && (
                  <span className={styles.header__badge}>{favoritesCount}</span>
                )}
              </div>
            </button>

            <button
              className={styles.header__icon}
              onClick={() => navigate("/cart")}
            >
              <div className={styles.header__iconWrapper}>
                <img src="/icons/cart-icon.svg" alt="cart" />
                {cartCount > 0 && (
                  <span className={styles.header__badge}>{cartCount}</span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
