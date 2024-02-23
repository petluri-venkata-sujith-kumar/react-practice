import { Component } from 'react'
import LeftServiceBlock from './LeftServiceBlock'
import RigthServiceBlock from './RigthServiceBlock'

export default class ServicesContainer extends Component {
  render() {
    return (
      <section className='serviceBlock'>
        <article className='container'>
            <LeftServiceBlock/>
            <RigthServiceBlock/>
        </article>
      </section>
    )
  }
}
