import { connect } from 'react-redux'
import ExtendedForecast from '../components/ExtendedForecast'

const mapStateToProps = (state) => {
  if (!state.LocalWeatherReducer.current_observation) {
    return {}
  }
  return {
    local: state.LocalWeatherReducer,
    pinned: state.PinnedWeatherReducer,
  }
}

export default connect(mapStateToProps)(ExtendedForecast)
