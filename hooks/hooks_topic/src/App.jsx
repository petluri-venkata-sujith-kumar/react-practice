import {useReducer} from 'react'

let initialState={
  count:0
}
let reducer=(state,action)=>{
  switch(action.type){
    case "INCREMENT" :
      return {
        count:state.count+1
      }
    case "DECREMENT" :
      return {
        count:state.count-1
      }
    case "RESET" :
      return {
        count:0
      }
  }
}
const App = () => {
  let [state,dispatch]=useReducer(reducer,initialState)
  // console.log(useReducer(()=>{},{count:1}));
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
    </div>
  )
}

export default App