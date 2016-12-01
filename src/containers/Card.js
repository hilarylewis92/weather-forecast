import { connect } from 'react-redux';
import Card from '../components/Card'

const mapStateToProps = (state = []) => {
  console.log(state);
  if (!state.PinnedWeatherReducer[0]) {
    return {}
  }
  return {
    list: state.PinnedWeatherReducer
  }

}

export default connect(mapStateToProps)(Card)
