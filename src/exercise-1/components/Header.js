import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink> </li> 
                    <li><NavLink to="/products">Products</NavLink> </li> 
                    <li><NavLink to="/my-profile">My Profile</NavLink> </li> 
                    <li><NavLink to="/about-us">About Us</NavLink> </li>  
                </ul>
            </nav>
        </header>
    )
}


export default Header;