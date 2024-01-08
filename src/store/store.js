import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { todoReducer, loaderReducer } from "../reducer";

const reducer = combineReducers({
    todoState: todoReducer,
    loaderState: loaderReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk))