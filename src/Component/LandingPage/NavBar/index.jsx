import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../../assets/logo.png";
import corp from "../../../assets/zwilt-tba-1-01 2.png";                     

export default function NavBarComponent() {
  return (
    <div className={style.mainDiv}>
      <div className={style.navbarContainer}>
        <div className={style.mainNavBar}>
          <NavLink to="/" activeClassName={style.activeLink}>
            <img src={logo} alt="logo" />
          </NavLink>
          <div className={style.selection}>
            <NavLink to="/find-work" activeClassName={style.activeLink}>
              Find Work
            </NavLink>
            <NavLink to="/find-talent" activeClassName={style.activeLink}>
              Find Talent
            </NavLink>
            <NavLink to="/articles" activeClassName={style.activeLink}>
              Articles
            </NavLink>
            <NavLink to="/about-us" activeClassName={style.activeLink}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" activeClassName={style.activeLink}>
              Contact Us
            </NavLink>
          </div>
          <div className={style.authButtons}>
            
              <button className={style.authLogIn}>Log In</button>
            
  
              <button className={style.authSignUp}>Join Now</button>
       
          </div>

        </div>

        <div className={style.header}>
          <div className={style.h1Div}>

          <h1>Finding the right fit<img src={corp} alt="" /> <br/>has never been easier.</h1>
          <p>With our rigorous pre-vetting process, you'll never have<br/>to worry about finding the ideal candidate ever again.</p>

          </div>
          
        </div>


      </div>
    </div>
  );
}
