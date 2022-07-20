import React from "react";
import {
  fetchAllMovies,
  fetchAllShows,
} from "../../features/movies/movieSlice";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import { settings } from "../../common/carouselSettings";

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// =========================================================================

const MovieListing = () => {
  // Fetching Movies List from the redux-store.
  const movies = useSelector(fetchAllMovies);

  // Fetching Shows List from the redux-store.
  const shows = useSelector(fetchAllShows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>

        {movies?.isLoading ? (
          <div className="loading-container">
            <p>Please wait ...</p>
            <div className="loader"></div>
          </div>
        ) : (
          <div className="movie-container">
            {movies?.data?.Search?.length > 0 ? (
              <Slider {...settings}>
                {movies?.data?.Search.map((movie, index) => {
                  return <MovieCard key={index} data={movie} />;
                })}
              </Slider>
            ) : (
              <div className="movies-error">
                <h3>No Data Found</h3>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        {shows?.isLoading ? (
          <div className="loading-container">
            <p>Please wait ...</p>
            <div className="loader"></div>
          </div>
        ) : (
          <div className="movie-container">
            {shows?.data?.Search?.length > 0 ? (
              <Slider {...settings}>
                {shows?.data?.Search?.length > 0 &&
                  shows?.data?.Search.map((show, index) => {
                    return <MovieCard key={index} data={show} />;
                  })}
              </Slider>
            ) : (
              <div className="movies-error">
                <h3>No Data Found</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
