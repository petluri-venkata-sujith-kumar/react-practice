import React, { Component } from 'react'
import Logo from './Logo'
import SearchComponent from './SearchComponent'
import Menu from './Menu'

export default class NavbarContainer extends Component {
  render() {
    return (
      <section id='navbarContainer'>
        <article className='container'>
            <Logo/>
            <SearchComponent/>
            <Menu text="Login"/>
        </article>
      </section>
    )
  }
}
