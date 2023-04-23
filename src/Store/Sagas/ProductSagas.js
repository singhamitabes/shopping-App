import { takeEvery, put } from "redux-saga/effects"
import { ADD_PRODUCT, ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constants"

import { addProductAPI, deleteProductAPI, getProductAPI, updateProductAPI } from "../Services"

function* getProductSaga() {
    var response = yield getProductAPI()
    yield put({ type: GET_PRODUCT_RED, result: "Done", data: response })
}
function* createProductSaga(data) {                       //executer
    var response = yield addProductAPI(data)
    yield put({ type: ADD_PRODUCT_RED, result: "Done", data: response })
}

function* updateProductSaga(data) {                       //executer
    yield updateProductAPI(data.payload)
    yield put({ type: UPDATE_PRODUCT_RED, result: "Done",data:data.payload})
}

function* deleteProductSaga(data) {
    yield deleteProductAPI(data)
    yield put({ type: DELETE_PRODUCT_RED, result: "Done",data:data.payload})
}

export default function* productSaga() {                  //watcher
    yield takeEvery(ADD_PRODUCT, createProductSaga)
    yield takeEvery(GET_PRODUCT, getProductSaga)
    yield takeEvery(DELETE_PRODUCT, deleteProductSaga)
    yield takeEvery(UPDATE_PRODUCT, updateProductSaga)
}



