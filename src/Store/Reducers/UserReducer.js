import { REGISTER_USER_RED, DELETE_USER_RED, GET_USER_RED, UPDATE_USER_RED, GET_SINGLE_USER_RED, LOGIN_RED } from "../Constants";

export default function UserReducer(state = [], action) {
    switch (action.type) {
        case REGISTER_USER_RED:
            if (action.result === "Fail") {
                alert(action.msg)
                return state
            }
            else
                return [...state, action.data]
        case GET_USER_RED:
            return action.data
        case GET_SINGLE_USER_RED:
            return action.data
        case LOGIN_RED:
            if(action.result==="Done")
            return {result:"Done",data:action.data}
            else
            return {result:action.result,data:[]}
        case UPDATE_USER_RED:
            var index = state.findIndex((item) => item.id === Number(action.data.id))
            state[index] = action.data
            return state
        case DELETE_USER_RED:
            var newState = state.filter(item => item.id !== action.data.id)
            return newState
        default:
            return state
    }
} 