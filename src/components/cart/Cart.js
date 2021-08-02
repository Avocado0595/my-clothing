import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../image/index';
import './Cart.scss';
Cart.propTypes = {
    
};

function Cart(props) {
    const {numberOfItem} = props;
    return (
        <div className="cart">
            <img className="cart-icon" src={Image.cart} alt="cart" />
            <div className="quantity">
                <div className="quantity_number">{numberOfItem}</div>
            </div>
        </div>
    );
}

export default Cart;