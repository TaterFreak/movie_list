export const fetchMovies = (movies:any) => {
  return {
    type: 'FETCH_MOVIES',
    payload: movies
  }
}

export const fetchMovie = (movie:any) => {
  return {
    type: 'FETCH_MOVIE',
    payload: movie
  }
}
