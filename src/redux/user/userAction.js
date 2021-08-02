import { userActionType } from "./userActionType"
export const setCurrentUser = user=>(
    {
        type: userActionType.SET_CURRENT_USER,
        payload: user
    }
)