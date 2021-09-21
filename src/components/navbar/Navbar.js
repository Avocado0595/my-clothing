import React, { useState } from 'react';
import Image from '../../assets/image/index';
import { NavLink} from 'react-router-dom';
import {auth} from '../../firebase/Firebase';
import './navbar.scss';
import {connect} from 'react-redux';
import Cart from '../cart/Cart';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CustomLink from '../customlink/CustomLink';

const Navbar = function({currentUser, listItem}){
    const totalItem = listItem?listItem.reduce((total, item)=>total+=item.count,0):0;
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const handleCartDropdown = () =>{
        setIsShowDropdown(!isShowDropdown);
    }
    return(
        <div className="navbar-layout">
        <nav className="navbar">
            <div className="nav-list">
                <NavLink to="/"><img src={Image.logo} alt="logo" /></NavLink>
            </div>
            <div className="nav-list">
               
  <CustomLink to="/shop-page" label="Shop" activeOnlyWhenExact={true}/>

                <CustomLink to="/contact" label="Contact"/>            
                {
                    currentUser?
                    <>
                    <CustomLink to="/user" label={currentUser.displayName}/>
                    <div className="nav-link" onClick = {()=>auth.signOut()}>Sign out</div>
                    </>
                    :
                    <>
                     <CustomLink to="/sign-up" label="Sign up"/>
                <CustomLink to="/sign-in" label="Sign in"/>
                </>
                }
                <div onClick={handleCartDropdown} className="cart-icon"><Cart numberOfItem={totalItem}/></div>
                <div className="mobile-menu">
                    <img alt="menu" className="mobile-menu--icon" src={Image.menuSymbol}/>
                </div>
            </div>
            
        </nav>
        {isShowDropdown?<CartDropdown showCart="show-cart" handleCartDropdown={handleCartDropdown}/>:null}
            

        </div>

    )
}

const mapStateToProps = state=>(
    {currentUser : state.user.currentUser,
        listItem: state.cart.listItem
    }
)

export default connect(mapStateToProps)(Navbar);