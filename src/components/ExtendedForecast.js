import React from 'react'


const ExtendedForecast = ({name, list}) => {
  if (list) {
  return(
    <div>
      <h1 className='extend-city-header'>{name}</h1>
      ExtendedForecast
      <div className='extend-day-card-container'>{list.map((item) => {
        return (
          <div className='extend-day-card'>
            <div className='extend-weekday-header'>
              <h4 className='extend-weekday-dayname'>{item.date.weekday} </h4>
              <div className='extend-date'>
                <span>{item.date.monthname}
                {item.date.day}, {item.date.year} </span>
              </div>
            </div>
            <div className='extend-conditions'> {item.conditions} </div>
            <img className='extend-image' src={item.icon_url}/>
            <div className='extend-high-low-temp'>
              <span className='extend-temp'> High: {item.high.fahrenheit} </span>
              <span className='extend-temp'> Low: {item.low.fahrenheit} </span>
            </div>
          </div>
        )
      })}</div>
    </div>
  )
} else {
  return <div></div>
  }
}
export default ExtendedForecast
