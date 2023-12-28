import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App component with Terminal", () => {
  // Arrange
  render(<App />);

  // Assert
  // Check if the App component is rendered
  const appElement = screen.getByTestId("app-component");
  expect(appElement).toBeInTheDocument();

  // Check if the Terminal component is rendered within App
  const terminalElement = screen.getByTestId("terminal-component");
  expect(terminalElement).toBeInTheDocument();

  // You can add more assertions based on your component's content or behavior
});
