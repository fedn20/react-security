import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Counter } from "./Counter";

describe("<Counter />", () => {
  it("renders count", () => {
    const { getByText } = render(<Counter />);
    expect(getByText(/count/i)).toBeInTheDocument();
  });
  it("increments count", () => {
    const { getByRole } = render(<Counter />);
    const incBtn = getByRole("button", {
      name: /increment/i,
    });
    fireEvent.click(incBtn);
    const res = screen.getByRole("heading", {
      name: /current count is: 1/i,
    });
    expect(res).toBeInTheDocument();
  });
});
