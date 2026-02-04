import { useState, useContext } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { ProductModal } from "@/components/ProductModal/ProductModal";
import { CartContext } from "@/context/CartContext";
import type { Product } from "@/types/product";

const wired = products.filter((p) => p.category === "wired");
const wireless = products.filter((p) => p.category === "wireless");

export const CatalogPage = () => {
  const cart = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!cart) return null;

  const { addToCart } = cart;

  const handlePreview = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCartFromModal = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    setSelectedProduct(null);
  };

  return (
      <main className="container catalog">
        <section className="catalog__section">
          <h2 className="catalog__title">Наушники</h2>

          <div className="catalog__grid">
            {wired.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onPreview={handlePreview}
                />
            ))}
          </div>
        </section>

        <section className="catalog__section">
          <h2 className="catalog__title">Беспроводные наушники</h2>

          <div className="catalog__grid">
            {wireless.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onPreview={handlePreview}
                />
            ))}
          </div>
        </section>

        <ProductModal
            product={selectedProduct}
            isOpen={Boolean(selectedProduct)}
            onClose={handleCloseModal}
            onAddToCart={handleAddToCartFromModal}
        />
      </main>
  );
};
