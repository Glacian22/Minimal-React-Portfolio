import React, { useEffect, useState } from 'react'
import './style.css'
export default function Content (props) {
  const [content, setContent] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setContent(props.children)
    }, 500)
  }, [])

  return (
    content
  )
}
