// import { Fragment, useState } from "react";

import {useState} from "react"
import Users from "./components/Auth/Users"
import Notification from "./components/messages/Notification"
import Products from "./components/products/Products"

// const App = () => {
//   let [displayText, setDisplayText] = useState(true);
//   if (displayText) {
//     return (
//       <Fragment>
//         <h1>welcome to testyantra software solutions pvt lmt</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
//           exercitationem consequatur nostrum atque labore distinctio odio nisi
//           ex et fuga temporibus reprehenderit ad explicabo laboriosam beatae
//           necessitatibus incidunt accusantium doloremque quo deserunt rem quos
//           quas minima officia. Dolore qui eligendi repellendus! Ea maiores odit
//           natus provident maxime asperiores aliquid commodi, repellat laborum
//           ullam sed saepe, nemo perferendis repellendus nobis autem
//           necessitatibus perspiciatis dolorem velit eveniet fuga. Velit porro
//           explicabo numquam atque facilis, culpa tempore provident magnam sit
//           natus iusto officiis minus expedita praesentium animi, repudiandae
//           asperiores quo! Sapiente obcaecati excepturi quos quae corporis quidem
//           optio laborum, at, harum ullam ab.
//         </p>
//       </Fragment>
//     );
//   }
//   else{
//     return (
//         <Fragment>
//             <h1>No data</h1>
//         </Fragment>
//     )
//   }
// };

// export default App;

// import { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'

// const App = () => {
//     const [isLoggedIn ,isSetLoggedIn]=useState(false)
//   return (
//     <div>
//         <Navbar data={{isLoggedIn,isSetLoggedIn}}/>
//     </div>
//   )
// }

// export default App

// import DATA from "../data.json"
// import { useState } from 'react';
// let list=[
//   // {
//   // id:1,
//   // category:"t-shirt",
//   // rating:{rate:4,count:2},
//   // description:"hello product",
//   // title:"green t-shirt",
//   // image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//   // }
// ]
// const App = () => {
//   let [state,setState]=useState(DATA)
//   return (
//     <section id="productsBlock">
//       <article className="container">
//         <Products state={state}/>
//       </article>
//     </section>
//   )
// }

// export default App

// const App = () => {
//   let [mode,setMode]=useState("c")
//   let [color,setColor]=useState("yellow")
//   // if(mode==='a' && color==="red"){
//   //   return <h1 style={{color:color}}>Mode is A</h1>
//   // }
//   // else if(mode ==='b' && color==="green"){
//   //   return <h1 style={{color:color}}>Mode is B</h1>
//   // }
//   // else if(mode ==='c' && color==="yellow"){
//   //   return <h1 style={{color:color}}>Mode is C</h1>
//   // }
//   // else{
//   //   return <h1>no matching keyword</h1>
//   // }
//   switch(mode,color){
//     case "a" && "red":
//       return <h1 style={{color:color}}>you are selected A</h1>
//     case "b" && "green":
//       return <h1 style={{color:color}}>you are selected B</h1>
//     case "c" && "yellow":
//       return <h1 style={{color:color}}>you are selected C</h1>
//     default:
//       return <h1>No mode is selected here....</h1>
//   }
// }

// export default App


// const App = () => {
//   let [state,setState]=useState([
//     {
//       id:1,
//       name:"sujith",
//       age:22,
//       company:"qsp",
//       salary:"20000",
//       role:"user"
//     },
//     {
//       id:2,
//       name:"imran",
//       age:23,
//       company:"testyantra",
//       salary:"30000",
//       role:"admin"
//     }
//   ])
//   return (
//     <div>
//       <Users state={state}/>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   let [state,setState]=useState(
//     [{
//     text:"info text",
//     status:"info"
//     },
//     {
//       text:"warning text",
//       status:"warning"
//     },
//     {
//       text:"error text",
//       status:"error"
//     }
// ])
//   return (
//     <div>
//       <Notification state={state}/>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   let [message,setMessage]=useState([
//     "some text",
//     "shashi is teacing react js"
//   ])
//   return (
//     <div>
//       <div>Messages<sup>1</sup></div>
//     </div>
//   )
// }

// export default App

//short-circuit AND operator &&
// let data=["dixith is teaching java","shashi is teaching reactjs"]
// const App = () => {
//   let [message,setMessage]=useState(data)
//   return (
//     <div>
//       <div>Notification
//         {message.length >0 && <sup>{message.length}</sup>}
//         </div>
//     </div>
//   )
// }

// export default App

const App = () => {
  let [data,setData]=useState(null);
  (async function(){
    let res=await window.fetch("https://api.github.com/users")
    let finalVal=await res.json()
    setData(finalVal)
  })()
  return (
    <div>
      {
        data===null ?"Loading....": data.map(user=>{
          return (
            <div>
              <li>{user.login}</li>
            </div>
          )
        })
      }
    </div>
  )
}

export default App