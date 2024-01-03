import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

describe("About component", () => {
  test("renders welcome message", () => {
    render(<About />);
    const welcomeMessage = screen.getByText("Hello, Welcome from terminalio");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders about section", () => {
    render(<About />);
    const aboutSection = screen.getByText(
      "A terminal portfolio made with React and Typescript. You can enjoy this"
    );
    expect(aboutSection).toBeInTheDocument();
  });

  test("renders italicized text", () => {
    render(<About />);
    const italicText = screen.getByText("or add your about section here");
    expect(italicText).toHaveStyle({ fontStyle: "italic" });
  });

  test("renders developer description", () => {
    render(<About />);
    const developerDescription = screen.getByText(
      "For me, I am just a normal fullstack developer with nothing better to do."
    );
    expect(developerDescription).toBeInTheDocument();
  });
});
