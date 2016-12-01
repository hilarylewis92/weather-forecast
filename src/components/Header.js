import React from 'react'
import { Link } from 'react-router';
// import ducklogo from './ducklogo.svg'

const Header = ({name, temp, desc}) => {
  // console.log(ducklogo);
  return(
    <header>
      <div className='home-logo' alt="It's a duck!"></div>
      <h1 className='title'>Weather Dux</h1>
      <div className='current-weather'>
           <span className='current-location'>{name} </span>
           <span className='current-desc'> {desc} </span>
           <span className='current-temp'> {temp}&deg; </span>
      </div>
      <Link to="/forecast" className="current-view-extended"> View Extended Forecast --> </Link>
    </header>
  )
}

export default Header
