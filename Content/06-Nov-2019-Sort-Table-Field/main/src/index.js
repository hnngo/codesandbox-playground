import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
