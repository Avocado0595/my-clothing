import React from 'react';
import './menuitem.scss';
import {withRouter} from 'react-router-dom';
function MenuItem({size, backgroundImage, title, match, history, linkUrl}){
  return (
    <div className={`directory-menu ${size}-menu`} onClick={()=>{
      history.push(`${match.url}${linkUrl}`);
    }}>
      <div className="background-img" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>)
}

export default withRouter(MenuItem);