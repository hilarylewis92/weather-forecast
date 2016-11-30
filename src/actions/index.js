export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

const apiKey = '6258be8435d18786dff892f30b54a00e'

export const receiveForecast = (forecastData) => ({
  // action object
});

export const fetchForecast = options => dispatch => {
  // return fetch API call by zip
};

export const fetchCurrentLocationForecast = ( position ) => {
  // return fetch API call by goelocation
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  return (dispatch) => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}&units=imperial`)
      .then((weather) => {
          return weather.json()
      } ).then((weatherInfo) => {
        console.log(weatherInfo);
        dispatch({type: 'SET_LOCAL_WEATHER', weatherInfo})
      }
      )
  }
};
