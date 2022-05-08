import React from 'react'
import Logo from '../Assets/Images/giantinc_logo.png'
import '../Styles/Navbar.css'

/**
 * It returns a nav element with a div element inside of it, which has an anchor element and an
 * unordered list element inside of it.
 * @returns A navbar with a logo and 4 links.
 */

function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
        <a href="#Home"><img className='nav__logo' src={Logo} alt="Logo" /></a>
        <ul className='nav__menu'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact-Us">Contact Us</a></li>
        </ul>
        <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
        <button id="open-menu-close"><i className="uil uil-multiply"></i></button>
      </div>
    </nav>
  )
}

export default Navbar