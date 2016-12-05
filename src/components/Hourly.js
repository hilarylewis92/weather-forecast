import React from 'react'
import { connect } from 'react-redux'

const HourlyForecast = ({ local, pinned, params }) => {
  const id = params.id
  const day = params.day
  let i = 0
  let hourly
  const tempForecastArray = []
  if (id >= 0) {
    hourly = pinned[id].hourly_forecast
  } else {
    hourly = local.hourly_forecast
  }

  const sliceHourlyArray = () => {
    const currentTimeIndex = hourly[0].FCTTIME.hour
    const hoursRemainingInDay = 24 - currentTimeIndex

    tempForecastArray[0] = hourly.slice(0, hoursRemainingInDay)

    for (i = 1; i < 9; i += 1) {
      const temp = hourly.slice(((i - 1) * 24) + hoursRemainingInDay, (i * 24) + hoursRemainingInDay)
      tempForecastArray.push(temp)
    }
  }

  sliceHourlyArray()
  console.log(tempForecastArray[day][0])

  return (
    <div>
      <div className='day'>
        <span>{tempForecastArray[day][0].FCTTIME.weekday_name_unlang}, </span>
        <span>{tempForecastArray[day][0].FCTTIME.month_name} </span>
        <span>{tempForecastArray[day][0].FCTTIME.mday}</span>
      </div>
      <div className="hourly-card-container">
        {tempForecastArray[day].map((hour, index) => {
          return (
            <div className="hourly-container" key={index}>
              <span className="hourly-time">
                {hour.FCTTIME.ampm === 'PM' && hour.FCTTIME.hour !== '12' ? +hour.FCTTIME.hour-12 : hour.FCTTIME.hour} {hour.FCTTIME.ampm}
              </span>
              <span className="hourly-condtion">
                {hour.conditions}
              </span>
              <span className="hourly-temp">
                {hour.temp.english}&deg;
              </span>
              <img className="hourly-image" src={hour.icon_url} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HourlyForecast
