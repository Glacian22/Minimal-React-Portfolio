import React from 'react'
import './style.css'

function Navlink (props) {
  return (
    <span className='w3-animate-left'>
      {props.destination}
    </span>
  )
}

export default Navlink
