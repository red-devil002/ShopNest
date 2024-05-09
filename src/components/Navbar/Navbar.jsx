import React from 'react';
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <a href="#">ShopNest</a>
        </div>
        <div className="nav-menu">
            <h4><a href="/shop">Shop</a></h4>
            <h4><a href="/mens">Men</a></h4>
            <h4><a href="/womens">Women</a></h4>
            <h4><a href="/kids">Kids</a></h4>
        </div>
        <div className="nav-login-card">
            <Link to='/login'><button><span>Login</span></button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
