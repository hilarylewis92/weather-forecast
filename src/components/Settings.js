import React from 'react'
import { Link } from 'react-router'

const Settings = ({onSubmit, cities}) => {
  let input
  console.log(cities);
  return(
    <div>
      <h2> My Cities </h2>
        <p>{cities ? cities.map((item) => {
          return (
            <div>
              {item.current_observation.display_location.full}
            </div>
          )
        }) : null}</p>
      <input ref={node=>{input=node}} placeholder="zip code" />
      <button
        onClick={(e) => {
          e.preventDefault()
          onSubmit(input.value)
          }}>
      Save New City </button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Settings
