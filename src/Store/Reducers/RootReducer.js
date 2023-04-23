import { combineReducers } from "redux";
import MaincategoryReducer from "./MaincategoryReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import BrandReducer from "./BrandReducer"
import ProductReducer from "./ProductReducer"
import UserReducer from "./UserReducer"
import CartReducer from "./CartReducer"
import WishlistReducer from "./WishlistReducer"
import CheckoutReducer from "./CheckoutReducer"
export default combineReducers(
    {
        MaincategoryStateData:MaincategoryReducer,
        SubcategoryStateData:SubcategoryReducer,
        BrandStateData:BrandReducer,
        ProductStateData:ProductReducer,
        UserStateData:UserReducer,
        CartStateData:CartReducer,
        CheckoutStateData:CheckoutReducer,
        WishlistStateData:WishlistReducer,
    }
)