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
    dispatch(
      storeSearchedValue({
        type: "both",
        value: "",
      })
    );
    navigate("/");
  };
  return (
    <>
      <div className="footer">
        <div onClick={handleNavigate}>
          <b>Superb Movies and Shows App</b>
        </div>

        <div>
          This website is Developed and Maintained by Shubham Singh <br />
        </div>
        <div> {new Date().getFullYear()} - All rights are reserved</div>
      </div>
    </>
  );
};

export default Footer;
