import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import AppDrawer from "./components/AppDrawer";
import AppBar from "./components/AppBar/AppBar";
import Board from "./components/Board";
import Card from "./components/Card";
const App: React.FC = () => {
  return (
    <div className="App">
      {/* <AppDrawer /> */}
      {/* <AppBar /> */}
      <Board id="board-1" className="board">
        <Card id="card-1" className="card" dragable={true}>
          <p>asss card 1</p>
        </Card>
        </Board><p>asss</p>
      <Board id="board-2" className="board">
        <Card id="card-2" className="card" dragable={true}>
          <p>asss card 2</p>
        </Card>
      </Board>
    </div>
  );
};

export default App;
