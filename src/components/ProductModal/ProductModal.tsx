import type { Product } from "@/types/product";
import { Modal } from "@/components/Modal/Modal";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}

export const ProductModal = ({product, isOpen, onClose, onAddToCart,}: ProductModalProps) => {
    if (!product) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={product.img} alt={product.title} />
                </div>

                <div className={styles.info}>
                    <h2 className={styles.title}>{product.title}</h2>

                    <div className={styles.prices}>
            <span className={styles.price}>
              {product.price} ₽
            </span>

                        {product.oldPrice && (
                            <span className={styles.oldPrice}>
                {product.oldPrice} ₽
              </span>
                        )}
                    </div>

                    <div className={styles.rating}>
                        <img src="/icons/star-icon.svg" alt="rating" />
                        <span>{product.rate}</span>
                    </div>

                    <button
                        className={styles.buy}
                        onClick={() => onAddToCart(product)}
                    >
                        Купить
                    </button>
                </div>
            </div>
        </Modal>
    );
};
