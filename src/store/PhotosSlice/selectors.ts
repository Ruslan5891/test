import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

export const allPhotos = (state: RootState) => state.photos;
export const selectPhotos = createSelector(allPhotos, (state) => state.photos);
export const selectIndex = createSelector(allPhotos, (state) => state.index);
