import React from 'react'
import { Link } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import inTheirShoesFront from '../../../images/portfolio/lobby.jpg'
import inTheirShoesBack from '../../../images/portfolio/socketlog.png'
import thisPortfolio from '../../../images/portfolio/Portfolio_small.jpg'
import './style.css'

export default function Portfolio (props) {
  return (
    <div className='content' id='portfolio'>
      <p>Some projects I have worked on:</p>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop>
        <a className='folioCard' href='https://github.com/aprilleperez/realgameoflife_client' target='blank'>
          <div>
            <img src={inTheirShoesFront} alt='In Their Shoes React' />
            <p class='card-text'>In Their Shoes client</p>
            <p id='boom'>Group training tool for non-profits.
               Uses React for UI, with sockets for realtime communication with the server.</p>
          </div>
        </a>
        <a className='folioCard' href='https://github.com/cplank/LifeAPI' target='blank'>
          <div>
            <img src={inTheirShoesBack} alt='In Their Shoes Server' />
            <p class='card-text'>In Their Shoes Server</p>
            <p>The backend for this app was built with Node, Express, sockets, and uses MongoDB to store
              scenario templates and user info.
            </p>
          </div>
        </a>
        <Link className='folioCard' to='about'>
          <div>
            <img src={thisPortfolio} alt='this site' />
            <p class='card-text'>This Portfolio</p>
            <p> This portfolio site was designed and built by me, using React with custom components
              and leveraging CSS3 grid.
            </p>
          </div>
        </Link>
      </Carousel>
    </div>
  )
}
