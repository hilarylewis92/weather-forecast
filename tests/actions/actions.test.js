import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import * as actions from '../../src/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.clearAll()
  })

  it('should create an action to fetch current location weather', () => {
    nock('https://api.wunderground.com/api/881631f063e09bd3/conditions/forecast10day/alerts/hourly10day/q/')
      .get('/30,30.json')
      .reply(200, { city: 'Denver' })

    const weatherInfo = {
      city: 'Denver',
    }
    const location = {
      coords: {
        latitude: 30,
        longitude: 30,
      },
    }
    const expectedAction = {
      type: 'SET_LOCAL_WEATHER',
      weatherInfo,
    }

    const store = mockStore({ weatherInfo: {} })

    return store.dispatch(actions.fetchCurrentLocationWeather(location)).then(() => {
        expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
