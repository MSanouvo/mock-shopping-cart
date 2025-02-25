import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./HomePage/HomePage";
import StorePage from "./StorePage/StorePage";
import CartPage from "./CartPage/CartPage";

const cart = [];

const callItem = (entry) => {
  if (cart.length === 0) {
    cart.push(entry);
  } else {
    //Check if item already in cart, add count if true, add item if false
    if (cart.some((item) => item.name === entry.name)) {
      cart.map((cartItem) => {
        if (cartItem.name === entry.name) {
          cartItem.count += entry.count;
        }
      });
    } else {
      cart.push(entry);
    }
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/store",
    element: <StorePage callItem={callItem} />,
  },
  {
    path: "/cart",
    element: <CartPage cart={cart} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
