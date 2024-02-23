// //app.js is the root component of the react application
import React from "react";
import Navbar from "./components/Navbar/Navbar";
const App= ()=>{
    return (
        <>
            <Navbar/>
        </>
    )
}
export default App

// import React from "react";
// class App extends React.Component{
//     // state ={
//     //     username :"sujith"
//     // }
//     constructor(){
//         super()
//         this.state={
//             username:"sujith"
//         }
//     }
//     render(){
//         // console.log(this);
//         return (
//             <>
//                 <h1>My name is {this.state.username}</h1>
//                 <button onClick={()=>{this.setState({username:"suji"})}}>update name</button>
//             </>
//         )
//     }
// }
// export default App

// const App= ()=>{
//     let [username,name]=React.useState("sujith")
//     return <>
//         <h1>I am stateless component .... {username}</h1>
//         <button onClick={()=>{name("venkat")}}>change my name</button>
//     </>
// }
// export default App 


