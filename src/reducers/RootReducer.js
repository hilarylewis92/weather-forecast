import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'

const RootReducer = combineReducers({
  LocalWeatherReducer
})

export default RootReducer;
