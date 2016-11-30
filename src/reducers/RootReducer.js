import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import LocalForecastReducer from './LocalForecastReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'
import PinnedForecastReducer from './PinnedForecastReducer'

const RootReducer = combineReducers({
  LocalWeatherReducer,
  LocalForecastReducer,
  PinnedWeatherReducer,
  PinnedForecastReducer
})

export default RootReducer;
