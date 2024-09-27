import React from 'react'
import logo from '../assets/logo.png'
import './style.css'
function Header() {
  return (
    // <div>
    //      <div className='row navbar d-flex '>
    //     <div className='col-2 '>
    //       <img src={logo} className='w-50 m-2 ' />
    //     </div>
    //     <div className='d-flex d-flex col '>
    //       <p className='col-1'> Home   </p>
    //       <p className='col-1'> About  </p>
    //       <p className="col-1"> Product</p>
    //       <p className='col-1'> Contact</p>
    //       <p className='col-1'> About  </p>
    //     </div>
    //   </div>
    // </div>
    <>
      {/* <div className='navbar'>
        <div className='col-2'>
          <img src={logo} className=' mx-5 my-1 ' />
        </div>
        <div>
          <ul className='d-flex'>
            <li  className='mx-5 my-1'>Home </li>
            <li  className='mx-5 my-1'>About </li>
            <li  className='mx-5 my-1'>Product </li>
            <li  className='mx-5 my-1'>Contact </li>
            <li  className='mx-5 my-1'>About </li>
          </ul>
        </div>   
        </div> */}

<nav className="navbar">
  <div className="navbar-left">
  <img src={logo} className=' mx-5 my-1 ' />
    </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/products" className='mx-5 fs-3'>Home</a>
      </li>
      <li>
        <a href="/products" className='mx-5 fs-3'>Products</a>
      </li>
      <li>
        <a href="/about" className='mx-5 fs-3'>About Us</a>
      </li>
      <li>
        <a href="/contact" className='mx-5 fs-3'>Contact</a>
      </li>
    </ul>
  </div>
  <div><a class="btn three" href="#">Learn More</a></div>
  {/* <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div> */}
</nav>

    </>
  )
}

export default Header
