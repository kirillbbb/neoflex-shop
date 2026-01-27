import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface HeaderProps {
    isWide?: boolean;
}

export const Header = ({ isWide }: HeaderProps) => {
    const cart = useContext(CartContext);

    const cartCount = cart?.totalCount ?? 0;

    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={`container ${isWide ? 'container--wide' : ''}`}>
                <div className={`container ${styles.header__inner}`}>
                    <Link to="/" className={styles.header__logo}>
                        QPICK
                    </Link>

                    <div className={styles.header__actions}>
                        <button className={styles.header__icon}>
                            <div className={styles.header__iconWrapper}>
                                <img src="/icons/favorite-icon.svg" alt="favorites" />
                            </div>
                        </button>

                        <button
                            className={styles.header__icon}
                            onClick={() => navigate('/cart')}
                        >
                            <div className={styles.header__iconWrapper}>
                                <img src="/icons/cart-icon.svg" alt="cart" />

                                {cartCount > 0 && (
                                    <span className={styles.header__badge}>
                            {cartCount}
                                </span>
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </header>
    );
};