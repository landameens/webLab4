import { UPDATE_R, UPDATE_X, UPDATE_Y } from './actionTypes'

const initialState = {
    x: null,
    y: null,
    r: 1,
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_X:
            return {
                ...state,
                x: action.payload,
            }
        case UPDATE_Y:
            return {
                ...state,
                y: action.payload,
            }
        case UPDATE_R:
            return {
                ...state,
                r: action.payload,
            }
        default:
            return state
    }
}
