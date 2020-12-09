import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMovies} from "../redux/actions";

import Movie from "../components/Movie";
import Grid from "../layouts/Grid";
import {getMovies} from "../scripts/services/getMovies";

const Top = (props: any) => {
  console.log('render top')

  useEffect(() => {
    getMovies(props, 'top_rated');
  }, [])

  return (
    <Grid>
      {props.movies.map((movie:any) =>
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

export default connect(mapStateToProps, mapDispatchToProps)(Top);
