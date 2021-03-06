import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders learn react security", () => {
  render(<App />);
  const securityElement = screen.getByRole("heading", {
    name: /react security/i,
  });
  expect(securityElement).toBeInTheDocument();
});
