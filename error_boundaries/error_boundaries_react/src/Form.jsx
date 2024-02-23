import { useRef } from 'react'
import MyInput from './MyInput'

const Form = () => {
    let ref=useRef()
    let handleClick=()=>{
        ref.current.focus();
        ref.current.style.background="red"
    }
  return (
    <div>
        <MyInput ref={ref} label="enter name" placeholder="enter name" type="text"/>
        <button onClick={handleClick}>change</button>
    </div>
  )
}

export default Form