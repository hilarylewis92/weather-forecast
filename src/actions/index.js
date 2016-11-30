export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveForecast = (forecastData) => ({
  // action object
});

export const fetchForecast = options => dispatch => {
  // return fetch API call by zip
};

export const fetchCurrentLocationForecast = options => dispatch => {
  // return fetch API call by goelocation
  console.log('test');
  let localForecast;
  navigator.geolocation.getCurrentPosition((position) => {
    localForecast = position.coords.latitude;

    return (dispatch)=>{
      dispatch({
        type: 'GET_LOCAL_FORECAST',
        localForecast
      })
    }
  })
};
