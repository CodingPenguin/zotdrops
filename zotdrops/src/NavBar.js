import React from "react";
import { 
    Link
} from "react-router-dom"

function NavBar() {
    return (
        <div>
            <li>
                <Link to="/">ZotDrops</Link>
            </li>
            <li>
                <Link to="/signin">Sign In</Link>
            </li>
        </div>
    );
}

export default NavBar;