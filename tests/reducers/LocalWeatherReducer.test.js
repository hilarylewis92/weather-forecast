import LocalWeatherReducer from '../../src/reducers/LocalWeatherReducer'

describe('LocalWeatherReducer', () => {
  it('should return the initial state', () => {
    expect(LocalWeatherReducer(undefined, {})).toEqual({})
  })

  it('should return a state with local weather information', () => {
    let action = {
      type: 'SET_LOCAL_WEATHER',
      weatherInfo: 'Denver'
    }

    let expected = {
      weatherInfo: 'Denver'
    }

    expect(LocalWeatherReducer(undefined, action)).toEqual(expected)
  })
})
