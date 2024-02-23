import  { Component } from 'react'
import Details from './components/Details'
import "./global.css"
import Navbar from "./Navbar/Navbar";
export default class  extends Component {
  render() {
    return (
        <>
        <article className="main">
                <Navbar/>
            </article>
      <div>
            <Details/>
      </div>
        </>
    )
  }
}
