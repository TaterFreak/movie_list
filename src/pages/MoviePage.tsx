import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchMovie} from "../redux/actions";
import {getMovie, getMovieRecommendations} from "../scripts/services/getMovies";

import {MovieInterface} from "../interfaces/MovieInterface";
import Movie from "../components/Movie";

const MoviePage = (props:any) => {
  console.log('render moviePage')

  const {id}:any = useParams();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getMovie(props, id)

    getMovieRecommendations(id).then((data) => {
      setRecommendations(data)
    })
  },[id])

  let movie = props.movie;
  return (
    <div>
      {movie !== undefined ? (
        <div>
          <img src={`http://image.tmdb.org/t/p/w185/${movie.backdrop_path}`} alt={movie.title}/>
          <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
          <h1 data-movie-title="">{movie.title}</h1>
          <p data-movie-overview="">{movie.overview}</p>
          <p data-movie-release-date="">{movie.release_date}</p>
          <p data-movie-vote-average="">{movie.vote_average}</p>
          <p data-movie-vote-count="">{movie.vote_count}</p>
          {recommendations !== undefined && (
            <div data-movie-recommendations="">
              {recommendations.map((recommendation:MovieInterface) =>
                <Movie movie={recommendation} key={recommendation.id}/>
              )}
            </div>
          )}
        </div>
      ) : (
          <div>
            Movie Not found
          </div>
      )}
    </div>
  );
}

const mapStateToProps = (state:any) => {
  return {
    movies: state.movies,
    movie: state.movie
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchMovie: (movie:any) => dispatch(fetchMovie(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
