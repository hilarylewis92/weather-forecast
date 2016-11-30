const exampleReducer = (state = {}, action) => {
  console.log(action.localForecast);
  switch (action.type) {
    case 'GET_LOCAL_FORECAST':
      return action.localForecast
    default:
      return state
  }
}

export default exampleReducer;
