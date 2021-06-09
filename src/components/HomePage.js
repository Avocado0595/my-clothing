import React, {Component} from 'react';
import './homepage.scss';
import BackGroundImage from '../image/index';

function SmallCategory(props){
  return(
    <div className="directory-layout">
  <div style={{backgroundImage: `url(${props.backgroundImage})`}} className="directory-menu">
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
</div>
</div>
  )
}

class HomePage extends Component{
  constructor(){
    super();
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

  smallRow = () => {
    return (
      <div className="homepage-row">
        {
          this.state.category.map((item) => {
            if (item.size === 'small')
              return <SmallCategory backgroundImage={item.backgroundImage} title={item.title} />
          })
        }
      </div>
    )
  }

  largeRow =()=>{
return(
  <div className="homepage-row">
        
{
  this.state.category.map((item) => {
    if (item.size === 'large')
      return <SmallCategory backgroundImage={item.backgroundImage} title={item.title} />
  })
}
        </div>
)
  }

  render(){
    return(
        <div className="homepage">
          {this.smallRow()}

        {this.largeRow()}

       
      </div>
    )
  }
}

export default HomePage;