import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item logo1">
          <div>MyRegistry</div>
        </div>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" id="navbarMenu">
        <div className="navbar-end">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
        </div>
        <div className="navbar-item">
          <div className="buttons">
            <a className="button btn" id="logout">
              Logout
            </a>
            <a href="/login" className="button btn" id="login-redirect">
              Log in
            </a>
            <a href="/signup" className="button btn" id="signup-redirect">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
