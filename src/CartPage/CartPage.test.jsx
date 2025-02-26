import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import CartPage from "./CartPage";
import HomePage from "../HomePage/HomePage";
import StorePage from "../StorePage/StorePage";

describe("Cart page", () => {
  it("renders the Cart Page", () => {
    const { container } = render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the heading components", () => {
    render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });

  it("renders message when cart is empty", () => {
    render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );
    expect(screen.getByText("Add items to cart"));
  });

  it("renders item when cart is not empty", () => {
    render(
      <MemoryRouter>
        <CartPage cart={[{ name: "item", count: 1 }]} />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: "item" })).toBeInTheDocument();
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });

  it("deletes item on clicking delete button", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <CartPage cart={[{ name: "item", count: 1 }]} />
      </MemoryRouter>,
    );

    const link = screen.getByText("Delete");
    await user.click(link);
    expect(screen.getByText("Add items to cart"));
  });


  //Obselete Tests after removing navbar from component
  // it("navigates to home page", async () => {
  //   render(
  //     <MemoryRouter initialEntries={["/cart"]}>
  //       <Routes>
  //         <Route path="/cart" element={<CartPage />} />
  //         <Route path="/" element={<HomePage />} />
  //       </Routes>
  //     </MemoryRouter>,
  //   );

  //   const user = userEvent.setup();
  //   const homeLink = screen.getByRole("link", { name: "Home" });

  //   await user.click(homeLink);
  //   expect(
  //     screen.getByText("Welcome to my mock digital storefront!"),
  //   ).toBeInTheDocument();
  // });

  // it("navigates to store page", async () => {
  //   render(
  //     <MemoryRouter initialEntries={["/cart"]}>
  //       <Routes>
  //         <Route path="/store" element={<StorePage />} />
  //         <Route path="/cart" element={<CartPage />} />
  //       </Routes>
  //     </MemoryRouter>,
  //   );

  //   const user = userEvent.setup();
  //   const link = screen.getByRole("link", { name: "Shop" });

  //   await user.click(link);
  //   expect(screen.getByText("Store")).toBeInTheDocument();
  // });
});
