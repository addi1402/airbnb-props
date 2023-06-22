import React from "react";
import Logo from "../assets/branding.svg";
import "../stylesheets/NavBar.css";

export default function NavBar(){
    return(
        <nav className="nav-bar">
            <img src={Logo} alt="Brand Logo" className="brand" />
        </nav>
    );
}