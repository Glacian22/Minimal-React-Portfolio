import React from 'react'
import './style.css'

export default function About (props) {
  return (
    <div className='content' id='about'>
      <div>
        <p><bdi className='about-headers'>Name:</bdi> Abram Thau</p>
        <p><bdi className='about-headers'>Species:</bdi> Human</p>
        <p><bdi className='about-headers'>Occupation:</bdi> Software Developer</p>
        <p><bdi className='about-headers'>Disposition:</bdi> Curious/Hungry</p>
        <p><bdi className='about-headers'>Background: </bdi>
           I've been writing code in one form or another since I was 12. These days I
          specialize in full-stack development, creating websites, desktop and mobile applications,
          and assorted other projects. I enjoy tackling tough problems, whether it's with an existing
          code base or starting from scratch, familiar tech or something brand new. Just keep me full of
          snacks and coffee and we're good to go.
        </p>
      </div>
    </div>
  )
}
