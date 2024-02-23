import React, { useEffect, useMemo, useState } from 'react'

const CallbackExample = () => {
    let [count,setCount]=useState(0)
    let updateCount=useMemo(()=>window.localStorage.setItem("add-to-cart-count",count),[count])
    useEffect(()=>{
        console.log(count);
        updateCount
        // console.log(updateCount());
    },[count])
  return (
    <div>
        <h1>Callback Example</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Add to cart</button>
    </div>
  )
}

export default CallbackExample