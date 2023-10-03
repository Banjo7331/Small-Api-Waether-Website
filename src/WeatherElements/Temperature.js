import React from 'react'

export default function Temperature({ temp,time }) {
  const tempOfTheDayArray = temp;
  const timeCorrespondingToTheTemperatureArray = time;

    return (
    <div>{temp.map( (tmp) => {return tmp + " "})}</div>
  )
}
