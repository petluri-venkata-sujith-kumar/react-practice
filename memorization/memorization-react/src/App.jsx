// import { useState } from 'react';
// import Child from './Child';
// // import CountWithClass from './CountWithClass';
// const App = () => {
//     let [state,setState]=useState({
//         count:0,
//     })
//     let increment=()=>{
//        setState({count:state.count+1})
//     }
//     let {count}=state
//   return (
//     <div>
//         <h1>I am parent component <strong style={{color:"green"}}>{state.count}</strong></h1>
//         <button onClick={increment}>Increment</button>
//         <hr />
//         <Child count={{count,increment}}/>
//         {/* <hr />
//         <CountWithClass count={{count,increment}}/> */}
//     </div>
//   )
// }

// export default App
// import { useState } from "react";
// import Child from "./Child";
// import MemoExample from "./MemoExample";

// const App = () => {
//   let [name, setName] = useState("");
//   let [address, setAddress] = useState("");
//   return (
//     <div>
//       <h1>Parent component</h1>
//       <label htmlFor="name">
//         Name :
//         <input
//           type="text"
//           name=""
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="name"
//         />
//       </label>
//       <label htmlFor="address">
//         Address :
//         <input
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="address"
//         />
//       </label>
//       <hr />
//       {/* <Child name={name}/> */}
//       <MemoExample/>
//     </div>
//   );
// };

// export default App;

// import OneMoreMemo from "./OneMoreMemo"
// const App = () => {
//   return (
//     <div>
//         <OneMoreMemo/>
//     </div>
//   )
// }

// export default App

//!callback example
// import CallbackExample from './CallbackExample';

// const App = () => {
//   return (
//     <div>
//         <h1>Parent component</h1>
//         <hr />
//         <CallbackExample/>
//     </div>
//   )
// }

// export default App
