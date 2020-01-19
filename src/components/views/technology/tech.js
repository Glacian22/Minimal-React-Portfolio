import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './style.css'

export default function Tech (props) {
  return (
    <div className='content' id='tech'>
      <p>Some of the technologies I use:</p>
      <div id='lists'>
        <div>
          <h4>>Front-End</h4>
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
          <h4>>Back-End</h4>
          <ul>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </div>
        <div>
          <h4>>Databases</h4>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <h4>>Assorted</h4>
          <ul>
            <li>RESTful APIs</li>
            <li>Mocha/Chai</li>
            <li>Socket.io</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
