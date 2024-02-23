import { Component } from 'react'
import Child from './components/Child'

export default class App extends Component {
  render() {
    return (
      <div>
        <Child  company="fireflink" salary={20000}/>
        <Child company="test yantra" name={1}/>
      </div>
    )
  }
}
