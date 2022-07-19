import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/movieSlice";

// Combine All reducers here
export const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = configureStore({ reducer: rootReducer });
