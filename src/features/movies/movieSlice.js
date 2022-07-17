import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/movieApiKey";
// -------------------------------------------------------------------------------------------

// This method is used to fetch movies from the imdb database asynchronously.
// This is an asynchronous action creator.
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry"; //movieText is used to search a particular movie.
    try {
      const response = await movieApi.get(
        `?apiKey=${apiKey}&s=${movieText}&type=movie`
      );
      console.log("Movies List Response:: ", response);
      return response.data;
    } catch (error) {
      console.log("Getting error while fetching movies list: ", error?.message);
    }
  }
);

// This method is used to fetch shows from the imdb database asynchronously.
// This is an asynchronous action creator.
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends"; //seriesText is used to search a particular shows series.
    try {
      const response = await movieApi.get(
        `?apiKey=${apiKey}&s=${seriesText}&type=series`
      );
      console.log("Shows List Response:: ", response);
      return response.data;
    } catch (error) {
      console.log("Getting error while fetching shows list: ", error?.message);
    }
  }
);

// This method is used to fetch movie or show details from the imdb database asynchronously.
// This is an asynchronous action creator.
export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetails",
  async (id) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${apiKey}&i=${id}&Plot=full`
      );
      console.log("Movie/Show details Response:: ", response);
      return response.data;
    } catch (error) {
      console.log(
        "Getting error while fetching particular movie/show details: ",
        error?.message
      );
    }
  }
);

const initialState = {
  moviesData: {},
  showsData: {},
  particularMovieOrShowData: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    //Used to add new movie in store = This is synchronous action creator
    addMovies: (state, { payload }) => {
      state.moviesData = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.particularMovieOrShowData = {};
    },
  },
  extraReducers: {
    //For Movies
    [fetchAsyncMovies.pending]: () => {
      console.log("Movies fetching is Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Movies Fetched Successfully");
      return { ...state, moviesData: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Movies fetching is Rejected");
    },

    //For Shows
    [fetchAsyncShows.pending]: () => {
      console.log("Shows fetching is Pending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Shows Fetched Successfully");
      return { ...state, showsData: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("Shows fetching is Rejected");
    },

    // For Movie/Show Details Page
    //For Shows
    [fetchAsyncMovieOrShowDetails.pending]: () => {
      console.log("Movie/Show details fetching is Pending");
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      console.log("Movie/Show details fetched Successfully");
      return { ...state, particularMovieOrShowData: payload };
    },
    [fetchAsyncMovieOrShowDetails.rejected]: () => {
      console.log("Movie/Show details fetching is Rejected");
    },
  },
});

//Fetch all Movies from the redux-store
export const fetchAllMovies = (state) => state.movies.moviesData;

//Fetch all Shows from the redux-store
export const fetchAllShows = (state) => state.movies.showsData;

//Fetch particular Movie or Show details from the redux-store
export const fetchParticularMovieOrShow = (state) =>
  state.movies.particularMovieOrShowData;
// ----------------------------------------------------------------------
export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
// =================================================================================================
