import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">Superb Movies App 2022</div>
        </Link>
        <div className="user-image">
          <img src={user} alt="user-img" />
        </div>
      </div>
    </>
  );
};

export default Header;
