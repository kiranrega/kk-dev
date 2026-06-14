import { render, screen } from "@testing-library/react";
import { StatusBadge } from "../StatusBadge";

describe("StatusBadge", () => {
  it("renders the badge with correct text", () => {
    render(<StatusBadge />);
    expect(screen.getByText(/Open to work/i)).toBeInTheDocument();
  });

  it("includes a pulsing green dot", () => {
    render(<StatusBadge />);
    const dot = screen.getByRole("presentation", { hidden: true }) as HTMLElement;
    // Fallback: query by class name if role not set
    const dotByClass = document.querySelector("span.w-2.h-2.bg-\[\#22c55e\].rounded-full");
    expect(dotByClass).toBeTruthy();
  });
});
