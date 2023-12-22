import React, { ReactNode, useState } from "react";
import CommandOutput from "./CommandOutput";
import "./Terminal.css";
import WelcomeCommand from "./Commands/Welcome";

interface Output {
  type: "input" | "output";
  children: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const initialOutput: Output[] = [
    { type: "output", children: <WelcomeCommand /> },
  ];
  const [outputs, setOutputs] = useState<Output[]>(initialOutput);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      processCommand();
    }
  };

  const processCommand = () => {
    if (input.trim() !== "") {
      const newOutputs: Output[] = [
        ...outputs,
        { type: "input", children: `> ${input}` },
      ];
      setOutputs(newOutputs);

      handleCommand(input);

      setInput("");
    }
  };

  const handleCommand = (command: string) => {
    // Add your command processing logic here
    // Example commands:
    // - "help"
    // - "about"
    // - "skills"
    // - "projects"
    // - "contact"
    // - "clear"

    switch (command.toLowerCase()) {
      case "welcome":
        addOutput(<WelcomeCommand />);
        break;
      case "help":
        addOutput(
          "Available commands: about, skills, projects, contact, clear"
        );
        break;
      case "about":
        addOutput("Hi! I am Chit Khine. Welcome to my terminal portfolio.");
        break;
      case "skills":
        addOutput("Skills: HTML, CSS, JavaScript, React, Node.js, etc.");
        break;
      case "projects":
        addOutput("Projects: List your projects here.");
        break;
      case "contact":
        addOutput("Contact me at: your.email@example.com");
        break;
      case "clear":
        clearOutput();
        break;
      default:
        addOutput(`Command not found: ${command}`);
        break;
    }
  };

  const addOutput = (children: ReactNode | string) => {
    const newOutputs: Output[] = [...outputs, { type: "output", children }];
    setOutputs(newOutputs);
  };

  const clearOutput = () => {
    setOutputs([]);
  };

  return (
    <div
      id="terminal"
      style={{ textAlign: "left", width: "100%", height: "100vh" }}
    >
      {outputs.map((output, index) => (
        <CommandOutput
          key={index}
          type={output.type}
          content={output.children}
        />
      ))}
      <div
        style={{
          backgroundColor: "#000",
          color: "#0F0", // Different colors for input and output
          border: "none",
          outline: "none",
          width: "100%",
          padding: "0.5rem",
          boxSizing: "border-box",
          fontFamily: "monospace",
          whiteSpace: "nowrap", // Prevent line break
        }}
      >
        light.terminalio.com: <span style={{ color: "blue" }}>{"$"}</span>
        <input
          type="text"
          placeholder="Enter your command..."
          value={input}
          onChange={handleInput}
          onKeyUp={handleEnter}
          style={{
            backgroundColor: "#000",
            color: "blue",
            border: "none",
            outline: "none",
            width: "100%",
            padding: "0.5rem",
            boxSizing: "border-box",
            fontFamily: "monospace",
          }}
        />
      </div>
    </div>
  );
};

export default Terminal;
