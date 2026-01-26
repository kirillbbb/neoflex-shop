import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import styles from './Header.module.scss';

export const Header = () => {
    const cart = useContext(CartContext);
    if (!cart) return null;

    const { totalCount } = cart;

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.header__logo}>
                LOGO
            </Link>

            <Link to="/cart" className={styles.header__cart}>
                Cart ({totalCount})
            </Link>
        </header>
    );
};