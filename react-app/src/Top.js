import React from 'react'
import breadImg from './bred.png'

export default function Top() {
  return (
    <div>
      <div id='top'>
          <h1>Welcome to my bread collection</h1>
      </div>
      <div id='img-box'>
          <img src={breadImg} />
      </div>
    </div>
  )
}
