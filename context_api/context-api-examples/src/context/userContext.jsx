import { createContext } from "react";

const UserContext=createContext("")
let {Provider}=UserContext
//provider
const UserProvider=(props)=>{
    return <Provider value={{name:"shashi",company:"qsp",salary:40000 ,gender:"male"}}>
        {props.children}
    </Provider>
}
export default UserProvider