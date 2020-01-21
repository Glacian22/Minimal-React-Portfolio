import React from 'react'
import Nav from './components/nav/nav'
import NavComp from './components/navcomp/navcomp'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import About from './components/views/about/about'
import Portfolio from './components/views/portfolio/portfolio'
import Tech from './components/views/technology/tech'
import Contact from './components/views/contact/contact'
import Footer from './components/footer/footer'
import Content from './components/content/content'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav>
          <NavComp exact destination='about' />
          <NavComp destination='portfolio' />
          <NavComp destination='technology' />
          <NavComp destination='contact' />
        </Nav>
        <Content>
          <Switch>
            <Route path='/Minimal-React-Portfolio/about' exact render={About} />
            <Route path='/Minimal-React-Portfolio/portfolio' exact render={Portfolio} />
            <Route path='/Minimal-React-Portfolio/technology' exact render={Tech} />
            <Route path='/Minimal-React-Portfolio/contact' exact component={Contact} />
            <Redirect to='/Minimal-React-Portfolio/about' />
          </Switch>
        </Content>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
