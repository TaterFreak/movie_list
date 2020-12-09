const movieReducer = (state = [], action:any) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.payload
    default:
      return state
  }
}

export default movieReducer;
