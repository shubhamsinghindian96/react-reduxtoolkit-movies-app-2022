import React, { useEffect, useState } from "react";
import user from "../../images/user.png";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  fetchSearchedValue,
  storeSearchedValue,
} from "../../features/movies/movieSlice";
import { useNavigate } from "react-router-dom";

// ============================================================================

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchedValue = useSelector(fetchSearchedValue); //Fetching Search field value from redux store.
  const [searchMovieOrShow, setSearchMovieOrShow] = useState(""); // Used to store search field value

  // Store searched value in local state
  useEffect(() => {
    setSearchMovieOrShow(searchedValue ? searchedValue : "");
  }, [searchedValue]);

  // This method is used to search a particular movie or show.
  const submitHandler = (event) => {
    event.preventDefault(); //Prevent Refreshing of a page.
    if (searchMovieOrShow === "") return alert("Please Enter the value");
    dispatch(storeSearchedValue(searchMovieOrShow)); // Sending Searched Value to redux store
    dispatch(fetchAsyncMovies(searchMovieOrShow)); // Fetching Movies from the database
    dispatch(fetchAsyncShows(searchMovieOrShow)); // Fetching Shows from the database
    navigate("/"); // Redirect to Home Page
    // setSearchMovieOrShow(""); // Clear Search field value
  };

  // This method is used to clear search field value and redirect to home page
  const handleNavigate = () => {
    dispatch(storeSearchedValue());
    setSearchMovieOrShow("");
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <div className="logo" onClick={handleNavigate}>
          Superb Movies and Shows App 2022
        </div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="searchMovieOrShow"
              id="searchMovieOrShow"
              placeholder="Search Movies or Shows"
              value={searchMovieOrShow}
              onChange={(event) => setSearchMovieOrShow(event.target.value)}
              autoComplete="off"
              autoFocus
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="user-image">
          <img src={user} alt="user-img" />
        </div>
      </div>
    </>
  );
};

export default Header;
