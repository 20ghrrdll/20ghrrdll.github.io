import React, {useState, useEffect} from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import initials from '../imgs/squareInitials.png';
import './Nav.css';

const Nav = () => {
  let location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location])

  return (
    <nav className="topnav" >
      <Link to="/" className="icon"><img src={initials} alt="Carah Alexander's initials"/></Link>
      <NavLink to="/about" className={({ isActive }) => isActive ? "page active" : "page"}>ABOUT</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? "page active" : "page"}>PROJECTS</NavLink>
      <NavLink to="/blog" className={({ isActive }) => isActive ? "page active" : "page"}>BLOG</NavLink>
      <button className="dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>&#9776;</button>
      {isDropdownOpen && (
        <div className="dropdown">
          <NavLink to="/about" className={({ isActive }) => isActive ? "dropdown-page active" : "dropdown-page"}>ABOUT</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "dropdown-page active" : "dropdown-page"}>PROJECTS</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "dropdown-page active" : "dropdown-page"}>BLOG</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;