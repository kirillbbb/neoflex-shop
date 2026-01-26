import { useContext } from 'react';
import type { Product } from '@/types/product';
import { CartContext } from '@/context/CartContext';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const cart = useContext(CartContext);
    if (!cart) return null;

    const { addToCart } = cart;

    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src={product.img} alt={product.title} />
            </div>

            <div className={styles.card__info}>
                <div className={styles.card__top}>
                    <div className={styles.card__title}>{product.title}</div>

                    <div className={styles.card__prices}>
            <span className={styles.card__priceCurrent}>
                {product.price} ₽
            </span>

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