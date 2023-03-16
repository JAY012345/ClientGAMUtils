import React from "react";
import '../CSS/welcomeStyle.css'
// import styled from 'styled-components'

const WelcomePage = () => {
  return (
    <React.Fragment>
      {/* <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/#">
            Welcome
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" hre
          f="/About">
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact Us
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">
            Login
          </a>
        </li>
       
      </ul> */}
<nav id="navbar-example2" class="navbar bg-light px-3 mb-3">
  <a class="navbar-brand" href="#">GAMUtils</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="/intro">Welcome</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/aboutUs">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/contactUs">Contact Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/login">Login</a>
    </li>

  </ul>
</nav>

    </React.Fragment>
  );
};

export default WelcomePage;
