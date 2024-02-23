// //!Browser Router is a router implementation that uses the HTML5 history api to keep your ui sync with the url 
// //!it is the parent component that is used to store all of the other components




// //?history api
// window.history.pushState({name:"shashi"},"push state example")
// console.log(window.history.state);
// console.log(history);
// window.history.replaceState({name:"dixith"},"replace state")
// console.log(window.history.state);
// console.log(history);

// window.addEventListener("popstate",e=>{
//   console.log("hello");
//   console.log(`${document.location},state:${JSON.stringify(e.state)}`);
// })

// const App = () => {
//   return <div>App</div>;
// };

// export default App;

// import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
// import Home from "./pages/Home"
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import User from './components/profiles/User';
// import NotFound from "./pages/NotFound";
// const App = () => {
//   return (
//     <BrowserRouter>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//       <li>
//         <Link to="/register">Register</Link>
//       </li>
//       <li>
//         <Link to="/users">Users</Link>
//       </li>
//     </ul>
//       <Routes>
//         //~it the new component introduced in react router dom v-6 onwards and it replaces the switch component
//         <Route path="/" element={<Home/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route path="/users" element={<User/>}/>
//         //!page nout found and this always should be at bottom 
//         <Route path="*" element={<NotFound/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

//?from version v 6.4 onwards data api

//?if you need data api we need to go with the below syntax

//?createBrowserRouter enables data api's like loaders,actions,fetcher and many more

//?version v6.0 only added history api's without data api's
// import {createBrowserRouter,RouterProvider,Route, createRoutesFromElements} from 'react-router-dom'
// import Home from './pages/Home';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import User from './components/profiles/User';
// import Layouts from './layouts/Layouts';
// import NotFound from './pages/NotFound';

// // const router=createBrowserRouter([
// //   {
// //     path:"/",
// //     element:<Layouts/>,
// //     children:[
// //       {
// //         path:"/",
// //         element:<Home/>
// //       },
// //       {
// //         path:"/login",
// //         element:<Login/>
// //       },
// //       {
// //         path:"/register",
// //         element:<Register/>
// //       },
// //       {
// //         path:"/users",
// //         element:<User/>
// //       },
// //       {
// //         path:"*",
// //         element:<NotFound/>
// //       }
// //     ]
// //   }
// // ])
// //it returns a function

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layouts/>}>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/register' element={<Register/>}/>
//       <Route path='/users' element={<User/>}/>
//       <Route path='*' element={<NotFound/>}/>
//     </Route>
//   )
// )
// console.log(router);
// const App = () => {
//   return (
//     <>

//       <RouterProvider router={router}></RouterProvider>
//     </>
//   )
// }

// export default App

// import {RouterProvider} from "react-router-dom"
// import { router } from "./routes/NewRouteConfig"

// const App = () => {
//   return (
//     <RouterProvider router={router}></RouterProvider>
//   )
// }

// export default App


import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Root from "./components1/Root"
import Home from './pages1/Home';
import Dashboard from "./components1/users1/Dashboard";
import AllUsers from "./components1/users1/AllUsers";
import Profile from "./components1/users1/Profile";
import Products from "./components1/products/Products";
import Player from "./components/players/Player";


const router1=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>,
        children:[
          {
            path:"allusers",
            element:<AllUsers/>,
          },
          {
            path:"products",
            element:<Products/>
          },
          {
            path:"players",
            element:<Player/>
          },
          {
            path:'users/:id',
            element:<Profile/>
          }
        ]
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router1}>
      
    </RouterProvider>
  )
}

export default App