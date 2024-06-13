import React from "react";

const Login=() => {
    return(
        <div className="wrapper">
            <div className="form-box">
                <form action="">
                    <h1>LOGIN</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required/>
                        </div>
                <div className="forgetpassword">
                    <a href="#">Forget password?</a>
                  </div>
                  <button type="submit">Login</button>
                  <div className="signup">
                    <p>Don't you have an account? <a href="#">Signup</a></p>
                  </div>
                </form>
            </div>
        </div>
    );

}
export default Login;