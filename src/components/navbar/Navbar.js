import React from 'react';
import Image from '../../image/index';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/Firebase';
import './navbar.scss';
const Navbar = function({currentUser}){
    return(
        <nav className="navbar">
            <div className="nav-list">
                <Link to="/"><img src={Image.logo} alt="logo" /></Link>
            </div>
            <div className="nav-list">
                <Link className="nav-link" to="/shop-page">SHOP</Link>
                <Link className="nav-link" to="/">CONTACT</Link>
                {
                    currentUser?
                    <div className="nav-link" onClick = {()=>auth.signOut()}>SIGN OUT</div>:
                <Link className="nav-link" to="/sign-in">SIGN IN</Link>
                }
                <Link className="nav-link" to="/"><img className="cart-icon" src={Image.cart} alt="cart" /></Link>
            </div>
        </nav>
    )
}

export default Navbar;