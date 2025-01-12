import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3 } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import './NavBar.css';
import avatarImg from "../../assets/avatar.png"

const navigation = [
  {name: "Dashboard", href:"/user-dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart Page", href:"/cart"},
  {name: "Check Out", href:"/checkout"},
]


const NavBar = () => {

  const  [isDropdownOpen, setIsDropdownOpen] = useState(false)
  console.log(isDropdownOpen)

  const currentUser = true;
  return (
    <header className="navbar-container">
      <nav className="nav-flex">
        <div className="logo-search">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <HiMiniBars3 size={25} style={{ marginTop: '0px', color: 'black' }} />
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

        <div className="nav-items" >
          <div>
            {
              currentUser ? <>
              <button className="avatar-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>

                <img src={avatarImg}  alt="" />

              </button>
              {/* show Dropdowns*/}
              {
                isDropdownOpen &&(

                  <div className="item-list">
                    <ul className="list-linespace">
                      {
                        navigation.map((item) =>(
                          <li key={item.name} onClick={() =>
                            setIsDropdownOpen(false)
                          }>

                            <Link to={item.href} className="list-style">

                              {item.name}
                            
                            </Link>

                          </li>
                        ))
                      }
                    </ul>
                  </div>

                )
              }

              </> : <Link to="/ login"><FaRegUser size={20}  /></Link>
            }
          </div>
        
        <button className="heart-button">
        <IoMdHeartEmpty size={25}/>
        </button>

        <Link to="/cart" className="cart-icon">
        <GiShoppingCart size={19} style={{ color: 'black' }}/>
        <span className="span" >0</span>
        </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;