import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemCard from "./itemCard";

describe('Item Card', () => {
    it('renders item card component', () => {
        const mockItem = {name: 'product', count: 1}

        render(<ItemCard name={mockItem.name} count={mockItem.count} />)
        expect(screen.getByRole("heading", {level: 2})).toHaveTextContent('product')
        expect(screen.getByDisplayValue(1))
        expect(screen.getByRole("button", {name: 'Add to Cart'})).toBeInTheDocument()
    })
})