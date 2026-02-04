import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/layouts/Layout";
import { CatalogPage } from "@/pages/CatalogPage/CatalogPage";
import { CartPage } from "@/pages/CartPage/CartPage";
import { FavoritesPage } from "@/pages/FavoritePage/FavoritesPage.tsx";
import { CheckoutPage } from "@/pages/CheckoutPage/CheckoutPage";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CatalogPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      }

    ],
  },
]);
