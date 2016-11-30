import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import LocalForecastReducer from './LocalForecastReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'

const RootReducer = combineReducers({
  LocalWeatherReducer,
  LocalForecastReducer,
  PinnedWeatherReducer
})

export default RootReducer;
