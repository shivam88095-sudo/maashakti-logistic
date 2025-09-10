import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'; 

const Header = () => {
  return (
   
    <header className="site-header">
      <div className="header-inner container">
   
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Profile</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>
       
      </div>
    </header>
  
  )
}

export default Header;
