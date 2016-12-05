/* eslint no-unneeded-ternary: 0 */

import React from 'react'
import { Link } from 'react-router'

const Settings = ({ onSubmit, cities, deleteCity, error, clearError }) => {
  let input

  return (
    <div className="settings-container">
      <h2 className="settings-title">
        My Cities
      </h2>
      <div>{cities ? cities.map((item, i) => {
        return (
          <div key={i} className="settings-city-container">
            <button
              className="settings-delete-city"
              onClick={() => deleteCity(i)}
            >
              X
            </button>
            {item.current_observation.display_location.full}
          </div>
        )
      }) : null}
      </div>
      <div className="settings-input-container">
        <input
          className="settings-city-input"
          ref={(node) => { input = node }}
          placeholder="zip code"
          onChange={
            () => clearError()
          }
        />
        <button
          className="settings-save-city"
          onClick={(e) => {
            e.preventDefault()
            onSubmit(input.value)
            input.value = ''
          }}
        >
          Save
        </button>
      </div>
      <div>{error ?
        error
        :
        null}
      </div>
    </div>
  )
}

export default Settings
