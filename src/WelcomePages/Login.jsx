import React from "react";
import '../CSS/loginStyle.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import WelcomePage from "../Components/WelcomePage";







const Login = () => {

    const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/Home');
  };

  const backToHome = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/');
  };


    return(<React.Fragment>
        <button onClick={backToHome} class="btn"><i class="fa fa-close"></i> Close</button>
        <div class="wrapper">
        <div class="text-center mt-4 name">
            GAMUtils
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit}>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>

            <button type="submit" class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a>
        </div>

    </div>
    </React.Fragment>)
}

export default Login;