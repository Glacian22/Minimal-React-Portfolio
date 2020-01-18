import React from 'react'
import Nav from './components/nav/nav'
import NavComp from './components/navcomp/navcomp'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import About from './components/views/about/about'
import Portfolio from './components/views/portfolio/portfolio'
import Tech from './components/views/tech/tech'
import Contact from './components/views/contact/contact'
import Footer from './components/footer/footer'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav>
          <NavComp exact destination='about' />
          <NavComp destination='portfolio' />
          <NavComp destination='tech' />
          <NavComp destination='contact' />
        </Nav>
        <Switch>
          <Route path='/about' exact render={About} />
          <Route path='/portfolio' exact render={Portfolio} />
          <Route path='/tech' exact render={Tech} />
          <Route path='/contact' exact render={Contact} />
          <Redirect to='/about' />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
