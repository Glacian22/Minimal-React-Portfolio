import React from 'react'
import Nav from './components/nav/nav'
import Navlink from './components/navlink/navlink'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Nav>
        <Navlink destination='about' />
        <Navlink destination='portfolio' />
        <Navlink destination='tech' />
        <Navlink destination='contact' />
      </Nav>
    </div>
  )
}

export default App
