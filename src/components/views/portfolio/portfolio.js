import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import inTheirShoesFront from '../../../images/portfolio/lobby.jpg'
import inTheirShoesBack from '../../../images/portfolio/socketlog.png'
import './style.css'

export default function Portfolio (props) {
  return (
    <div className='content' id='portfolio'>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop>
        <a className='folioCard' href='https://github.com/aprilleperez/realgameoflife_client' target='blank'>
          <div>
            <img src={inTheirShoesFront} alt='In Their Shoes React' />
            <p class='card-text'>In Their Shoes client - full stack game app/platform frontend</p>
          </div>
        </a>
        <a className='folioCard' href='https://github.com/cplank/LifeAPI' target='blank'>
          <div>
            <img src={inTheirShoesBack} alt='In Their Shoes Server' />
            <p class='card-text'>In Their Shoes Server - sockets4days</p>
          </div>
        </a>
      </Carousel>
    </div>
  )
}
