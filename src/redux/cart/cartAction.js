
export const addItem = item =>(
    {
        type: "ADD_ITEM",
        payload: item
    }
)

export const subtractItem = item =>(
    {
        type: "SUBTRACT_ITEM",
        payload: item
    }
)
export const deletetItem = item =>(
    {
        type: "DELETE_ITEM",
        payload: item
    }
)