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
    <BrowserRouter basename={'/Minimal-React-Portfolio'}>
      <div className='App'>
        <Nav>
          <NavComp exact destination='about' />
          <NavComp destination='portfolio' />
          <NavComp destination='technology' />
          <NavComp destination='contact' />
        </Nav>
        <Content>
          <Switch>
            <Route path='/about' exact render={About} />
            <Route path='/portfolio' exact render={Portfolio} />
            <Route path='/technology' exact render={Tech} />
            <Route path='/contact' exact component={Contact} />
            <Redirect to='/about' />
          </Switch>
        </Content>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
