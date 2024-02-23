import { Component, Fragment } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             username:"sujith"
//         }
//     }
//   render() {
//     return (
//       <div>My name is {this.state.username}</div>
//     )
//   }
// }
import React from "react"
// export default function App(){
//     const username=React.useState("sujith")
//     return (
//         <div>
//             <h1>{username}</h1>
//         </div>
//     )
// }


//updating the state using class based component

// export default class App extends Component{
//     state={
//         username:"sujith"
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.username}</h1>
//                 <button onClick={()=>this.setState({username:"venkat"})}>update name</button>
//             </div>
//         )
//     }
// }

//updating state using function based component

// const App=()=>{
//     const [username ,setUsername]=React.useState("sujith")
//     return (
//         <>
//             <h1>hello {username}</h1>
//             <button onClick={()=>setUsername("venkat")}>update</button>
//         </>
//     )
// }
// export default App
let skills=["java","nodejs","expressjs","mongodb","react","redux","react-query"]
// export default class App extends Component{
//     state={skills}
//     getCount(){
//         let x=2+2
//         console.log(x);
//     }
//     remove=(index)=>{
//         let update=[...this.state.skills]
//         console.log(update);
//         update.splice(index,1)
//         this.setState({skills:update})
//     }
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.skills.map((val,index)=>{
//                         return (
//                             <Fragment >
//                                 <li>{val}</li>
//                                 <button onClick={()=>this.remove(index)}>delete</button>
//                             </Fragment>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

const App=()=>{
         const [username ,setUsername]=React.useState(skills)
        //  console.log(username);
        const remove=function (index){
            let update=[...username]
            update.splice(index,1)
            setUsername(update)
        
         }
         return (
             <div>
                 {
                    username.map((val,index)=>{
                        return (
                            <Fragment>
                                <li>{val}</li>
                                <button onClick={()=>{remove(index)}}>delete</button>
                            </Fragment> 
                        )
                    })
                 }
             </div>
         )
     }
     export default App