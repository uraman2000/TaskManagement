import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppDrawer from "./components/AppDrawer";
import TaskModalv2 from "./components/TaskModalv2";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <AppDrawer /> */}
      <TaskModalv2 />
    </div>
  );
};

export default App;
