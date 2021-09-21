import React from 'react';
import './CollectionMenu.scss';
import CustomLink from '../../../../components/customlink/CustomLink';


function CollectionMenu(props) {
    return (
        <div className="collection-menu">
           <CustomLink to="/shop-page/hats" label = "Hats"/>
           <CustomLink to="/shop-page/jackets" label="Jackets"/>
           <CustomLink to="/shop-page/sneakers" label="Sneakers"/>
           <CustomLink to="/shop-page/womens" label="Womens"/>
           <CustomLink to="/shop-page/mens" label="Mens"/>
        </div>
    );
}

export default CollectionMenu;