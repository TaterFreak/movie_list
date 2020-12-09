import axios from "axios";
import {MoviePropsInterface} from "../../interfaces/MoviePropsInterface";

const apiKey = 'de09c1be91fc78a6bf8f44bb9418c2dd';

export const getMovies = async (props:MoviePropsInterface, type:string, page:number = 1) => {
    try {
        console.log('calling api popular')
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=${page}\n`)
        const data = response.data.results
        props.fetchMovies(data);
        localStorage.setItem('movies', JSON.stringify(data));
    } catch (err) {
        console.error(err.message);
    }
};

export const getMovie = async (props:any, id:number) => {
    try {
        console.log('calling api movie detail')
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        props.fetchMovie(response.data);
    } catch (err) {
        console.error(err.message);
    }
};

export const searchMovie = async (props:MoviePropsInterface, query:string, page:number = 1) => {
    try {
        console.log('calling api search')
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false\n`)
        const data = response.data.results
        props.fetchMovies(data);
        localStorage.setItem('movies', JSON.stringify(data));
    } catch (err) {
        console.error(err.message);
    }
};

export const getMovieRecommendations = async (id:number, page:number = 1) => {
    try {
        console.log('calling api recommendations')
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=${page}`)

        return response.data.results;
    } catch (err) {
        console.error(err.message);
    }
};
