import React from 'react'
// import Card from '../containers/Card'
import Card from '../containers/Card'
import { Link } from 'react-router'

const Dashboard = () => {
  return(
    <div className="city-card-container">
      <Card id={0} />
      <Card id={1} />
      <Card id={2} />
      <Link to="/settings"> Edit My Cities </Link>
    </div>
  )
}

export default Dashboard
