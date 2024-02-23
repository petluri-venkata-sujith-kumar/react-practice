import { useState } from "react"
import PRODUCTS from "../../Products.json"
const Products = () => {
    let [products,setProducts]=useState(PRODUCTS)
  return (
    <div className="products">
        {/* <h1>Products</h1> */}
        {
            products.map.length >0 && products.map(product=>{
                return (
                  <>
                    <div className="products_container">
                      <figure>
                        <picture>
                          <img src={product.image} alt={product.title} height= {150} width={150}/>
                        </picture>
                      </figure>
                    </div>
                  </>
                )
              })
        }
    </div>
  )
}

export default Products