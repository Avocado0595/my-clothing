import Image from "../../assets/image";

const initState = {
    categories: [{
        id: 1,
          title: 'Hats',
          routeName: 'hats',
          size: 'small',
          backgroundImage: Image.hatCategory,
        },
        {
          id: 2,
          title: 'Sneakers',
          routeName: 'sneakers',
          size: 'small',
          backgroundImage: Image.jacketCategory,
     
        },
        {
          id: 3,
          title: 'Jackets',
          routeName: 'jackets',
          size: 'small',
          backgroundImage: Image.sneakerCategory,
         
        },
        {
          id: 4,
          title: 'Womens',
          routeName: 'womens',
          size: 'large',
          backgroundImage: Image.manCategory,
      
        },
        {
          id: 5,
          title: 'Mens',
          routeName: 'mens',
          size: 'large',
          backgroundImage: Image.womanCategory,
        }
      ]}


const categoryReducer = (state=initState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default categoryReducer;