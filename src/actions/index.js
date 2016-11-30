// require('es6-promise').polyfill();
require('isomorphic-fetch');

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

const apiKey = '6258be8435d18786dff892f30b54a00e'

export const receiveForecast = (forecastData) => ({
  // action object
});

export const fetchForecast = options => dispatch => {
  // return fetch API call by zip
};


export const fetchCurrentLocationWeather = ( position ) => {
  // return fetch API call by goelocation
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  return (dispatch) => {

    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=imperial`)
      .then(weather => weather.json())
      .then((weatherInfo) => {
        dispatch({type: 'SET_LOCAL_WEATHER', weatherInfo})
      }
    )
  }
};

export const fetchCurrentLocationForecast = ( position ) => {
  // return fetch API call by goelocation
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  return (dispatch) => {

    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=imperial`)
      .then(weather => weather.json())
      .then((weatherInfo) => {
        dispatch({type: 'SET_LOCAL_FORECAST', weatherInfo})
      }
    )
  }
};

export const fetchPinnedLocationWeather = ( position ) => {
  const zip = 80210;
  console.log('testpin')
  return (dispatch) => {

    return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=${apiKey}&units=imperial`)
      .then(weather => weather.json())
      .then((weatherInfo) => {
        console.log(weatherInfo);
        dispatch({type: 'SET_PINNED_WEATHER', weatherInfo})
      }
    )
  }
};
