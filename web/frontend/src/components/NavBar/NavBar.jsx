import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3 } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import './NavBar.css';
import avatarImg from "../../assets/avatar.png";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase.config"; // Import auth from Firebase
import { signOut } from "firebase/auth"; // Import signOut function

const navigation = [
  {name: "Dashboard", href:"/user-dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart Page", href:"/cart"},
  {name: "Check Out", href:"/checkout"},
];

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const cartItems = useSelector(state => state.cart.cartItems);

  // Check if the user is signed in using Firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user from Firebase
      setIsDropdownOpen(false); // Close the dropdown menu
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  return (
    <header className="navbar-container">
      <nav className="nav-flex">
        <div className="logo-search">
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <HiMiniBars3 size={25} style={{ marginTop: '0px', color: 'black' }} />
          </Link>

          {/* Search Input */}
          <div className="search-input">
            <IoSearchOutline className="io-search"/>
            <input 
              type="text" 
              placeholder="search here" 
              className="search-section" 
            />
          </div>
        </div>

        <div className="nav-items">
          <div>
            {currentUser ? (
              <>
                <button className="avatar-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img src={avatarImg} alt="Avatar" />
                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="item-list">
                    <ul className="list-linespace">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link to={item.href} className="list-style">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      {/* Log out item */}
                      <li onClick={handleLogout}>
                        <Link to="/login" className="list-style logout-style">
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegUser size={25} style={{ paddingTop: '4px', color: 'black' }} />
              </Link>
            )}
          </div>

          <button className="heart-button">
            <IoMdHeartEmpty size={25} />
          </button>

          <Link to="/cart" className="cart-icon">
            <GiShoppingCart size={19} style={{ color: 'black' }} />
            {cartItems.length > 0 ? (
              <span className="span">{cartItems.length}</span>
            ) : (
              <span className="span">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
