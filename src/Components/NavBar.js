import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/images/logo_sm.png';

const NavBar = () => {
  return (
    <>
      <div className="container-fluid bg-warning text-center py-1"><i>Ce site web est une site de démonstration</i></div>

      <nav className="navbar navbar-expand-lg bg-primary px-5">
        <div className="container-fluid">
          <Link className="navbar-brand" aria-current="page" to="/">
            <img src={logo} alt="Today Fit Logo" width="150px" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className='nav-item'>
                <Link className="nav-link" aria-current="page" to="/blog">Blog</Link>
              </li>
              <li className='nav-item'>
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
            </ul>
            <Link className="navbar-brand" to="/login">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-circle mx-3" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar