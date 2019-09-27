import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
import placeImage from '../../assets/testImage.jpg'

const initialState = {
    savedPlaces: [],
    selectedPlace: null
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return Object.assign({}, state, {
                savedPlaces: state.savedPlaces.concat({
                    name: action.placeName,
                    key: `${action.placeName}${state.savedPlaces.length}`,
                    image: placeImage
                })
            });
        case DELETE_PLACE:
            return Object.assign({}, state, {
                savedPlaces: state.savedPlaces.filter(place => {
                    return (
                    place.key !== action.key
                    );
                }),
                selectedPlace: null
            });

        case SELECT_PLACE:
            return Object.assign({}, state, {
                selectedPlace: state.savedPlaces.find(place => {
                    return place.key === action.key
                })
            });

        case DESELECT_PLACE:
            return Object.assign({}, state, { selectedPlace: null });

        default:
            return state;
    }
};

export default placesReducer;