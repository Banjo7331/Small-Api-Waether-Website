import React from 'react'

export default function Temperature({ temp }) {
  return (
    <div>{temp.hourly.time}</div>
  )
}
