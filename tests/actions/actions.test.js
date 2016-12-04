import * as actions from '../../src/actions'

describe('actions', () => {
  it('should create an action to fetch current location weather', () => {
    const lat = 30
    const lon = 30
    const weatherInfo = []
    const expectedAction = {
      type: 'SET_LOCAL_WEATHER',
      weatherInfo,
    }
    expect(actions.fetchCurrentLocationWeather(lat, lon, weatherInfo)).toEqual(expectedAction)
  })
})
