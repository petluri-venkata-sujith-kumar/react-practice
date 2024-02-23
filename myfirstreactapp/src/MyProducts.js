import React from "react";
 
function MyProducts(props) {
  return (
    <div>
      <h1>Product Name :{props.name}</h1>
      <p>Product Descripton :{props.description}</p>
      <p>Product Price :{props.price}</p>
    </div>
  );
}
 
export default MyProducts;