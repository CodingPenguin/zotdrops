import React from "react";

function SignInBox() {
    return (
        <div> 
            <h2>Petr Sign In</h2>
            <form>
                <label for="username">Username</label>
                <br></br>
                <input type="text" id="username" name="username"></input>
                <br></br>
                <label for="pwd">Password</label>
                <br></br>
                <input type="password" id="pwd" name="pwd"></input>
            </form>
            <h4>New to ZotDrops? Sign up here.</h4>
        </div>

    );
}

export default SignInBox;