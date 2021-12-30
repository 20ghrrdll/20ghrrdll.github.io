import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import initials from '../imgs/InitialsIcon.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="topnav" >
      <Link to="/"><img src={initials} alt="Carah Alexander's initials" height="20px"/></Link>
      <NavLink to="/about" className={({ isActive }) => isActive ? "page active" : "page"}>About</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? "page active" : "page"}>Projects</NavLink>
    </nav>
  );
}

export default Nav;