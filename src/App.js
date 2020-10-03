import React from "react";
import "./resources/styles.css";
import Header from "./Components/header_footer/Header";
import Home from "./Components/Home/index";
import MyInfo from "./Components/Info/index";
import Album from "./Components/Album/index";
import Footer from "./Components/header_footer/Footer";

const App = () => {
  return (
    <div className="App" style={{ height: "1500px", background: "#fff" }}>
      <Header />
      <Home />
      <MyInfo />
      <Album />
      <Footer />
    </div>
  );
};

export default App;
