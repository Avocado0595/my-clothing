import React from 'react';
import {connect}  from 'react-redux';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
function Directory({categories}){
    return(
        <>
        <div className="homepage-row">
        {
          categories.map(({id,size, ...otherProps}) => {
              if(size === 'small')
              return  <MenuItem key={id} size={size} {...otherProps}/> 
              else
              return null;
          })
        }
      </div>
      <div className="homepage-row">
        {
          categories.map(({id,size, ...otherProps}) => {
              if(size==='large')
              return  <MenuItem key={id} size={size} {...otherProps}/> 
              else
              return null;
          })
        }
      </div>
      </>
    )
    
}
const mapStateToProps = state=>(
  {categories: state.category.categories}
)

export default connect(mapStateToProps)(Directory);