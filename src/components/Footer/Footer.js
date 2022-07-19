import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeSearchedValue } from "../../features/movies/movieSlice";
import "./Footer.scss";
// ======================================================================

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // This method is used to redirect on Home Page
  const handleNavigate = () => {
    dispatch(storeSearchedValue());
    navigate("/");
  };
  return (
    <>
      <div className="footer">
        <div onClick={handleNavigate}>Superb Movies App</div>

        <div>
          This website is Developed and Maintained by Shubham Singh <br />
        </div>
        <div> {new Date().getFullYear()} - All rights are reserved</div>
      </div>
    </>
  );
};

export default Footer;
