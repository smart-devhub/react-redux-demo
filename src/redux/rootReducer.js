import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./icecreame/IceCreamReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    IceCream:IceCreamReducer
})

export default rootReducer