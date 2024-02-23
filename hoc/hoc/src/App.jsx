import Profile from "./components/auth/Profile"
import User from './components/navbar/User';
import Login from './components/auth/Login';


const App = () => {
  return (
    // <div className="flex">
    //   <div className="profile"><Profile/></div>
    //   <div className="user"><User/></div>
    // </div>
    <div>
      <Login/>
    </div>
  )
}

export default App