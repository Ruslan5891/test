import { configureStore } from "@reduxjs/toolkit";
import { PhotosSlice } from "./PhotosSlice/PhotosSlice";

export const store = configureStore({
   reducer: {
      photos: PhotosSlice.reducer,
   },
});
