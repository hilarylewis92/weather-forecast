import { connect } from 'react-redux';
import Settings from '../components/Settings'
import {fetchPinnedLocationWeather} from '../actions/index'

const mapStateToProps = (state) => {
 return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zip) => {
      dispatch (
        fetchPinnedLocationWeather(zip)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
