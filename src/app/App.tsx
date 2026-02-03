import { RouterProvider } from "react-router-dom";
import { CartProvider } from "@/context/CartProvider";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { router } from "./router";

export const App = () => {
  return (
    <FavoritesProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FavoritesProvider>
  );
};
