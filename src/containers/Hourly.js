import { connect } from 'react-redux'
import Hourly from '../components/Hourly'

const mapStateToProps = (state) => {
  if (!state.LocalWeatherReducer.current_observation) {
    return {}
  }
  return {
    local: state.LocalWeatherReducer,
    pinned: state.PinnedWeatherReducer,
  }
}

export default connect(mapStateToProps)(Hourly)
