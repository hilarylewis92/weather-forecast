import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import LocalForecastReducer from './LocalForecastReducer'

const RootReducer = combineReducers({
  LocalWeatherReducer,
  LocalForecastReducer
})

export default RootReducer;
