import React from 'react'
import { useState } from 'react'
import "./global.css"
import Navbar from "./Navbar/Navbar";
import "./App.css"
import JSON from "./App.json"
const App = () => {
    let [state,setState]=useState(JSON)
    console.log(state.length);
  return (
    <>
    <article className="main">
        <Navbar/>
    </article>
    <div id='body'>
    <div id='container'>
        {state.map(data=>{
            return(
                <div>
                    {data.skills.length>4 ? (data.skills.includes("Reactjs")?<div id='card'>
                        <img src={data.image_src} alt="" />
                        <p className='name'>Name : {data.name}</p>
                        <p className='phno'>Mobile No : {data.phno}</p>
                        <p className='skills'>Skills :{data.skills.join(", ")}</p>
                        <button>see more</button>
                    </div>:""):""}
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default App