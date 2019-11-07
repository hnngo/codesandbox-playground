import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ContainBox from "./components/ContainBox";

function App() {
  return (
    <div className="App">
      <ContainBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
