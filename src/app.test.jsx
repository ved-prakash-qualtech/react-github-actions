import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders Radha heading", () => {
  render(<App />);

  const heading = screen.getByRole("heading", {
    level: 1,
    name: /Radha/i,
  });

  expect(heading).toBeInTheDocument();
});