import React from 'react';
import './collectionspreview.scss';
import {connect} from 'react-redux';
import { addItem } from '../../../../redux/cart/cartAction';

const CollectionPreView = (props)=>{
    const {addItem, collectionsId, maxItems} = props;
    return(
        <div className='collection-preview'>
            <h2 className='title'>{props.title}</h2>
            <div className='collection-list'>
            {
                props.items.filter((item,idx)=> maxItems?idx <maxItems:true).map((item)=>
                    <div className="collection-item" key={item.id} >
                        <div className="collection-item__img" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                            <div onClick={()=>addItem({...item, collectionsId: collectionsId})} className="collection-item__img--cart">ADD TO CART</div>
                        </div>
                        <div className="collection-item__detail">
                            <h4>{item.name}</h4>
                            <h4>{item.price}$</h4>
                        </div>
                    </div>
                )
            }

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    addItem: item => dispatch(addItem(item))
  })
  

export default connect(null,mapDispatchToProps)(CollectionPreView);
