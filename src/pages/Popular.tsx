import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMovies} from "../redux/actions";

import {MovieInterface} from '../interfaces/MovieInterface'

import Grid from "../layouts/Grid";
import Movie from "../components/Movie";
import {getMovies} from "../scripts/services/getMovies";

const Popular = (props:any) => {
  console.log('render popular')

  useEffect(() => {
    getMovies(props, 'popular')
  }, [])

  return (
    <Grid>
      {props.movies.map((movie:MovieInterface) =>
        <Movie movie={movie} key={movie.id}/>
      )}
    </Grid>
  );
}

const mapStateToProps = (state:any) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchMovies: (movies:any) => dispatch(fetchMovies(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
