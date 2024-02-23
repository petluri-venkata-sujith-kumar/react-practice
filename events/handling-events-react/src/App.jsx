// import React from 'react'
//funtional based component
// const App = () => {
//   let handleEventsInReact=()=>{
//     alert("hello react event")
//   }
//   let handleSubmit=(e)=>{
//     console.log(e);
//     e.preventDefault()  //you must call preventDefault explicitly to prevent browser default
//     console.log("hello react");
//   }
//   return (
//     <div>
//       {/* <h1>hello</h1>
//       <button onClick={handleEventsInReact}>click</button> */}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="" id="input" placeholder="enter some text"/>
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

import { useState } from "react";
import Button from "./components/Button";

// export default App

//class based component
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//     this.Increment=this.Increment.bind(this)
//   }
//   Increment(){
//     console.log(this);//window
//     this.setState({count:this.state.count+1})
//   }
//   Decrement=()=>{
//     console.log(this);//window
//     this.setState({count:this.state.count-1})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>Increment with constructor bind</button>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
//         <button onClick={this.Decrement}>Decrement with arrow function</button>
//         <button onClick={this.Increment.bind(this)}>Increment with inline bind</button>
//       </div>
//     )
//   }
// }

// import React from 'react'

// const App = () => {
//   let customEvent=()=>{
//     let myEvent=new Event("yclick")
//     let body=document.body
//     body.addEventListener("yclick",e=>{
//       e.target.style.background="blue"
//       console.log(e.target);
//     })
//     body.dispatchEvent(myEvent)
//   }
//   return (
//     <div>
//       <h1>custom event in react</h1>
//       <button onClick={customEvent}>Trigger custom event</button>
//     </div>
//   )
// }

// export default App

// import {useState} from 'react'

// const App = () => {
//   let [isShow,isSetShow]=useState(false)

//   return (
//     <div>
//       <button onMouseEnter={()=>{isSetShow(true)}} onMouseLeave={()=>{isSetShow(false)}}>Hover on me will get something.....</button>
//       {isShow && <span>It will Show.......</span>}
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   let ChangeBgColor=(e)=>{
//     console.log(e);
//     e.target.style.background="purple"
//     e.target.style.color="white"
//     e.target.style.width="700px"
//     e.target.style.padding="10px"
//     e.target.children[0].innerHTML="QSP"
//   }
//   return (
//     <div>
//       <button onMouseOver={ChangeBgColor}>hover me</button>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   let show=()=>{
//     console.log("I Am show");
//   }
//   let showOneMoreTime=()=>{
//     console.log("one more time show");
//   }
//   let showTyLogo=()=>{
//     console.log("LOGO");
//   }
//   let showMenu=()=>{
//     console.log("show menu");
//   }
//   return (
//     <div>
//       <button onClick={()=>{show(),showOneMoreTime(),showTyLogo(),showMenu()}}>Multiple events trigger at once</button>
//     </div>
//   )
// }

// export default App

// import AudioComp from "./components/AudioComp"
// import link1 from "/Beast.mp3"
// import link2 from "/leo.mp3"
// import "./components/player.css"
// const App = () => {
//   const audioArr=[
//     {
//       link:link1,
//       imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xOlaOgTolMfTX08C66EmuXiMMaWYkUpqcQ&usqp=CAU",
//       movie_name:"Beast"
//     },
//     {
//       link:link2,
//       imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9BQvoVOJX8qmkSjESn942O516r7-aWBa4vYUGSnYR3uVptRbHqUKNCLacuCv4S0B6tY&usqp=CAU",
//       movie_name:"Leo"
//     },
//   ]
//   return (
//     <div>
//       <AudioComp audioArr={audioArr}/>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   return (
//     <div>
//       <button onClick={()=>{alert("hello sujith")}}>click me</button>
//       <span onClick={()=>{alert("hello sujith")}}>click me with span tag</span>

//       <Button onTest={()=>alert("hello naming event handler")}>play audio</Button>
//       <Button onTest={()=>alert("hello naming handler props....")}>play video</Button>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   return (
//     <section
//       className="section"
//       onClick={(e) => {
//         e.stopPropagation();
//         console.log("Grand Parent event has been Triggered");
//       }}
//     >
//       GRAND PARENT
//       <div
//         className="div"
//         onClick={(e) => {
//           e.stopPropagation();
//           console.log("Parent event has been Triggered");
//         }}
//       >
//         PARENT
//         <button
//           className="btn"
//           onClick={(e) => {
//             e.stopPropagation();
//             console.log("child event has been Triggered");
//           }}
//         >
//           child
//         </button>
//       </div>
//     </section>
//   );
// };
// //bubbling means the event travels from target to root
// //capturing means the event will travel from root to target
// //for bubbling phase we use onclick for capturing phase we use onClickCapture event
// export default App;

// const App = () => {
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log("hello form");
//         }}
//       >
//         <input type="text" name="" id="" />
//         <button>submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

//keyboard event
const App = () => {
  let [state,setState]=useState("")
  let handleKeyboardEvent = (e) => {
    // console.log(e.key);
    if(e.key ==="y"){
      console.log("you pressed y");
      setState(e.key)
    }
    else if(e.key ==="n"){
      console.log("you pressed n");
      setState(e.key)
    }
    else{
      console.log("you pressed some other key");
      setState(e.key)
    }
  };
  return (
    <div>
      <h1>{state}</h1>
      <input
        type="text"
        placeholder="type any key"
        value={state}
        // onKeyPress={handleKeyboardEvent}
        // onKeyUp={handleKeyboardEvent}
        onKeyDown={handleKeyboardEvent}
      />
    </div>
  );
};

export default App;
