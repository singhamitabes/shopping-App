import { ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY_RED } from "../Constants";

export default function MaincategoryReducer(state = [], action) {
    switch (action.type) {
        case ADD_MAINCATEGORY_RED:
            if(action.result==="Fail"){
                alert(action.msg)
                return state
            }
            else
            return [...state,action.data]
        case GET_MAINCATEGORY_RED:
            return action.data
        case UPDATE_MAINCATEGORY_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        case DELETE_MAINCATEGORY_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        default:
            return state
    }
} 