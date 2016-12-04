import React from 'react'
import { Link } from 'react-router'

const Settings = ({ onSubmit, cities, deleteCity }) => {
  let input
  return (
    <div className="settings-container">
      <h2 className="settings-title"> My Cities </h2>
      <div>{cities ? cities.map((item, i) => {
        return (
          <div key={i} className="settings-city-container">
            {item.current_observation.display_location.full}
            <button className="settings-delete-city" onClick={() => deleteCity(i)}>X</button>
          </div>
        )
      }) : null}</div>
      <div className='settings-input-container'>
        <input className="settings-city-input" ref={(node) => { input = node }} placeholder="zip code" />
        <button className="settings-save-city"
          onClick={(e) => {
            e.preventDefault()
            onSubmit(input.value)
          }}
        >
        Save New City </button>
      </div>
    </div>
  )
}

export default Settings
