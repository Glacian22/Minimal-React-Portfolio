import { useEffect } from 'react'
import './style.css'

let About = () => {

  let [dispText, setDispText] = ({name:'', species:'', occ:'', disp:'', background:''})

  const text = [
    ['name', 'Abram Thau'],
    ['species', 'Human'],
    ['occ', 'Software Developer'],
    ['disp', 'Curious/Snacky'],
    ['background', `I've been a writer, inventor, and entrepeneur, but these days I
    specialize in full-stack development. You'll find me creating websites, desktop and mobile applications,
    and assorted other projects. I enjoy tackling tough problems, whether it's
    with an existing code base or starting from scratch, familiar tech or something brand new.
    Just keep me full of snacks and point me at a goal.`]
  ]

  // new algo: 
  //  update 1 letter per function call, 
  //  set time out to call funtion again if total not met

  useEffect = (() => {
    const showText = (row = 0) => { 
      const key = text[row][0];
      let newRow;

      setDispText(dTxt => {
        // if done with this row, don't update state and check if there are more rows. If so, increment row if more rows available, or set to -1 to indicate all done.
        // else update state with additional char, run again
        if (dTxt[key].length === text[row][key].length) {
          newRow = row < text.length - 1 ? row + 1 : -1;
          return dTxt;
        }
        else {
          return {...dTxt, }
        }
      })

      // Logic to decide if to call showText again, ie more text to render
      // setTimeOut showText()
    }
      
    showText()
  }, [text])


  return (
    <div className='content' id='about'>
      <div>
        <p className='about-headers'>Name: {dispText.name}</p>
        <p className='about-headers'>Species: {dispText.species}</p>
        <p className='about-headers'>Occupation:{dispText.occ}</p>
        <p className='about-headers'>Disposition: {dispText.disp}</p>
        <p className='about-headers'>Background: {dispText.background}</p>
      </div>
    </div>
  )
}

export default About;