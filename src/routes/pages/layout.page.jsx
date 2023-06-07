import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { Fragment } from "react";

const Layout = () => {
    return(
        <Fragment>
            <Navbar/>
            <Outlet/>
        </Fragment>
    )
}

export default Layout;