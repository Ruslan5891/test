import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { DESCRIPTION } from "./constants";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {
   return (
      <>
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
         <section className={styles.wrapper}>
            <h2>{DESCRIPTION.CHOOSE_MESSAGE} </h2>
            <Link to="todos" className={styles.link}>
               {DESCRIPTION.TODOS}
            </Link>
            <Link to="photos" className={styles.link}>
               {DESCRIPTION.PHOTOS}
            </Link>
         </section>
      </>
   );
};
