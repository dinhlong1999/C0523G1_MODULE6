import {combineReducers} from "redux";
import {CartReducer} from "./CartReducer";
import {UserReducer} from "./UserReducer";

export const rootReducer = combineReducers({
    cart: CartReducer,
    user: UserReducer
})