/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../../layouts/header";
import { navigationLinks } from "@/layouts/header/constants";
import { testNavigationLinks } from "../utils/testLinks";

describe("Header", () => {
  test("should render the Header component", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("should render the Brand", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    const brand = screen.getByTestId("header-brand");
    expect(brand).toBeInTheDocument();
    expect(brand).toHaveTextContent("BarberXYZ");
  });

  test("should render the toggle icon and navigation in the Header", () => {
    render(<Header />);
    const icon = screen.getByTestId("toggle-sidebar");
    expect(icon).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("should handle the Sidebar visibility and body overflow on sidebar toggle", () => {
    render(<Header />);
    const icon = screen.getByTestId("toggle-sidebar");
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("-translate-x-full");
    expect(document.body.style.overflowY).toBe("auto");

    fireEvent.click(icon);
    expect(sidebar).toHaveClass("translate-x-0");
    expect(document.body.style.overflowY).toBe("hidden");

    fireEvent.click(icon);
    expect(sidebar).toHaveClass("-translate-x-full");
    expect(document.body.style.overflowY).toBe("auto");
  });

  test("should render the navigation links", () => {
    render(<Header />);
    const nav = screen.getByTestId("header-nav");
    expect(nav).toBeInTheDocument();
    const links = [
      "Home",
      "About",
      "Services",
      "Contact",
      "Sign In",
      "Sign Up",
    ];

    testNavigationLinks(
      [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Services", route: "/services" },
        { name: "Contact", route: "/contact" },
        { name: "Sign In", route: "/sign-in" },
        { name: "Sign Up", route: "/sign-up" },
      ],
      "header-nav"
    );
  });
});
