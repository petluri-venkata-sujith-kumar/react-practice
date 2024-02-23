// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <button className='btn btn-success text-white m-2 p-2 '>submit</button>

//     </div>
//   )
// }

// export default App

//!react bootstrap component

// import Button from "react-bootstrap/Button"
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
const App = () => {
  return (
    <>
      <h1>react bootstrap component</h1>
      <Button className="btn btn-danger">submit</Button>
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
    </>
  );
};

export default App;
