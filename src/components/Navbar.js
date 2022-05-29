import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
import { useState } from "react"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const showNavToggle = () => {
    setShowNav(!showNav)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" onClick={() => setShowNav(false)}>
            <img src={logo} alt="Simply Recipes"></img>
          </Link>

          <button className="nav-btn" onClick={showNavToggle}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={showNav ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={showNavToggle}
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
          >
            Recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={showNavToggle}
          >
            Tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={showNavToggle}
          >
            About
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={showNavToggle}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
