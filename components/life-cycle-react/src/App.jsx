import { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    console.log("i am constructor and render only once");
    console.log("THIS IS THE BEST PLACE FOR INITIALIZE THE STATE OBJECT AND BIND THIS KEYWORD");
    this.state={count:0,course:"java"}
  }
  // static getDerivedStateFromProps(props,state){
  //   console.log("i am getderivedStateFromProps method and render again again based on props and state i render before render method after constructor method");
  //   console.log("THIS METHOD IS RARE CASE USED METHOD");
  //   return {cousrse:props}

  // }
  handleClick=()=>{
    console.log("Click event has been Triggered");
   this.setState({course : "Nodejs"})
  }
  // componentDidMount(){
  //   console.log("i am componentDidMount i will render only once execute after all mounting life cycle");
  //   console.log("THIS IS BEST PLACE FOR CALLING NETWORK CALL OR AJAX CALLS AND INTRACT WITH DOM ... AND ANY OTHER..");
  //   window.fetch("https://api.github.com/users").then(x=>{x.json().then(y=>console.log(y))})
  // }

  // update phase
  // 1:getDerivedStateFromProps
  // 2.shouldComponentUpdate
  // 3.getSnapShotBeforeUpdate
  // 4.componentDidUpdate
  // 5.render()

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("i am shouldComponentUpdate lets check it");
  //   return this.state.count !==nextState.count
  // }

  componentDidUpdate(){
   let test= document.getElementById("demo1").innerHTML=`updated value ${this.state.course}`
   return test
  }
  getSnapshotBeforeUpdate(prevpros,prevState){
    let test=document.getElementById("demo").innerHTML=`Before the update ${prevState.course}`
    return test
  }

  //unmounting phase
  //1.componentWillUnmount()
  render() {
    console.log("i am render method and render again again");
    console.log("THIS IS BEST PLACE FOR RENDERING JSX AND COMPOSE THE CHILD COMPONENT");
    return (
      <div>
        <button onClick={this.handleClick}>Click for Changes <strong>{this.state.count}</strong></button>
        <h1 >
          {this.state.course}
        </h1>
        <aside id="demo"></aside>
        <aside id="demo1"></aside>
      </div>
    )
  }
}
