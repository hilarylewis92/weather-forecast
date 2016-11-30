import React from 'react'


const ExtendedForecast = ({name, list}) => {
  console.log(list);
  if (list) {
  return(
    <div>
      <h1>{name}</h1>
      ExtendedForecast
      <p>{list.map((item) => {
        return (<span>{item.main.temp}</span>)
      })}</p>
    </div>
  )
} else {
  return <div></div>
}
}
export default ExtendedForecast
