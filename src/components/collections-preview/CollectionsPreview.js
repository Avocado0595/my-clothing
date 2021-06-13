import React from 'react';
import './collectionspreview.scss';
const CollectionPreView = (props)=>{
    return(
        <div className='collection-preview'>
            <h2 className='title'>{props.title}</h2>
            <div className='collection-list'>
            {
                props.items.filter((item,idx)=> idx <4).map((item)=>
                    <div className="collection-item" key={item.id} >
                        <div className="collection-item__img" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                            <div className="collection-item__img--cart">ADD TO CART</div>
                        </div>
                        <div className="collection-item__detail">
                            <h3>{item.name}</h3>
                            <h3>{item.price}$</h3>
                        </div>
                    </div>
                )
            }

            </div>
        </div>
    )
}

export default CollectionPreView;
