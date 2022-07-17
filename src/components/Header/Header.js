import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { useDispatch } from "react-redux";
import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
// ============================================================================

const Header = () => {
  const [searchMovieOrShow, setSearchMovieOrShow] = useState("");

  const dispatch = useDispatch();

  // This method is used to search a particular movie or show.
  const submitHandler = (event) => {
    event.preventDefault(); //Prevent Refreshing of a page.
    if (searchMovieOrShow === "") alert("Please Enter the value");
    console.log("searchMovieOrShow", searchMovieOrShow);
    dispatch(fetchAsyncMovies(searchMovieOrShow));
    dispatch(fetchAsyncShows(searchMovieOrShow));
    setSearchMovieOrShow("");
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">Superb Movies App 2022 </Link>
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
