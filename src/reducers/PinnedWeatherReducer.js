const PinnedWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PINNED_WEATHER':
      return [...state, Object.assign({}, state, action.weatherInfo)]
    case 'DELETE_PINNED_CITY':
      console.log(state.slice(action.id+1));
      return state.slice(action.id+1)
    default:
      return state
  }
}

export default PinnedWeatherReducer;
