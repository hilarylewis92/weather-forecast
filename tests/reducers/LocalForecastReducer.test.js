import LocalForecastReducer from '../../src/reducers/LocalForecastReducer'

describe('LocalForecastReducer', () => {
  it('should return the initial state', () => {
    expect(LocalForecastReducer(undefined, {})).toEqual({})
  })
})
