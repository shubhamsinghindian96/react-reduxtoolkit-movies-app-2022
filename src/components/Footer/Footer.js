import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link to="/">
          <div>Superb Movies App</div>
        </Link>
        <div>
          This website is Developed and Maintained by Shubham Singh <br />
        </div>
        <div> {new Date().getFullYear()} - All rights are reserved</div>
      </div>
    </>
  );
};

export default Footer;
