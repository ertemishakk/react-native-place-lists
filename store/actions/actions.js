import {
    ADD_PLACE,
    REMOVE_PLACE,
    DESELECT_PLACE,
    PLACE_SELECTED
} from "../types/actionTypes"

export const addPlace = (value) => dispatch => {
    dispatch({
        type: ADD_PLACE,
        payload: value
    })
}

export const deletePlace = () => dispatch => {
    dispatch({
        type: REMOVE_PLACE,
    })
}

export const selectPlace = (id) => dispatch => {
    dispatch({
        type: PLACE_SELECTED,
        payload: id
    })
}

export const deselectPlace = () => dispatch => {
    dispatch({
        type: DESELECT_PLACE,
    })
}