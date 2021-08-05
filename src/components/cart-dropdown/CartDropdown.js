import React from 'react';
import PropTypes from 'prop-types';
import './CartDropdown.scss';
import CustomButton from '../custombutton/CustomButton';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
CartDropdown.propTypes = {
    
};

function CartDropdown(props) {
    const {listItem, handleCartDropdown} = props;

    return (
        <div className="cart-dropdown">
            <button onClick={handleCartDropdown} className="close-btn">x</button>
            {
                  listItem.length === 0 ? 
                    <p>Nothing here!</p>
                  :
                  <>
            <ul className="dropdown-list">
                {
                    listItem.map((item)=>(
                        <li key = {item.id}>
                    <img className="img-range" src={item.imageUrl}/>

                    <div className="info-range">
                        <h5>{item.name}</h5>
                        <p>{item.count} x {item.price}$</p>
                    </div>
                </li>
                    ))
                
                }
            </ul>
                <Link to="/checkout" onClick={handleCartDropdown}><CustomButton color="white-theme">CHECK OUT</CustomButton></Link>
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
//<img src="https://i.ibb.co/ZYW3VTp/brown-brim.png"/>