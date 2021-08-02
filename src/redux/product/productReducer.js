

const initState = {
    listItem: []
}
const productReducer = (state=initState, action)=>{
    switch(action.type){
        case "ADD_ITEM":
            let newItem = action.payload;
            let newListItem = [...state.listItem];
            
            let existItem = newListItem.find(item=>item.id === newItem.id && item.collectionsId === newItem.collectionsId);
            if(!existItem){
                newListItem.push({...newItem, count: 1});
            }
            else{
                let indexExist = newListItem.indexOf(existItem);
                newListItem[indexExist].count+=1;
            }
            return {
                ...state,
                listItem: newListItem
            }
        default:
            return state;
    }
}

export default productReducer;

// {id: 1,
//     name: 'Brown Brim',
//     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//     price: 25}