import { useState ,useEffect} from 'react'

const EffectHookExample = () => {
    let [count,setCount]=useState(0)
    let [count2,setCount2]=useState(0)
    //!syntax of useEffect
    // useEffect(setup,dependencies?(optional))
    //?without dependencies is equals to render method it will render again again
    // useEffect(()=>{ document.title=`title is coming from useEffect ${count}`})

    //?with dependencies like componentDidMount in functional based component
    useEffect(()=>{
        document.title=`title is coming from useEffect ${count}`
        console.log("check re-rendered or not from effect");
    },[count]) //!if it is empty array dependencies means that is componetDidMount in functional based component

  return (
    <div>
        <h1>hook based component</h1>
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount2(count2-1)}>Decrement</button>
    </div>
  )
}

export default EffectHookExample