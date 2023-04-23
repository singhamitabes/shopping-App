import { takeEvery, put } from "redux-saga/effects"
import { REGISTER_USER, REGISTER_USER_RED, DELETE_USER, DELETE_USER_RED, GET_USER, GET_USER_RED, UPDATE_USER, UPDATE_USER_RED, GET_SINGLE_USER, GET_SINGLE_USER_RED, LOGIN_RED, LOGIN } from "../Constants"

import { addUserAPI, deleteUserAPI, getSingleUserAPI, getUserAPI, updateUserAPI } from "../Services"

function* getUserSaga() {
    var response = yield getUserAPI()
    yield put({ type: GET_USER_RED, result: "Done", data: response })
}
function* getSingleUserSaga(data) {
    var response = yield getSingleUserAPI(data)
    yield put({ type: GET_SINGLE_USER_RED, result: "Done", data: response })
}
function* loginSaga(data) {
    var response = yield getUserAPI()
    var user = response.find((item)=>item.username===data.payload.username && item.password===data.payload.password)
    if(user)
    yield put({ type: LOGIN_RED, result: "Done", data: user })
    else
    yield put({ type: LOGIN_RED, result: "Fail", message:"Invalid Username Or Password" })
}
function* createUserSaga(data) { //executer
    var response = yield addUserAPI(data)
    yield put({ type: REGISTER_USER_RED, result: "Done", data: response })
}

function* updateUserSaga(data) { //executer
    yield updateUserAPI(data.payload)
    yield put({ type: UPDATE_USER_RED, result: "Done", data: data.payload })
}

function* deleteUserSaga(data) {
    yield deleteUserAPI(data)
    yield put({ type: DELETE_USER_RED, result: "Done", data: data.payload })
}

export default function* userSaga() {    //watcher
    yield takeEvery(REGISTER_USER, createUserSaga)
    yield takeEvery(GET_USER, getUserSaga)
    yield takeEvery(GET_SINGLE_USER, getSingleUserSaga)
    yield takeEvery(DELETE_USER, deleteUserSaga)
    yield takeEvery(UPDATE_USER, updateUserSaga)
    yield takeEvery(LOGIN, loginSaga)
}



