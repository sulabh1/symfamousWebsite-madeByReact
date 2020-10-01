import React from "react";
import Carousel from "./Carrousel";
import TimeUntil from "./TimeUntil";
const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">SYMFAMOUS</div>
        {/* <Rotate bottom right>
          <h1 className="wrapper">SYMFAMOUS</h1>
        </Rotate> */}
      </div>
      <TimeUntil />
    </div>
  );
};

export default Home;
