import Modal from "./Modal"
import "./index.css"
import { useState } from 'react';
const App = () => {
  let [toggle,setToggle]=useState(false)
  let handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <div className="main-content">
      <button onClick={handleToggle}>{toggle?"close":"open"}</button>
      {toggle && <Modal toggle={{toggle,handleToggle}}/>}
    </div>
  )
}

export default App