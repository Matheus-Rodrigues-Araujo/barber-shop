/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { Sidebar } from "../../layouts/sidebar";
import { navigationLinks } from "@/layouts/header/constants";

describe("Sidebar Component", () => {

  it("should aply the correct class when the sidebar is open", () => {
    render(<Sidebar navigationLinks={navigationLinks} isSidebarOpen={true} />);

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("translate-x-0");
  });

  it("should aply the correct class when the sidebar is closed", () => {
    render(<Sidebar navigationLinks={navigationLinks} isSidebarOpen={false} />);

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("-translate-x-full");
  });

  it("should not render the Overlay when the sidebar is closed", () => {
    render(<Sidebar navigationLinks={navigationLinks} isSidebarOpen={false} />);

    expect(screen.queryByTestId("overlay")).not.toBeInTheDocument();
  });

  it("should not render the Overlay when the sidebar is closed", () => {
    render(<Sidebar navigationLinks={navigationLinks} isSidebarOpen={true} />);

    expect(screen.getByTestId("overlay")).toBeInTheDocument();
  });

});