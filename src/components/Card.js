import React from 'react'
import {Link} from 'react-router'

const Card = ({list, id}) => {
  console.log(list);
  console.log(id);
  return(
    <div className="pinned-city-card">
      <Link to="/forecast">View Forecast</Link>
      <div>
        {list[id] ?
          <div>
            <h3>{list[id].current_observation.display_location.full}</h3>
            <span>{list[id].current_observation.temp_f}</span>
            <span>{list[id].current_observation.weather}</span>
            <img src={list[id].current_observation.icon_url} />
          </div>
           : null}
      </div>
    </div>
  )
}

export default Card
