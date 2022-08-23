import React from 'react'
import statistaLogo from '../assets/statista.svg'
import downArrowFilled from '../assets/downArrowFilled.svg'
import hamburgerMenu from '../assets/hamburgerMenu.svg'
import close from '../assets/close.svg'
import { useState } from 'react'
import { navLinks } from '../constants'
import './Navbar.css'

const Navbar = () => {
  const [isMobileNavClosed, setIsMobileNavClosed] = useState(true)

  const handleMobileNavToggle = () => {
    setIsMobileNavClosed(isMobileNavClosed => !isMobileNavClosed)
  }

  return (
    <nav className='navbar'>
      <div className="container">
        <div className='header'>
          <img src={statistaLogo} alt="Statista logo." className='logo svg-invert' />
          <button className='menu-toggle-button' onClick={handleMobileNavToggle}>
            {isMobileNavClosed ?
              <img src={hamburgerMenu} alt="Open Menu." className='menu-toggle-icon' /> :
              <img src={close} alt="Close Menu." className='menu-toggle-icon' />}
          </button>

        </div>

        <ul className={`nav-links ${isMobileNavClosed ? 'mobile-nav-closed' : ''}`}>
          {navLinks.map((navLink, index) => {
            return (
              <li key={navLink.id}
                className={`nav-link ${index === 0 ? "first-nav-link" : ""}`}>
                <a href="#" className='nav-item'>
                  {navLink.title}
                  {navLink.hasDropDown && <img src={downArrowFilled} alt="" className='dropdown-icon' />}
                </a>
              </li>)
          })}
        </ul>

      </div>
    </nav>

  )
}

export default Navbar