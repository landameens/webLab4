import { logger } from 'redux-logger'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { formReducer } from './form/reducer'
import { dotsReducer } from './points/reducer'

const configureStore = (initialState) => {
    const rootReducer = combineReducers({
        formState: formReducer,
        dotsState: dotsReducer,
    })

    return createStore(rootReducer, initialState, applyMiddleware(logger))
}

export default configureStore