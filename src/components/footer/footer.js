import React, { useState, useEffect } from 'react'
import envelope from '../../images/envelope.png'
import github from '../../images/github.png'
import linkedin from '../../images/linked-in.png'
import './style.css'

export default function Footer (props) {
  const arr = [
    <div key='0' className='w3-animate-left'><a href='https://www.linkedin.com/in/abram-thau/' target='_blank' rel='noopener noreferrer'>
      <img className='ind-icon' alt='linked-in' src={linkedin} /></a></div>,
    <div key='1' className='w3-animate-left'><a href='https://github.com/Glacian22/' target='_blank' rel='noopener noreferrer'>
      <img className='ind-icon' alt='github' src={github} /></a></div>,
    <div key='2' className='w3-animate-left'><a href='mailto:glacian22@gmail.com' target='_blank' rel='noopener noreferrer'>
      <img className='ind-icon email' alt='email' src={envelope} /></a></div>
  ]
  const [elements, setElements] = useState([])

  let loadLinks = linksArr => {
    let count = 0
    let linkTimer = setInterval(() => {
      setElements(() => [linksArr.slice(0, count)])
      count++
      if (count > linksArr.length) {
        clearInterval(linkTimer)
      }
    }, 250)
  }

  useEffect(() => {
    setTimeout(() => {
      loadLinks(arr)
    }, 200)
  }, [])

  return (
    <div id='foot-wrap'>
      <div id='foot'>
        {elements}
      </div>
    </div>
  )
}
