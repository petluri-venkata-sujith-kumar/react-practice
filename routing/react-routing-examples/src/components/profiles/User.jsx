import { Outlet ,useLocation,useParams} from "react-router-dom"

const User = () => {
  let location=useLocation()
  let value=useParams()
  console.log(location);
  console.log(value);
  return (
    <div>
      <h1>hello {value.name} plz reload the page</h1>
      <h1>{value.name}</h1>
      {/* <h1>{value.company}</h1> */}
      {/* {Outlet} */}
    </div>
  )
}

export default User