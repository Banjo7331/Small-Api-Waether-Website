import React from 'react'
import "../WeatherAppStylesFiles/TemperatureTemplate.css";

export default function Temperature({ temp,time }) {
  const tempOfTheDayArray = temp;
  const timeCorrespondingToTheTemperatureArray = time;

    return (
    <div className=''>{temp.map( (tmp) => {return tmp + " "})}</div>
  )
}
