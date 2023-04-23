import {all} from "redux-saga/effects"

import  maincategorySaga  from "./MaincategorySagas"
import  subcategorySaga  from "./SubcategorySagas"
import  brandSaga  from "./BrandSagas"
import productSaga from "./ProductSagas"
import userSaga from "./UserSagas"
import cartSaga from "./CartSagas"
import wishlistSaga from "./WishlistSagas"
import checkoutSaga from "./CheckoutSagas"
export default function* RootSaga(){
    yield all([maincategorySaga(),subcategorySaga(),brandSaga(),productSaga(),userSaga(),cartSaga(),wishlistSaga(),checkoutSaga()])
}