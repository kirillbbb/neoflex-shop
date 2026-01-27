import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export const Layout = () => {
    const location = useLocation();
    const isCartPage = location.pathname === '/cart';

    return (
        <>
            <Header isWide={isCartPage} />

            <main>
                <Outlet />
            </main>

            <Footer isWide={isCartPage} />
        </>
    );
};