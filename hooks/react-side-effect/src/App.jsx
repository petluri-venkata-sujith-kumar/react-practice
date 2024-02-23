// import React from 'react'
// import ClassBasedComp from './component/ClassBasedComp';
// import EffectHookExample from './hooks/EffectHookExample';



// const App = () => {
//   return (
//     <div>
//       <ClassBasedComp/>
//       <hr />
//       <EffectHookExample/>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [width,setWidth]=useState(window.innerWidth)
//   const updateWidth=()=>{
//     setWidth(window.innerWidth)
//   }
//   useEffect(()=>{
//     window.addEventListener('resize',updateWidth)

//     return()=>{
//       window.removeEventListener("resize",updateWidth)
//     }
//     console.log(width);},[width])

//     if(width>600){
//       document.body.style.background="green"
//     }
//     else{
//       document.body.style.background="red"
//     }
//   return (
//     <div>App</div>
//   )
// }

// export default App

import { useEffect, useState } from "react"
import axios from "axios"
const App = () => {
  let [products,setProducts]=useState(null)
  let fetchProduct=async ()=>{
    let {data}=await axios.get("https://api.escuelajs.co/api/v1/products")
    // let finalProduct=await data.json()
    console.log(data);
    setProducts(data)
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <div>
      {
        products === null ? "loading..." :products.map(product=>{
          return (
            <>
              <img src="https://odoo-community.org/web/image/product.template/3936/image_1024?unique=7349d5e" alt={product.title} height={200} width={200} />
              <h2>{product.title}</h2>
            </>
          )
        })
      }
    </div>
  )
}

export default App