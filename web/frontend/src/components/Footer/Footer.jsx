import React from 'react'
import footerLogo  from "../../assets/footer-logo.png"
import './Footer.css';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="footer-title">
      {/* Top Section */}
      <div className="footer-container">
        {/* Left Side - Logo and Nav */}
        <div className="logo-nav-container">
          <img src={footerLogo} alt="Logo" className="footer-logo" />
          <ul className="list-container">
            <li><a href="#home" className="home">Home</a></li>
            <li><a href="#services" className="services">Services</a></li>
            <li><a href="#about" className="about-us">About Us</a></li>
            <li><a href="#contact" className="contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="right-side-container">
          <p className="para-design">
            Subscribe to our newsletter to receive the latest updates, news, and offers!
          </p>
          <div className="e-mail-section">
          <input
                type="email"
                placeholder="Enter your email"
                className="mail-design"
                name="email" // Added a name attribute
                id="email"    // Added an id attribute for accessibility or form handling
                required      // Optional, but good for validation
            />
            <button className="button-design">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div  style={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '2.5rem',
                borderTop: '1px solid #4A4A4A',
                paddingTop: '1.5rem',
                }}>
        {/* Left Side - Privacy Links */}
        <ul  style={{listStyleType: 'none', display:'flex', gap:'1.5rem', marginLeft: '0px', paddingLeft:'100px',
                    marginRight: '50px'}}>
          <li><a href="#privacy" style={{textDecoration:'none', color: 'white'}} className="privacy">Privacy Policy</a></li>
          <li><a href="#terms" style={{textDecoration:'none' , color: 'white'}}>Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div style={{ listStyleType: 'none', display: 'flex', gap: '1.5rem' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer