import { screen } from "@testing-library/react";

export const testNavigationLinks = (
    links: { name: string, route: string }[],
    navTestId: string
) => {
    const nav = screen.getByTestId(navTestId);

    expect(nav).toBeInTheDocument();

    links.forEach(link => {
        const elements = screen.getAllByRole('link', { name: link.name });

        const element = elements.find(el => el.getAttribute('href') === link.route);

        expect(element).not.toBeUndefined();
        expect(element).toBeInTheDocument();
        expect(element).toHaveAttribute('href', link.route);
        expect(element).toHaveAttribute('title', link.name);

        expect(element?.closest('nav')).toBe(nav);
        expect(element).toHaveTextContent(link.name)
    });
};
