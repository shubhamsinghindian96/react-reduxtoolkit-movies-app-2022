import "./Home.scss";
import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  fetchSearchedValue,
} from "../../features/movies/movieSlice";
// import movieApi from "../../common/apis/movieApi";
// import { apiKey } from "../../common/apis/movieApiKey";
// import { addMovies } from "../../features/movies/movieSlice";
// =============================================================================

const Home = () => {
  // const movieText = "Harry"; //movieText is used to search a particular movie.

  const dispatch = useDispatch();

  const searchedValue = useSelector(fetchSearchedValue);
  console.log("searchedValue", searchedValue);

  // Initial Search Values

  const [movieText, setMovieText] = useState("");
  const [showText, setShowText] = useState("");

  useEffect(() => {
    setMovieText(
      searchedValue?.toString()?.length > 0 ? searchedValue : "Harry"
    );
    setShowText(
      searchedValue?.toString()?.length > 0 ? searchedValue : "Friends"
    );
  }, [searchedValue]);

  // ============================================ SYNCHRONOUSLY ======================================================
  // Fetching Movies List
  // useEffect(() => {
  // This method is used to fetch movies list from the imdb database by synchronously
  // and store that movies in redux store.
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await movieApi.get(
  //         `?apiKey=${apiKey}&s=${movieText}&type=movie`
  //       );
  //       console.log("Movies List Response:: ", response);

  //       if (response.status === 200) {
  //         // Store all movies in Redux Store
  //         dispatch(addMovies(response.data));
  //       }
  //     } catch (error) {
  //       console.log(
  //         "Getting error while fetching movies list: ",
  //         error?.message
  //       );
  //     }
  //   };
  //   fetchMovies();
  // }, [dispatch]);

  // ============================================ ASYNCHRONOUSLY ===================================================
  // Fetching Movies List
  useEffect(() => {
    // This method (fetchAsyncMovies()) is used to fetch movies list from the imdb database by asynchronously
    // and store that movies in redux store.
    dispatch(fetchAsyncMovies(movieText));

    // This method (fetchAsyncShows()) is used to fetch shows list from the imdb database by asynchronously
    // and store that shows in redux store.
    dispatch(fetchAsyncShows(showText));
  }, [dispatch, movieText, showText]);

  // ===============================================================================================================

  return (
    <>
      <div className="banner-img">
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
