import { useEffect } from 'react'
import './style.css'

let About = () => {

  let [displayText, setDisplayText] = ({name:'', species:'', occ:'', disp:'', background:''})

  const text = new Map([
    ['name', 'Abram Thau'],
    ['species', 'Human'],
    ['occ', 'Software Developer'],
    ['disp', 'Curious/Snacky'],
    ['background', `I've been a writer, inventor, and entrepeneur, but these days I
    specialize in full-stack development. You'll find me creating websites, desktop and mobile applications,
    and assorted other projects. I enjoy tackling tough problems, whether it's
    with an existing code base or starting from scratch, familiar tech or something brand new.
    Just keep me full of snacks and point me at a goal.`]
  ])

  useEffect = (() => {
    showText()
  }, [])

  const showText = () => {
    text.forEach((key, str) => {
      const speed = str.length < 30 ? 50 : 5;  
      for (char of str) {
        
      }
    })
  }

  return (
    <div className='content' id='about'>
      <div>
        <p className='about-headers'>Name: {displayText.name}</p>
        <p className='about-headers'>Species: {displayText.species}</p>
        <p className='about-headers'>Occupation:{displayText.occ}</p>
        <p className='about-headers'>Disposition: {displayText.disp}</p>
        <p className='about-headers'>Background: {displayText.background}</p>
      </div>
    </div>
  )
}

export default About;