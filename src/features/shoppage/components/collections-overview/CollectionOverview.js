import React from 'react';
import {connect} from 'react-redux';
import CollectionPreView from '../collections-preview/CollectionsPreview';

function CollectionOverview({directory}) {
    return (
        <div className="shop-page">
            {
                directory.map(({id, ...otherCollection})=><CollectionPreView maxItems={4} key={id} {...otherCollection} collectionsId={id}/>)
            }
        </div>
    );
}
const mapStateToProps = state=>({
    directory: state.directory.SHOP_DATA
})
export default connect(mapStateToProps)(CollectionOverview);