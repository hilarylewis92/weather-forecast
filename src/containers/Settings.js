import { connect } from 'react-redux';
import Settings from '../components/Settings'
import {fetchPinnedLocationWeather} from '../actions/index'

const mapStateToProps = (state = []) => {
  if (!state.PinnedWeatherReducer[0]) {
    return {}
  }
 return {
    cities: state.PinnedWeatherReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zip) => {
      dispatch (
        fetchPinnedLocationWeather(zip)
      )
    },
    deleteCity: (id) => {
      dispatch({
          type: 'DELETE_PINNED_CITY',
          id: id
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
