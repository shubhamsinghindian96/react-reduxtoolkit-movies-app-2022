import React from "react";
import {
  fetchAllMovies,
  fetchAllShows,
} from "../../features/movies/movieSlice";
import "./MovieListing.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  // Fetching Movies List from the redux-store.
  const movies = useSelector(fetchAllMovies);
  console.log("movies", movies);

  // Fetching Shows List from the redux-store.
  const shows = useSelector(fetchAllShows);
  console.log("shows", shows);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies?.Response === "True" ? (
      <>
        {movies?.Search?.length > 0 &&
          movies?.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />;
          })}
      </>
    ) : (
      <>
        <div className="movies-error">
          <h3>{movies?.Error}</h3>
        </div>
      </>
    );

  renderShows =
    shows?.Response === "True" ? (
      <>
        {shows?.Search?.length > 0 &&
          shows?.Search.map((show, index) => {
            return <MovieCard key={index} data={show} />;
          })}
      </>
    ) : (
      <>
        <div className="movies-error">
          <h3>{shows?.Error}</h3>
        </div>
      </>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
