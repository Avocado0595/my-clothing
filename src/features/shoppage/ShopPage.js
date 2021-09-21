import React from 'react'
import {Route, Switch} from 'react-router-dom';
import CategoryPreview from './components/category-preview/CategoryPreview';
import CollectionMenu from './components/collections-menu/CollectionMenu';
import CollectionOverview from './components/collections-overview/CollectionOverview';

function ShopPage({match}) {

    return(
        <div className="shop-page">
            <CollectionMenu/>
            <Switch>
                <Route exact path={match.url} component={CollectionOverview}/>
                <Route path={`${match.url}/:categoryId`} component={CategoryPreview}/>
            </Switch>
            
        </div>
    )
}

export default ShopPage;
