import React from 'react';
import Image from '../../image/index';
import {Link} from 'react-router-dom';
import './navbar.scss';
const Navbar = function(){
    return(
        <nav className="navbar">
            <div className="nav-list">
                <Link to="/"><img src={Image.logo} alt="logo" /></Link>
            </div>
            <div className="nav-list">
                <Link className="nav-link" to="/shop-page">SHOP</Link>
                <Link className="nav-link" to="/">CONTACT</Link>
                <Link className="nav-link" to="/sign-in">SIGN IN</Link>
                <Link className="nav-link" to="/"><img className="cart-icon" src={Image.cart} alt="cart" /></Link>
            </div>
        </nav>
    )
}

export default Navbar;