import React, {Component} from 'react';
import BackGroundImage from '../../image/index';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
class Directory extends Component{
    constructor(props){
        super(props);
        this.state = {category: [{
            title: 'HATS',
            size: 'small',
            backgroundImage: BackGroundImage.hatCategory
          },
          {
            title: 'JACKETS',
            size: 'small',
            backgroundImage: BackGroundImage.jacketCategory
          },
          {
            title: 'SNEAKERS',
            size: 'small',
            backgroundImage: BackGroundImage.sneakerCategory
          },
          {
            title: 'MENS FASHION',
            size: 'large',
            backgroundImage: BackGroundImage.manCategory
          },
          {
            title: 'WOMENS FASHION',
            size: 'large',
            backgroundImage: BackGroundImage.womanCategory
          }
        ]}
    }
    render(){
    return(
        <>
        <div className="homepage-row">
        {
          this.state.category.map((item) => {
              if(item.size === 'small')
              return  <MenuItem size={item.size} backgroundImage = {item.backgroundImage} title={item.title}/> 
          })
        }
      </div>
      <div className="homepage-row">
        {
          this.state.category.map((item) => {
              if(item.size==='large')
              return  <MenuItem size={item.size} backgroundImage = {item.backgroundImage} title={item.title}/> 
          })
        }
      </div>
      </>
    )
    }
}

export default Directory;