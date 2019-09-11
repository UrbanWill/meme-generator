import React from "react";
import "./App.css";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator.js";

function App() {
  return (
    <div>
      <Header />
      <h1>Hello, word!</h1>
      <MemeGenerator />
    </div>
  );
}

export default App;
