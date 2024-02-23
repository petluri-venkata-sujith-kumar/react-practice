import { Fragment } from "react"
import NavbarContainer from "../../components/headers/Container"
import { Outlet } from "react-router-dom"

const MyntraLayouts = () => {
  return (
    <Fragment>
        <NavbarContainer/> 
        <Outlet/>
    </Fragment>
  )
}

export default MyntraLayouts