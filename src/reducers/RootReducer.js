import { combineReducers } from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinnedWeatherReducer from './PinnedWeatherReducer'
import ErrorMessageReducer from './ErrorMessageReducer'


const RootReducer = combineReducers({
  LocalWeatherReducer,
  PinnedWeatherReducer,
  ErrorMessageReducer,
})

export default RootReducer
