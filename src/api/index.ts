import axios from "axios";

const BASE_URL = `https://jsonplaceholder.typicode.com/photos?albumId=`;

export const getPhotos = async (id: string) => {
   const photos = await axios.get(`${BASE_URL + id}`);
   return photos.data;
};
