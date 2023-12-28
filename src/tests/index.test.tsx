import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App component with StrictMode", () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Check if the App component is rendered
  const appElement = screen.getByTestId("app-component");
  expect(appElement).toBeInTheDocument();
});
