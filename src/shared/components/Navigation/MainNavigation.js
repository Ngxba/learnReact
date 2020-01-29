import React, {useState} from "react";
import {Link} from "react-router-dom"

import MainHeader from "./MainHeader"
import NavLinks from "./NavLinks"
import SideDrawer from "./SideDrawer"
import Backdrop from "../UIElements/Backdrop/Backdrop"
import "./MainNavigation.css"

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen)
    }

    return (
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={toggleDrawer}></Backdrop>}
        <SideDrawer show={drawerIsOpen} onClick={toggleDrawer}>
            <nav className="main-navigation__drawer-nav">
            <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={toggleDrawer} >
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">YourPlaces</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks></NavLinks>
            </nav>
        </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation