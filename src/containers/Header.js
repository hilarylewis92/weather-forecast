import { connect } from 'react-redux';
import Header from '../components/Header'

const mapStateToProps = (state) => {
  console.log(state);
  if (!state.LocalWeatherReducer.name) {
    return {}
  }
  return {
    name: state.LocalWeatherReducer.name,
    temp: state.LocalWeatherReducer.main.temp,
    desc: state.LocalWeatherReducer.weather[0].description,
  }

}

export default connect(mapStateToProps)(Header)
