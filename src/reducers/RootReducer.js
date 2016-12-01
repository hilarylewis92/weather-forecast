import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'

const RootReducer = combineReducers({
  LocalWeatherReducer,
  PinnedWeatherReducer
})

export default RootReducer;
