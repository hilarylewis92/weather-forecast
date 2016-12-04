import React from 'react'
import { Link } from 'react-router'

const Header = ({ name, temp, desc }) => {
  return (
    <header>
      <Link className="home-link" to="/">
        <div className="home-logo" alt="It's a duck!" />
        <h1 className="title"> Weather Dux </h1>
      </Link>
      <div className="current-weather">
        <span className="current-desc">
          {desc}
        </span>
        <span className="current-temp">
          {temp}&deg;
        </span>
        <span className="current-location">
          {name}
        </span>
      </div>
      <Link to="/forecast" className="current-view-extended">
        View Extended Forecast --&gt;
      </Link>
    </header>
  )
}

export default Header
