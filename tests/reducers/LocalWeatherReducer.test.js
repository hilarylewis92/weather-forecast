import LocalWeatherReducer from '../../src/reducers/LocalWeatherReducer'

describe('LocalWeatherReducer', () => {
  it('should return the initial state', () => {
    expect(LocalWeatherReducer(undefined, {})).toEqual({})
  })

  it('should return a state with local weather information', () => {
    let action = {
      type: 'SET_LOCAL_WEATHER',
      weatherInfo: {
        weatherInfo: {
          name: 'Denver',
          temp: '35',
          desc:'cold'
        }
      }
    }
    let initial = {
      weatherInfo: {
        name: 'Denver',
        temp: '35',
        desc:'cold'}
    }

    let expected = {
      weatherInfo: {
        name: 'Denver',
        temp: '35',
        desc:'cold'}
    }

    expect(LocalWeatherReducer(initial, action)).toEqual(expected)
  })
})
