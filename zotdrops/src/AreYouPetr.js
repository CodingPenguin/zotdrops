import React from "react";
import { 
    Link
} from "react-router-dom";
import './App.css'

function AreYouPetr() {
    return ( 
        <div className = "are-you-petr">
            <Link to = "/signin" className="petr-page-link">
                <button buttonType="button" class="AdminButton">
                    <p id="admin-button">Admin Sign In</p>
                </button>
            </Link>
        </div>
    )
}

export default AreYouPetr;
