import React from 'react';
import Image from '../../image/index';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/Firebase';
import './navbar.scss';
import {connect} from 'react-redux';
import Cart from '../cart/Cart';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Navbar = function({currentUser, listItem}){
    const totalItem = listItem?listItem.reduce((total, item)=>total+=item.count,0):0;
    return(
        <div className="navbar-layout">
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
                <Link className="nav-link" to="/"><Cart numberOfItem={totalItem}/></Link>
            </div>
            
        </nav>
        <CartDropdown/>
            

        </div>

    )
}

const mapStateToProps = state=>(
    {currentUser : state.user.currentUser,
        listItem: state.product.listItem
    }
)

export default connect(mapStateToProps)(Navbar);