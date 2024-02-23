import { Fragment } from "react"
import Item from "./Item"

const Products = ({state}) => {
//   if(!state){
//     return <h1>Loading ....</h1>
//   }
//   if(!state.lenght){
//     return <h1>Loading.....</h1>
//   }
//   else{
//     return (
//         <ul>
//             {
//                 state.map(product=>{
//                     return (
//                     <Fragment key={product.id}>
//                       <Item key={product.id} {...product}/>
//                     </Fragment>)
//                 })
//             }
//         </ul>
//       )
//   }

  return(
    <Fragment>
        {!state?(<h1>Loading.....</h1>):!state.length ? (<p>sorry, the product is empty</p>):(<ul>
            {
                state.map(product=>{
                    return (
                    <Fragment key={product.id}>
                      <Item key={product.id} {...product}/>
                    </Fragment>)
                })
            }
        </ul>)}
    </Fragment>
  )
}

export default Products