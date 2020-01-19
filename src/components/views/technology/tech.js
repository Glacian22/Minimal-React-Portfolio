import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './style.css'

export default function Tech (props) {
  return (
    <div className='content' id='tech'>
      <p>Some of the technologies I use:</p>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop>
        <div>
          <h3>Front-End</h3>
          <ul>
            <li>Javascript ES6+</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
          </ul>
        </div>
        <div>
          <h3>Back-End</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </div>
        <div>
          <h3>Databases</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Redis</li>
          </ul>
        </div>
        <div>
          <h3>Assorted</h3>
          <ul>
            <li>RESTful APIs</li>
            <li>Mocha/Chai</li>
            <li>Socket.io</li>
          </ul>
        </div>
      </Carousel>
    </div>
  )
}
