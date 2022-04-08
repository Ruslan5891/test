import { useState } from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { getPhotos } from "../../store/PhotosSlice/AsyncThunks";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { selectPhotos, selectIndex } from "../../store/PhotosSlice/selectors";
import { setCurrentIndex } from "../../store/PhotosSlice/PhotosSlice";
import { DESCRIPTION } from "./constants";
import { Event } from "../todos/types";
import { PhotoArr } from "./types";
import styles from "./styles.module.css";

export const Photos = () => {
   const dispatch = useAppDispatch();
   const [value, setValue] = useState("");
   const [isButtonActive, setIsButtonActive] = useState(false);
   const currentIndex = useAppSelector(selectIndex);
   const photos: PhotoArr = useAppSelector(selectPhotos);

   const inputHandler = (e: Event) => {
      if (e.target.value === currentIndex) {
         setIsButtonActive(true);
         setValue(e.target.value);
      } else {
         setValue(e.target.value);
         setIsButtonActive(false);
      }
   };

   const receivePhotos = (id: string) => () => {
      const isNumber = Number(id);
      if (!isNumber) return;
      const inRange = isNumber >= 1 && isNumber <= 100;
      if (!inRange) return;
      dispatch(setCurrentIndex(id));
      dispatch(getPhotos(id));
      setValue("");
   };
   
   return (
      <div>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                     }}
                  >
                     {DESCRIPTION.HEADER_TITLE}
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box>
         <div className={styles.wrapper}>
            <h2 className={styles.title}>{DESCRIPTION.TITILE}</h2>
            <label>
               <input value={value} onChange={inputHandler} />
               <button onClick={receivePhotos(value)} disabled={isButtonActive}>
                  {DESCRIPTION.BUTTON_TEXT}
               </button>
            </label>
            <ul className={styles.list}>
               {photos &&
                  photos.map((photo) => (
                     <li key={photo.id} className={styles.item}>
                        <p className={styles.imgTitle}>{photo.title} </p>
                        <img src={photo.thumbnailUrl} alt="Images" />
                     </li>
                  ))}
            </ul>
         </div>
      </div>
   );
};
