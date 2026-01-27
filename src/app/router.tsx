import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage';
import { CartPage } from '@/pages/CartPage/CartPage';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <CatalogPage />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
        ],
    },
]);