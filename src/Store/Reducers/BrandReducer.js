import { ADD_BRAND_RED, DELETE_BRAND_RED, GET_BRAND_RED, UPDATE_BRAND_RED } from "../Constants";

export default function BrandReducer(state = [], action) {
    switch (action.type) {
        case ADD_BRAND_RED:
            if(action.result==="Fail"){
                alert(action.msg)
                return state
            }
            else
            return [...state,action.data]
        case GET_BRAND_RED:
            return action.data
        case UPDATE_BRAND_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        case DELETE_BRAND_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        default:
            return state
    }
} 