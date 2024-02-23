import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import GetUsers from "./components/GetUsers";

// createBrowserRouter includes data api
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path:"/users",
        element:<GetUsers/>,
        loader:async ()=>{
            let data=await window.fetch("https://api.github.com/users")
            let finalData= await data.json()
            return finalData
        }
    }
  ]);
  return <RouterProvider router={router}>
    
  </RouterProvider>;
};

export default App;
