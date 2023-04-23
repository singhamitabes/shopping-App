import { takeEvery, put } from "redux-saga/effects"
import { ADD_BRAND, ADD_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constants"

import { addBrandAPI, deleteBrandAPI, getBrandAPI, updateBrandAPI } from "../Services"

function* getBrandSaga() {
    var response = yield getBrandAPI()
    yield put({ type: GET_BRAND_RED, result: "Done", data: response })
}
function* createBrandSaga(data) { //executer
    var response = yield addBrandAPI(data)
    yield put({ type: ADD_BRAND_RED, result: "Done", data: response })
}

function* updateBrandSaga(data) { //executer
    yield updateBrandAPI(data.payload)
    yield put({ type: UPDATE_BRAND_RED, result: "Done",data:data.payload})
}

function* deleteBrandSaga(data) {
    yield deleteBrandAPI(data)
    yield put({ type: DELETE_BRAND_RED, result: "Done",data:data.payload})
}

export default function* brandSaga() {    //watcher
    yield takeEvery(ADD_BRAND, createBrandSaga)
    yield takeEvery(GET_BRAND, getBrandSaga)
    yield takeEvery(DELETE_BRAND, deleteBrandSaga)
    yield takeEvery(UPDATE_BRAND, updateBrandSaga)
}



