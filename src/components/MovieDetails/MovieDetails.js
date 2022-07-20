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
      {completeMovieShowDetails?.isLoading ? (
        <div className="loading-container">
          <p>Please wait ...</p>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="movie-section">
          {completeMovieShowDetails?.data &&
          Object.keys(completeMovieShowDetails?.data).length === 0 ? (
            <div>No Data Found</div>
          ) : (
            <>
              <div className="section-left">
                <div className="movie-title">
                  {completeMovieShowDetails?.data?.Title}
                </div>
                <div className="movie-rating">
                  <span>
                    IMDB Rating <i className="fa fa-star"></i> : &nbsp;
                    {completeMovieShowDetails?.data?.imdbRating}
                  </span>
                  <span>
                    IMDB Votes <i className="fa fa-thumbs-up"></i> : &nbsp;
                    {completeMovieShowDetails?.data?.imdbVotes}
                  </span>
                  <span>
                    Runtime <i className="fa fa-film"></i> : &nbsp;
                    {completeMovieShowDetails?.data?.Runtime}
                  </span>
                  <span>
                    Year <i className="fa fa-calendar"></i> : &nbsp;
                    {completeMovieShowDetails?.data?.Year}
                  </span>
                </div>
                <div className="movie-plot">
                  {completeMovieShowDetails?.data?.Plot}
                </div>
                <div className="movie-info">
                  <div>
                    <span>Director: </span>
                    <span>{completeMovieShowDetails?.data?.Director}</span>
                  </div>
                  <div>
                    <span>Stars: </span>
                    <span>{completeMovieShowDetails?.data?.Actors}</span>
                  </div>
                  <div>
                    <span>Genres: </span>
                    <span>{completeMovieShowDetails?.data?.Genre}</span>
                  </div>
                  <div>
                    <span>Languages: </span>
                    <span>{completeMovieShowDetails?.data?.Language}</span>
                  </div>
                  <div>
                    <span>Awards: </span>
                    <span>{completeMovieShowDetails?.data?.Awards}</span>
                  </div>
                </div>
              </div>
              <div className="section-right">
                <img
                  src={completeMovieShowDetails?.data?.Poster}
                  alt={completeMovieShowDetails?.data?.Title}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
