import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>Superb Movies App</div>
        <div>
          This website is Developed and Maintained by Shubham Singh <br />
          {new Date().getFullYear()} - All rights are reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
