import { connect } from 'react-redux';
import Header from '../components/Header'

const mapStateToProps = (state) => {
  if (!state.LocalWeatherReducer.current_observation) {
    return {}
  }
  return {
    name: state.LocalWeatherReducer.current_observation.display_location.full,
    temp: state.LocalWeatherReducer.current_observation.temp_f,
    desc: state.LocalWeatherReducer.current_observation.weather,
  }

}

export default connect(mapStateToProps)(Header)
