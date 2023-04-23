import { takeEvery, put } from "redux-saga/effects"
import { ADD_CHECKOUT, ADD_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED } from "../Constants"

import { addCheckoutAPI, deleteCheckoutAPI, getCheckoutAPI, updateCheckoutAPI } from "../Services"

function* getCheckSaga() {
    var response = yield getCheckoutAPI()
    yield put({ type: GET_CHECKOUT_RED, result: "Done", data: response })
}
function* createCheckSaga(data) { //executer
    var response = yield addCheckoutAPI(data)
    yield put({ type: ADD_CHECKOUT_RED, result: "Done", data: response })
}

function* updateCheckSaga(data) { //executer
    yield updateCheckoutAPI(data.payload)
    yield put({ type: UPDATE_CHECKOUT_RED, result: "Done",data:data.payload})
}

function* deleteCheckSaga(data) {
    yield deleteCheckoutAPI(data)
    yield put({ type: DELETE_CHECKOUT_RED, result: "Done",data:data.payload})
}

export default function* checkoutSaga() {    //watcher
    yield takeEvery(ADD_CHECKOUT, createCheckSaga)
    yield takeEvery(GET_CHECKOUT, getCheckSaga)
    yield takeEvery(DELETE_CHECKOUT, deleteCheckSaga)
    yield takeEvery(UPDATE_CHECKOUT, updateCheckSaga)
}



