const exampleReducer = (state = {}, action) => {
  console.log(action);
  console.log('test3')
  switch (action.type) {
    case 'SET_LOCAL_WEATHER':
      console.log('test2');
      return Object.assign({}, state, action.weatherInfo)
    default:
      return state
  }
}

export default exampleReducer;
