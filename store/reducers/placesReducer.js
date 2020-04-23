import {
    ADD_PLACE,
    REMOVE_PLACE,
    DESELECT_PLACE,
    PLACE_SELECTED
} from "../types/actionTypes";
import placeImage from '../../assets/test.jpg'


const initialState = {
    places: [],
    selectedPlace: null
}



const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [...state.places,
                { place: action.payload, id: Math.random(), image: placeImage }]
            }
        case REMOVE_PLACE:
            return {
                ...state,
                places: state.places.filter(item => item.id !== state.selectedPlace.id),
                selectedPlace: null
            }

        case PLACE_SELECTED:
            return {
                ...state,
                selectedPlace: state.places.find(item => item.id === action.payload)
            }
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }
}

export default placesReducer