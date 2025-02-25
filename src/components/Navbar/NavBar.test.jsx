import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
    // it("renders navbar", () => {
    //     const {nav} = render (<NavBar />)
    //     expect(nav).toMatchSnapshot()
    // })

    it("renders Home Header", () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        )
        expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Home")
    })

    it("renders Shop and Cart Headers", () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        )
        expect(screen.getByRole("heading", {name: "Shop"})).toBeInTheDocument()
        expect(screen.getByAltText("cart icon")).toBeInTheDocument()
    })

    //Router Tests goes here
})