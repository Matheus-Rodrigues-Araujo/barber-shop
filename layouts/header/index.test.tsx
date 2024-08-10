/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./index";

jest.mock("../sidebar/index", () => ({
  Sidebar: ({ isSidebarOpen }: { isSidebarOpen: boolean }) => (
    <>
      <div
        data-testid="sidebar"
        className={isSidebarOpen ? "open" : "closed"}
      ></div>
      {isSidebarOpen && <div data-testid="overlay" className="overlay" />}
    </>
  ),
}));

describe("Header behavior below the md breakpoint", () => {
  beforeEach(() => {
    window.innerWidth = 767;
    window.dispatchEvent(new Event("resize"));
  });

  test("should render the header component", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("should render the Toggle Icon below the md breakpoint", () => {
    render(<Header />);
    const icon = screen.getByTestId("toggle-sidebar");
    expect(icon).toBeInTheDocument();
  });

  test("should initially hide the Sidebar", () => {
    render(<Header />);
    const sidebar = screen.queryByTestId("sidebar");
    expect(sidebar).toHaveClass("closed");
  });

  test("should show Sidebar when icon is clicked", () => {
    render(<Header />);
    const icon = screen.getByTestId("toggle-sidebar");
    fireEvent.click(icon);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("open");
  });

  test("should hide the Sibebar when clicking outside", () => {
    render(<Header />);
    const icon = screen.getByTestId("toggle-sidebar");
    fireEvent.click(icon);
    const sidebar = screen.getByTestId("sidebar");
    const overlay = screen.getByTestId("overlay");
    expect(sidebar).toHaveClass("open");

    fireEvent.click(overlay);
    expect(sidebar).toHaveClass("closed");
  });

  test("should set body overflowY to hidden when Sidebar is open", () => {
    render(<Header />);
    const icon = screen.getByTestId("toggle-sidebar");
    fireEvent.click(icon);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("open");
    expect(document.body.style.overflowY).toBe("hidden");
  });

  test("should reset body overflowY when Sidebar is closed", () => {
    render(<Header />);
    const icon = screen.getByTestId("toggle-sidebar");
    fireEvent.click(icon);
    const overlay = screen.getByTestId("overlay");
    fireEvent.click(overlay);
    expect(document.body.style.overflowY).toBe("auto");
  });
});