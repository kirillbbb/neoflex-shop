import { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard/ProductCard";

export const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);
  if (!favoritesCtx) return null;

  const { favorites } = favoritesCtx;

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id),
  );

  return (
    <main className="container catalog">
      <section className="catalog__section">
        <h2 className="catalog__title">Избранное</h2>

        {favoriteProducts.length === 0 ? (
          <p className="catalog__empty">В избранном пока ничего нет</p>
        ) : (
          <div className="catalog__grid">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
