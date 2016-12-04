require('isomorphic-fetch');

const recieveCurrentLocationWeatherInfo = weatherInfo => {
  return {
    type: 'SET_LOCAL_WEATHER',
    weatherInfo
  }
}

export const fetchCurrentLocationWeather = ( position ) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  return (dispatch) => {
    return fetch(`https://api.wunderground.com/api/881631f063e09bd3/conditions/forecast10day/alerts/hourly10day/q/${lat},${lon}.json`)
      .then(weather => weather.json())
      .then(json => dispatch(recieveCurrentLocationWeatherInfo(json))
    )
  }
};

export const recievePinnedLocationWeatherInfo = weatherInfo => {
  return {
    type: 'SET_PINNED_WEATHER',
    weatherInfo
  }
}

export const recieveInvalidZip = errorMessage => {
  return {
    type: 'ERROR_MESSAGE',
    errorMessage
  }
}

export const fetchPinnedLocationWeather = ( zip ) => {
  return (dispatch) => {
    return fetch(`https://api.wunderground.com/api/881631f063e09bd3/conditions/forecast10day/alerts/hourly10day/q/${zip}.json`)
      .then(weather => weather.json())
      .then(json => {
        if (json.current_observation) {
          dispatch(recievePinnedLocationWeatherInfo(json))
        } else {
          dispatch(recieveInvalidZip(json.response.error.description))
        }
      }
    )
  }
};
