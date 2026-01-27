import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard/ProductCard';

const wired = products.filter((p) => p.category === 'wired');
const wireless = products.filter((p) => p.category === 'wireless');

export const CatalogPage = () => {
    return (
        <>

            <main className="container catalog">
                <section className="catalog__section">
                    <h2 className="catalog__title">Наушники</h2>

                    <div className="catalog__grid">
                        {wired.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                <section className="catalog__section">
                    <h2 className="catalog__title">Беспроводные наушники</h2>

                    <div className="catalog__grid">
                        {wireless.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};