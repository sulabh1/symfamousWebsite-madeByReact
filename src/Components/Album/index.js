import React from "react";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";

const Album = () => {
  return (
    <Fade>
      <div className="main">
        <div className="card">
          <div className="image">
            <ReactPlayer url="https://www.youtube.com/watch?v=SBEnaIQdb4A&list=PLFOOjYtKLMw4v51d1JrfkzdmmgJSpiuV5" />
            <div className="des1">
              <a
                href="https://symfamousmusic.com/product/daud/"
                className="button1"
              >
                DAUD ALBUM C HERE BUY NOW
              </a>
            </div>
          </div>
          <div className="card1">
            <div class="image">
              <ReactPlayer url="https://www.youtube.com/watch?v=dbEnd5QxttY&list=PLFOOjYtKLMw6LaL8z0QWcfXxHUXLgX5Zw" />
              <div class="des">
                <p>Inside Out (MIXTAPE)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Album;
