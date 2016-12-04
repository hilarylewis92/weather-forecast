import React from 'react'
import { connect } from 'react-redux'

const HourlyForecast = ({ local, pinned, params }) => {

  const id = params.id
  const day = params.day
  console.log(day);

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
  
  console.log(tempForecastArray);

  return (
    <div>
      { tempForecastArray[day].map( (hour, index) => {
        return (
          <div key={index}>
            {hour.temp.english}
          </div>
        )
      } ) }
    </div>
  )

}

export default HourlyForecast
