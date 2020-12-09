import React from 'react';
import {Link} from 'react-router-dom';
import {createUseStyles} from "react-jss";

import Paper from "./Paper";

const useStyles = createUseStyles({
    titleWrapper: {
        height: 40,
    }
})

const Movie = ({movie}:any) => {
  console.log('render Movie')
  const classes = useStyles();

  return (
    <Paper>
      <Link to={`/Movie/${movie.id}`}>
        <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
        <div className={classes.titleWrapper}>
            {movie.title}
        </div>
      </Link>
    </Paper>
  )
}

export default Movie;
