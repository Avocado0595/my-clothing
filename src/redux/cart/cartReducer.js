

const initState = {
    listItem: []
}
const cartReducer = (state=initState, action)=>{
    switch(action.type){
        case "ADD_ITEM":{
            let newItem = action.payload;
            let newListItem = [...state.listItem];
            
            let existItem = newListItem.find(item=>item.id === newItem.id);
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
        }
        case "SUBTRACT_ITEM":
            {
               
            let newItem = action.payload;
            let newListItem = [...state.listItem];
            
            let existItem = newListItem.find(item=>item.id === newItem.id);
            if(existItem){
                let indexExist = newListItem.indexOf(existItem);
                if(newListItem[indexExist].count > 1)
                    newListItem[indexExist].count-=1;

            }
            return {
                ...state,
                listItem: newListItem
            }}
        case "DELETE_ITEM":
            {
                let newItem = action.payload;
            let newListItem = [...state.listItem];
            
            let existItem = newListItem.find(item=>item.id === newItem.id && item.collectionsId === newItem.collectionsId);
            if(existItem){
                let indexExist = newListItem.indexOf(existItem);
                newListItem.splice(indexExist,1);

            }
            return {
                ...state,
                listItem: newListItem
            }
            }
        default:
            return state;
    }
}

export default cartReducer;
