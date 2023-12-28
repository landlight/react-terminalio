import React from "react";
import Terminal from "./Components/Terminal";

const App: React.FC = () => {
  return (
    <div className="App" data-testid="app-component">
      <Terminal />
    </div>
  );
};

export default App;
