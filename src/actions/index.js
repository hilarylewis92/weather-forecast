require('isomorphic-fetch');

// export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const fetchCurrentLocationWeather = ( position ) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  return (dispatch) => {
    return fetch(`https://api.wunderground.com/api/881631f063e09bd3/conditions/forecast10day/alerts/hourly10day/q/${lat},${lon}.json`)
      .then(weather => weather.json())
      .then((weatherInfo) => {
        console.log(weatherInfo);
        dispatch({
          type: 'SET_LOCAL_WEATHER',
          weatherInfo
        })
      }
    )
  }
};

export const fetchPinnedLocationWeather = ( position ) => {
  const zip = 80210;

  return (dispatch) => {
    return fetch(`https://api.wunderground.com/api/881631f063e09bd3/conditions/forecast10day/alerts/hourly10day/q/${zip}.json`)
      .then(weather => weather.json())
      .then((weatherInfo) => {
        console.log(weatherInfo);
        dispatch({
          type: 'SET_PINNED_WEATHER',
          weatherInfo
        })
      }
    )
  }
};
