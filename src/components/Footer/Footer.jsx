import React from "react";
import "../Footer/Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.instagram.com/aubakirovv__"
        className="footer--icons"
      >
        <InstagramIcon sx={{ fontSize: "40px" }} />
        <h3>@aubakirovv__</h3>
      </a>
      <h1>ENJOY WATCHING</h1>
      <p>All rights reserved &copy;</p>
    </div>
  );
};

export default Footer;
