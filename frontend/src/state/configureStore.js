import {logger} from "redux-logger";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {formReducer} from "./form/reducer";

const configureStore = (initialState) => {
    const middlewares = [logger]

    const rootReducer = combineReducers({
        formState: formReducer
    })

    return createStore(rootReducer, initialState, applyMiddleware(logger))
}

export default configureStore