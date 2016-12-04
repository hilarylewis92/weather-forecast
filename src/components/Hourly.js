import React from 'react'
import { connect } from 'react-redux'

const HourlyForecast = ({ local, pinned, params }) => {

  const id = params.id
  const day = params.day

  let hourly
  let tempForecastArray = []

  if(id >= 0) {
    hourly = pinned[id].hourly_forecast
  } else {
    hourly = local.hourly_forecast
  }

  const sliceHourlyArray = () => {
    let currentTimeIndex = hourly[0].FCTTIME.hour
    let hoursRemainingInDay = 24 - currentTimeIndex

    tempForecastArray[0] = hourly.slice(0, hoursRemainingInDay)

    for (var i = 1; i < 9; i++) {
      let temp = hourly.slice(((i - 1) * 24) + hoursRemainingInDay, (i * 24) + hoursRemainingInDay)
      tempForecastArray.push(temp)
    }
  }

  sliceHourlyArray()

  return (
    <div>
      { tempForecastArray[day].map( (hour, index) => {
        return (
          <div className='hourly-container' key={index}>
            <span className='hourly-time'>
              {hour.FCTTIME.civil}
            </span>
            <span className='hourly-condtion'>
              {hour.conditions}
            </span>
            <span className='hourly-temp'>
              {hour.temp.english}
            </span>
            <img className='hourly-image' src={hour.icon_url} />
          </div>
        )
      } ) }
    </div>
  )

}

export default HourlyForecast
