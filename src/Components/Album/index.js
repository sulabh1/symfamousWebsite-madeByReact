import React from "react";
import Zoom from "react-reveal/Zoom";
import ReactPlayer from "react-player";

const Album = () => {
  return (
    <Zoom duration={2000}>
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
    </Zoom>
  );
};

export default Album;
