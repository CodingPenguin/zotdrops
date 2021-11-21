import React from "react";

function SignInBox() {
    return (
        <div> 
            <h2 className = "sign-in-title">Petr Sign In</h2>
            <form>
                <label for="username" className = "username-style">Username</label>
                <br></br>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <label for="pwd" className = "password-style">Password</label>
                <br></br>
                <input type="password" id="pwd" name="pwd"></input>
            </form>
        </div>

    );
}

export default SignInBox;