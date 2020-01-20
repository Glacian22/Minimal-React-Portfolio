import React from 'react'
import { Link } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import inTheirShoesFront from '../../../images/portfolio/lobby.jpg'
import inTheirShoesBack from '../../../images/portfolio/socketlog.png'
import thisPortfolio from '../../../images/portfolio/Portfolio_small.jpg'
import blobber from '../../../images/portfolio/blobber.jpg'
import squares from '../../../images/portfolio/squares.gif'
import watDis from '../../../images/portfolio/WatDis.png'
import './style.css'

export default function Portfolio (props) {
  return (
    <div className='content' id='portfolio'>
      <p>Some projects I have worked on:</p>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop>
        <a className='folioCard' href='https://github.com/aprilleperez/realgameoflife_client' target='blank'>
          <div>
            <img src={inTheirShoesFront} alt='In Their Shoes React' />
            <div className='card-title'>In Their Shoes client</div>
            <p id='boom'>Group training tool for non-profits.
               Uses React for UI, with sockets for realtime communication with the server.</p>
          </div>
        </a>
        <a className='folioCard' href='https://github.com/cplank/LifeAPI' target='blank'>
          <div>
            <img src={inTheirShoesBack} alt='In Their Shoes Server' />
            <div className='card-title'>In Their Shoes Server</div>
            <p>The backend for this app was built with Node, Express, sockets, and uses MongoDB to store
              scenario templates and user info.
            </p>
          </div>
        </a>
        <Link className='folioCard' to='about'>
          <div>
            <img src={thisPortfolio} alt='this site' />
            <div className='card-title'>This Portfolio</div>
            <p> This portfolio site was designed and built by me, using React with custom components
              and leveraging CSS3 grid.
            </p>
          </div>
        </Link>
        <a className='folioCard' href='https://github.com/yomyyo/yelling-game' target='blank'>
          <div>
            <img src={blobber} alt='Blobber Royale' />
            <div className='card-title'>Blobber Royale</div>
            <p>Blobber Royale - full stack networked game built on sockets and MS Azure realtime speech recognition API
              <br />
               The code for this game is rough around the edges, and is being completely reworked for mobile deployment.
            </p>
          </div>
        </a>
        <a className='folioCard' href='https://github.com/Glacian22/React-Tutorial' target='blank'>
          <div>
            <img src={squares} alt='React Tutorial' />
            <div className='card-title'>React Tutorial</div>
            <p>A demo of React concepts I built as a tutorial for my coding bootcamp students.
              <br />
              Designed to show how to structure a React app, use props, state, hooks, and the usefulness of nesting components as children.
            </p>
          </div>
        </a>
        <a className='folioCard' href='https://github.com/QuantumPhilosophy/anonymous-pumpkin' target='blank'>
          <div>
            <img src={watDis} alt='Wat Dis' />
            <div className='card-title'>Wat Dis</div>
            <p> Wat Dis?
              <br />
              Wat Dis? - frontend web app for identifying and elaborating on the contents of
                images. Uses Google Cloud Vision and Wikipedia APIs</p>
          </div>
        </a>

      </Carousel>
    </div>
  )
}
