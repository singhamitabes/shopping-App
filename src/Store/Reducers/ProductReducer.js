import { ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Constants";

export default function PRODUCTReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT_RED:
            if(action.result==="Fail"){
                alert(action.msg)
                return state
            }
            else
            return [...state,action.data]
        case GET_PRODUCT_RED:
            return action.data
        case UPDATE_PRODUCT_RED:
            var index = state.findIndex((item)=>item.id===Number(action.data.id))
            state[index].name = action.data.name
            return state
        case DELETE_PRODUCT_RED:
            var newState = state.filter(item=>item.id!==action.data.id)
            return newState
        default:
            return state
    }
} 