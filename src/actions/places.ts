import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "./actionTypes";

export const addPlace = (placeName: string) => {
  return {
    type: ADD_PLACE,
    placeName
  };
};

export const deletePlace = (key: string) => {
  return {
    type: DELETE_PLACE,
    key
  };
};

export const selectPlace = (key: string) => {
  return {
    type: SELECT_PLACE,
    key
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};
