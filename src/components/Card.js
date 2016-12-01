import React from 'react'
import {Link} from 'react-router'

const Card = ({list, id}) => {
  console.log(list);
  console.log(id);
  return(
    <div className="pinned-city-card">
      <Link to="/forecast">View Forecast</Link>
      <div>
        {list[id] ? list[id].current_observation.display_location.full : null}
      </div>
      Card
    </div>
  )
}

export default Card
