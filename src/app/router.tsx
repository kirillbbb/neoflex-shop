import { createBrowserRouter } from 'react-router-dom';
import { CatalogPage } from '@/pages/CatalogPage/CatalogPage.tsx';
import { CartPage } from '@/pages/CartPage/CartPage.tsx';

export const router = createBrowserRouter([
    { path: '/', element: <CatalogPage /> },
    { path: '/cart', element: <CartPage /> },
]);