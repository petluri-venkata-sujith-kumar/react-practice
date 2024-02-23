import {createBrowserRouter} from "react-router-dom"
import Home from '../pages/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import User from '../components/profiles/User';
import Layouts from '../layouts/Layouts';
import NotFound from '../pages/NotFound';

export const router=createBrowserRouter([
  {
    path:"/",
    element:<Layouts/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:":name",
        element:<User/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]
  }
])