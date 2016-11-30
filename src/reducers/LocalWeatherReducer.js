const LocalWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOCAL_WEATHER':
      return Object.assign({}, state, action.weatherInfo)
    default:
      return state
  }
}

export default LocalWeatherReducer;
