import { Types } from "../types";
import { PhotoArr } from "../../pages/photos/types";

export const getImages = (type: Types, id: string) => ({
   type,
   payload: id,
});

export const setImages = (type: Types, payload: PhotoArr) => ({
   type,
   payload,
});

export const setError = (type: Types, payload: string) => ({
   type,
   payload,
});