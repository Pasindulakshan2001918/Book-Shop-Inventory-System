import { Link } from 'react-router-dom';
import { HiMiniBars3 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar-container">
      <nav className="nav-flex">
        <div className="logo-search">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <HiMiniBars3 size={25} style={{ marginTop: '0px' }} />
        </Link>


          {/* search & input*/}
          <div className="search-input">
          <IoSearchOutline className="io-search"/>
          <input 
            type="text" 
            placeholder="search here" 
            className="search-section" 
            name="search-query"  // Add a name for form submission and autofill
            id="search-input"    // Optional: Add an id for targeting
          />


          </div>
        </div>

        <div className="nav-items">
          nav items
        </div>
      </nav>
    </header>
  )
}

export default NavBar;