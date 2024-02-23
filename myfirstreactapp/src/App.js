// import { render } from "@testing-library/react";
import React from "react";
// import {createRoot}  from "react-dom/client";
// import "./App.css";
import MyProducts from "./MyProducts";

// function App(fn) {
//     return <h1>Hi there, {fn.firstName}!</h1>;
//   }
// //   render(<App firstName="venkat"/>)
//   export default App
function App() {
    return (
      <div className="App">
        <MyProducts
          name="temitope"
          description="the product has fantastic features"
          price={1000}
        />
      </div>
    );
  }
   
  export default App;