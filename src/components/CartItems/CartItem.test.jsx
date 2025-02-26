import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";

describe('Cart Item component', () => {
    it('renders cart item component', () => {
        const mockItem = {name: 'product', count: 1}

        render(<CartItem name={mockItem.name} count={mockItem.count} />)
        expect(screen.getByRole("heading", {name: "product"})).toBeInTheDocument()
        expect(screen.getByDisplayValue(1))
        expect(screen.getByRole("button", {name: 'Delete'})).toBeInTheDocument()
    })
})