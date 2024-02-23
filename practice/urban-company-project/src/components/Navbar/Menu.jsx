import { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div className='menuBlock'>
        <nav className='navbar'>
            <a href="#">{this.props.text}</a>
        </nav>
      </div>
    )
  }
}
