import { Component } from 'react'

export default class ClassBasedComp extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    // componentDidMount(){
    //     //the componentDidMount is used for side effects in class based component
    //     document.title=`This title is coming from class ${this.state.count}`
    // }
    // componentDidUpdate(){
    //     //render based state or prop update
    //     document.title=`This title is coming from class with updated phase ${this.state.count}`
    //     console.log("check re-rendered or not");
    // }
    
  render() {
    return (
      <div>
        <h1>class based Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}
