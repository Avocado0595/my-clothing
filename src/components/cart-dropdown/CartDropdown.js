import React from 'react';
import PropTypes from 'prop-types';
import './CartDropdown.scss';
import CustomButton from '../custombutton/CustomButton';
CartDropdown.propTypes = {
    
};

function CartDropdown(props) {
    return (
        <div className="cart-dropdown">
            <ul>
                <li>
                    <div className="img-range">

                    </div>
                    <div className="info-range">
                        <h4>Item name</h4>
                        <p>Price: XXX$</p>
                    </div>
                </li>
                <li>
                    <div className="img-range">

                    </div>
                    <div className="info-range">
                        <h4>Item name</h4>
                        <p>Price: XXX$</p>
                    </div>
                </li>
                <li>
                    <div className="img-range">

                    </div>
                    <div className="info-range">
                        <h4>Item name</h4>
                        <p>Price: XXX$</p>
                    </div>
                </li>
            </ul>
            <CustomButton color="white-theme">CHECK OUT</CustomButton>
        </div>
    );
}

export default CartDropdown;
//<img src="https://i.ibb.co/ZYW3VTp/brown-brim.png"/>