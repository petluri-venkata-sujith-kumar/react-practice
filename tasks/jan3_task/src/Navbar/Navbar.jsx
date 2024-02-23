import { createRoot } from "react-dom/client";
import React,{Component} from "react";
import Logo from "./Logo";
import Menu from "./Menu";
class Navbar extends Component {
    render(){
        return (
            <div className="navbarblock">
                <Logo/>
                <Menu/>
            </div>
        )
    }
}
export default Navbar