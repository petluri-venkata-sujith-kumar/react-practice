import React from 'react'
import Child from './Child'
import "./index.css"

const App = () => {
    let arr=[
        {
            name:"sujit",
            age:22,
            address:{
                street:"mystreet",
                place:"banglore"
            }
        },
        {
            name:"venkat",
            age:21,
            address:{
                street:"mystreet",
                place:"banglore"
            }
        }
    ]
    // let fun=()=>{
    //    return <h1>hello</h1>
    // }
  return (
    <div>
        <Child data={arr}/>
    </div>
  )
}
export default App