import React from "react";

interface Command {
  command: string;
  description: string;
}

const Help: React.FC = () => {
  const commands: Command[] = [
    { command: "about", description: "About me" },
    { command: "skills", description: "My skills" },
    { command: "projects", description: "My projects" },
    { command: "contact", description: "Contact me" },
    { command: "clear", description: "Clear the terminal" },
    { command: "help", description: "Show this help message" },
    // Add more commands as needed
  ];

  return (
    <div>
      {commands.map((command) => (
        <div key={command.command}>
          <p>
            <span style={{ color: "#0F0" }}>{command.command}</span> -{" "}
            <span style={{ color: "#FFF" }}>{command.description}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Help;
