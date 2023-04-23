import { ADD_WISHLIST_RED, DELETE_WISHLIST_RED, GET_WISHLIST_RED, UPDATE_WISHLIST_RED } from "../Constants";

export default function WishlistReducer(state = [], action) {
    switch (action.type) {
        case ADD_WISHLIST_RED:
            if(action.result==="Fail"){
                alert(action.msg)
                return state
            }
            else
            return [...state,action.data]
        case GET_WISHLIST_RED:
            return action.data
        case UPDATE_WISHLIST_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        case DELETE_WISHLIST_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        default:
            return state
    }
} 