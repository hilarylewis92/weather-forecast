import React from 'react'
import { Link } from 'react-router'


const Card = ({ list, id }) => {
  return (
    <div className="pinned-city-card">
      {list[id] ?
        <div>
          <h3 className="card-location">{list[id].current_observation.display_location.full}</h3>
          <img className="card-img" role="presentation" src={list[id].current_observation.icon_url} />
          <span className="card-temp">{list[id].current_observation.temp_f}</span>
          <span className="card-weather">{list[id].current_observation.weather}</span>
          <Link className="card-link-to-extend" to="/forecast">View Forecast</Link>
        </div>
         :
        <Link className="card-link-to-settings" to="/settings">
          <div className="card-text-box">Save a New City</div>
        </Link>
      }
    </div>
  )
}

export default Card
