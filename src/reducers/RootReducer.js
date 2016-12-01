import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'
import AddCityReducer from './AddCityReducer'

const RootReducer = combineReducers({
  LocalWeatherReducer,
  PinnedWeatherReducer,
  AddCityReducer
})

export default RootReducer;
