import React from "react";
import "./resources/styles.css";
import Header from "./header_footer/Header";
import Home from "./Home/index";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", background: "cornflowerblue" }}
    >
      <Header />
      <Home />
    </div>
  );
}

export default App;
