import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";

describe("Button", () => {
    it("renders the button component", () => {
        render (<Button name='button' handleClick={() => {}}/>)

        expect(screen.getByRole("button", {name: 'button'})).toBeInTheDocument()
    })

    it('should call a function when clicked', async () => {
        const onClick = vi.fn()
        const user = userEvent.setup()
        render (<Button name='button' handleClick={onClick}/>)

        const button = screen.getByRole("button", {name: "button"})

        await user.click(button)
        expect(onClick).toHaveBeenCalled()
    })

    it("shouldn't call function when not clicked", async () => {
        const onClick = vi.fn()
        render (<Button name='button' handleClick={onClick}/>)

        expect(onClick).not.toHaveBeenCalled()
    })
});
