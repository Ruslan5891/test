import { combineReducers } from "redux";
import { PHOTOS_ERROR, GET_PHOTOS, SET_PHOTOS } from "../constants";
import { Photos, InitialStateType } from "../types";

const InitialState: InitialStateType = {
   photos: [],
   index: "",
   error: null,
};

const photos = (state = InitialState, action: Photos) => {
   switch (action.type) {
      case GET_PHOTOS:
         return { ...state, index: action.payload };
      case SET_PHOTOS:
         return { ...state, photos: action.payload };
      case PHOTOS_ERROR:
         return { ...state, error: action.payload };
      default:
         return state;
   }
};

export const reducer = combineReducers({ photos });
