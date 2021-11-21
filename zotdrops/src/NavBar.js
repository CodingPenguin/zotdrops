import React from "react";
import './App.css';
import { 
    Link
} from "react-router-dom"
import App from "./App";

function NavBar() {
    return (
        <div>
                <h3>
                    <Link to="/" class="navbar-title">ZotDrops</Link>
                </h3>
                <h3>
                    <Link to="/about" class="navrbar-link">About</Link>
                </h3>
        </div>
    );
}

export default NavBar;