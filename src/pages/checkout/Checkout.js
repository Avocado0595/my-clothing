import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Checkout.scss';
import {Table} from 'reactstrap';
import Image from '../../image/index';
import { addItem,deletetItem,subtractItem } from '../../redux/cart/cartAction';
import { Link } from 'react-router-dom';
Checkout.propTypes = {
    
};

function Checkout(props) {
    const {listItem, addItem, subtractItem, deleteItem} = props;
    const [countValue, setCountValue] = useState();
    const total = listItem.reduce((sum, item)=> sum+=item.price*item.count,0);
    return (
        <div>
            <h2>Checkout here!</h2>

            {
                listItem.length !== 0 ?
                 <>
                        <Table className="checkout-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listItem.map((item) => (
                                        <tr>
                                            <td><img className="item-img" src={item.imageUrl} /></td>
                                            <td>{item.name}</td>
                                            <td>
                                                <div className="number-updown-group">
                                                    <button onClick={() => subtractItem(item)} className="number-updown__btn">-</button>
                                                    <div className="number-updown__input">{item.count}</div>

                                                    <button onClick={() => addItem(item)} className="number-updown__btn" >+</button>
                                                </div>
                                            </td>
                                            <td>{item.price}$</td>
                                            <td><img onClick={()=>deleteItem(item)} className="small-icon" src={Image.trash} /></td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td> <h3 className="checkout-total">Total: {total}$</h3></td>
                                    <td></td>
                                    <td></td>

                                </tr>
                    </tbody>

                        </Table>
                               
                        </>
                
                         :<p>Your cart is empty. Go <Link to="/shop-page">Shop</Link> to buy!</p>
                            }
        </div>)
    
}
const mapStateToProps = state=>(
    {
        listItem: state.cart.listItem
    }
)
const mapDispatchToProps = dispatch =>({
    addItem: (item)=>dispatch(addItem(item)),
    subtractItem: (item)=>dispatch(subtractItem(item)),
    deleteItem: item => dispatch(deletetItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);