const PinnedForecastReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PINNED_FORECAST':
      return Object.assign({}, state, action.weatherInfo)
    default:
      return state
  }
}

export default PinnedForecastReducer;
