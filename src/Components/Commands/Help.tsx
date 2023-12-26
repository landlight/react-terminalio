import React from "react";

interface Command {
  command: string;
  description: string;
}

const Help: React.FC = () => {
  const commands: Command[] = [
    { command: "welcome", description: "Welcome message" },
    { command: "about", description: "About this project and a bit about me" },
    { command: "contact", description: "Contact me through the email" },
    { command: "clear", description: "Clear the terminal" },
    { command: "help", description: "Show all commands" },
    { command: "commands", description: "Show all commands" },
  ];

  return (
    <div>
      {commands.map((command) => (
        <div key={command.command}>
          <p>
            <span style={{ color: "#393" }}>{command.command} - </span>
            <span style={{ color: "#FFF" }}>{command.description}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Help;
