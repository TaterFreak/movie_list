const singleMovieReducer = (state = [], action:any) => {
  switch (action.type) {
    case 'FETCH_MOVIE':
      return action.payload
    default:
      return state
  }
}

export default singleMovieReducer;
