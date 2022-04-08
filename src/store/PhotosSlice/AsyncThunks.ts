import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "./Constants";

export const getPhotos = createAsyncThunk("getPhotos", async (id: string) => {
   try {
      const photos = await axios.get(`${BASE_URL + id}`);
      return photos.data;
   } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data;
   }
});
