import React from 'react';
import './menuitem.scss';
function MenuItem(props){
        return(
            <div className={`directory-menu ${props.size}-menu`}>
            <div className="background-img" style={{backgroundImage: `url(${props.backgroundImage})`}}>
              </div>
            <div className="menu-item">
              <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
          </div>)
}

export default MenuItem;