import { store } from "./store";
import { PhotoArr } from "../pages/photos/types";

export type Photos = {
   type: Types;
   payload: PhotoArr | string;
   error?: string;
};

export type InitialStateType = {
   photos: PhotoArr | [];
   index: string;
   error: string | null;
};

export type Types = "GET_PHOTOS" | "SET_PHOTOS" | "PHOTOS_ERROR";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
