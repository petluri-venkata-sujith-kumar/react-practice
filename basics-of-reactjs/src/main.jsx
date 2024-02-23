//to create react application we need two important modules 
//1.react
//2.reactDOM
// import React from "react";
// import {createRoot} from 'react-dom/client'
// import ReactDOM from "react-dom";//it is depricated
// console.log(React);
// console.log(ReactDOM);
// ReactDOM.render(<h1>Hello React</h1>,document.getElementById("root"),()=>{
//     console.log("successfully dom connected");
// })
// createRoot(document.getElementById("root")).render(<h1>React 18 onwards use createRoot function...</h1>)
// createRoot(document.getElementById("root")).render(React.createElement("h1",null,"i am react without jsx"))//native react way

//react element object consist of properties 
//$$typeof
//key
//props
//ref
//type

//with jsx
// let elementWithJsx=<h1>Hello</h1>//wrapper of js and html

// let ele= 
// <div>
// <h1>jsx1</h1>
// <h1>jsx2</h1>
// </div>
// createRoot(document.getElementById("root")).render(ele)

// // const element=React.createElement("element name","property/attribute","children/content")
// const para=React.createElement("p",{className:"para"},"i am para from react native element")
// createRoot(document.getElementById("root")).render(para)
// console.log(para);

// const ele1=
//   <section className="section">
// <article className="article">
//     <main>
//         <h1>welcome to ty</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, unde!</p>
//         <button>view more</button>
//     </main>
// </article>
// </section>
// createRoot(document.getElementById("root")).render(ele1)

//creating fragment
// let fragment=new DocumentFragment()
// let linative=document.createElement("li")
// console.log(linative);
// let lifragment=document.createDocumentFragment("li")
// console.log(lifragment);
// lifragment.textContent="i am fragment text"
// let div=document.getElementById("root")
// div.appendChild(lifragment)

//here li tag is not added into dom tree by using fragment we can able to wrap the element without adding any additional element into dom tree.....

// import React ,{Fragment} from "react";
// import { createRoot } from "react-dom/client";
// createRoot(document.getElementById("root")).render(
//     <Fragment>
//         <li>Hello</li>
//         <li>world</li>
//         <li>and india</li>
//     </Fragment>
// )

//without importing fragment we can also use this fragment thing
import React from "react";
import { createRoot } from "react-dom/client";
// createRoot(document.getElementById("root")).render(
//     <>
//     <li>hello</li>
//     <li>world</li>
//     <li>and india</li>
//     </>
// )

//to create component we have two ways
//1.class based way
//2.functional based way
// const App=function(){
//     return (
//     <>
//         <div>
//             <h1>i am first component</h1>
//         </div>
//     </>
//     )
// }
// const Header=() =>{
//     return (
//         <>
//         <div className="logo">logo</div>
//         <div className="menu">Menu</div>
//         </>
//     )
// }
import App from "./App";
createRoot(document.getElementById("root")).render(<App/>)
// createRoot(document.getElementById("root")).render(<h1>Create first modular components</h1>)

