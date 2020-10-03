import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer classname="bck_red1">
      <Fade delay={500}>
        <div className="footer_logo_venue">SYMFAMOUS</div>
        <div className="footer_copyright">
          Made by sulabh(aka swikrit) adhikari.
          <br />
          2020 &copy; copyright. All rights reserved
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
