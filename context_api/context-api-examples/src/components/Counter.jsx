// import { CounterContextApi } from "../context/CounterContext"
// const Counter = () => {
//   return (
//     <CounterContextApi.Consumer>
//         {
//             (value)=>{
//                 let {count,Increment,Decrement,Reset}=value
//                 return (
//                     <>
//                         <h1>{count}</h1>
//                         <button onClick={Increment}>Increment</button>
//                         <button onClick={Decrement}>Decrement</button>
//                         <button onClick={Reset}>Reset</button>
//                     </>
//                 )
//             }
//         }
//         {/* <h1></h1>
//         <button>Increment</button>
//         <button>Decrement</button>
//         <button>Reset</button> */}
//     </CounterContextApi.Consumer>
//   )
// }

// export default Counter


//! using useContext hook

// import {useContext} from 'react'
// import { CounterContextApi } from '../context/CounterContext'

// const Counter = () => {
//     let {count,Increment,Decrement,Reset}=useContext(CounterContextApi)
//   return (
//     <div>
//         <h1>{count}</h1>
        // <button onClick={Increment}>Increment</button>
        // <button onClick={Decrement}>Decrement</button>
        // <button onClick={Reset}>Reset</button>
//     </div>
//   )
// }

// export default Counter

//!contexttype
import React, { Component } from 'react'
import { CounterContextApi } from '../context/CounterContext'

export default class Counter extends Component {
    static contextType=CounterContextApi
  render() {
    let value=this.context
    // console.log(value);
    // console.log(Counter.contextType);
    return (
      <div>
        <h1>{value.count}</h1>
        <button onClick={value.Increment}>Increment</button>
        <button onClick={value.Decrement}>Decrement</button>
        <button onClick={value.Reset}>Reset</button>
      </div>
    )
  }
}
// Counter.contextType=CounterContextApi
