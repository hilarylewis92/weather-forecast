const exampleReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_LOCAL_WEATHER':
      console.log('test2');
      return action.localForecast
    default:
      return state
  }
}

export default exampleReducer;
