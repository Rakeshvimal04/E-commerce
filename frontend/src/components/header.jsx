import React from 'react'
import logo from '../assets/kgk.png'
import './style.css'
function Header() {
  return (
<nav className="navbar navbar-expand-md bg-dark text-white">
  <div className="container-fluid">
    <div className="navbar-left">
      <a href="/">
        <img src={logo} className="mx-5 my-1 w-50" alt="Logo" />
      </a>
    </div>

    <button
      className="navbar-toggler bg-light"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link mx-5 fs-5 text-white" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-5 fs-5 text-white" href="/product">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-5 fs-5 text-white" href="/gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-5 fs-5 text-white" href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-5 fs-5 text-white" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header
