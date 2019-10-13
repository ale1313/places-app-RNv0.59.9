import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";
import placeImage from "../assets/imagePlaceholder.jpg";

interface initialState {
  savedPlaces: string[];
  selectedPlace: any;
}

const initialState = {
  savedPlaces: [],
  selectedPlace: null
};

const placesReducer = (state = initialState, action: any) => {
  let { type, placeName, key } = action;
  switch (type) {
    case ADD_PLACE:
      return Object.assign({}, state, {
        savedPlaces: state.savedPlaces.concat({
          name: placeName,
          key: `${action.placeName}${state.savedPlaces.length}`,
          image: placeImage
        })
      });
    case DELETE_PLACE:
      return Object.assign({}, state, {
        savedPlaces: state.savedPlaces.filter(place => {
          return place.key !== key;
        }),
        selectedPlace: null
      });

    case SELECT_PLACE:
      return Object.assign({}, state, {
        selectedPlace: state.savedPlaces.find(place => {
          return place.key === key;
        })
      });

    case DESELECT_PLACE:
      return Object.assign({}, state, { selectedPlace: null });

    default:
      return state;
  }
};

export default placesReducer;
