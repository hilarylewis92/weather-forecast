import React from 'react'
import { Link } from 'react-router'


const Card = ({ list, id }) => {
  return (
    <div className="pinned-city-card">
      {list[id] ?
        <Link className="pinned-city-link" to={`/forecast/${id}`}>
          <div>
            <h3 className="card-location">
              {list[id].current_observation.display_location.full}
            </h3>
            <img
              className="card-img"
              role="presentation"
              src={list[id].current_observation.icon_url}
            />
            <span className="card-temp">
              {list[id].current_observation.temp_f}&deg;
            </span>
            <span className="card-weather">
              {list[id].current_observation.weather}
            </span>
          </div>
        </Link>
      :
        <Link className="card-link-to-settings" to="/settings">
          <div className="card-text-box">
            +
          </div>
        </Link>
      }
    </div>
  )
}

export default Card
