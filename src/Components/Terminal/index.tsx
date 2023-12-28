import React, { ReactNode, useEffect, useRef, useState } from "react";
import CommandOutput from "../CommandOutput";
import "./style.css";
import WelcomeCommand from "../Commands/Welcome";
import Help from "../Commands/Help";
import AboutCommand from "../Commands/About";

interface Output {
  command: string;
  type: "input" | "output";
  children: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const initialOutput: Output[] = [
    { command: "null", type: "output", children: <WelcomeCommand /> },
  ];
  const outputContainerRef = useRef<HTMLDivElement>(null);

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
        { command: input, type: "input", children: `> ${input}` },
      ];
      setOutputs(newOutputs);
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    // Scroll to the bottom when outputs change
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop =
        outputContainerRef.current.scrollHeight;
    }
  }, [outputs]);

  const handleCommand = (command: string) => {
    if (command.split(" ")[0] === "echo") {
      addOutput(command.split(" ")[0], command.slice(5));
      return;
    }

    switch (command.toLowerCase()) {
      case "welcome":
        addOutput(command, <WelcomeCommand />);
        break;
      case "help":
      case "commands":
        addOutput(command, <Help />);
        break;
      case "about":
        addOutput(command, <AboutCommand />);
        break;
      case "contact":
        addOutput(command, "Contact me at: ck.light@gmail.com");
        break;
      case "clear":
        clearOutput();
        break;
      default:
        addOutput(command, `Command not found: ${command}`);
        break;
    }
  };

  const addOutput = (command: string, children: ReactNode | string) => {
    const newOutputs: Output[] = [
      ...outputs,
      { command: command, type: "output", children },
    ];
    setOutputs(newOutputs);
  };

  const clearOutput = () => {
    setOutputs([]);
  };

  return (
    <div
      id="terminal"
      data-testid="terminal-component"
      style={{ textAlign: "left", height: "100vh" }}
      ref={outputContainerRef}
    >
      {outputs.map((output, index) => (
        <CommandOutput
          key={index}
          type={output.type}
          content={output.children}
          command={output.command}
        />
      ))}
      <div
        style={{
          backgroundColor: "#000",
          color: "#0F0",
          border: "none",
          outline: "none",
          width: "100%",
          padding: "0.5rem",
          boxSizing: "border-box",
          fontFamily: "monospace",
          whiteSpace: "nowrap",
        }}
      >
        light.terminalio.com: <span style={{ color: "lightblue" }}>{"$"}</span>
        <input
          type="text"
          placeholder="Enter your command..."
          value={input}
          onChange={handleInput}
          onKeyUp={handleEnter}
          style={{
            backgroundColor: "#000",
            color: "lightblue",
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
