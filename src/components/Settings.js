import React from 'react'
import { Link } from 'react-router'

const Settings = ({ onSubmit, cities, deleteCity }) => {
  let input
  return (
    <div>
      <h2> My Cities </h2>
      <p>{cities ? cities.map((item, i) => {
        return (
          <div>
            {item.current_observation.display_location.full}
            <button onClick={() => deleteCity(i)}>X</button>
            <div>{i}</div>
          </div>
        )
      }) : null}</p>
      <input ref={(node) => { input = node }} placeholder="zip code" />
      <button
        onClick={(e) => {
          e.preventDefault()
          onSubmit(input.value)
        }}
      >
      Save New City </button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Settings
