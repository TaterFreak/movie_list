import { combineReducers } from "redux";
import movieReducer from "./movies";
import singleMovieReducer from "./movie";

export default combineReducers({ movies: movieReducer, movie: singleMovieReducer });
