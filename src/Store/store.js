// import {createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"


import RootReducer from "./Reducers/RootReducer"
import RootSaga from "./Sagas/RootSaga"

// const store = createStore(RootReducer)
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer:RootReducer,
    middleware:()=>[sagaMiddleware]
})
export default store

sagaMiddleware.run(RootSaga)