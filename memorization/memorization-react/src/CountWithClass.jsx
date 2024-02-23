import { PureComponent } from 'react'

export default class CountWithClass extends PureComponent {
  render() {
    let {count,increment}=this.props.count
    return (
      <div>
        {console.log("I am class based child component")}
        <h1>I am class based child component <strong style={{color:"purple"}}>{count}</strong></h1>
        <button onClick={increment}>Increment</button>
      </div>
    )
  }
}
