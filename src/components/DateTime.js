import React from 'react'

export default function DateTime() {
  const date = new Date();

  return (
    <div>
      { `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}` }    
    </div>
  )
}
