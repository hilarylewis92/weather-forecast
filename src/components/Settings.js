import React from 'react'

const Settings = ({onSubmit}) => {
  let input
  return(
    <div>
      <h2> My Cities </h2>
      <input ref={node=>{input=node}} placeholder="zip code" />
      <button
        onClick={(e) => {
          e.preventDefault()
          onSubmit(input.value)
          }}>
      Save New City </button>
    </div>
  )
}

export default Settings
