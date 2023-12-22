import React, { ReactNode } from "react";

interface CommandOutputProps {
  command: string;
  type: "input" | "output";
  content: ReactNode;
}

const CommandOutput: React.FC<CommandOutputProps> = ({
  command,
  type,
  content,
}) => {
  const isInput = type === "input";

  return (
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
      light.terminalio.com:{" "}
      {command !== "null" && (
        <span style={{ color: "lightblue" }}>${command}:</span>
      )}{" "}
      <span
        className={isInput ? "input" : "output"}
        style={{ marginLeft: "5px" }}
      >
        {isInput ? "> " : ""}
        {content}
      </span>
    </div>
  );
};

export default CommandOutput;
