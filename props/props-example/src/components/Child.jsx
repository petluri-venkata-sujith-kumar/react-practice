import PropTypes from "prop-types"
// import { propTypes } from 'p';
// console.log(propTypes);
function Child(prop) {
  return (
    <div>
      <h1>{prop.name}</h1>
      <p>{prop.company}</p>
      <p>{prop.salary +"INR"}</p>
    </div>
  )
}

export default Child 
// Child.defaultProps={
//   name:"kumar",
//   company:"infosys",
//   salary:30000
// }
Child.propTypes={
  name:PropTypes.string.isRequired,
  company:PropTypes.string,
  salary:PropTypes.number
}