import { Component } from 'react'
import LOGO from './logo.webp'
export default class Logo extends Component {
  render() {
    return (
      <div className='logoBlock'>
        <a href="#">
            <span>
                <picture>
                    <img src={LOGO} alt="logo" />
                </picture>
            </span>
        </a>
      </div>
    )
  }
}
