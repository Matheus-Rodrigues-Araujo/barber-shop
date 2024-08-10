/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import RootPage from "./page";

describe("Home", () => {
    it("Should return 'RootPage'", async () => {
        render(<RootPage />);

        await waitFor(()=> {
            const heading = screen.getByRole("heading", {
                name: /RootPage/i,
            })
    
            expect(heading).toBeInTheDocument();
    
        })

    });
})