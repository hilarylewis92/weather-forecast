const PinnedWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PINNED_WEATHER':
      return [...state, Object.assign({}, state, action.weatherInfo)]
    case 'DELETE_PINNED_CITY':
      return state.filter((item, index) => index !== action.id)
    default:
      return state
  }
}

export default PinnedWeatherReducer
