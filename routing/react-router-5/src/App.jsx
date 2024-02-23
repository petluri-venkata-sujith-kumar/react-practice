import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import PageNotFound from "./components/PageNotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/users" exact>
          <User />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// const App = () => {
//   let [hover1, setHover1] = useState(false);
//   let [hover2, setHover2] = useState(false);

//   let handleHover1 = () => {
//     setHover1(!hover1);
//   };
//   let handleHover2 = () => {
//     setHover2(!hover2);
//   };

//   return (
//     <>
//       <div className="div" onMouseOver={handleHover1}>
//         Infosys
//         <p className={`${hover1 === true ? "block" : ""}`}>
//           Infosys after hover
//         </p>
//       </div>

//       <div className="div" onMouseOver={handleHover2}>
//         Wipro
//         <p className={`${hover2 === true ? "span" : ""}`}>
//           Wiproafter hover
//         </p>
//       </div>
//     </>

//   );
// };

// export default App;
