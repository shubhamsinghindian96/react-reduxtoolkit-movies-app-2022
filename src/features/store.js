import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer, // Here, movies is the name of the reducer
  },
});
