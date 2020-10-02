import React from "react";
import Slider from "react-slick";
import Slide_one from "./../../resources/images/img1.jpg";
import Slide_two from "./../../resources/images/img2.jpg";
import Slide_three from "./../../resources/images/image3.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 250,
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innerHeight}px`, overflow: "hidden" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${Slide_one})`,
              height: `${window.innerHeight}px`,
              position: "relative",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "45%",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              Music is my higher power
            </p>
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${Slide_two})`,
              height: `${window.innerHeight}px`,
              position: "relative",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "35%",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              One good thing about music, when it hits you, you feel no pain.
            </p>
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${Slide_three})`,
              height: `${window.innerHeight}px`,
              position: "relative",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "15%",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              Without music to decorate it, time is just a bunch of boring
              production deadlines or dates by which bills must be paid
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
