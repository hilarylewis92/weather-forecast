import { connect } from 'react-redux';
import Card from '../components/Card'

const mapStateToProps = (state = []) => {
  if (!state.PinnedWeatherReducer[0]) {
    return {
      list: state
    }
  }
  return {
    list: state.PinnedWeatherReducer
  }

}

export default connect(mapStateToProps)(Card)
