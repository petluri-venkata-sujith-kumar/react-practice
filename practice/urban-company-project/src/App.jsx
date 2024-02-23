import React, { Component } from 'react'
import "./global.css"
import NavbarContainer from './components/Navbar/NavbarContainer'
import ServicesContainer from './components/services/ServicesContainer'
export default class App extends Component {
  render() {
    return (
      <>
        <NavbarContainer/>
        <ServicesContainer/>
      </>

    )
  }
}

