import { createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "./AsyncThunks";

const initialState = {
   photos: [],
   index: "",
};

export const PhotosSlice = createSlice({
   name: "photos",
   initialState,
   reducers: {
      setCurrentIndex(state, action) {
         state.index = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getPhotos.pending, (state) => {});
      builder.addCase(getPhotos.fulfilled, (state, action) => {
         state.photos = action.payload;
      });
      builder.addCase(getPhotos.rejected, (state) => {});
   },
});

export const { setCurrentIndex } = PhotosSlice.actions;
