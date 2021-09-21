import React from 'react';
import Image from '../../assets/image/index';
import './Cart.scss';

function Cart({numberOfItem}) {
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