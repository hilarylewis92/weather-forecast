const exampleReducer = (state = {}, action) => {
  console.log(action);
  console.log('test');
  switch (action.type) {
    case 'SET_LOCAL_FORECAST':
      return action.localForecast
    default:
      return state
  }
}

export default exampleReducer;
