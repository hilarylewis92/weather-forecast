import PinnedWeatherReducer from '../../src/reducers/PinnedWeatherReducer'

describe('PinnedWeatherReducer', () => {
  it('should return the initial state', () => {
    expect(PinnedWeatherReducer(undefined, [])).toEqual([])
  })

  it('should return a state with pinned weather information', () => {
    let action = {
      type: 'SET_PINNED_WEATHER',
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

    let expected = [{
      weatherInfo: {
        name: 'Denver',
        temp: '35',
        desc:'cold'}
    }]

    expect(PinnedWeatherReducer(initial, action)).toEqual(expected)
  })
})
