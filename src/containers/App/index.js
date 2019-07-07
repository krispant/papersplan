import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import {Home, NotFound,TaxCalculation} from '../'
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.jpg'; 
import Nav from 'react-bootstrap/Nav'

import HeaderNavigation from '../HeaderNavigation'
import Disclaimer from '../Disclaimer'
import Routing from '../Routing'

import NavDropdown from 'react-bootstrap/NavDropdown'

class App extends Component {
  render() {
    return (
      <div className="app">
       <HeaderNavigation />
        <Routing />
       <Disclaimer />
      </div>
    )
  }
} 

export default App
