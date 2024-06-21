import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../../assets/logo.png";
import corp from "../../../assets/zwilt-tba-1-01 2.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.navbarContainer}>
        <div className={style.mainNavBar}>
          <NavLink to="/" activeClassName={style.activeLink}>
            <img src={logo} alt="logo" className={style.logo} />
          </NavLink>
          <div className={style.showRoom}>
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
            
          </div>
          <div className={style.showRoom2}>
          <div className={style.authButtons}>
              <button className={style.authLogIn}>Log In</button>
              <button className={style.authSignUp}>Join Now</button>
            </div>
          </div>
          
        
          <button className={style.burgerButton} onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className={`${style.dropdownMenu} ${style.showMenu}`}>
            <div className={style.selection}>
              <NavLink
                to="/find-work"
                activeClassName={style.activeLink}
                onClick={toggleMenu}
              >
                Find Work
              </NavLink>
              <NavLink
                to="/find-talent"
                activeClassName={style.activeLink}
                onClick={toggleMenu}
              >
                Find Talent
              </NavLink>
              <NavLink
                to="/articles"
                activeClassName={style.activeLink}
                onClick={toggleMenu}
              >
                Articles
              </NavLink>
              <NavLink
                to="/about-us"
                activeClassName={style.activeLink}
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                activeClassName={style.activeLink}
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </div>
            <div className={style.authButtons}>
              <button className={style.authLogIn} onClick={toggleMenu}>
                Log In
              </button>
              <button className={style.authSignUp} onClick={toggleMenu}>
                Join Now
              </button>
            </div>
          </div>
        )}

        <div className={style.header}>
          <div className={style.h1Div}>
            <h1>
              Finding the right fit
              <img src={corp} alt="" /> <br />
              has never been easier.
            </h1>
            <p>
              With our rigorous pre-vetting process, you'll never have
              <br />
              to worry about finding the ideal candidate ever again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
