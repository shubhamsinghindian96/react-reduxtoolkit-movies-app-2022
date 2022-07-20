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

  const searchedValue = useSelector(fetchSearchedValue); // Fetching searched value from redux store

  console.log("searchedValue", searchedValue);

  const [movieText, setMovieText] = useState("");
  const [showText, setShowText] = useState("");

  // Initial Movie and Show Values
  useEffect(() => {
    if (searchedValue?.type === "both") {
      setMovieText(
        searchedValue?.value?.toString()?.length > 0
          ? searchedValue?.value
          : "Harry"
      );
      setShowText(
        searchedValue?.value?.toString()?.length > 0
          ? searchedValue?.value
          : "Bean"
      );
    } else if (searchedValue?.type === "movies") {
      setMovieText(
        searchedValue?.value?.toString()?.length > 0
          ? searchedValue?.value
          : "Harry"
      );
      setShowText("Bean");
    } else if (searchedValue?.type === "shows") {
      setMovieText("Harry");
      setShowText(
        searchedValue?.value?.toString()?.length > 0
          ? searchedValue?.value
          : "Bean"
      );
    } else {
    }
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
    if (searchedValue?.type === "both") {
      // This method (fetchAsyncMovies()) is used to fetch movies list from the imdb database by asynchronously
      // and store that movies in redux store.
      movieText && dispatch(fetchAsyncMovies(movieText));

      // This method (fetchAsyncShows()) is used to fetch shows list from the imdb database by asynchronously
      // and store that shows in redux store.
      showText && dispatch(fetchAsyncShows(showText));
    } else if (searchedValue?.type === "movies") {
      movieText && dispatch(fetchAsyncMovies(movieText));
    } else if (searchedValue?.type === "shows") {
      showText && dispatch(fetchAsyncShows(showText));
    } else {
    }
  }, [dispatch, searchedValue?.type, showText, movieText]);

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
