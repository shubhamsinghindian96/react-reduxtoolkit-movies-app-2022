import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetails,
  fetchParticularMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";
// ============================================================================

const MovieDetails = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();

  const completeMovieShowDetails = useSelector(fetchParticularMovieOrShow);

  //Fetching Particular Movie or Show complete details
  useEffect(() => {
    // This method (fetchAsyncMovieOrShowDetails()) is used to fetch particular movie or show complete details from the imdb
    // database by asynchronously and store those details in redux store.
    dispatch(fetchAsyncMovieOrShowDetails(imdbId));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbId]);

  return (
    <>
      <div className="movie-section">
        {Object.keys(completeMovieShowDetails).length === 0 ? (
          <div>Please wait ...</div>
        ) : (
          <>
            <div className="section-left">
              <div className="movie-title">
                {completeMovieShowDetails?.Title}
              </div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i className="fa fa-star"></i> : &nbsp;
                  {completeMovieShowDetails?.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i> : &nbsp;
                  {completeMovieShowDetails?.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i> : &nbsp;
                  {completeMovieShowDetails?.Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i> : &nbsp;
                  {completeMovieShowDetails?.Year}
                </span>
              </div>
              <div className="movie-plot">{completeMovieShowDetails?.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director: </span>
                  <span>{completeMovieShowDetails?.Director}</span>
                </div>
                <div>
                  <span>Stars: </span>
                  <span>{completeMovieShowDetails?.Actors}</span>
                </div>
                <div>
                  <span>Genres: </span>
                  <span>{completeMovieShowDetails?.Genre}</span>
                </div>
                <div>
                  <span>Languages: </span>
                  <span>{completeMovieShowDetails?.Language}</span>
                </div>
                <div>
                  <span>Awards: </span>
                  <span>{completeMovieShowDetails?.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img
                src={completeMovieShowDetails?.Poster}
                alt={completeMovieShowDetails?.Title}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
