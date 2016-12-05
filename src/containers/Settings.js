import { connect } from 'react-redux'
import Settings from '../components/Settings'
import { fetchPinnedLocationWeather } from '../actions/index'

const mapStateToProps = (state = []) => {
  let cities
  if (!state.PinnedWeatherReducer[0]) {
    cities = null
  } else {
    cities = state.PinnedWeatherReducer
  }
  let error
  if (state.ErrorMessageReducer === '') {
    error = null
  } else {
    error = state.ErrorMessageReducer
  }
  return {
    cities,
    error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (zip) => {
      dispatch(
        fetchPinnedLocationWeather(zip),
      )
    },
    clearError: () => {
      dispatch({
        type: 'ERROR_MESSAGE_CLEAR',
      })
    },
    deleteCity: (id) => {
      dispatch({
        type: 'DELETE_PINNED_CITY',
        id,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
