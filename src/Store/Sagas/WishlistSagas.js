import { takeEvery, put } from "redux-saga/effects"
import { ADD_WISHLIST, ADD_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED, UPDATE_WISHLIST, UPDATE_WISHLIST_RED } from "../Constants"

import { addWishlistAPI, deleteWishlistAPI, getWishlistAPI, updateWishlistAPI } from "../Services"

function* getWishlistSaga() {
    var response = yield getWishlistAPI()
    yield put({ type: GET_WISHLIST_RED, result: "Done", data: response })
}
function* createWishlistSaga(data) { //executer
    var response = yield addWishlistAPI(data)
    yield put({ type: ADD_WISHLIST_RED, result: "Done", data: response })
}

function* deleteWishlistSaga(data) {
    yield deleteWishlistAPI(data)
    yield put({ type: DELETE_WISHLIST_RED, result: "Done",data:data.payload})
}

export default function* wishlistSaga() {    //watcher
    yield takeEvery(ADD_WISHLIST, createWishlistSaga)
    yield takeEvery(GET_WISHLIST, getWishlistSaga)
    yield takeEvery(DELETE_WISHLIST, deleteWishlistSaga)
}



