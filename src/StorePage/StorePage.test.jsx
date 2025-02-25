import { describe, it, expect, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import StorePage from "./StorePage";
import HomePage from "../HomePage/HomePage";
import CartPage from "../CartPage/CartPage";

describe("Home page", () => {
  it("renders the Home Page", () => {
    const { container } = render(
      <MemoryRouter>
        <StorePage />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the heading components", () => {
    render(
      <MemoryRouter>
        <StorePage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByAltText("cart icon")).toBeInTheDocument();
    expect(screen.getByText("Store")).toBeInTheDocument();
  });

  it("renders all the item card components", async () => {
    render(
      <MemoryRouter>
        <StorePage />
      </MemoryRouter>,
    );
    //No API Data
    expect(screen.getByText("Loading items...")).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByText("Loading items..."));

    //Expected API Data
    expect(
      screen.getByRole("heading", {
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Mens Casual Premium Slim Fit T-Shirts",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Mens Casual Premium Slim Fit T-Shirts"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Mens Cotton Jacket" }),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Mens Cotton Jacket")).toBeInTheDocument();

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
    expect(
      screen.getByText("Welcome to my mock digital storefront!"),
    ).toBeInTheDocument();
  });

  it("navigates to cart page", async () => {
    render(
      <MemoryRouter initialEntries={["/store"]}>
        <Routes>
          <Route path="/store" element={<StorePage />} />
          <Route path="/cart" element={<CartPage cart={[]} />} />
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const link = screen.getByAltText("cart icon");

    await user.click(link);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });

  it("has working add to cart button", async () => {
    const mock = vi.fn();
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <StorePage callItem={mock} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Loading items...")).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByText("Loading items..."));

    const button = screen.getAllByRole("button", { name: "Add to Cart" });
    await user.click(button[0]);
    expect(mock).toHaveBeenCalledWith({
      count: 1,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    });
  });
});
