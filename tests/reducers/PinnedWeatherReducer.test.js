import PinnedWeatherReducer from '../../src/reducers/PinnedWeatherReducer'

describe('PinnedWeatherReducer', () => {
  it('should return the initial state', () => {
    expect(PinnedWeatherReducer(undefined, [])).toEqual([])
  })

  it('should return a state with pinned weather information', () => {
    const action = {
      type: 'SET_PINNED_WEATHER',
      weatherInfo: {
        weatherInfo: {
          name: 'Denver',
          temp: '35',
          desc: 'cold',
        },
      },
    }
    const initial = {
      weatherInfo: {
        name: 'Denver',
        temp: '35',
        desc: 'cold',
      },
    }
    const expected = [{
      weatherInfo: {
        name: 'Denver',
        temp: '35',
        desc: 'cold',
      },
    }]
    expect(PinnedWeatherReducer(initial, action)).toEqual(expected)
  })
})
