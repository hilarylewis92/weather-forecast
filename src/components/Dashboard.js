import React from 'react'
// import Card from '../containers/Card'
import Card from '../components/Card'

const Dashboard = () => {
  return(
    <div className="city-card-container">
      <Card />
      <Card />
      <Card />
      <Link to="/settings"> Edit My Cities </Link>
    </div>
  )
}

export default Dashboard
