import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { apiKey } from "../../utils/apis/movieApiKey";
import { axiosInstance } from "../../services/axiosInstance";

// console.log("process.env", process.env.REACT_APP_MOVIE_API_KEY);

// -------------------------------------------------------------------------------------------

// This method is used to fetch movies from the imdb database asynchronously.
// This is an asynchronous action creator.
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchedvalue) => {
    // const movieText = "Harry"; //movieText is used to search a particular movie.
    try {
      const response = await axiosInstance.get(
        `?apiKey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${searchedvalue}&type=movie`
      );
      if (response.status === 200 && response.data.Response === "True") {
        return response.data;
      } else {
        return {};
      }
    } catch (error) {
      console.log("Getting error while fetching movies list: ", error?.message);
    }
  }
);

// This method is used to fetch shows from the imdb database asynchronously.
// This is an asynchronous action creator.
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (searchedvalue) => {
    // const seriesText = "Friends"; //seriesText is used to search a particular shows series.
    try {
      const response = await axiosInstance.get(
        `?apiKey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${searchedvalue}&type=series`
      );
      if (response.status === 200 && response.data.Response === "True") {
        return response.data;
      } else {
        return {};
      }
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
      const response = await axiosInstance.get(
        `?apiKey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}&Plot=full`
      );
      if (response.status === 200 && response.data.Response === "True") {
        return response.data;
      } else {
        return {};
      }
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
  searchedValue: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // The below used methods are synchronous action creator

    //Used to add new movie in redux store
    addMovies: (state, { payload }) => {
      state.moviesData = payload;
    },

    // Used to remove particular movie or show details from the redux store
    removeSelectedMovieOrShow: (state) => {
      state.particularMovieOrShowData = {};
    },

    // Used to store seached field value in redux store
    storeSearchedValue: (state, { payload }) => {
      state.searchedValue = payload ? payload : "";
    },
  },
  extraReducers: {
    //For Movies
    [fetchAsyncMovies.pending]: () => {
      // console.log("Movies fetching is Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("Movies Fetched Successfully");
      return { ...state, moviesData: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      // console.log("Movies fetching is Rejected");
    },

    //For Shows
    [fetchAsyncShows.pending]: () => {
      // console.log("Shows fetching is Pending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      // console.log("Shows Fetched Successfully");
      return { ...state, showsData: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      // console.log("Shows fetching is Rejected");
    },

    // For Movie/Show Details Page
    //For Shows
    [fetchAsyncMovieOrShowDetails.pending]: () => {
      // console.log("Movie/Show details fetching is Pending");
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      // console.log("Movie/Show details fetched Successfully");
      return { ...state, particularMovieOrShowData: payload };
    },
    [fetchAsyncMovieOrShowDetails.rejected]: () => {
      // console.log("Movie/Show details fetching is Rejected");
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

// Fetch Searched Value from the redux store
export const fetchSearchedValue = (state) => state.movies.searchedValue;

// ----------------------------------------------------------------------
export const { addMovies, removeSelectedMovieOrShow, storeSearchedValue } =
  movieSlice.actions;
export default movieSlice.reducer;
// =================================================================================================
