import { ADD_DOT, GET_DOTS } from './actionTypes'

export const addDot = (dot) => {
    return { type: ADD_DOT, payload: dot }
}

export const getDots = (dots) => {
    return { type: GET_DOTS, payload: dots }
}