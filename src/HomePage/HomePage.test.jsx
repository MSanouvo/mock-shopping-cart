import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import StorePage from "../StorePage/StorePage";
import CartPage from "../CartPage/CartPage";

describe("Home page", () => {
    it("renders the Home Page", () => {
      const { container } = render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>,
      );
      expect(container).toMatchSnapshot();
    });

  it("renders the nav bar component", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByAltText("cart icon")).toBeInTheDocument();
  });

  it("renders the correct banner image", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(screen.getByAltText("store banner")).toHaveAttribute("src", "/src/assets/clothes-line.jpg");
  });

  it("renders description", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("main")).toHaveTextContent("Welcome to my mock digital storefront!");
  });

  it("navigates to store page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/store" element={<StorePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: "Shop" });

    await user.click(link);
    expect(screen.getByText("Store")).toBeInTheDocument();
  });

  it("navigates to cart page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage cart={[]} />} />
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const link = screen.getByAltText("cart icon");

    await user.click(link);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
});
