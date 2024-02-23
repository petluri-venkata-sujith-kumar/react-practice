import React from "react";
// const Child = () =>
//   // {count:{count,increment}}
//   {
//     return (
//       <div>
//         {console.log("I am child component")}
//         <h1>
//           I am child component
//           {/* <strong style={{color:"red"}}>{count}</strong> */}
//         </h1>
//         {/* <button onClick={increment}>Increment</button> */}
//       </div>
//     );
//   };

// export default React.memo(Child);


const Child = ({name}) => {
  return (
    <div>
        {console.log("check child component is re-rendering or not")}
        <h1>{name}</h1>
    </div>
  )
}

export default React.memo(Child)