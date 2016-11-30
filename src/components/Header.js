import React from 'react'

const Header = ({name, temp, desc}) => {
  return(
    <article>
      <h1>Weather Tracker</h1>
      <section>
        <p>
          Current forecast for {name}: {desc} {temp}
        </p>
        <p>
          View Extended Forecast
        </p>
      </section>
    </article>
  )
}

export default Header
