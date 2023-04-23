import { REGISTER_USER, DELETE_USER, GET_USER, UPDATE_USER, GET_SINGLE_USER, LOGIN, LOGOUT, LOGOUTALL } from "../Constants";

export function getUser(){
    return{
        type:GET_USER
    }
}
export function registerUser(data){
    return{
        type:REGISTER_USER,
        payload:data
    }
}
export function addSingleUser(data){
    return{
        type:GET_SINGLE_USER,
        payload:data
    }
}
export function deleteUser(data){
    return{
        type:DELETE_USER,
        payload:data
    }
}
export function updateUser(data){
    return{
        type:UPDATE_USER,
        payload:data
    }
}
export function login(data){
    return{
        type:LOGIN,
        payload:data
    }
}
export function logout(data){
    return{
        type:LOGOUT,
        payload:data
    }
}
export function logoutAll(data){
    return{
        type:LOGOUTALL,
        payload:data
    }
}