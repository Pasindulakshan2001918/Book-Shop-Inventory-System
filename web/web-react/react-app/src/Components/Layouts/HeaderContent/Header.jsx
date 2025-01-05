import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            {/* Top Bar */}
            <div className="header-top">
                <div className="top-links">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                    <a href="/account">My Account</a>
                </div>
            </div>

            {/* Middle Section */}
            <div className="header-middle">
                <div className="logo">
                    <a href="/">
                        <img
                            src="https://sarasavi.lk/assets/images/logo.png"
                            alt="Sarasavi Logo"
                        />
                    </a>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search books, stationery, and more..."
                    />
                    <button>Search</button>
                </div>
                <div className="user-cart">
                    <a href="/cart" className="cart-link">
                        🛒 Cart (2)
                    </a>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="header-nav">
                <ul>
                    <li><a href="/books">Books</a></li>
                    <li><a href="/stationery">Stationery</a></li>
                    <li><a href="/gifts">Gifts</a></li>
                    <li><a href="/offers">Offers</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;