import React from 'react'

const ExtendedForecast = ({ local, pinned, params }) => {
  const id = params.id
  let list
  let name

  if(id >= 0) {
    name = pinned[id].current_observation.display_location.full
    list = pinned[id].forecast.simpleforecast.forecastday
  } else {
    name = local.current_observation.display_location.full
    list = local.forecast.simpleforecast.forecastday
  }

  return (
    <div>
      <h1 className="extend-city-header">
        {name}
      </h1>
      <div className="extend-day-card-container">
        {list.map((item, index) => {
          return (
            <div key={index} className="extend-day-card">
              <div className="extend-weekday-header">
                <h4 className="extend-weekday-dayname">
                  {item.date.weekday}
                </h4>
                <div className="extend-date">
                  <span>{item.date.monthname}</span>
                  <span> {item.date.day}, </span>
                  <span>{item.date.year}</span>
                </div>
              </div>
              <div className="extend-conditions">
                {item.conditions}
              </div>
              <img className="extend-image" alt="weather for today"
                src={item.icon_url}
              />
              <div className="extend-high-low-temp">
                <span className="extend-temp">
                  High: {item.high.fahrenheit}
                </span>
                <span className="extend-temp">
                  Low: {item.low.fahrenheit}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ExtendedForecast
