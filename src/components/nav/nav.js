import React, { useState, useEffect } from 'react'
import './style.css'

function Nav (props) {
  const [elements, setElements] = useState([])

  useEffect(() => {
    let count = 0
    let timer = setInterval(() => {
      setElements(elements => [...elements, props.children[count]])
      count++
      if (count === props.children.length) {
        clearInterval(timer)
      }
    }, 100)
  }, [props.children])

  return (
    <nav className='nav'>
      {elements}
    </nav>
  )
}

export default Nav
