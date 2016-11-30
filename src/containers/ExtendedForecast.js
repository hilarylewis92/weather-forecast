import { connect } from 'react-redux';
import ExtendedForecast from '../components/ExtendedForecast'

const mapStateToProps = (state) => {
  console.log(state);
  if (!state.LocalForecastReducer.city) {
    return {}
  }
  return {
    name: state.LocalForecastReducer.city.name,
    list: state.LocalForecastReducer.list,
  }

}

export default connect(mapStateToProps)(ExtendedForecast)
