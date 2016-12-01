const AddCityReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return Object.assign({}, state, action.weatherInfo)
    default:
      return state
  }
}

export default AddCityReducer;
