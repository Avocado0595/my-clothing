import React from 'react';
import {connect} from 'react-redux';
import CollectionPreView from '../collections-preview/CollectionsPreview';
import { useParams } from 'react-router-dom';


function CategoryPreview({directory}) {
    const {categoryId} = useParams();
    const category = directory.filter((category)=>category.routeName === categoryId);
    return (
        <div className="shop-page">
            {
                category.map(({id, ...otherCollection})=><CollectionPreView key={id} {...otherCollection} collectionsId={id}/>)
            }
        </div>
    );
}
const mapStateToProps = state=>({
    directory: state.directory.SHOP_DATA
})
export default connect(mapStateToProps)(CategoryPreview);