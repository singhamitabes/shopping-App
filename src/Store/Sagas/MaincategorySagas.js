import { takeEvery, put } from "redux-saga/effects"
import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from "../Constants"

import { addMaincategoryAPI, deleteMaincategoryAPI, getMaincategoryAPI, updateMaincategoryAPI } from "../Services"

function* getMaincategorySaga() {
    var response = yield getMaincategoryAPI()
    yield put({ type: GET_MAINCATEGORY_RED, result: "Done", data: response })
}
function* createMaincategorySaga(data) { //executer
    var response = yield addMaincategoryAPI(data)
    yield put({ type: ADD_MAINCATEGORY_RED, result: "Done", data: response })
}

function* updateMaincategorySaga(data) { //executer
    yield updateMaincategoryAPI(data.payload)
    yield put({ type: UPDATE_MAINCATEGORY_RED, result: "Done",data:data.payload})
}

function* deleteMaincategorySaga(data) {
    yield deleteMaincategoryAPI(data)
    yield put({ type: DELETE_MAINCATEGORY_RED, result: "Done",data:data.payload})
}

export default function* maincategorySaga() {    //watcher
    yield takeEvery(ADD_MAINCATEGORY, createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY, getMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY, deleteMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY, updateMaincategorySaga)
}



