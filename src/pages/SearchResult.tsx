import React, {useEffect} from "react";
import {fetchMovies} from "../redux/actions";
import {connect} from "react-redux";

import {MoviePropsInterface} from "../interfaces/MoviePropsInterface";
import {MovieInterface} from "../interfaces/MovieInterface";
import {StateInterface} from "../interfaces/StateInterface";

import Movie from "../components/Movie";
import Grid from "../layouts/Grid";

import {Typography} from "@material-ui/core";


const SearchResult = (props:MoviePropsInterface) => {
  console.log('render search')

  useEffect(() => {
    const localMovies = localStorage.getItem('movies');
    if (props.movies.length === 0 && typeof localMovies === "string") {
      props.fetchMovies(JSON.parse(localMovies));
    }
  }, [])

  return (
    <>
      {props.movies.length !== 0 ? (
        <Grid>
          {props.movies.map((movie:MovieInterface) =>
            <Movie movie={movie} key={movie.id}/>
          )}
        </Grid>
      ) : (
        <Grid>
          <Typography variant={"h2"}>
            No result
          </Typography>
        </Grid>
      )}
    </>
  );
}

const mapStateToProps = (state:StateInterface) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchMovies: (movies:any) => dispatch(fetchMovies(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
