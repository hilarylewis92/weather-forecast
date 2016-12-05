const PinnedWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PINNED_WEATHER':
      return [...state, Object.assign({}, state, action.weatherInfo)]
    case 'DELETE_PINNED_CITY':
      //remove city from local storage
      let zipArray = JSON.parse(localStorage.getItem('zips'))
      zipArray.splice(action.id, 1)
      localStorage.setItem('zips', JSON.stringify(zipArray))

      return state.filter((item, index) => index !== action.id)
    default:
      return state
  }
}

export default PinnedWeatherReducer
