import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Checkout.scss';
import {Table} from 'reactstrap';
import Image from '../../image/index';
Checkout.propTypes = {
    
};

function Checkout(props) {
    const {listItem} = props;
    const [countValue, setCountValue] = useState();
    return (
        <div>
            <h2>Checkout here!</h2>
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
                    listItem?
                    listItem.map((item)=>(
                        <tr>    
                        <td><img className="item-img" src={item.imageUrl}/></td>
                        <td>{item.name}</td>
                        <td>
                            <div className="number-updown-group">
                                <button className="number-updown-group__btn">+</button>
                                <input type="text" value= {item.count}/>
                           
                            <button className="number-updown-group__btn" >-</button>
                            </div>
                            </td>
                        <td>{item.price}</td>
                        <td><img className="small-icon" src={Image.trash}/></td>
                        </tr>                
                    )

                    )
                    :
                    <p>Nothing here!</p>
                    
                }
                </tbody>
                
            </Table>
        </div>
    );
}
const mapStateToProps = state=>(
    {
        listItem: state.cart.listItem
    }
)
export default connect(mapStateToProps)(Checkout);