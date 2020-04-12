import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './style.css'

export default function Tech (props) {
  return (
    <div className='content' id='tech'>
      <p>Some of the technologies I use:</p>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop>
        <div className='lists'>
          <h3>Front-End</h3>
          <ul>
            <li>Javascript ES6+/Typescript</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
          </ul>
        </div>
        <div className='lists'>
          <h3>Back-End</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>Sequelize</li>
          </ul>
        </div>
        <div className='lists'>
          <h3>Databases</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>IndexedDb</li>
            <li>Firebase</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className='lists'>
          <h3>Methodologies</h3>
          <ul>
            <li>RESTful APIs</li>
            <li>Object Oriented Programming</li>
            <li>Test Driven Development</li>
            <li>Agile Development</li>
          </ul>
        </div>
        <div className='lists'>
          <h3>Assorted Tech</h3>
          <ul>
            <li>Babel</li>
            <li>Webpack</li>
            <li>Progressive Web Applications</li>
          </ul>
        </div>
      </Carousel>
    </div>
  )
}
