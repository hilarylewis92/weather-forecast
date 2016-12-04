import { connect } from 'react-redux'
import ExtendedForecast from '../components/ExtendedForecast'

const mapStateToProps = (state) => {
  if (!state.LocalWeatherReducer.current_observation) {
    return {}
  }
  return {
    // name: state.LocalWeatherReducer.current_observation.display_location.full,
    // list: state.LocalWeatherReducer.forecast.simpleforecast.forecastday,
    local: state.LocalWeatherReducer,
    pinned: state.PinnedWeatherReducer,
  }
}

export default connect(mapStateToProps)(ExtendedForecast)
