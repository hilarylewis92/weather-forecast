import React from 'react'
import { Link } from 'react-router'
import Card from '../containers/Card'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="city-card-container">
        <Card id={0} />
        <Card id={1} />
        <Card id={2} />
      </div>
      <Link className="edit-cities-link" to="/settings">
        Edit My Cities
      </Link>
    </div>
  )
}

export default Dashboard
