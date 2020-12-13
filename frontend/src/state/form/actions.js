import { UPDATE_R, UPDATE_X, UPDATE_Y } from './actionTypes'

export const updateX = (x) => {
    return {
        type: UPDATE_X,
        payload: x,
    }
}

export const updateY = (y) => {
    return {
        type: UPDATE_Y,
        payload: y,
    }
}

export const updateR = (r) => {
    return {
        type: UPDATE_R,
        payload: r,
    }
}
