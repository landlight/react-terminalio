import React from "react";

interface Command {
  command: string;
  description: string;
}

const Help: React.FC = () => {
  const commands: Command[] = [
    { command: "about", description: "About me" },
    // Add more commands as needed
  ];

  return (
    <div>
      {commands.map((command) => (
        <div key={command.command}>
          <p>{command.command}</p>
          <p>{command.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Help;
