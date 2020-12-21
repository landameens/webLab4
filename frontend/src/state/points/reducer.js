import { ADD_DOT, GET_DOTS } from './actionTypes'

const initialState = { dots: [] }

export const dotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DOT:
            return { dots: [...state.dots, action.payload] }
        case GET_DOTS:
            return { dots: action.payload }
        default:
            return state
    }
}