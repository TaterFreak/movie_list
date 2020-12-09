import {MovieInterface} from "./MovieInterface";

export interface MoviePropsInterface {
    movies: Array<MovieInterface>;
    fetchMovies: any;
}
