import React from 'react';
import { Link } from "react-router-dom";
import navimage from "../images/logotop.jpg";

function Navbar(){

    return(
        
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <img id="logo"
              src={navimage}
              alt="logopic"
            ></img>
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        {/* Is the home going to take the user to landing page or the create page? Carter says the landing page for now */}
        <div id="navbarBasicExample" class="navbar-menu has-background-grey-lighter">
          <div class="navbar-start">
            <a href="./" class="navbar-item is-info is-outlined ">
              Home
            </a>
          </div>
         
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">

                <Link to="/login">
                  <button class="button is-info is-light mr-4 " id = "credentialBtn1"> 
                    <strong>Log in</strong>
                  </button>
                </Link>
                <Link to="/signup">
                  <button class="button is-info" id = "credentialBtn2">Create Account</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )

}

export default Navbar;