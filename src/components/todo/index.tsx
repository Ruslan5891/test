import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { DESCRIPTION } from "./constants";
import { TodosArr, Event } from "./type";
import styles from "./styles.module.css";

export const Todo = () => {
   const { id } = useParams();
   const location = useLocation();
   const navigate = useNavigate();
   
   const [todos, setTodos] = useState<TodosArr>([]);
   const [inputText, setInputText] = useState("");

   const inputHandler = (e: Event) => setInputText(e.target.value);

   const saveTodoChanges = () => {
      if (!todos) return;
      todos.forEach((todo) => {
         if (todo.id === id) todo.text = inputText;
      });
      localStorage.setItem("todos", JSON.stringify(todos));
      navigate("/todos");
   };

   useEffect(() => {
      const todoList = localStorage.getItem("todos");
      if (!todoList) {
         return;
      } else {
         setTodos(JSON.parse(todoList));
      }
   }, []);

   useEffect(() => {
      if (!location.state) return;
      const todoData = location.state as any;
      if (todoData.text) setInputText(todoData.text);
   }, []);

   return (
      <div className={styles.wrapper}>
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
         <h2>{DESCRIPTION.TITLE}</h2>
         <label className={styles.label}>
            <input value={inputText} onChange={inputHandler} />
            <button onClick={saveTodoChanges}>{DESCRIPTION.BUTTON_MESSAGE}</button>
         </label>
      </div>
   );
};
