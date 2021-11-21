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
                    <a href="./#about-comp" class="navbar" id="about">About</a>
                </div>
                <div class= "about-style">
                    <a href="./form" class="navbar" id="about">Petr Form</a>
                </div>
        </div>
    );
}

export default NavBar;