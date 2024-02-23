import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
class App extends Component{
    render(){
        return(
            <article className="main">
                <Navbar/>
            </article>
        )
    }
}
export default App