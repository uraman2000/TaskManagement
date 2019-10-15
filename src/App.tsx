import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppDrawer from "./components/AppDrawer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppDrawer />
    </div>
  );
};

export default App;
