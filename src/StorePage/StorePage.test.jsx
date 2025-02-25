import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import StorePage from "./StorePage";
import HomePage from "../HomePage/HomePage";
import CartPage from "../CartPage/CartPage";

describe("Home page", () => {
  // it("renders the Home Page", () => {
  //     const {container} = render (<StorePage />)
  //     expect(container).toMatchSnapshot()
  // })

  it("renders the heading components", () => {
    render(
      <MemoryRouter>
        <StorePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByAltText("cart icon")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Store" })).toBeInTheDocument();
  });

  it("renders all the item card components", () => {
    render(
      <MemoryRouter>
        <StorePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: "item1" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "item2" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "item3" })).toBeInTheDocument();
    expect(screen.getAllByRole("spinbutton").length).toEqual(3);
    expect(
      screen.getAllByRole("button", { name: "Add to Cart" }).length,
    ).toEqual(3);
  });

  it("navigates to home page", async () => {
    render(
      <MemoryRouter initialEntries={["/store"]}>
        <Routes>
          <Route path="/store" element={<StorePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const homeLink = screen.getByRole("link", { name: "Home" });

    await user.click(homeLink);
    expect(screen.getByText("Lorem Ipsum, ...")).toBeInTheDocument();
  });

  it("navigates to cart page", async () => {
    render(
      <MemoryRouter initialEntries={["/store"]}>
        <Routes>
          <Route path="/store" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const link = screen.getByAltText("cart icon");

    await user.click(link);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
});
