const LocalForecastReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOCAL_FORECAST':
      return Object.assign({}, state, action.weatherInfo)
    default:
      return state
  }
}

export default LocalForecastReducer;
