import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Help from "./Help";

describe("Help component", () => {
  test("renders command list", () => {
    render(<Help />);
    const allCommandsContainer = screen.getByTestId("allCommands");

    const commands = screen.getAllByTestId(/command\w+/);

    expect(allCommandsContainer).toBeInTheDocument();

    // Check if each individual command is present
    commands.forEach((command) => {
      expect(command).toBeInTheDocument();
    });
  });
});
