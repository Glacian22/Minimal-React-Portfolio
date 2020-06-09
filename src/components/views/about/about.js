import React from 'react'
import './style.css'

export default class About extends React.Component {
  state = {
    name: '',
    species: '',
    occ: '',
    disp: '',
    background: ''
  }
  text = {
    name: 'Abram Thau',
    species: 'Human',
    occ: 'Software Developer',
    disp: 'Curious/Hungry',
    background: `I've been a writer, inventor, and entrepeneur, but these days I
    specialize in full-stack development. You'll find me creating websites, desktop and mobile applications,
    and assorted other projects. I enjoy tackling tough problems, whether it's
    with an existing code base or starting from scratch, familiar tech or something brand new.
    Just keep me full of snacks and point me at a goal.`
  }

  componentDidMount (){
    let count = 1
    for (const key in this.text) {
      setTimeout(() => this.showText(key), count * 1300)
      count++
    }
  }

  showText = (key) => {
    let count = 0
    const length = this.text[key].length
    let speed = length < 30 ? 50 : 5
    let timer = setInterval(() => {
      this.setState({[key]: this.text[key].substr(0, count)})
      count++
      if (count > this.text[key].length) {
        clearInterval(timer)
      }
    }, speed)
  }

  render() {
    return (
      <div className='content' id='about'>
        <div>
          <p><bdi className='about-headers'>Name:</bdi> {this.state.name}</p>
          <p><bdi className='about-headers'>Species:</bdi> {this.state.species}</p>
          <p><bdi className='about-headers'>Occupation:</bdi> {this.state.occ}</p>
          <p><bdi className='about-headers'>Disposition:</bdi> {this.state.disp}</p>
          <p><bdi className='about-headers'>Background: </bdi> {this.state.background}
          </p>
        </div>
      </div>
    )
  }
}
