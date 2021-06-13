import React, {Component} from 'react'
import CollectionPreView from '../../components/collections-preview/CollectionsPreview';
import SHOP_DATA from './CollectionsData';
class ShopPage extends Component {
    constructor(){
        super();
        this.state = {collections: SHOP_DATA}
    }
    render(){
        const {collections} = this.state;
    return(
        <div className="shop-page">
            <h2>Collections</h2>
            {
                collections.map(({id, ...otherCollection})=><CollectionPreView key={id} {...otherCollection}/>)
            }
        </div>
    )
    }
}

export default ShopPage;
