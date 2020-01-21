import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function NavComp (props) {
  return (
    <NavLink to={`/Minimal-React-Portfolio/${props.destination}`} className='w3-animate-left' activeClassName='active'>
      {props.destination}
    </NavLink>
  )
}
