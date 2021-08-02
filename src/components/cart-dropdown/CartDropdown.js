import React from 'react';
import PropTypes from 'prop-types';
import './CartDropdown.scss';
import CustomButton from '../custombutton/CustomButton';
import {connect} from 'react-redux';
CartDropdown.propTypes = {
    
};

function CartDropdown(props) {
    const {listItem} = props;
    if (listItem.length === 0)
        return (<div className="cart-dropdown">
            <p>Nothing here!</p>
        </div>)
        else
    return (
        <div className="cart-dropdown">
            <ul id="scrollbar-style">
                {
                    listItem.map((item)=>(
                        <li key = {item.id}>
                    <img className="img-range" src={item.imageUrl}/>

                    <div className="info-range">
                        <h4>{item.name}</h4>
                        <p>{item.count} x {item.price}$</p>
                    </div>
                </li>
                    ))
                
                }
            </ul>
            <CustomButton color="white-theme">CHECK OUT</CustomButton>
        </div>
    );
}
const mapStateToProps = state=>(
    {
        listItem: state.product.listItem
    }
)

export default connect(mapStateToProps)(CartDropdown);
//<img src="https://i.ibb.co/ZYW3VTp/brown-brim.png"/>