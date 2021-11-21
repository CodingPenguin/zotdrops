import React from "react";
import './App.css';
import { 
    Link
} from "react-router-dom"
import App from "./App";

function NavBar() {
    return (
        <div class="header">
                <div>
                    <Link to="/" class="navbar" id="title"><b>ZotDrops</b></Link>
                </div>
                <div class= "about-style">
                    <Link to="/about" class="navbar" id="about">About</Link>
                </div>
        </div>
    );
}

export default NavBar;