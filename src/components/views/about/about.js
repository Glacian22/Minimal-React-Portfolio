import React, { useState, useEffect } from 'react'
import './style.css'

export default function About (props) {
  const [bio, setBio] = useState({})
  const text = {
    name: 'Abram Thau',
    species: 'Human',
    occ: 'Software Developer',
    disp: 'Curious/Hungry',
    background: `I've been writing code in one form or another since I was 14. These days I
    specialize in full-stack development, creating websites, desktop and mobile applications,
    and assorted other projects. I enjoy tackling tough problems, whether it's with an existing
    code base or starting from scratch, familiar tech or something brand new. Just keep me full of
    snacks and let's go!`
  }

  useEffect(() => {
    let count = 1
    for (const key in text) {
      setTimeout(() => showText(key), count * 1000)
      count++
    }
  }, [])

  let showText = key => {
    let count = 0
    let speed = text[key].length < 30 ? 50 : 1
    let timer = setInterval(() => {
      setBio(() => { return { ...bio, [key]: text[key].substr(0, count) } })
      count++
      if (count > text[key].length) {
        clearInterval(timer)
      }
    }, speed)
  }

  return (
    <div className='content' id='about'>
      <div>
        <p><bdi className='about-headers'>Name:</bdi> {bio.name}</p>
        <p><bdi className='about-headers'>Species:</bdi> {bio.species}</p>
        <p><bdi className='about-headers'>Occupation:</bdi> {bio.occ}</p>
        <p><bdi className='about-headers'>Disposition:</bdi> {bio.disp}</p>
        <p><bdi className='about-headers'>Background: </bdi> {bio.background}
        </p>
      </div>
    </div>
  )
}
