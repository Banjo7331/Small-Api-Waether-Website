import React from 'react'
import "../WeatherAppStylesFiles/SearchBarTemplate.css"

export default function SearchBar() {
  return (
    <div className='SearchBar'>
        <form id="form"> 
            <input type="search" id="query" name="City" placeholder="Search for city..."></input>
            <button id='search'/>
        </form>
    </div>
  )
}
