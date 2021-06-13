import React, {Component} from 'react';
import BackGroundImage from '../../image/index';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
class Directory extends Component{
    constructor(props){
        super(props);
        this.state = {categories: [{
          id:1,
            title: 'HATS',
            size: 'small',
            backgroundImage: BackGroundImage.hatCategory,
            linkUrl:'hats'
          },
          {
            id:2,
            title: 'JACKETS',
            size: 'small',
            backgroundImage: BackGroundImage.jacketCategory,
            linkUrl:'jackets'
          },
          {
            id:3,
            title: 'SNEAKERS',
            size: 'small',
            backgroundImage: BackGroundImage.sneakerCategory,
            linkUrl:''
          },
          {
            id:4,
            title: 'MENS FASHION',
            size: 'large',
            backgroundImage: BackGroundImage.manCategory,
            linkUrl:''
          },
          {
            id:5,
            title: 'WOMENS FASHION',
            size: 'large',
            backgroundImage: BackGroundImage.womanCategory,
            linkUrl:''
          }
        ]}
    }
    render(){
    return(
        <>
        <div className="homepage-row">
        {
          this.state.categories.map(({id,size, ...otherProps}) => {
              if(size === 'small')
              return  <MenuItem key={id} size={size} {...otherProps}/> 
              else
              return null;
          })
        }
      </div>
      <div className="homepage-row">
        {
          this.state.categories.map(({id,size, ...otherProps}) => {
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
}

export default Directory;