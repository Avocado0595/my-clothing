import React from 'react';
import PropTypes from 'prop-types';
import './CartDropdown.scss';
import CustomButton from '../custombutton/CustomButton';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
CartDropdown.propTypes = {
    listItem: PropTypes.any,
    handleCartDropdown: PropTypes.func
};

function CartDropdown(props) {
    const { listItem, handleCartDropdown, showCart } = props;

    return (
        <div className={`cart-dropdown${' '+showCart}`}>
            <button onClick={handleCartDropdown} className="close-btn"><span>x</span></button>
            {
                listItem.length === 0 ?
                    <p>Nothing here!</p>
                    :
                    <>
                        <ul className="dropdown-list">
                            {
                                listItem.map((item) => (
                                    <li key={item.id}>
                                        <img alt={item.name} className="img-range" src={item.imageUrl} />

                                        <div className="info-range">
                                            <h5>{item.name}</h5>
                                            <p>{item.count} x {item.price}$</p>
                                        </div>
                                    </li>
                                ))

                            }
                        </ul>
                        <Link to="/checkout" onClick={handleCartDropdown}><CustomButton>CHECK OUT</CustomButton></Link>
                    </>
            }
        </div>
    );
}
const mapStateToProps = state=>(
    {
        listItem: state.cart.listItem
    }
)

export default connect(mapStateToProps)(CartDropdown);