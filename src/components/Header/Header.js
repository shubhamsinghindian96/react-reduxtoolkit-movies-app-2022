import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
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
  const searchedValue = useSelector(fetchSearchedValue);
  const [searchMovieOrShow, setSearchMovieOrShow] = useState("");

  useEffect(() => {
    setSearchMovieOrShow(searchedValue ? searchedValue : "");
  }, [searchedValue]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // This method is used to search a particular movie or show.
  const submitHandler = async (event) => {
    event.preventDefault(); //Prevent Refreshing of a page.
    if (searchMovieOrShow === "") return alert("Please Enter the value");
    console.log("searchMovieOrShow", searchMovieOrShow);
    await dispatch(storeSearchedValue(searchMovieOrShow));
    await dispatch(fetchAsyncMovies(searchMovieOrShow));
    await dispatch(fetchAsyncShows(searchMovieOrShow));
    navigate("/");
    // setSearchMovieOrShow("");
  };

  const handleNavigate = () => {
    dispatch(storeSearchedValue());
    setSearchMovieOrShow("");
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <div className="logo" onClick={handleNavigate}>
          Superb Movies App 2022
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
